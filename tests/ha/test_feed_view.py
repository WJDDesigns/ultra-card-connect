"""The RSS feed view: sign-in, URL checks, private addresses and redirects."""

from __future__ import annotations

import pytest
from homeassistant.setup import async_setup_component

from custom_components.ultra_card_pro_cloud import UltraCardFeedView

URL = "/api/ultra_card_pro_cloud/feed"
FEED_URL = "https://93.184.216.34/feed.xml"
FEED = '<?xml version="1.0"?><rss version="2.0"><channel><title>T</title></channel></rss>'


@pytest.fixture
async def view(hass):
    assert await async_setup_component(hass, "http", {})
    hass.http.register_view(UltraCardFeedView())


async def test_requires_sign_in(hass, view, hass_client_no_auth) -> None:
    client = await hass_client_no_auth()
    assert (await client.get(URL, params={"url": FEED_URL})).status == 401


async def test_fetches_a_public_feed(hass, view, hass_client, aioclient_mock) -> None:
    aioclient_mock.get(
        FEED_URL, text=FEED, headers={"Content-Type": "application/rss+xml; charset=utf-8"}
    )
    client = await hass_client()
    resp = await client.get(URL, params={"url": FEED_URL})
    assert resp.status == 200
    data = await resp.json()
    assert data["ok"] is True
    assert data["status"] == 200
    assert data["body"] == FEED


async def test_reports_upstream_errors_as_json(hass, view, hass_client, aioclient_mock) -> None:
    aioclient_mock.get(FEED_URL, status=404, text="nope")
    client = await hass_client()
    data = await (await client.get(URL, params={"url": FEED_URL})).json()
    assert data["ok"] is False
    assert data["status"] == 404


async def test_rejects_bad_urls(hass, view, hass_client) -> None:
    client = await hass_client()
    for bad in ("", "file:///etc/passwd", "https://u:p@93.184.216.34/x", "https://93.184.216.34:22/"):
        assert (await client.get(URL, params={"url": bad})).status == 400


async def test_private_addresses_are_admin_only(
    hass, view, hass_client, hass_read_only_access_token, aioclient_mock
) -> None:
    lan = "http://192.168.4.55/feed.xml"
    aioclient_mock.get(lan, text=FEED)
    user = await hass_client(hass_read_only_access_token)
    assert (await user.get(URL, params={"url": lan})).status == 403
    admin = await hass_client()
    assert (await (await admin.get(URL, params={"url": lan})).json())["ok"] is True


async def test_redirect_to_private_address_is_blocked(
    hass, view, hass_client, hass_read_only_access_token, aioclient_mock
) -> None:
    aioclient_mock.get(FEED_URL, status=302, headers={"Location": "http://127.0.0.1/secret"})
    user = await hass_client(hass_read_only_access_token)
    assert (await user.get(URL, params={"url": FEED_URL})).status == 403


async def test_blocked_feed_is_retried_with_other_identities(
    hass, view, hass_client, aioclient_mock
) -> None:
    aioclient_mock.get(FEED_URL, status=403, text="blocked")
    client = await hass_client()
    data = await (await client.get(URL, params={"url": FEED_URL})).json()
    assert data["ok"] is False
    assert data["status"] == 403
    # Default browser identity, then each fallback identity once.
    assert aioclient_mock.call_count == 3


async def test_reads_the_whole_feed_when_it_arrives_in_pieces(
    hass, view, hass_client, aioclient_mock
) -> None:
    """A single read() returns only what has arrived; the view must keep reading."""
    from unittest.mock import patch

    from pytest_homeassistant_custom_component.test_util import aiohttp as mock_http

    items = "".join(f"<item><title>Item {i}</title></item>" for i in range(400))
    big = f'<?xml version="1.0"?><rss version="2.0"><channel>{items}</channel></rss>'
    aioclient_mock.get(FEED_URL, text=big)

    class Trickle:
        """Hands out at most 1000 bytes per read, like a slow network."""

        def __init__(self, data: bytes) -> None:
            self._data = data

        async def read(self, n: int = -1) -> bytes:
            size = 1000 if n is None or n < 0 else min(n, 1000)
            chunk, self._data = self._data[:size], self._data[size:]
            return chunk

    client = await hass_client()
    with patch.object(mock_http, "mock_stream", Trickle):
        data = await (await client.get(URL, params={"url": FEED_URL})).json()
    assert data["ok"] is True
    assert data["body"] == big


async def test_already_encoded_urls_are_sent_as_written(
    hass, view, hass_client, aioclient_mock
) -> None:
    """PC-WELT redirects "news,feature" to "news%2Cfeature"; re-encoding looped."""
    from yarl import URL as YarlURL

    raw = "https://93.184.216.34/feed?story_types=news%2Cfeature"
    aioclient_mock.get(YarlURL(raw, encoded=True), text=FEED)
    client = await hass_client()
    data = await (await client.get(URL, params={"url": raw})).json()
    assert data["ok"] is True
    assert aioclient_mock.call_count == 1
    assert str(aioclient_mock.mock_calls[0][1]) == raw


def test_feed_request_url_keeps_existing_encoding() -> None:
    from custom_components.ultra_card_pro_cloud.helpers import feed_request_url

    url = feed_request_url("https://www.pcwelt.de/feed?story_types=news%2Cfeature")
    assert str(url) == "https://www.pcwelt.de/feed?story_types=news%2Cfeature"
    assert str(feed_request_url("https://example.com/a b")) == "https://example.com/a%20b"
    assert str(feed_request_url("https://example.com/50%off")) == "https://example.com/50%25off"
    assert str(feed_request_url("https://example.com/f?a=1&b=2")) == "https://example.com/f?a=1&b=2"
