# Modules Overview

Ultra Card ships **69 modules** organized into seven categories. Every module has the same 4-tab editor (General / Actions / Logic / Design), so once you've learned one you've learned them all.

> **Pro modules** are marked with **(Pro)**. They require an UltraCard.io account + the **Ultra Card Connect** integration. See [Pro and Cloud](#uc-doc-pro-and-cloud).

---

## Content

| Module | Description |
|---|---|
| **[Module Text](#uc-doc-module-text)** | Static or template-driven text |
| **[Module Icon](#uc-doc-module-icon)** | Interactive icons with state-based styling and animations |
| **[Module Info](#uc-doc-module-info)** | Show entity state / attribute / unit |
| **[Module Image](#uc-doc-module-image)** | Display images (upload / URL / entity) with hover effects |
| **[Module Markdown](#uc-doc-module-markdown)** | Rich markdown content with templates |
| **[Module Bar](#uc-doc-module-bar)** | Progress bars with animations and gradients |
| **[Module Gauge](#uc-doc-module-gauge)** | Sensor values as customizable gauges (11 styles) |
| **[Module Graphs](#uc-doc-module-graphs)** | Line / bar / pie / donut historical charts |
| **[Module Camera](#uc-doc-module-camera)** | Live or still camera feeds |
| **[Module Map](#uc-doc-module-map)** | Interactive map with custom markers |
| **[Module QR Code](#uc-doc-module-qr-code)** | QR codes from URL, text, or entity (Pro) |
| **[Module Badge of Honor](#uc-doc-module-badge-of-honor)** | Animated Pro membership badge (Pro) |

## Data

| Module | Description |
|---|---|
| **[Module Area Summary](#uc-doc-module-area-summary)** | Smart room tile (auto-discovers entities by HA area) |
| **[Module Alert Center](#uc-doc-module-alert-center)** | Active alerts in priority order |
| **[Module Status Summary](#uc-doc-module-status-summary)** | Entity activity with timestamps |
| **[Module Activity Feed](#uc-doc-module-activity-feed)** | Real-time home activity timeline (Pro) |
| **[Module Calendar](#uc-doc-module-calendar)** | Multi-view calendar (Pro) |
| **[Module Sports Score](#uc-doc-module-sports-score)** | Live scores, schedules, team info (Pro) |
| **[Module People](#uc-doc-module-people)** | Person presence + customizable data items |
| **[Module Solar Analytics](#uc-doc-module-solar-analytics)** | Solar power / grid / battery widget (Pro) |
| **[Module Energy Display](#uc-doc-module-energy-display)** | Sankey-style energy flow (Pro) |
| **[Module Grid](#uc-doc-module-grid)** | Customizable grid of entity tiles |
| **[Module Battery Monitor](#uc-doc-module-battery-monitor)** | Auto-discover batteries; highlight low / critical devices |
| **[Module Auto Entities List](#uc-doc-module-auto-entities-list)** | Dynamic entity list with domain / keyword filters |

## Interactive

| Module | Description |
|---|---|
| **[Module Button](#uc-doc-module-button)** | Multiple-style action buttons |
| **[Module Toggle](#uc-doc-module-toggle)** | Toggle / multi-state switcher |
| **[Module Spinbox](#uc-doc-module-spinbox)** | Number input with +/- |
| **[Module Dropdown](#uc-doc-module-dropdown)** | Select with action per option |
| **[Module Light](#uc-doc-module-light)** | Advanced light control (color / brightness / effects) |
| **[Module Climate](#uc-doc-module-climate)** | Circular thermostat (Pro) |
| **[Module Cover](#uc-doc-module-cover)** | Blinds / shutters / garage doors |
| **[Module Fan](#uc-doc-module-fan)** | Speed / preset / oscillation / direction |
| **[Module Lock](#uc-doc-module-lock)** | Lock / unlock / open |
| **[Module Vacuum](#uc-doc-module-vacuum)** | Vacuum control with map and animations (Pro) |
| **[Module Media Player](#uc-doc-module-media-player)** | Full-featured media player (compact / card / mini) |
| **[Module Slider Control](#uc-doc-module-slider-control)** | Premium slider for any controllable entity |
| **[Module Timer](#uc-doc-module-timer)** | Countdown with optional action when expired |
| **[Module Alarm Panel](#uc-doc-module-alarm-panel)** | PIN-pad alarm control with status ring (Pro) |
| **[Module Virtual Pet](#uc-doc-module-virtual-pet)** | Tamagotchi-style mood pet (Pro) |

## Layout

| Module | Description |
|---|---|
| **[Module Horizontal](#uc-doc-module-horizontal)** | Side-by-side container with flex alignment |
| **[Module Vertical](#uc-doc-module-vertical)** | Vertical stack container |
| **[Module Stack](#uc-doc-module-stack)** | Layer modules with anchor-based overlay positioning |
| **[Module Tabs](#uc-doc-module-tabs)** | Tabbed switchable sections |
| **[Module Accordion](#uc-doc-module-accordion)** | Collapsible header reveals nested modules |
| **[Module Popup](#uc-doc-module-popup)** | Modal popup container |
| **[Module Slider](#uc-doc-module-slider)** | Carousel slideshow (use Pagebreak between pages) |
| **[Module Pagebreak](#uc-doc-module-pagebreak)** | Page divider inside a Slider |
| **[Module Separator](#uc-doc-module-separator)** | Lines, divider with text, or blank space |
| **[Module Navigation](#uc-doc-module-navigation)** | Global navbar (routes, popups, media controls) |
| **[Module Dynamic List](#uc-doc-module-dynamic-list)** | Generate modules from a Jinja2 template loop |

## Media / Background

| Module | Description |
|---|---|
| **[Module Background](#uc-doc-module-background)** | View-level background image |
| **[Module Video Background](#uc-doc-module-video-background)** | YouTube / Vimeo / MP4 video backgrounds (Pro) |
| **[Module Dynamic Weather](#uc-doc-module-dynamic-weather)** | Animated weather effects on the dashboard (Pro) |
| **[Module Living Canvas](#uc-doc-module-living-canvas)** | Full-view WebGL background (Pro) |
| **[Module Screensaver](#uc-doc-module-screensaver)** | Kiosk screensaver after idle (Pro) |

## Animated (Pro)

| Module | Description |
|---|---|
| **[Module Animated Clock](#uc-doc-module-animated-clock)** | Flip-clock with smooth animations |
| **[Module Animated Weather](#uc-doc-module-animated-weather)** | Current weather with animated icons |
| **[Module Animated Forecast](#uc-doc-module-animated-forecast)** | Multi-day forecast with animated icons |

## Inputs (Helpers)

| Module | Description |
|---|---|
| Text Input · Date/Time Input · Number Input · Slider Input · Select Input · Boolean Input · Button Input · Counter Input · Color Input | Form controls bound to HA `input_*` helpers. See [Module Input Modules](#uc-doc-module-input-modules). |

## Card embeds

| Module | Description |
|---|---|
| **[Module Native Card](#uc-doc-module-native-card)** | Embed any built-in HA card |
| **[Module 3rd Party Card](#uc-doc-module-3rd-party-card)** | Embed any 3rd-party Lovelace card (Bubble, Mushroom, ApexCharts…) |

---

## Picking the right module

| If you want to... | Use |
|---|---|
| Show a value with a label | **Info** |
| Show a value as a colored bar | **Bar** |
| Show a value as a dial / gauge | **Gauge** |
| Plot history | **Graphs** |
| One-tap action with a label | **Button** |
| One-tap with state-based icons | **Icon** |
| Drag a value (light brightness, fan speed) | **Slider Control** |
| Pick a value from a list | **Dropdown** |
| Toggle a binary state | **Toggle** |
| Show a room with auto-discovered entities | **Area Summary** |
| Layout side-by-side | **Horizontal** |
| Layout stacked | **Vertical** |
| Layer modules on top of each other | **Stack Overlay** |
| Tabs of different content | **Tabs** |
| Modal popup | **Popup** |
| Carousel | **Slider** + **Pagebreak** |
| Insert any HA / community card | **Native Card** / **3rd Party Card** |
| Generate modules dynamically from a template | **Dynamic List** |

---

## Source of truth

The canonical list of module types and metadata lives in [`src/modules/module-manifest-data.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/modules/module-manifest-data.ts). The `BaseModule` discriminated union in [`src/types.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/types.ts) is the type-level source of truth.
