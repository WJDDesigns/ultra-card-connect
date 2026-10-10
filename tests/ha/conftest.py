"""Fixtures for tests that run against a real Home Assistant core.

These need pytest-homeassistant-custom-component (requirements-test-ha.txt).
tests/conftest.py skips this folder when it is not installed.
"""

from __future__ import annotations

import base64
import json
import time

import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry

DOMAIN = "ultra_card_pro_cloud"
BASE = "https://ultracard.io/wp-json"
TOKEN_URL = f"{BASE}/jwt-auth/v1/token"
REFRESH_URL = f"{BASE}/jwt-auth/v1/token/refresh"
ME_URL = f"{BASE}/wp/v2/users/me"
SUB_URL = f"{BASE}/ultra-card/v1/subscription"

PROFILE = {"id": 7, "user_nicename": "wayne", "name": "Wayne", "user_email": "w@example.com"}
SUBSCRIPTION = {"tier": "pro", "status": "active", "expires": None, "features": {}}


def make_jwt(expires_in: int = 86400) -> str:
    def b64(obj: dict) -> str:
        return base64.urlsafe_b64encode(json.dumps(obj).encode()).decode().rstrip("=")

    return f"{b64({'alg': 'HS256'})}.{b64({'exp': int(time.time()) + expires_in})}.sig"


def calls_to(aioclient_mock, url: str, method: str | None = None) -> int:
    count = 0
    for call_method, call_url, *_ in aioclient_mock.mock_calls:
        if method and call_method.upper() != method.upper():
            continue
        if f"{call_url.scheme}://{call_url.host}{call_url.path}" == url:
            count += 1
    return count


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(enable_custom_integrations):
    yield


@pytest.fixture
def entry(hass) -> MockConfigEntry:
    config_entry = MockConfigEntry(
        domain=DOMAIN,
        title="Ultra Card (wayne)",
        unique_id="wayne",
        data={"username": "wayne", "password": "secret"},
    )
    config_entry.add_to_hass(hass)
    return config_entry
