"""Shared "Linked Row" storage logic without Home Assistant dependencies.

Ultra Card's Linked Row module keeps one shared block of modules in Home
Assistant so that editing it once updates every dashboard, device and user
that shows it. This file holds the pure read/modify logic for that store; the
HTTP view in ``__init__.py`` wraps it with HA's ``Store`` and a lock.

Concurrency is last-write-wins with conflict detection: every row carries a
``revision`` that goes up by one on each write. A writer sends the revision its
copy was based on (``base_revision``); if the stored row has moved on since,
the write is refused with HTTP 409 and the current row so the card can refresh.
"""

from __future__ import annotations

import json
import re
from typing import Any

LINKED_ROWS_STORAGE_KEY = "ultra_card_pro_cloud.linked_rows"
LINKED_ROWS_STORAGE_VERSION = 1

# Limits. A row is a list of Ultra Card module configs, which are small JSON
# objects; 256 KB is far more than a large hand-built row needs while keeping a
# runaway or malicious payload from bloating .storage.
MAX_LINKED_ROWS = 200
MAX_ROW_BYTES = 256 * 1024
MAX_TOTAL_BYTES = 8 * 1024 * 1024
MAX_REQUEST_BYTES = MAX_ROW_BYTES + 64 * 1024
MAX_NAME_LENGTH = 120
MAX_MODULES_PER_ROW = 200
DEFAULT_ROW_NAME = "Linked row"

_ID_PATTERN = re.compile(r"^[A-Za-z0-9_-]{1,64}$")


class LinkedRowError(Exception):
    """A request the store refuses, with the HTTP status to answer with."""

    def __init__(self, status: int, message: str, current: dict[str, Any] | None = None) -> None:
        super().__init__(message)
        self.status = status
        self.message = message
        self.current = current

    def as_response(self) -> dict[str, Any]:
        """JSON body for the error response."""
        body: dict[str, Any] = {"error": self.message}
        if self.current is not None:
            body["current"] = self.current
        return body


def json_size(value: Any) -> int:
    """Size in bytes of ``value`` serialised the way it is stored."""
    return len(json.dumps(value, separators=(",", ":"), ensure_ascii=False).encode("utf-8"))


def _is_int(value: Any) -> bool:
    # bool is a subclass of int; a revision of ``true`` is not a revision.
    return isinstance(value, int) and not isinstance(value, bool)


def _valid_row(row: Any) -> bool:
    return (
        isinstance(row, dict)
        and isinstance(row.get("id"), str)
        and bool(_ID_PATTERN.match(row["id"]))
        and isinstance(row.get("name"), str)
        and isinstance(row.get("modules"), list)
        and _is_int(row.get("revision"))
        and row["revision"] >= 1
    )


def normalize_store(data: Any) -> dict[str, Any]:
    """Return ``{"rows": {id: row}}`` from whatever ``Store.async_load`` gave back."""
    rows: dict[str, Any] = {}
    raw = data.get("rows") if isinstance(data, dict) else None
    if isinstance(raw, dict):
        for row_id, row in raw.items():
            if _valid_row(row) and row["id"] == row_id:
                rows[row_id] = row
    return {"rows": rows}


def public_row(row: dict[str, Any]) -> dict[str, Any]:
    """The fields of a row that are returned to the card."""
    return {
        "id": row["id"],
        "name": row["name"],
        "modules": row["modules"],
        "revision": row["revision"],
        "updated_at": row.get("updated_at") or "",
        "updated_by": row.get("updated_by"),
    }


def list_rows(data: Any) -> list[dict[str, Any]]:
    """Every stored row, sorted by name (case-insensitive) then id."""
    rows = normalize_store(data)["rows"].values()
    return [public_row(r) for r in sorted(rows, key=lambda r: (r["name"].lower(), r["id"]))]


def row_summary(row: dict[str, Any]) -> dict[str, Any]:
    """A row without its modules, for the editor's library picker."""
    summary = public_row(row)
    summary["module_count"] = len(summary.pop("modules"))
    return summary


def list_row_summaries(data: Any) -> list[dict[str, Any]]:
    """Every stored row without modules, sorted like :func:`list_rows`.

    The library can hold up to ``MAX_TOTAL_BYTES``; the picker only needs names,
    so listing never ships every row's modules to the browser.
    """
    return [row_summary(r) for r in list_rows(data)]


def get_row(data: Any, row_id: Any) -> dict[str, Any] | None:
    """One stored row by id (``None`` when it is not in the library)."""
    row_id = validate_row_id(row_id)
    row = normalize_store(data)["rows"].get(row_id)
    return public_row(row) if row is not None else None


def parse_request_body(raw: bytes) -> Any:
    """Decode a write request body, refusing oversized or malformed JSON."""
    if len(raw) > MAX_REQUEST_BYTES:
        raise LinkedRowError(413, f"Linked row is too large (max {MAX_ROW_BYTES // 1024} KB)")
    try:
        return json.loads(raw.decode("utf-8"))
    except (UnicodeDecodeError, ValueError) as err:
        raise LinkedRowError(400, "Invalid JSON") from err


