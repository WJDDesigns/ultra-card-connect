# Slider Layout

> Module type: `slider` · Category: Layout · Free

Carousel/slideshow container — multiple pages of nested modules, swipeable on mobile, navigated via dots / arrows / auto-play.

## Features

- Multiple pages of modules (use **[Module Pagebreak](#uc-doc-module-pagebreak)** to split)
- Swipe (touch) and click-drag (desktop)
- Page indicator dots
- Optional arrow navigation
- Auto-play with configurable interval
- Loop / no-loop
- Vertical or horizontal orientation
- Per-page transitions

## Configuration

### Behavior

- **Orientation** — horizontal / vertical
- **Auto-play** — toggle + interval (sec)
- **Loop** — wrap from last to first
- **Show dots** — page indicators
- **Show arrows** — prev/next nav
- **Touch / drag** — enable swipe gestures
- **Transition** — slide / fade / scale

> **iOS / Safari:** Swipe recovery was improved in v3.5 — if a gesture ends mid-slide, the carousel now snaps to the nearest page instead of staying stuck between slides.

### Pagination

Use **[Module Pagebreak](#uc-doc-module-pagebreak)** modules inside the Slider to mark page boundaries. Each page can contain any modules.

### Logic / Design

Standard 4-tab editor.

## Examples

- **Multi-room dashboard** — one page per room, swipe between them.
- **Hero carousel** — auto-rotating banners with conditional content per page.
- **Time-of-day pages** — pages for morning / afternoon / evening, auto-shown via Logic.

## Related

- **[Module Tabs](#uc-doc-module-tabs)** — explicit tab strip.
- **[Module Navigation](#uc-doc-module-navigation)** — global navbar with routes (top-level navigation).

## Implementation

Powered by **Swiper** (`swiper@12.0.3`). All Swiper features available — see [Swiper docs](https://swiperjs.com/) for advanced behaviors.
