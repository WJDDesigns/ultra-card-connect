"""Tests for sign-in state shared across coordinators."""

from email.utils import formatdate

from conftest import load_module

auth_state = load_module("uc_auth_state", "auth_state.py")

NOW = 1_800_000_000.0


def test_session_survives_a_new_coordinator_for_the_same_entry() -> None:
    domain_data: dict = {}
    first = auth_state.get_auth_state(domain_data).session_for("entry-1", "wayne")
    first.jwt_token = "jwt"
    first.refresh_token = "refresh"
    first.token_expires_at = 123

    again = auth_state.get_auth_state(domain_data).session_for("entry-1", "wayne")

    assert again is first
    assert again.jwt_token == "jwt"
    assert again.refresh_token == "refresh"


def test_session_drops_tokens_when_the_account_changes() -> None:
    state = auth_state.AuthState()
    session = state.session_for("entry-1", "wayne")
    session.jwt_token = "jwt"
    session.refresh_token = "refresh"

    session = state.session_for("entry-1", "someone-else")

    assert session.jwt_token is None
    assert session.refresh_token is None
    assert session.username == "someone-else"


def test_drop_forgets_the_entry() -> None:
    state = auth_state.AuthState()
    state.session_for("entry-1", "wayne").jwt_token = "jwt"
    state.drop("entry-1")
    assert state.session_for("entry-1", "wayne").jwt_token is None


def test_block_sign_in_honours_full_retry_after() -> None:
    state = auth_state.AuthState()
    assert state.block_sign_in("600", now=NOW) == 600
    assert state.sign_in_wait_seconds(now=NOW + 599) == 1
    assert state.sign_in_wait_seconds(now=NOW + 600) == 0


def test_block_sign_in_defaults_to_ten_minutes_without_header() -> None:
    state = auth_state.AuthState()
    assert state.block_sign_in(None, now=NOW) == auth_state.SIGN_IN_BLOCK_DEFAULT_SECONDS


def test_block_sign_in_caps_absurd_values_and_never_shortens() -> None:
    state = auth_state.AuthState()
    assert state.block_sign_in("999999", now=NOW) == auth_state.SIGN_IN_BLOCK_MAX_SECONDS
    assert state.block_sign_in("5", now=NOW) == auth_state.SIGN_IN_BLOCK_MAX_SECONDS


def test_parse_retry_after_accepts_http_date() -> None:
    raw = formatdate(NOW + 120, usegmt=True)
    assert auth_state.parse_retry_after(raw, default=5, now=NOW) == 120


def test_parse_retry_after_falls_back_on_garbage() -> None:
    assert auth_state.parse_retry_after("soon", default=5, now=NOW) == 5
    assert auth_state.parse_retry_after("-3", default=5, now=NOW) == 5
    assert auth_state.parse_retry_after("nan", default=5, now=NOW) == 5


def test_sign_in_wait_message_rounds_up_to_minutes() -> None:
    assert "about 10 minutes" in auth_state.sign_in_wait_message(570)
    assert "about 1 minute." in auth_state.sign_in_wait_message(20)


def test_stashed_tokens_are_adopted_by_the_matching_entry() -> None:
    state = auth_state.AuthState()
    state.stash_tokens("Wayne", "jwt", "refresh", 123)

    session = state.session_for("entry-1", "wayne")

    assert (session.jwt_token, session.refresh_token, session.token_expires_at) == ("jwt", "refresh", 123)
    assert state.pending == {}


def test_stashed_tokens_for_another_account_are_left_alone() -> None:
    state = auth_state.AuthState()
    state.stash_tokens("someone-else", "jwt", "refresh", 123)

    session = state.session_for("entry-1", "wayne")

    assert session.jwt_token is None
    assert "someone-else" in state.pending


def test_profile_is_cached_until_it_is_a_day_old_or_tokens_are_cleared() -> None:
    session = auth_state.AuthSession(username="wayne")
    assert session.profile_is_stale(NOW)

    session.store_profile({"id": 1}, NOW)
    assert not session.profile_is_stale(NOW + 3600)
    assert session.profile_is_stale(NOW + auth_state.PROFILE_MAX_AGE_SECONDS + 1)

    session.clear_tokens()
    assert session.profile_is_stale(NOW)


def test_refresh_keeps_the_old_refresh_token_when_none_is_returned() -> None:
    session = auth_state.AuthSession(username="wayne")
    session.set_tokens("jwt-1", "refresh-1", 1)
    session.set_tokens("jwt-2", None, 2)

    assert (session.jwt_token, session.refresh_token) == ("jwt-2", "refresh-1")
