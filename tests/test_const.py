"""Tests for integration constants and proxy URL policy."""

from conftest import load_module

const = load_module("uc_const", "const.py")


def test_is_proxy_url_allowed_accepts_known_endpoints() -> None:
    assert const.is_proxy_url_allowed(
        f"{const.API_BASE_URL}/ultra-card/v1/subscription"
    )
    assert const.is_proxy_url_allowed(
        f"{const.API_BASE_URL}/wp/v2/users/me?context=edit"
    )


def test_is_proxy_url_allowed_rejects_unknown_paths() -> None:
    assert not const.is_proxy_url_allowed(f"{const.API_BASE_URL}/wp/v2/posts")
    assert not const.is_proxy_url_allowed(
        "https://example.com/wp-json/ultra-card/v1/subscription"
    )
    assert not const.is_proxy_url_allowed("")
    # Token endpoints are coordinator-only; the browser must never obtain or
    # revoke the shared JWT through the proxy.
    assert not const.is_proxy_url_allowed(f"{const.API_BASE_URL}/jwt-auth/v1/token")
    assert not const.is_proxy_url_allowed(f"{const.API_BASE_URL}/jwt-auth/v1/token/revoke")
    # Sibling of an allowed prefix must not match.
    assert not const.is_proxy_url_allowed(f"{const.API_BASE_URL}/wp/v2/users")
    assert not const.is_proxy_url_allowed(f"{const.API_BASE_URL}/wp/v2/users/mex")


def test_is_proxy_url_allowed_rejects_traversal_and_host_tricks() -> None:
    base = const.API_BASE_URL
    # Dot-segment traversal is normalised by the HTTP client before sending,
    # which would escape the allowlist without this check.
    assert not const.is_proxy_url_allowed(f"{base}/ultra-card/v1/../../wp/v2/users")
    assert not const.is_proxy_url_allowed(f"{base}/ultra-card/v1/%2e%2e/%2e%2e/wp/v2/users")
    assert not const.is_proxy_url_allowed(f"{base}/ultra-card/v1/./subscription")
    assert not const.is_proxy_url_allowed(f"{base}//ultra-card/v1/subscription")
    assert not const.is_proxy_url_allowed(f"{base}/ultra-card/v1\\..\\wp/v2/users")
    # Scheme / host / port / userinfo must match the canonical API base exactly.
    assert not const.is_proxy_url_allowed("http://ultracard.io/wp-json/ultra-card/v1/subscription")
    assert not const.is_proxy_url_allowed("https://ultracard.io:8443/wp-json/ultra-card/v1/subscription")
    assert not const.is_proxy_url_allowed("https://ultracard.io@evil.example/wp-json/ultra-card/v1/x")
    assert not const.is_proxy_url_allowed("https://ultracard.io.evil.example/wp-json/ultra-card/v1/x")
    assert not const.is_proxy_url_allowed(f"{base}.evil.example/ultra-card/v1/x")
    assert not const.is_proxy_url_allowed(f"{base}/ultra-card/v1/subscription#frag")
    assert not const.is_proxy_url_allowed(f"{base}ultra-card/v1/subscription")


def test_is_proxy_url_allowed_tolerates_query_and_trailing_slash() -> None:
    base = const.API_BASE_URL
    assert const.is_proxy_url_allowed(f"{base}/ultra-card/v1/presets?page=2&per_page=20")
    assert const.is_proxy_url_allowed(f"{base}/ultra-card/v1/presets/")
    assert const.is_proxy_url_allowed(f"  {base}/ultra-card/v1/presets  ")
