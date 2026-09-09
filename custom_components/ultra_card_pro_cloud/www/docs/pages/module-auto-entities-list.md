# Auto Entities List

> Module type: `auto_entity_list` · Category: Data · Free

Dynamically discover and list Home Assistant entities by domain, device class, state, and keyword — with pinned/hidden overrides, sort options, and four row styles.

## Features

- **Filter by domain, device class, keyword** — include and exclude lists
- **State-based filtering** — match entity state with operators
- **4 row styles** — Compact, Detailed, Slim, Card
- **Pinned entities** — always show specific entities first (with optional per-row color override)
- **Hidden entities** — always exclude
- **Sort** — by name, last changed, state, or domain (asc/d desc)
- **Entity color highlighting** — RGB lights can tint their own row
- **Per-row overrides** — custom label, icon, and color for pinned entities
- **Standard actions** — tap / hold / double-tap per row

## Configuration

### Filters

| Field | Notes |
|---|---|
| **Include domains** | e.g. `light`, `switch`, `sensor`. Empty = all domains. |
| **Include device classes** | e.g. `temperature`, `motion`. |
| **Include keywords** | Entity ID or friendly name must contain these strings. |
| **Exclude keywords** | Skip entities matching these strings. |
| **Show unavailable** | Include `unavailable` / `unknown` entities. |

### Display

| Field | Notes |
|---|---|
| **Row style** | Compact · Detailed · Slim · Card |
| **Max items** | Cap results (default 50). |
| **Columns** | Multi-column layout for compact dashboards. |
| **Show icon / state / last changed** | Toggle row columns. |
| **Use entity color** | Tint row background from RGB light color (when available). |
| **Row gap** | Spacing between rows. |
| **Card height / width** | When row style is Card — set tile dimensions. |

### Pinned & hidden

- **Pinned entities** — click a chip to expand inline overrides (label, icon, color). Pinned rows always appear first.
- **Hidden entities** — excluded even if they match filters.

### Sort

| Option | Behavior |
|---|---|
| **Name** | Friendly name alphabetical. |
| **Last changed** | Most recently updated first (or reverse). |
| **State** | Sort by current state string. |
| **Domain** | Group by domain prefix. |

### Actions / Logic / Design

Standard 4-tab editor. Default tap → **more-info**.

## Examples

**All motion sensors**
- Include device classes: `motion`
- Row style: Compact
- Sort: last changed, descending

**RGB lights with color rows**
- Include domains: `light`
- Use entity color: On
- Row style: Detailed

**Pinned favorites on top**
- Pin `light.living_room`, `switch.kitchen_fan`
- Set custom colors on pinned chips for quick visual ID

## Related

- Room-scoped auto-discovery → [Module Area Summary](#uc-doc-module-area-summary).
- Template-generated module lists → [Module Dynamic List](#uc-doc-module-dynamic-list).
- Grid of fixed entity tiles → [Module Grid](#uc-doc-module-grid).
