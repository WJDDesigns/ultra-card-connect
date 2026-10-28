"""Pure helper utilities without Home Assistant dependencies."""

from __future__ import annotations

import json
import re
import secrets
from datetime import datetime, timezone
from typing import Any

SMART_CONNECTOR_OPTIONS = frozenset(
    {"auto", "ha_assist", "user_provider", "cloud_default"}
)


def safe_upload_filename(name: str) -> str:
    """ASCII-only filename for multipart uploads."""
    sanitized = re.sub(r"[^A-Za-z0-9._-]", "_", (name or "").strip())
    return (sanitized or "upload.png")[:180]


def normalize_proxy_payload(body: dict) -> dict | None:
    """Extract inner proxy payload from HA HTTP/WS bodies."""
    if not isinstance(body, dict):
        return None
    payload = body.get("body")
    if payload is None and isinstance(body.get("data"), dict):
        payload = body["data"]
    if payload is None and "__media_upload_b64" in body:
        payload = {"__media_upload_b64": body["__media_upload_b64"]}
    if isinstance(payload, str):
        try:
            payload = json.loads(payload)
        except Exception:
            return None
    if payload is None:
        return None
    if not isinstance(payload, dict):
        return None
    for _ in range(4):
        if "__media_upload_b64" in payload:
            return payload
        if "body" in payload:
            inner = payload["body"]
            if isinstance(inner, str):
                try:
                    inner = json.loads(inner)
                except Exception:
                    return None
            payload = inner
            if not isinstance(payload, dict):
                return None
            continue
        break
    return payload


def extract_user_colors(data: dict | None, user_id: str | None) -> list[dict]:
    """Return per-user colors with fallback to legacy global storage."""
    if not isinstance(data, dict):
        return []

    if user_id:
        users = data.get("users")
        if isinstance(users, dict):
            user_bucket = users.get(user_id)
            if isinstance(user_bucket, dict):
                colors = user_bucket.get("colors")
                if isinstance(colors, list):
                    return colors

    colors = data.get("colors")
    return colors if isinstance(colors, list) else []


def store_user_colors(data: dict | None, user_id: str | None, colors: list[dict]) -> dict:
    """Persist per-user colors while preserving legacy/global keys."""
    next_data = dict(data) if isinstance(data, dict) else {}

    if not user_id:
        next_data["colors"] = colors
        return next_data

    users = next_data.get("users")
    if not isinstance(users, dict):
        users = {}

    user_bucket = users.get(user_id)
    if not isinstance(user_bucket, dict):
        user_bucket = {}

    user_bucket["colors"] = colors
    users[user_id] = user_bucket
    next_data["users"] = users
    return next_data


def normalize_smart_connector_preference(value: str | None) -> str:
    """Return a safe Smart connector preference value."""
    normalized = (value or "").strip().lower()
    if normalized in SMART_CONNECTOR_OPTIONS:
        return normalized
    return "auto"


def extract_conversation_text(payload: Any) -> str | None:
    """Best-effort extraction of Assist text from service response payloads."""
    if isinstance(payload, str):
        text = payload.strip()
        return text or None

    if isinstance(payload, dict):
        candidates = (
            payload.get("speech"),
            payload.get("text"),
            payload.get("response"),
            payload.get("plain"),
        )
        for candidate in candidates:
            extracted = extract_conversation_text(candidate)
            if extracted:
                return extracted
        for value in payload.values():
            extracted = extract_conversation_text(value)
            if extracted:
                return extracted
        return None

    if isinstance(payload, list):
        for item in payload:
            extracted = extract_conversation_text(item)
            if extracted:
                return extracted
    return None


def build_local_smart_preset(
    prompt: str,
    tier: str,
    connector_used: str,
    warnings: list[str],
    assist_response: str | None = None,
) -> dict[str, Any]:
    """Build a Smart preset from the user's prompt and optional Assist response."""
    now = datetime.now(timezone.utc).isoformat()
    compact_prompt = " ".join(prompt.split())
    title = compact_prompt[:42].strip() or "Smart Card"
    compact_response = " ".join((assist_response or "").split())
    description = compact_response[:160] or compact_prompt[:160] or "Assist generated starter preset"
    token = secrets.token_hex(4)
    preset_id = f"smart-local-{token}"
    body_content = (
        "Home Assistant Assist response\n\n"
        f"{compact_response}\n\n"
        f"Prompt: {compact_prompt}"
        if compact_response
        else f"Prompt: {compact_prompt}"
    )

    preset = {
        "id": preset_id,
        "name": title,
        "description": description,
        "category": "layouts",
        "icon": "mdi:brain",
        "author": "Home Assistant Assist",
        "version": "1.0.0",
        "tags": ["smart", "assist", tier],
        "layout": {
            "rows": [
                {
                    "id": f"{preset_id}-row",
                    "column_layout": "1-col",
                    "columns": [
                        {
                            "id": f"{preset_id}-col",
                            "modules": [
                                {
                                    "id": f"{preset_id}-title",
                                    "type": "text",
                                    "text": title,
                                    "font_size": 20,
                                    "font_weight": "700",
                                    "alignment": "left",
                                },
                                {
                                    "id": f"{preset_id}-body",
                                    "type": "markdown",
                                    "content": body_content,
                                },
                            ],
                        }
                    ],
                }
            ]
        },
        "metadata": {
            "created": now,
            "updated": now,
        },
    }

    return {
        "smart_preset": preset,
        "generation": {
            "connector_used": connector_used,
            "tier_required": tier,
            "warnings": warnings,
            "fallback": True,
        },
    }


