"""Tests for coordinator helpers."""

import time

from conftest import load_module

jwt_utils = load_module("uc_jwt_utils", "jwt_utils.py")
parse_jwt_expiry = jwt_utils.parse_jwt_expiry


def _make_jwt(payload: dict) -> str:
    import base64
    import json

    header = base64.urlsafe_b64encode(json.dumps({"alg": "none"}).encode()).decode().rstrip("=")
    body = base64.urlsafe_b64encode(json.dumps(payload).encode()).decode().rstrip("=")
    return f"{header}.{body}.signature"


def test_parse_jwt_expiry_reads_exp_claim() -> None:
    exp = int(time.time()) + 3600
    token = _make_jwt({"exp": exp})
    assert parse_jwt_expiry(token) == exp


def test_parse_jwt_expiry_returns_none_for_invalid_token() -> None:
    assert parse_jwt_expiry("not-a-jwt") is None


def test_parse_token_response_reads_nested_keys_and_jwt_expiry() -> None:
    exp = int(time.time()) + 3600
    token = _make_jwt({"exp": exp})

    assert jwt_utils.parse_token_response({"data": {"token": token, "refresh_token": "r"}}) == (
        token,
        "r",
        exp,
    )


def test_parse_token_response_falls_back_to_expires_in() -> None:
    assert jwt_utils.parse_token_response(
        {"access_token": "opaque", "expires_in": 60}, now=1000
    ) == ("opaque", None, 1060)


def test_parse_token_response_without_token() -> None:
    assert jwt_utils.parse_token_response({"refresh_token": "r"}) == (None, "r", 0)
