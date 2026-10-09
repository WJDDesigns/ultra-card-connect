"""Sign-in state that must outlive a single coordinator.

Home Assistant builds a new coordinator on every setup retry and reload. Tokens
kept only on the coordinator were lost each time, so an entry stuck in setup
retry signed in to ultracard.io again on every attempt. This module has no Home
Assistant imports so it can be unit-tested directly.
"""
from __future__ import annotations

import math
import time
from dataclasses import dataclass, field
from email.utils import parsedate_to_datetime
from typing import Any

DATA_AUTH_STATE = "auth_state"

# ultracard.io answers a sign-in 429 with `Retry-After: 600`. Its window slides,
# so any sign-in attempted before it ends keeps the install locked out.
SIGN_IN_BLOCK_DEFAULT_SECONDS = 600
SIGN_IN_BLOCK_MAX_SECONDS = 3600


def parse_retry_after(raw: str | None, default: float, now: float | None = None) -> float:
    """Return the Retry-After delay in seconds (delta-seconds or HTTP-date)."""
    if not raw:
        return default
    now = time.time() if now is None else now
    try:
        seconds = float(raw)
    except ValueError:
        try:
            seconds = parsedate_to_datetime(raw).timestamp() - now
        except (TypeError, ValueError, IndexError, OverflowError):
            return default
    if math.isnan(seconds) or seconds <= 0:
        return default
    return seconds


@dataclass
class AuthSession:
    """JWT state for one config entry."""

    username: str | None = None
    jwt_token: str | None = None
    refresh_token: str | None = None
    token_expires_at: int = 0

    def clear_tokens(self) -> None:
        self.jwt_token = None
        self.refresh_token = None
        self.token_expires_at = 0


@dataclass
class AuthState:
    """Sign-in state shared by every entry on this Home Assistant instance.

    The sign-in block is instance-wide because ultracard.io limits sign-ins
    per IP address, not per account.
    """

    sessions: dict[str, AuthSession] = field(default_factory=dict)
    sign_in_blocked_until: float = 0.0

    def session_for(self, entry_id: str, username: str | None) -> AuthSession:
        """Return the entry's session, discarding tokens issued to another account."""
        session = self.sessions.get(entry_id)
        if session is None:
            session = self.sessions[entry_id] = AuthSession(username=username)
        elif session.username != username:
            session.clear_tokens()
            session.username = username
        return session

    def drop(self, entry_id: str) -> None:
        self.sessions.pop(entry_id, None)

    def block_sign_in(self, retry_after: str | None, now: float | None = None) -> float:
        """Record a sign-in 429 and return how many seconds to wait."""
        now = time.time() if now is None else now
        seconds = parse_retry_after(retry_after, SIGN_IN_BLOCK_DEFAULT_SECONDS, now)
        seconds = min(seconds, SIGN_IN_BLOCK_MAX_SECONDS)
        self.sign_in_blocked_until = max(self.sign_in_blocked_until, now + seconds)
        return self.sign_in_blocked_until - now

    def sign_in_wait_seconds(self, now: float | None = None) -> float:
        """Seconds left before another sign-in may be attempted (0 when allowed)."""
        now = time.time() if now is None else now
        return max(0.0, self.sign_in_blocked_until - now)


def get_auth_state(domain_data: dict[str, Any]) -> AuthState:
    """Return the AuthState stored in hass.data[DOMAIN], creating it if needed."""
    state = domain_data.get(DATA_AUTH_STATE)
    if not isinstance(state, AuthState):
        state = domain_data[DATA_AUTH_STATE] = AuthState()
    return state


def sign_in_wait_message(seconds: float) -> str:
    """User-facing explanation for a sign-in that is being held back."""
    minutes = max(1, math.ceil(seconds / 60))
    unit = "minute" if minutes == 1 else "minutes"
    return (
        "ultracard.io is limiting sign-ins from this network. "
        f"Ultra Card Connect will try again in about {minutes} {unit}."
    )
