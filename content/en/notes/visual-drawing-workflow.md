---
slug: visual-drawing-workflow
title: "Mapping Player Tasks with Visual Drawings"
published_at: "2026-08-18"
tags:
  - interaction-design
  - workflow
published: true
---

## Why start with a visual drawing

Writing Mermaid too early can lock an exploratory flow into a rigid structure. I first move nodes, branches, and connectors in Obsidian Excalidraw, then decide whether the stable result should remain a hand-drawn diagram or be formalized as Mermaid.

:::drawing
src: /assets/notes/interaction-flow-review/player-goal-flow.webp
alt: Visual flow connecting a player goal to key decisions, system feedback, and exception recovery
caption: This example starts with the player goal and uses movable nodes to compare the happy path with recovery paths. Select the drawing to enlarge it.
layout: wide
:::

## A real Excalidraw → SVG example

The drawing below comes from `player-task-flow.excalidraw.md` in the repository. Saving in Obsidian overwrites the matching `player-task-flow.excalidraw.svg`; the website build then syncs that current SVG into its public assets. There is no manual copying and no new SVG for every edit.

:::drawing
src: /assets/drawings/notes/visual-drawing-workflow/player-task-flow.excalidraw.svg
alt: SVG exported from Obsidian Excalidraw with hand-drawn strokes and embedded font styling preserved
caption: Real workflow example: version the editable source and current SVG together; the website displays only the synchronized SVG.
layout: wide
:::

## Example: a map navigation flow

The drawing frames the player's complete task after opening the map instead of merely listing screens. I begin with three core nodes—choose a destination, inspect the route, and confirm the action—then add branches for insufficient resources and unreachable targets. Nodes and connectors remain directly draggable in Excalidraw, without editing code.

| Stage | Work in Excalidraw | Website output |
| --- | --- | --- |
| Explore | Add nodes, notes, and connectors | Keep the source unpublished |
| Refine | Align nodes, simplify branches, add labels | Auto-export SVG or PNG |
| Publish | Check themes and text sizing | Reference the export in Markdown |

> The `.excalidraw.md` file is the editable source; the website displays its exported SVG or PNG. Keep both files in the project.
