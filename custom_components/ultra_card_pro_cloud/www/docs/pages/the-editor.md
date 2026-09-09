# The Editor

Ultra Card has a single visual editor, divided into **selector tabs** at the top and a **module tab strip** at the bottom of each module's editor.

---

## Selector tabs (top of the editor)

| Tab | Purpose |
|---|---|
| **Layout** | Drag-and-drop builder — add rows, columns, modules. Reorder by drag handle. Nest layout modules inside other layout modules. |
| **Cards** | Embed native or 3rd-party cards (Bubble Card, Mushroom, ApexCharts, etc.). |
| **Modules** | Browse the module library by category, then click to insert. |
| **Presets** | Save the current layout/module as a preset, browse your local presets, or browse the **Marketplace**. |
| **Favorites** | Quick access to favorited modules, presets, and colors. |
| **Cloud / Account** | Sign in to UltraCard.io for Pro features and cloud sync. |

---

## Module editor — the 4 tabs

Click any module in the **Layout** view to open its editor. Every module shows the same four tabs.

### Module help (Docs)

Each module editor header includes a **`?` help icon**. Click it to open **Ultra Card Hub → Docs** on that module's wiki page (e.g. `module-bar` for the Bar module). The card editor **About** tab also has a **Documentation in Ultra Card Hub** button. See [Ultra Card Hub](#uc-doc-ultra-card-hub).

### General
Module-specific configuration — entity selectors, text, icons, layout knobs unique to that module type.

### Actions
Three configurable interactions:
- **Tap action** — single tap/click
- **Hold action** — long press
- **Double-tap action** — double tap/click

Each can be:
- **Toggle** — toggle entity state
- **More-info** — open HA's more-info dialog
- **Navigate** — go to a dashboard path
- **URL** — open a URL
- **Perform action** — call any HA service
- **Assist** — open HA Assist with optional pipeline + listening trigger
- **Nothing** — do nothing
- **Default** — module-specific default (varies by module)

See [Actions](#uc-doc-actions) for the full reference.

### Logic
Show / hide the module based on:
- **Entity state** — `=`, `!=`, `>`, `>=`, `<`, `<=`, `has_value`, `no_value`, `contains`, `not_contains`
- **Entity attribute** — same operators, against a specific attribute
- **Time** — between two times of day
- **Template** — any Jinja2 expression that evaluates to truthy/falsy

You can combine multiple conditions with **every (AND)** or **any (OR)** mode. You can also hide modules per **device breakpoint** (mobile / tablet / desktop).

See [Logic and Conditions](#uc-doc-logic-and-conditions) for examples.

### Design
A unified design tab for visual styling:
- **Background** — color, image (upload / URL / entity attribute), size, position, repeat
- **Spacing** — margin, padding (per-side)
- **Border** — style, width, radius (per-corner), color
- **Shadow** — colored, blur, spread, offset
- **Gradient editor** — multi-stop with the Ultra Card color picker
- **Typography** — font family, size, weight, color, line height, alignment
- **Hover effects** — scale, glow, lift, fade, color change
- **Animations** — pulse, bounce, shake, fade, spin, etc. (where supported)
- **Per-breakpoint overrides** — different styles on mobile vs. desktop

The same Design tab is available at three levels:
1. **Global** (whole card) — `Settings` icon at the top → **Global Design**
2. **Per row** / **Per column** — open the row/column editor
3. **Per module** — the module's Design tab

> All design fields support [Custom Variables](#uc-doc-custom-variables) like `$primary` or `$accent_blue` so themes propagate across modules.

---

## Live preview

The right pane shows a live preview that updates on every keystroke. Some heavy modules (cameras, animated weather, living canvas) are throttled or render placeholders during edit to keep the editor responsive.

---

## Responsive editing

A **device breakpoint switcher** at the top of the preview lets you preview the card at:
- **Mobile** (`<= 768px`)
- **Tablet** (`769–1199px`)
- **Desktop** (`>= 1200px`)

Use the **Design** tab's per-breakpoint overrides plus **Logic → Hidden on devices** to fine-tune layouts. See [Design System](#uc-doc-design-system) for the breakpoint system.

---

## Keyboard / drag conventions

- **Drag handle** (≡) on every row/column/module — grab to reorder.
- **Trash** icon on every block — remove (with confirmation).
- **Duplicate** icon — clone the block.
- **Ctrl/Cmd + S** in YAML mode — save card config.

---

## Editing in YAML

For power users — Lovelace's **Show code editor** still works on Ultra Card. Edit YAML directly, then return to the visual editor. Ultra Card validates the schema and surfaces errors inline. The YAML schema is documented at [Architecture](#uc-doc-architecture) § *Config schema*.
