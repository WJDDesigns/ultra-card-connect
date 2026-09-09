# Pro and Cloud

Ultra Card is **MIT-licensed and free** — every core module, the editor, presets, and conditional logic work without an account. **Pro** adds cloud-backed features and a handful of premium modules.

---

## What's free

Everything in this list is unlimited and free for everyone:

- All **core modules** (Text, Icon, Info, Image, Markdown, Bar, Gauge, Graphs, Camera, Map, Button, Toggle, Slider Control, Spinbox, Dropdown, Light, Climate, Cover, Fan, Lock, Vacuum, Media Player, Timer, Tabs, Accordion, Popup, Slider, Pagebreak, Separator, Horizontal, Vertical, Navigation, Dynamic List, QR Code, Status Summary, Alert Center, Area Summary, Grid, People, Calendar, Activity Feed, Sports Score, Solar Analytics, Energy Display, Alarm Panel, Virtual Pet, Background, Screensaver, all Input modules)
- The **visual editor** with all 4 tabs
- **Conditional logic & Jinja2 templates**
- **Native HA cards** + **3rd-party card embedding** (unlimited)
- **Local Preset Marketplace** (browse, install, submit)
- **15 languages**

---

## What Pro adds

| Feature | Why you might want it |
|---|---|
| **Cloud configuration sync** | Card configs sync across all your HA instances and devices. Edit on one, see changes on the others. |
| **Automatic daily backups** | Daily snapshots with 30-day retention, restored from a UI dialog. Survive failed updates and config blunders. |
| **Manual snapshots** | Up to 30 named snapshots you can take any time. |
| **Animated Clock** module | Flip-clock with smooth animations. |
| **Animated Weather** module | Current weather with animated icons. |
| **Animated Forecast** module | Multi-day forecast with animated icons. |
| **Video Background** module | YouTube/Vimeo/MP4 backgrounds with conditional triggers. |
| **Living Canvas** module | Full-view WebGL background with presets and entity drivers. |
| **Dynamic Weather** module | Real-time weather effects (rain, snow, fog, sun) on the dashboard. |
| **Sports Score** module | Live scores, schedules, and team info. |
| **Calendar** module | Multi-view calendar with HA calendar entities. |
| **QR Code** module | Pro-tier customization. |
| **Energy Display** module | Sankey-style energy flow visualization. |
| **Solar Analytics** module | Solar power, grid balance, battery state widget. |
| **Activity Feed** module | Real-time home activity timeline. |
| **Vacuum Control** module | Vacuum control with map, stats, animations. |
| **Virtual Pet** module | Tamagotchi-style mood pet driven by your home. |
| **Screensaver** module | Idle-activated kiosk screensaver. |
| **Badge of Honor** module | Animated Pro badge for fun. |
| **3rd-party card integration** | Unlimited (Pro removes any per-instance gating; free tier is also unlimited but identifies via dashboard fingerprint — see below). |
| **Priority support** | Direct line on Discord and email. |

---

## Setup

Pro requires two pieces, both available in HACS:

### 1. UltraCard.io account

1. Visit **[UltraCard.io](https://ultracard.io)** and create an account.
2. Subscribe (or use the free trial — varies by promo).

### 2. Ultra Card Connect integration

The **integration** is a separate custom HA component that brokers communication between your HA instance and the cloud, and serves the **Ultra Card Hub** sidebar:

1. **HACS → Integrations → Add custom repository** → `WJDDesigns/ultra-card-connect`, category **Integration**.
2. Install **Ultra Card Connect**.
3. **Restart Home Assistant**.
4. **Settings → Devices & services → Add integration → Ultra Card Connect**.
5. Sign in with your UltraCard.io credentials.

After sign-in:

- The card editor shows your account in the top-right.
- Pro modules are unlocked.
- The **Ultra Card Hub** sidebar panel appears (served by the integration, not by HACS — it's why updating only the card doesn't update the Hub). See [Ultra Card Hub](#uc-doc-ultra-card-hub).
- Cloud sync / backups / snapshots run in the background.

---

## Cloud sync

- All card configs are encrypted in transit.
- Sync happens on save — a small toast confirms.
- Conflicts (two devices editing simultaneously) are resolved by last-write-wins with a snapshot of the loser's version automatically saved.
- See `src/services/uc-cloud-sync-service.ts` and `uc-session-sync-service.ts` for the implementation.

---

## Backups & snapshots

| Type | Trigger | Retention |
|---|---|---|
| **Daily backup** | Auto-scheduled (`uc-snapshot-scheduler-service.ts`) | 30 days, rolling |
| **Manual snapshot** | UI button or after major changes | Up to 30, FIFO oldest pruned |
| **Pre-restore safety** | Auto-snapshot before any restore | Counted toward manual quota |

Open from the **Cloud / Account** tab → **Backups** or **Snapshots**.

The restore dialog (`uc-snapshot-restore-dialog.ts`) shows a diff view so you can confirm what changes before reverting.

---

## Privacy & data

- Card configs sync to **ultracard.io** (a WordPress + custom REST stack).
- **No HA state data** is sent — only the card configuration.
- **Sensitive fields stripped on share** — when submitting a Marketplace preset, `uc-privacy-service.ts` strips IPs, tokens, image URLs, etc.
- **Open source** — all code is in this repo. The integration repo is `WJDDesigns/Ultra-Card-Pro-Cloud`.

If you cancel Pro, your existing data on ultracard.io stays for 30 days then is purged. Local card configs are unaffected.

---

## Troubleshooting Pro

| Symptom | Likely cause |
|---|---|
| Pro modules show "Sign in to use" | Integration not installed or signed-out. Re-add the integration. |
| Sidebar Hub missing | Update the **integration** (HACS), not just the card. The Hub ships from the integration. |
| Sync paused | Click the cloud icon in the editor — it shows the last sync error. Re-auth if needed. |
| Backups not running | Check **Settings → Devices & services → Ultra Card Pro Cloud → Configure → Snapshot schedule**. |

For other issues: [FAQ and Troubleshooting](#uc-doc-faq-and-troubleshooting) or hit Discord (priority support for Pro members).
