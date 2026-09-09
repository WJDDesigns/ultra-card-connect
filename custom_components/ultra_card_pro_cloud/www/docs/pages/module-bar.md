# Bar

> Module type: `bar` · Category: Data · Free

Progress bars with animations, gradients, side labels, and template support.

## Data sources

| Source | Notes |
|---|---|
| **Entity (0–100)** | Direct percentage from a sensor. |
| **Entity attribute** | Use a specific attribute value. |
| **Difference** | `(current / total) × 100` from two entities. |
| **Template** | Custom Jinja2 expression returning a number 0–100. |

## Configuration

### Appearance

- **Bar style** — flat, glossy, embossed, glass, metallic, neon, etc.
- **Height** — bar thickness in px.
- **Width** — % of container.
- **Border radius** — pill / rounded / square.
- **Alignment** — left / center / right.

### Colors & gradients

- Solid bar color, or
- Multi-stop gradient with custom positions.
- **Gradient mode** — `full`, `cropped`, or `value-based` (only fill area shows the gradient).

### Labels

| Field | Notes |
|---|---|
| **Left side** | Title and value text — supports templates. |
| **Right side** | Additional text — supports templates. |
| **Percentage text** | Show `XX%` directly on the bar. |

### Animations

- **Charging** stripes
- **Pulse**, **glow**, **rainbow**, **bubbles**, **heartbeat**
- **Triggers** — always, by entity state, attribute, or override conditions
- **Animation direction** — normal, reverse, or driven by a sensor (entity + optional attribute)
- **Animation speed** — fixed multiplier, or driven by a sensor with optional multiplier

Direction and speed use CSS custom properties at runtime, so charging stripes can reverse when a battery is discharging or speed up when power draw increases.

### Actions / Logic / Design

Standard 4-tab editor. See [Actions](#uc-doc-actions), [Logic and Conditions](#uc-doc-logic-and-conditions), [Design System](#uc-doc-design-system).

## Examples

**Battery with charging animation**
- Source: `entity` → `sensor.phone_battery_level`
- Animation: `charging` when `binary_sensor.phone_charging == on`
- Color gradient: green at 100%, yellow at 30%, red at 10%

**Disk usage**
- Source: `difference` → `sensor.disk_used` / `sensor.disk_total`
- Right label: `{{ states('sensor.disk_used') }} GB / {{ states('sensor.disk_total') }} GB`

**Download progress bar with speed and ETA on sides**
- Left: `Downloading…`
- Right: `{{ states('sensor.download_speed') }} MB/s — {{ states('sensor.download_eta') }}`

## Related

- For a dial / radial display → [Module Gauge](#uc-doc-module-gauge).
- For history → [Module Graphs](#uc-doc-module-graphs).
