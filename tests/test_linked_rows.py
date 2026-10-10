"""Tests for the shared Linked Row store logic."""

import pytest

from conftest import load_module

linked_rows = load_module("uc_linked_rows", "linked_rows.py")

NOW = "2026-10-10T12:00:00+00:00"
LATER = "2026-10-10T12:05:00+00:00"


def _module(text: str = "Hello") -> dict:
    return {"id": "text-1", "type": "text", "text": text}


def _create(data=None, row_id: str = "lr_kitchen", name: str = "Kitchen", text: str = "Hello"):
    return linked_rows.upsert_row(
        data,
        {"id": row_id, "name": name, "modules": [_module(text)], "base_revision": 0},
        now=NOW,
        user_id="user-1",
    )


def test_create_starts_at_revision_one() -> None:
    data, row = _create()
    assert row["revision"] == 1
    assert row["name"] == "Kitchen"
    assert row["updated_at"] == NOW
    assert row["updated_by"] == "user-1"
    assert linked_rows.list_rows(data) == [row]


def test_update_with_current_revision_bumps_it() -> None:
    data, _ = _create()
    data, row = linked_rows.upsert_row(
        data,
        {"id": "lr_kitchen", "modules": [_module("Bye")], "base_revision": 1},
        now=LATER,
    )
    assert row["revision"] == 2
    assert row["modules"][0]["text"] == "Bye"
    # The name is kept when the update leaves it out.
    assert row["name"] == "Kitchen"
    assert row["updated_at"] == LATER


def test_stale_revision_is_refused_with_the_current_row() -> None:
    data, _ = _create()
    data, _ = linked_rows.upsert_row(
        data, {"id": "lr_kitchen", "modules": [_module("v2")], "base_revision": 1}, now=LATER
    )
    with pytest.raises(linked_rows.LinkedRowError) as excinfo:
        linked_rows.upsert_row(
            data, {"id": "lr_kitchen", "modules": [_module("stale")], "base_revision": 1}, now=LATER
        )
    err = excinfo.value
    assert err.status == 409
    assert err.current["revision"] == 2
    assert err.current["modules"][0]["text"] == "v2"
    assert err.as_response()["current"]["revision"] == 2


def test_update_without_base_revision_is_a_conflict() -> None:
    data, _ = _create()
    with pytest.raises(linked_rows.LinkedRowError) as excinfo:
        linked_rows.upsert_row(data, {"id": "lr_kitchen", "modules": []}, now=LATER)
    assert excinfo.value.status == 409


def test_force_overwrites_a_newer_row() -> None:
    data, _ = _create()
    data, _ = linked_rows.upsert_row(
        data, {"id": "lr_kitchen", "modules": [_module("v2")], "base_revision": 1}, now=LATER
    )
    data, row = linked_rows.upsert_row(
        data,
        {"id": "lr_kitchen", "modules": [_module("mine")], "base_revision": 1, "force": True},
        now=LATER,
    )
    assert row["revision"] == 3
    assert row["modules"][0]["text"] == "mine"


def test_rename_keeps_modules() -> None:
    data, _ = _create()
    data, row = linked_rows.upsert_row(
        data, {"id": "lr_kitchen", "name": "  Hallway  ", "base_revision": 1}, now=LATER
    )
    assert row["name"] == "Hallway"
    assert row["modules"] == [_module()]
    assert row["revision"] == 2


def test_recreating_a_deleted_row_continues_from_the_writer_revision() -> None:
    data, _ = linked_rows.upsert_row(
        None,
        {"id": "lr_gone", "name": "Gone", "modules": [_module()], "base_revision": 7},
        now=NOW,
    )
    assert linked_rows.list_rows(data)[0]["revision"] == 8


