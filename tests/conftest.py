"""Load integration modules without importing Home Assistant dependencies."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

INTEGRATION_DIR = (
    Path(__file__).resolve().parents[1] / "custom_components" / "ultra_card_pro_cloud"
)


def load_module(module_name: str, filename: str):
    """Load a single integration module file by path."""
    path = INTEGRATION_DIR / filename
    spec = importlib.util.spec_from_file_location(module_name, path)
    if spec is None or spec.loader is None:
        raise ImportError(f"Could not load module from {path}")
    module = importlib.util.module_from_spec(spec)
    # Dataclasses resolve their module through sys.modules while the class is built.
    sys.modules[module_name] = module
    spec.loader.exec_module(module)
    return module


try:
    import pytest_homeassistant_custom_component  # noqa: F401
except ImportError:
    # The Home Assistant-backed tests need requirements-test-ha.txt.
    collect_ignore = ["ha"]