def validate_row_id(value: Any) -> str:
    """Return a valid row id or raise a 400."""
    if not isinstance(value, str) or not _ID_PATTERN.match(value):
        raise LinkedRowError(
            400, "id must be 1-64 characters of letters, digits, '-' or '_'"
        )
    return value


def validate_name(value: Any) -> str:
    """Return a trimmed, non-empty row name or raise a 400."""
    if not isinstance(value, str):
        raise LinkedRowError(400, "name must be a string")
    name = value.strip()
    if not name:
        raise LinkedRowError(400, "name must not be empty")
    if len(name) > MAX_NAME_LENGTH:
        raise LinkedRowError(400, f"name must be at most {MAX_NAME_LENGTH} characters")
    return name


def validate_modules(value: Any) -> list[Any]:
    """Return a list of module objects or raise a 400/413."""
    if not isinstance(value, list):
        raise LinkedRowError(400, "modules must be an array")
    if len(value) > MAX_MODULES_PER_ROW:
        raise LinkedRowError(400, f"Too many modules (max {MAX_MODULES_PER_ROW})")
    for item in value:
        if not isinstance(item, dict) or not isinstance(item.get("type"), str):
            raise LinkedRowError(400, "every module must be an object with a type")
    if json_size(value) > MAX_ROW_BYTES:
        raise LinkedRowError(413, f"Linked row is too large (max {MAX_ROW_BYTES // 1024} KB)")
    return value


def upsert_row(
    data: Any,
    body: Any,
    *,
    now: str,
    user_id: str | None = None,
) -> tuple[dict[str, Any], dict[str, Any]]:
    """Create or update one row. Returns ``(new_store_data, saved_row)``.

    Body fields: ``id`` (required), ``name`` (required to create),
    ``modules`` (required to create; omitted on update keeps the stored ones,
    which is how a rename works), ``base_revision`` (the revision this copy was
    based on; required to update unless ``force`` is true) and ``force``.
    """
    if not isinstance(body, dict):
        raise LinkedRowError(400, "Request body must be an object")

    row_id = validate_row_id(body.get("id"))
    store = normalize_store(data)
    rows: dict[str, Any] = dict(store["rows"])
    existing = rows.get(row_id)

    force = body.get("force") is True
    base = body.get("base_revision")
    if base is not None and (not _is_int(base) or base < 0):
        raise LinkedRowError(400, "base_revision must be a non-negative integer")

    if existing is not None and not force and base != existing["revision"]:
        raise LinkedRowError(
            409,
            "This linked row was changed somewhere else. Refresh to get the latest version.",
            current=public_row(existing),
        )

    if "name" in body and body.get("name") is not None:
        name = validate_name(body.get("name"))
    elif existing is not None:
        name = existing["name"]
    else:
        name = DEFAULT_ROW_NAME

    if "modules" in body and body.get("modules") is not None:
        modules = validate_modules(body.get("modules"))
    elif existing is not None:
        modules = existing["modules"]
    else:
        raise LinkedRowError(400, "modules are required to create a linked row")

    if existing is None and len(rows) >= MAX_LINKED_ROWS:
        raise LinkedRowError(400, f"Too many linked rows (max {MAX_LINKED_ROWS})")

    if existing is not None:
        revision = existing["revision"] + 1
    else:
        # Re-creating a row that was deleted from the library: continue from the
        # writer's revision so copies that saw the old row never look newer.
        revision = (base or 0) + 1

    row: dict[str, Any] = {
        "id": row_id,
        "name": name,
        "modules": modules,
        "revision": revision,
        "updated_at": now,
        "updated_by": user_id,
    }
    rows[row_id] = row

    if json_size(rows) > MAX_TOTAL_BYTES:
        raise LinkedRowError(
            413, "The linked row library is full. Delete rows you no longer use."
        )

    return {"rows": rows}, public_row(row)


def delete_row(
    data: Any, row_id: Any, *, expected_revision: Any = None
) -> tuple[dict[str, Any], bool]:
    """Delete one row. Returns ``(new_store_data, deleted)``.

    Deleting a row that is not there is not an error (``deleted`` is False):
    the card treats a 404 as "this Connect has no linked rows endpoint".
    """
    row_id = validate_row_id(row_id)
    store = normalize_store(data)
    rows: dict[str, Any] = dict(store["rows"])
    existing = rows.get(row_id)
    if existing is None:
        return {"rows": rows}, False
    if expected_revision is not None:
        if not _is_int(expected_revision) or expected_revision != existing["revision"]:
            raise LinkedRowError(
                409,
                "This linked row was changed somewhere else. Refresh before deleting it.",
                current=public_row(existing),
            )
    del rows[row_id]
    return {"rows": rows}, True
