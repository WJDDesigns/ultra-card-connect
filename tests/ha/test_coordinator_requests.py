"""How many requests each auth scenario sends to ultracard.io.

ultracard.io limits sign-ins to 20 per IP per 10 minutes and users/me costs about
a second of PHP, so these counts are the contract (see CLAUDE.md).
"""

from __future__ import annotations

from unittest.mock import AsyncMock

import pytest
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.update_coordinator import UpdateFailed
from pytest_homeassistant_custom_component.test_util.aiohttp import AiohttpClientMockResponse

from custom_components.ultra_card_pro_cloud.auth_state import get_auth_state
from custom_components.ultra_card_pro_cloud.config_flow import validate_auth
from custom_components.ultra_card_pro_cloud.coordinator import (
    SignInRateLimited,
    UltraCardProCloudCoordinator,
)

from .conftest import (
    DOMAIN,
    ME_URL,
    PROFILE,
    REFRESH_URL,
    SUB_URL,
    SUBSCRIPTION,
    TOKEN_URL,
    calls_to,
    make_jwt,
)


def _coordinator(hass, entry) -> UltraCardProCloudCoordinator:
    coordinator = UltraCardProCloudCoordinator(hass, async_get_clientsession(hass), entry)
    coordinator._async_request_reauth = AsyncMock()
    return coordinator


def _seed_tokens(hass, entry, jwt: str | None = None) -> None:
    session = get_auth_state(hass.data.setdefault(DOMAIN, {})).session_for(entry.entry_id, "wayne")
    session.set_tokens(jwt or make_jwt(), "refresh-1", 2_000_000_000)


async def test_first_poll_signs_in_once_and_later_polls_skip_profile(hass, entry, aioclient_mock):
    aioclient_mock.post(TOKEN_URL, json={"token": make_jwt(), "refresh_token": "r"})
    aioclient_mock.get(ME_URL, json=PROFILE)
    aioclient_mock.get(SUB_URL, json=SUBSCRIPTION)
    coordinator = _coordinator(hass, entry)

    first = await coordinator._async_update_data()
    second = await coordinator._async_update_data()

    assert first["authenticated"] and first["subscription"]["tier"] == "pro"
    assert second["email"] == "w@example.com"
    assert second["connected_at"] == first["connected_at"]
    assert calls_to(aioclient_mock, TOKEN_URL, "POST") == 1
    assert calls_to(aioclient_mock, ME_URL) == 1
    assert calls_to(aioclient_mock, SUB_URL) == 2


async def test_rejected_token_refreshes_instead_of_asking_for_reauth(hass, entry, aioclient_mock):
    _seed_tokens(hass, entry)
    responses = iter([401, 200])

    async def subscription(method, url, data):
        status = next(responses)
        return AiohttpClientMockResponse(method, url, status=status, json=SUBSCRIPTION)

    aioclient_mock.get(ME_URL, json=PROFILE)
    aioclient_mock.get(SUB_URL, side_effect=subscription)
    aioclient_mock.post(REFRESH_URL, json={"token": make_jwt(), "refresh_token": "refresh-2"})
    coordinator = _coordinator(hass, entry)

    data = await coordinator._async_update_data()

    assert data["authenticated"]
    assert calls_to(aioclient_mock, REFRESH_URL, "POST") == 1
    assert calls_to(aioclient_mock, TOKEN_URL, "POST") == 0
    coordinator._async_request_reauth.assert_not_awaited()
    assert coordinator._refresh_token == "refresh-2"


async def test_wrong_password_requests_reauth(hass, entry, aioclient_mock):
    aioclient_mock.post(TOKEN_URL, status=403, json={"code": "invalid"})
    coordinator = _coordinator(hass, entry)

    with pytest.raises(UpdateFailed) as err:
        await coordinator._async_update_data()

    assert coordinator.is_invalid_credentials_error(err.value)
    # _async_request_reauth de-duplicates itself through _reauth_requested.
    coordinator._async_request_reauth.assert_awaited()


async def test_sign_in_429_is_not_retried_until_retry_after(hass, entry, aioclient_mock):
    aioclient_mock.post(TOKEN_URL, status=429, headers={"Retry-After": "600"}, json={})
    coordinator = _coordinator(hass, entry)

    for _ in range(3):
        with pytest.raises(SignInRateLimited):
            await coordinator._async_update_data()

    assert calls_to(aioclient_mock, TOKEN_URL, "POST") == 1


async def test_outage_keeps_tokens(hass, entry, aioclient_mock):
    _seed_tokens(hass, entry)
    aioclient_mock.get(ME_URL, json=PROFILE)
    aioclient_mock.get(SUB_URL, status=500, json={})
    coordinator = _coordinator(hass, entry)

    for _ in range(4):
        with pytest.raises(UpdateFailed):
            await coordinator._async_update_data()

    assert coordinator._jwt_token
    assert coordinator._refresh_token == "refresh-1"
    assert calls_to(aioclient_mock, TOKEN_URL, "POST") == 0


async def test_validated_credentials_are_reused_by_the_entry(hass, entry, aioclient_mock):
    aioclient_mock.post(TOKEN_URL, json={"token": make_jwt(), "refresh_token": "r"})
    aioclient_mock.get(ME_URL, json=PROFILE)
    aioclient_mock.get(SUB_URL, json=SUBSCRIPTION)

    await validate_auth(hass, "wayne", "secret")
    coordinator = _coordinator(hass, entry)
    data = await coordinator._async_update_data()

    assert data["authenticated"]
    assert calls_to(aioclient_mock, TOKEN_URL, "POST") == 1
