# Stack Overlay

> Module type: `stack` · Category: Layout · Free

Layer child modules on top of each other with anchor-based positioning — perfect for hero images with overlaid text, camera feeds with corner badges, clock-and-weather combos, or album art with media controls.

## Features

- **9 anchor points** — top / middle / bottom × left / center / right
- **Pixel or percent offsets** — nudge each layer from its anchor
- **Per-layer width, height, opacity, z-index**
- **Aspect ratio container** — 16:9, 4:3, 3:2, 1:1, 2:3, or auto (or fixed height override)
- **Clip overflow** toggle — hide or allow layers to extend past the container edge
- **Quick start presets** — Hero, Camera + badge, Clock + weather, Media
- **Editor drag positioning** — select a layer in the preview, then drag to reposition (offsets update live)

## Configuration

### Container

| Field | Notes |
|---|---|
| **Aspect ratio** | Sets the stack frame height when no fixed height is set. |
| **Fixed height** | Optional override (e.g. `280px`, `40vh`). |
| **Clip overflow** | When off, rotated or 3D-transformed child layers won't be clipped at the boundary. |

### Layers

Each child module in the stack gets its own layer settings:

| Field | Notes |
|---|---|
| **Anchor** | Which corner/edge the layer aligns to (9-point grid). |
| **Offset X / Y** | Push away from the anchor (`px` or `%`). |
| **Width / Height** | `auto`, `fit-content`, `100%`, or explicit size. |
| **Opacity** | 0–100%. |
| **Z-index** | Optional override for stacking order. |

Media-heavy modules (Image, Camera, Video Background, Living Canvas, Dynamic Weather, Background) default to **fit-content** width so they keep their natural aspect ratio.

### Quick start presets

| Preset | What it builds |
|---|---|
| **Hero** | Full-bleed background with centered title text overlay. |
| **Camera + badge** | Camera feed with a corner status badge. |
| **Clock + weather** | Side-by-side clock and weather modules. |
| **Media** | Album art with media player controls. |

Presets add starter layers — customize anchors, offsets, and child modules from there.

## Editor tips

1. Open the Stack module in the Layout editor.
2. Click a layer in the **live preview** to select it (selected layer gets a highlight ring).
3. **Drag** the selected layer to reposition — offsets update in the General tab.
4. Fine-tune with the anchor grid and offset fields for pixel-perfect placement.

> **Note:** Click once to select, then drag. Layers with `width: auto` expand to fit-content after drag so natural-size modules (icons, text) size correctly.

## Examples

**Hero banner**
- Layer 1: Image (full width, anchor top-left, width 100%)
- Layer 2: Text (anchor bottom-left, offset for padding)

**Security camera with motion badge**
- Layer 1: Camera (fit-content, center anchor)
- Layer 2: Icon or Info module (anchor top-right, small offset)

**Kiosk clock + weather**
- Use the **Clock + weather** preset, then swap modules for Animated Clock and Animated Weather (Pro).

## Related

- Side-by-side (not overlaid) → [Module Horizontal](#uc-doc-module-horizontal).
- Carousel pages → [Module Slider](#uc-doc-module-slider) + [Module Pagebreak](#uc-doc-module-pagebreak).
- Full layout nesting rules → [Layout System](#uc-doc-layout-system).