@pytest.mark.parametrize(
    "body",
    [
        "not an object",
        {"id": "bad id!", "name": "x", "modules": []},
        {"id": "", "name": "x", "modules": []},
        {"id": "lr_a", "name": "   ", "modules": []},
        {"id": "lr_a", "name": "x" * 500, "modules": []},
        {"id": "lr_a", "name": "x", "modules": "nope"},
        {"id": "lr_a", "name": "x", "modules": [{"no_type": True}]},
        {"id": "lr_a", "name": "x", "modules": ["text"]},
        {"id": "lr_a", "name": "x"},
        {"id": "lr_a", "name": "x", "modules": [], "base_revision": -1},
        {"id": "lr_a", "name": "x", "modules": [], "base_revision": True},
    ],
)
def test_invalid_bodies_are_rejected_with_400(body) -> None:
    with pytest.raises(linked_rows.LinkedRowError) as excinfo:
        linked_rows.upsert_row(None, body, now=NOW)
    assert excinfo.value.status == 400


def test_oversized_row_is_rejected_with_413() -> None:
    big = [{"id": "t", "type": "text", "text": "x" * (linked_rows.MAX_ROW_BYTES + 1)}]
    with pytest.raises(linked_rows.LinkedRowError) as excinfo:
        linked_rows.upsert_row(None, {"id": "lr_big", "name": "Big", "modules": big}, now=NOW)
    assert excinfo.value.status == 413


def test_row_count_is_capped() -> None:
    data = None
    for i in range(linked_rows.MAX_LINKED_ROWS):
        data, _ = _create(data, row_id=f"lr_{i}", name=f"Row {i}")
    with pytest.raises(linked_rows.LinkedRowError) as excinfo:
        _create(data, row_id="lr_one_more", name="One more")
    assert excinfo.value.status == 400
    # Updating an existing row still works at the cap.
    _, row = linked_rows.upsert_row(
        data, {"id": "lr_0", "modules": [], "base_revision": 1}, now=LATER
    )
    assert row["revision"] == 2


def test_list_rows_sorts_by_name_and_drops_corrupt_entries() -> None:
    data, _ = _create(row_id="lr_b", name="beta")
    data, _ = _create(data, row_id="lr_a", name="Alpha")
    data["rows"]["lr_broken"] = {"id": "lr_broken", "name": 3, "modules": [], "revision": 1}
    data["rows"]["lr_mismatch"] = {"id": "other", "name": "x", "modules": [], "revision": 1}
    names = [row["name"] for row in linked_rows.list_rows(data)]
    assert names == ["Alpha", "beta"]


def test_normalize_store_handles_empty_or_garbage() -> None:
    assert linked_rows.normalize_store(None) == {"rows": {}}
    assert linked_rows.normalize_store([]) == {"rows": {}}
    assert linked_rows.normalize_store({"rows": []}) == {"rows": {}}
    assert linked_rows.list_rows(None) == []


def test_delete_row() -> None:
    data, _ = _create()
    data, deleted = linked_rows.delete_row(data, "lr_kitchen")
    assert deleted is True
    assert linked_rows.list_rows(data) == []


def test_delete_missing_row_is_not_an_error() -> None:
    data, deleted = linked_rows.delete_row(None, "lr_missing")
    assert deleted is False
    assert data == {"rows": {}}


def test_delete_with_stale_revision_is_refused() -> None:
    data, _ = _create()
    with pytest.raises(linked_rows.LinkedRowError) as excinfo:
        linked_rows.delete_row(data, "lr_kitchen", expected_revision=5)
    assert excinfo.value.status == 409
    _, deleted = linked_rows.delete_row(data, "lr_kitchen", expected_revision=1)
    assert deleted is True


def test_delete_rejects_invalid_id() -> None:
    with pytest.raises(linked_rows.LinkedRowError) as excinfo:
        linked_rows.delete_row(None, None)
    assert excinfo.value.status == 400


def test_inputs_are_not_mutated() -> None:
    data, _ = _create()
    snapshot = repr(data)
    linked_rows.upsert_row(
        data, {"id": "lr_kitchen", "modules": [_module("v2")], "base_revision": 1}, now=LATER
    )
    linked_rows.delete_row(data, "lr_kitchen")
    assert repr(data) == snapshot
