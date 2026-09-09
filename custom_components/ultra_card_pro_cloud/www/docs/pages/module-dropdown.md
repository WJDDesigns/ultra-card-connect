# Dropdown

> Module type: `dropdown` · Category: Interactive · Free

Interactive dropdown selector — each option has its own label, icon, and action. Great for scenes, modes, sources, or anything from a finite list.

## Features

- N options, each with label / icon / action
- Compact — takes one row of horizontal space
- Optional default option
- Active state matching (highlight the option that matches the entity's current state)
- All standard [Actions](#uc-doc-actions) per option

## Configuration

### Options

For each option:
- **Label**
- **Icon** (optional)
- **State matcher** (optional — used to highlight the "current" option)
- **Action** — toggle / more-info / navigate / perform-action / url / assist / nothing

### Trigger

- **Trigger label** — what shows when no option is highlighted
- **Trigger icon**
- **Trigger style** — flat / glass / outline / etc.

### Behavior

- **Highlight active option** — match the displayed label to entity state
- **Auto-close** — close on selection (default on)
- **Menu direction** — Auto (flip up/down based on viewport space), Up, or Down — override when the menu is clipped near the screen edge
- **Escape** — press Escape to close an open menu

### Actions / Logic / Design

Standard 4-tab editor.

## Examples

### Scene picker

```
Trigger label: Scenes
Options:
  - Day:         scene.turn_on scene.day
  - Movie:       scene.turn_on scene.movie
  - Bedtime:     scene.turn_on scene.bedtime
  - All off:     scene.turn_on scene.all_off
```

### Media source switcher

```
Trigger:   Source
Active matcher: state of media_player.living_room
Options:
  - Spotify:   call media_player.select_source(source: 'Spotify')
  - Plex:      call media_player.select_source(source: 'Plex')
  - TV input:  call media_player.select_source(source: 'TV')
```

## Related

- **[Module Toggle](#uc-doc-module-toggle)** — segmented button when N is small (2–4) and you have horizontal room.
- **[Module Select Input](#uc-doc-module-select-input)** ([Module Input Modules](#uc-doc-module-input-modules)) — bound to `input_select.*`.
