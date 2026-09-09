# Layout System

Ultra Card's layout is a 3-level structure with full nesting through layout modules.

```
UltraCard
└── Row (multiple per card)
    └── Column (multiple per row)
        └── Module (multiple per column)
            └── (layout modules can contain rows/columns/modules again — unlimited nesting)
```

---

## Rows

A **Row** is a horizontal container that flows left-to-right.

- Multiple **columns** sit side-by-side inside a row.
- Rows can have their own **background**, **padding**, **border**, **shadow**, **gradient**, and **logic**.
- Rows support **per-breakpoint visibility** (hide on mobile / tablet / desktop).
- Each row gets the standard **4-tab editor** (General / Actions / Logic / Design).

> A row is *not* the same as a `horizontal` layout module — rows are top-level structural elements, while `horizontal` modules nest inside columns.

---

## Columns

A **Column** is a vertical stack inside a row.

- Multiple modules stack vertically inside a column.
- Each column has a **width** setting (percentage, flex, or auto). Columns in a row share the available width.
- Columns inherit the parent row's height by default but can override.
- Columns also support **per-breakpoint visibility** and full **Design** styling.

### Column width modes

| Mode | Behavior |
|---|---|
| **Equal** | All columns share equal widths within the row. |
| **Fixed** | Set an exact percentage (e.g. 30%). |
| **Auto** | Column shrinks to fit its content. |

---

## Modules

A **Module** is the leaf node — the actual content (text, icon, button, gauge, camera, etc.).

- Every module has the same 4-tab editor.
- Every module can be reordered, duplicated, or wrapped in a layout module.

See [Modules Overview](#uc-doc-modules-overview) for the full catalog.

---

## Nesting via layout modules

Layout modules let you nest **rows / columns / modules** inside another module. This is how you build complex UIs.

| Layout module | When to use |
|---|---|
| **[Module Horizontal](#uc-doc-module-horizontal)** | Place modules side-by-side **inside** a column with flex alignment. |
| **[Module Vertical](#uc-doc-module-vertical)** | Stack modules vertically with explicit alignment / gap. |
| **[Module Stack](#uc-doc-module-stack)** | Layer modules on top of each other with 9-point anchors, offsets, and z-index. |
| **[Module Tabs](#uc-doc-module-tabs)** | Switchable tabbed sections, each containing its own modules. |
| **[Module Accordion](#uc-doc-module-accordion)** | Collapsible header reveals nested modules. |
| **[Module Popup](#uc-doc-module-popup)** | Modal popup container — content lives inside, trigger lives outside. |
| **[Module Slider](#uc-doc-module-slider)** | Carousel/slideshow with swipeable pages (use **[Module Pagebreak](#uc-doc-module-pagebreak)** to split). |
| **[Module Navigation](#uc-doc-module-navigation)** | Global navbar with routes, popups, and media controls. |
| **[Module Dynamic List](#uc-doc-module-dynamic-list)** | Generate a list of modules from a Jinja2 template at runtime. |

---

## Responsive breakpoints

Ultra Card uses a 3-tier breakpoint system, applied to the **container width** (the card's width — *not* the viewport):

| Breakpoint | Range |
|---|---|
| **Mobile** | ≤ 768px |
| **Tablet** | 769 – 1199px |
| **Desktop** | ≥ 1200px |

You can:

1. **Hide** modules / rows / columns at any breakpoint (Logic tab → *Hidden on devices*).
2. **Override** Design properties (margin, padding, font size, alignment, etc.) at any breakpoint via the Design tab.

The breakpoint preview switcher in the editor lets you design each breakpoint without resizing your browser. See [Design System](#uc-doc-design-system) § *Responsive overrides*.

---

## Global card properties

Beyond rows/columns/modules, the card itself has its own settings (the gear icon at the top of the editor):

- **Card background** (color or image)
- **Card border / radius / shadow / padding / margin**
- **Card overflow** (visible / hidden / scroll / auto)
- **Global CSS** — paste raw CSS that scopes to this card
- **Custom variables** — define reusable variables like `$primary`, `$accent`, used in any module's color/text fields (see [Custom Variables](#uc-doc-custom-variables))
- **Global design** — typography defaults, color palette, hover effects
- **Global logic** — show/hide the entire card based on conditions
- **Global actions** — a card-level click handler

---

## YAML structure (advanced)

Under the hood, the card is just YAML/JSON. Simplified:

```yaml
type: custom:ultra-card
layout:
  rows:
    - columns:
        - modules:
            - type: info
              entity: sensor.temperature
            - type: button
              text: Hello
              actions:
                tap_action:
                  action: toggle
                  entity: light.living_room
              design:
                background_color: '#1a73e8'
        - modules:
            - type: gauge
              entity: sensor.humidity
```

Layout modules nest the same shape inside themselves — for example a `horizontal` module has its own `modules: []` array.

For the full schema reference, see [Architecture](#uc-doc-architecture) § *Config schema* and [`src/types.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/types.ts) in the repo.
