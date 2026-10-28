"""Tests for HTTP helper utilities."""

from conftest import load_module

helpers = load_module("uc_helpers", "helpers.py")


def test_normalize_proxy_payload_unwraps_nested_body() -> None:
    payload = helpers.normalize_proxy_payload(
        {"body": {"body": {"__media_upload_b64": {"data": "abc", "filename": "x.png"}}}}
    )
    assert payload == {"__media_upload_b64": {"data": "abc", "filename": "x.png"}}


def test_safe_upload_filename_sanitizes_invalid_chars() -> None:
    assert helpers.safe_upload_filename("my photo!.png") == "my_photo_.png"


def test_extract_and_store_user_colors_round_trip() -> None:
    stored = helpers.store_user_colors(
        None,
        "user-1",
        [{"id": "1", "name": "Primary", "color": "#fff", "order": 0}],
    )
    colors = helpers.extract_user_colors(stored, "user-1")
    assert len(colors) == 1
    assert colors[0]["name"] == "Primary"


def test_normalize_smart_connector_preference() -> None:
    assert helpers.normalize_smart_connector_preference("ha_assist") == "ha_assist"
    assert helpers.normalize_smart_connector_preference("USER_PROVIDER") == "user_provider"
    assert helpers.normalize_smart_connector_preference("unknown") == "auto"


def test_extract_conversation_text_from_nested_payload() -> None:
    payload = {
        "response": {
            "speech": {"plain": {"speech": "Lights are now on"}}
        }
    }
    assert helpers.extract_conversation_text(payload) == "Lights are now on"


def test_build_local_smart_preset_contract_shape() -> None:
    result = helpers.build_local_smart_preset(
        prompt="Build me a kitchen dashboard",
        tier="free",
        connector_used="ha_assist",
        warnings=["fallback"],
    )
    assert "smart_preset" in result
    assert "generation" in result
    assert result["smart_preset"]["category"] == "layouts"
    assert result["generation"]["connector_used"] == "ha_assist"
    assert result["generation"]["tier_required"] == "free"


def test_merge_smart_status_merges_nested_objects() -> None:
    base = {
        "available": {"ha_assist": True, "user_provider": False, "cloud_default": False},
        "limits": {"free_daily_generations": 5, "free_remaining": 3},
    }
    upstream = {
        "available": {"user_provider": True},
        "limits": {"free_remaining": 2},
        "default_connector": "ha_assist",
    }
    merged = helpers.merge_smart_status(base, upstream)
    assert merged["available"]["ha_assist"] is True
    assert merged["available"]["user_provider"] is True
    assert merged["limits"]["free_daily_generations"] == 5
    assert merged["limits"]["free_remaining"] == 2


def test_build_smart_tier_access_contract_shape() -> None:
    access = helpers.build_smart_tier_access(
        is_pro_user=False,
        free_daily_generations=5,
        free_remaining=1,
    )
    assert access["can_generate_free"] is True
    assert access["can_generate_pro"] is False
    assert access["is_pro_user"] is False
    assert access["free_daily_generations"] == 5
    assert access["free_remaining"] == 1


def test_feed_url_problem() -> None:
    assert helpers.feed_url_problem("https://example.com/feed.xml") is None
    assert helpers.feed_url_problem("http://example.com:8080/rss") is None
    assert helpers.feed_url_problem("") == "missing_url"
    assert helpers.feed_url_problem("file:///etc/passwd") == "invalid_scheme"
    assert helpers.feed_url_problem("ftp://example.com/feed") == "invalid_scheme"
    assert helpers.feed_url_problem("https://user:pw@example.com/feed") == "credentials_in_url"
    assert helpers.feed_url_problem("https://example.com:22/feed") == "invalid_port"


def test_is_private_address() -> None:
    assert helpers.is_private_address("127.0.0.1")
    assert helpers.is_private_address("192.168.4.55")
    assert helpers.is_private_address("10.0.0.1")
    assert helpers.is_private_address("169.254.169.254")
    assert helpers.is_private_address("::1")
    assert helpers.is_private_address("::ffff:192.168.1.1")
    assert helpers.is_private_address("not-an-ip")
    assert not helpers.is_private_address("93.184.216.34")
    assert not helpers.is_private_address("2606:2800:220:1:248:1893:25c8:1946")


def test_decode_feed_bytes() -> None:
    latin = '<?xml version="1.0" encoding="ISO-8859-1"?><rss><title>Gr\u00fc\u00dfe</title></rss>'.encode("latin-1")
    assert "Grüße" in helpers.decode_feed_bytes(latin, "application/rss+xml")
    assert "Grüße" in helpers.decode_feed_bytes(latin, "text/xml; charset=iso-8859-1")
    utf = "<rss><title>Grüße</title></rss>".encode("utf-8")
    assert "Grüße" in helpers.decode_feed_bytes(utf, "application/rss+xml; charset=UTF-8")
    assert "Grüße" in helpers.decode_feed_bytes(b"\xef\xbb\xbf" + utf, "")
    assert "Grüße" in helpers.decode_feed_bytes(utf, "text/xml; charset=bogus-charset")
    assert "Mozilla/5.0" in helpers.FEED_REQUEST_HEADERS["User-Agent"]
