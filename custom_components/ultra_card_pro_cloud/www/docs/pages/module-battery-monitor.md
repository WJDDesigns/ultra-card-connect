# Battery Monitor

> Module type: `battery_monitor` · Category: Data · Free

Auto-discovers battery sensors across your Home Assistant instance and highlights devices that need charging. Phones, vacuums, trackers, sensors — anything with a battery level.

## Features

- **Auto-discovery** — scans for battery sensors, with optional manual entity list
- **5 visual styles** — List, Bars, Cards, Rings, Strip
- **Threshold highlighting** — critical (default 10%) and low (default 25%) color bands
- **Charging indicator** — shows when a device is actively charging
- **Sort options** — lowest first (default) or highest first
- **Per-device overrides** — pin, hide, or customize individual entities
- **Show only below threshold** — hide healthy batteries, surface only what needs attention
- **Item border toggle** — disable the 1 px tile outline for a cleaner look on styled dashboards

## Configuration

### Discovery

| Field | Notes |
|---|---|
| **Discovery mode** | Auto, Manual, or Both. |
| **Exclude patterns** | Regex patterns to skip (e.g. `*_battery_temperature`). |
| **Hidden entities** | Always exclude specific entity IDs. |
| **Include battery level attribute** | Also match entities that expose level via attribute. |
| **Include binary sensors** | Include charging/on-battery binary sensors. |

### Display

| Field | Notes |
|---|---|
| **Style** | List · Bars · Cards · Rings · Strip |
| **Max items** | Cap the list length (default 25). |
| **Show title** | Module heading on/off. |
| **Show charging indicator** | Bolt icon when charging. |
| **Show percentage** | Numeric % on each tile. |
| **Show item border** | 1 px outline around each device tile. |
| **Sort direction** | Lowest first or highest first. |

### Thresholds & colors

| Field | Notes |
|---|---|
| **Critical threshold** | Below this % → critical color (default 10). |
| **Low threshold** | Below this % → low color (default 25). |
| **Show only below threshold** | Hide batteries above the low threshold. |
| **Critical / Low / OK / Charging colors** | Override default threshold colors. |

### Actions / Logic / Design

Standard 4-tab editor. Default tap → **more-info** on the device entity.

## Examples

**"What needs charging?" kiosk tile**
- Discovery: Auto
- Show only below threshold: On
- Style: Cards
- Sort: Lowest first

**Workshop tool batteries**
- Discovery: Manual — add specific `sensor.*_battery` entities
- Style: Strip
- Critical threshold: 15%

## Related

- Single battery as a bar → [Module Bar](#uc-doc-module-bar).
- Room-level device shortcuts → [Module Area Summary](#uc-doc-module-area-summary).
- Dynamic entity lists with filters → [Module Auto Entities List](#uc-doc-module-auto-entities-list).
