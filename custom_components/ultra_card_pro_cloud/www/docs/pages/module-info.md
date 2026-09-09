# Info

> Module type: `info` · Category: Data · Free

Display entity information (state, name, units, attributes) with formatting and template support.

## Features

- Show entity state, name, and unit of measurement
- Optional MDI icon with per-element color and size
- Independent alignment for icon vs. content
- Template mode for custom value formatting
- Layout controls — icon position, gap, alignment

## Configuration

### Entity

| Field | Notes |
|---|---|
| **Entity** | Source entity. |
| **Show name** | Display name above value. |
| **Custom name** | Override the entity's friendly name. |
| **Show state** | Display the entity's state value. |
| **Show units** | Append the entity's `unit_of_measurement`. |
| **Show icon** | Optional icon. |

### Icon

| Field | Notes |
|---|---|
| **Icon** | Custom MDI icon. Defaults to entity's icon. |
| **Icon color** | Static color or template. |
| **Icon size** | Pixels. |
| **Icon position** | `before` / `after`. |
| **Icon gap** | Spacing between icon and text. |

### Template mode

Switch the **value** field to template mode to fully control display:

```jinja
{{ states('sensor.living_room_temperature') | round(1) }}°C
```

```jinja
{{ states('sensor.humidity') }}% humidity
```

### Layout & sizing

- **Overall alignment** — left / center / right
- **Icon alignment** — controls icon-only block alignment
- **Content alignment** — controls text-block alignment
- **Name size** / **Value size** — per-entity font sizing (each info row can have its own sizes)

> **Note:** Bulk "apply size to all entities" was removed — sizing is configured per entity for finer control.

### Actions sync

When you change the **first (primary) entity**, tap / hold / double-tap action targets automatically follow that entity (more-info, toggle, etc.) so you don't have to re-wire actions after swapping the data source.

## Examples

**Temperature tile**
- Entity: `sensor.outdoor_temperature`
- Icon: `mdi:thermometer`
- Template value: `{{ states('sensor.outdoor_temperature') | round(1) }}°C`

**Humidity with custom suffix**
- Entity: `sensor.humidity`
- Template value: `{{ states('sensor.humidity') }}% humidity`

**Multi-attribute readout** — combine multiple attributes via template:
```jinja
{{ state_attr('weather.home', 'temperature') }}°,
{{ state_attr('weather.home', 'humidity') }}% RH
```

## Related

- For a colored bar instead of text → [Module Bar](#uc-doc-module-bar).
- For a circular/dial visual → [Module Gauge](#uc-doc-module-gauge).
- For history-over-time → [Module Graphs](#uc-doc-module-graphs).
