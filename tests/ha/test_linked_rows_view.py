"""The Linked Rows HTTP view: auth, admin-only writes and conflict answers."""

from __future__ import annotations

import pytest
from homeassistant.setup import async_setup_component

from custom_components.ultra_card_pro_cloud import UltraCardLinkedRowsView

URL = "/api/ultra_card_pro_cloud/linked_rows"
ROW = {
    "id": "lr_kitchen",
    "name": "Kitchen",
    "modules": [{"id": "t1", "type": "text", "text": "Hi"}],
    "base_revision": 0,
}


@pytest.fixture
async def view(hass):
    assert await async_setup_component(hass, "http", {})
    hass.http.register_view(UltraCardLinkedRowsView())


async def test_requires_sign_in(hass, view, hass_client_no_auth) -> None:
    client = await hass_client_no_auth()
    assert (await client.get(URL)).status == 401
    assert (await client.post(URL, json=ROW)).status == 401
    assert (await client.delete(f"{URL}?id=lr_kitchen")).status == 401


async def test_admin_round_trip_and_conflict(hass, view, hass_client) -> None:
    client = await hass_client()
    resp = await client.post(URL, json=ROW)
    assert resp.status == 200
    assert (await resp.json())["row"]["revision"] == 1

    resp = await client.get(URL, params={"id": "lr_kitchen"})
    assert (await resp.json())["row"]["modules"] == ROW["modules"]
    resp = await client.get(URL, params={"id": "lr_missing"})
    assert (await resp.json()) == {"row": None}
    listing = await (await client.get(URL)).json()
    assert listing["rows"][0]["module_count"] == 1
    assert "modules" not in listing["rows"][0]

    stale = await client.post(URL, json={**ROW, "modules": []})
    assert stale.status == 409
    assert (await stale.json())["current"]["revision"] == 1

    assert (await client.post(URL, data=b"{nope")).status == 400
    resp = await client.delete(URL, params={"id": "lr_kitchen", "revision": "1"})
    assert (await resp.json())["deleted"] is True


async def test_non_admin_can_read_but_not_write(
    hass, view, hass_client, hass_read_only_access_token
) -> None:
    client = await hass_client(hass_read_only_access_token)
    assert (await client.get(URL)).status == 200
    assert (await client.post(URL, json=ROW)).status == 403
    assert (await client.delete(f"{URL}?id=lr_kitchen")).status == 403