def merge_smart_status(
    base_status: dict[str, Any], upstream_status: dict[str, Any]
) -> dict[str, Any]:
    """Merge upstream status payload into local fallback defaults."""
    merged = dict(base_status)
    for key in ("available", "ha", "limits"):
        base_part = merged.get(key)
        upstream_part = upstream_status.get(key)
        if isinstance(base_part, dict) and isinstance(upstream_part, dict):
            merged[key] = {**base_part, **upstream_part}
        elif upstream_part is not None:
            merged[key] = upstream_part

    for key in ("default_connector", "warnings", "tier_access"):
        if upstream_status.get(key) is not None:
            merged[key] = upstream_status[key]
    return merged


def build_smart_tier_access(
    is_pro_user: bool, free_daily_generations: int | None, free_remaining: int | None
) -> dict[str, Any]:
    """Build tier access payload for Smart responses."""
    return {
        "can_generate_free": True,
        "can_generate_pro": bool(is_pro_user),
        "is_pro_user": bool(is_pro_user),
        "free_daily_generations": free_daily_generations,
        "free_remaining": free_remaining,
    }


# ── RSS Feed module: server-side feed fetch ─────────────────────────────────

FEED_MAX_BYTES = 2 * 1024 * 1024
FEED_TIMEOUT_SECONDS = 15
FEED_MAX_REDIRECTS = 5

# Several news sites (Focus, FAZ, Zeit, heise…) turn away requests that don't
# look like a browser, so feeds are fetched with a normal browser identity.
FEED_REQUEST_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
    ),
    "Accept": (
        "application/rss+xml, application/atom+xml, application/feed+json, "
        "application/xml;q=0.9, text/xml;q=0.9, application/json;q=0.8, */*;q=0.5"
    ),
    "Accept-Language": "en-US,en;q=0.8,de;q=0.6,*;q=0.5",
}


def decode_feed_bytes(raw: bytes, content_type: str) -> str:
    """Decode a feed using the charset from the header, else the XML declaration.

    Many German and older feeds are ISO-8859-1 and only say so in
    <?xml … encoding="…"?>; decoding them as UTF-8 garbles umlauts.
    """
    charset = None
    match = re.search(r"charset=[\"']?([\w.:-]+)", content_type or "", re.IGNORECASE)
    if match:
        charset = match.group(1)
    elif raw.startswith(b"\xef\xbb\xbf"):
        charset = "utf-8-sig"
    else:
        decl = re.match(rb"\s*<\?xml[^>]*encoding=[\"']([\w.:-]+)[\"']", raw[:200])
        if decl:
            charset = decl.group(1).decode("ascii", errors="ignore")
    try:
        return raw.decode(charset or "utf-8", errors="replace")
    except LookupError:
        return raw.decode("utf-8", errors="replace")


def feed_url_problem(url: str) -> str | None:
    """Why a feed URL can't be fetched, or None when its shape is fine.

    Only plain http(s) URLs without credentials or odd ports are allowed.
    Whether the host is private is checked separately once it is resolved.
    """
    from urllib.parse import urlsplit

    value = (url or "").strip()
    if not value or len(value) > 2048:
        return "missing_url"
    try:
        parts = urlsplit(value)
    except ValueError:
        return "invalid_url"
    if parts.scheme not in ("http", "https"):
        return "invalid_scheme"
    if not parts.hostname:
        return "invalid_url"
    if parts.username or parts.password:
        return "credentials_in_url"
    try:
        port = parts.port
    except ValueError:
        return "invalid_url"
    if port is not None and port not in (80, 443, 8080, 8443):
        return "invalid_port"
    return None


def is_private_address(address: str) -> bool:
    """True for loopback, private, link-local and other non-public IPs."""
    import ipaddress

    try:
        ip = ipaddress.ip_address(address.split("%", 1)[0])
    except ValueError:
        return True
    if isinstance(ip, ipaddress.IPv6Address) and ip.ipv4_mapped:
        ip = ip.ipv4_mapped
    return not ip.is_global or ip.is_multicast
