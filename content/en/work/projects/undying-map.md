---
slug: undying-map
title: Undying Map Interface Redesign
summary: A redesign of the map travel flow and regional information hierarchy, helping players compare destinations, resources, and action costs more clearly.
cover: /assets/projects/undying-map/home-cover.png
cover_alt: Preview of the Undying map interface redesign
home_thumbnail: /assets/projects/undying-map/home-cover.png
year: 2026
tags:
  - interaction-design
  - case-study
  - game-ui
published: true
order: 10
---

## 1. Context and Problem

When route planning and strategic resource management were introduced mid-production, map travel grew from “select a place and go” into a chain of connected decisions. The old fixed-image map could neither explain route costs clearly nor scale to additional locations.

:::image
src: /assets/projects/undying-map/detail/legacy-map.webp
alt: The legacy map presented locations and details on a fixed canvas
caption: Legacy map: location count, information hierarchy, and canvas size constrained one another.
layout: wide
:::

## 02. Design goals

1. Let players plan a route tile by tile and see fuel, time, and vehicle durability update immediately.
2. Show destination resources, danger, and vehicle status before the player confirms travel.
3. Allow the map to grow through coordinate data without rebuilding a single background image.

> The design focus shifted from “displaying a map” to “supporting an informed travel decision.”

## 03. Core design decisions

### 3.1 Make route planning a visible action–feedback loop

Players extend a route one tile at a time with the directional controls. The route line communicates direction, reachability, and confirmation state: planning, unavailable, or ready to travel. Resource costs update with every step so consequences are visible before confirmation.

:::image
src: /assets/projects/undying-map/detail/route-planning.webp
alt: Route planning and destination details on the redesigned grid map
caption: Route, cost, and destination intelligence update within the same interaction context.
layout: wide
:::

### 3.2 Reveal information in decision order

The map keeps only what is needed to compare the current position and destination. The destination panel owns identity, distance, danger, and resources; the vehicle panel owns durability, fuel, time, inventory, and storage. Players can compare quickly, then reveal deeper information on demand.

:::image
src: /assets/projects/undying-map/detail/vehicle-information.webp
alt: Vehicle status and storage information panel
caption: Vehicle state is brought into the departure decision, reducing surprises after travel begins.
layout: wide
:::

:::image
src: /assets/projects/undying-map/detail/destination-information.webp
alt: Destination name, distance, danger, and resource panel
caption: Destination information is layered from identity and risk to potential reward.
layout: standard
:::

### 3.3 Replace a fixed map image with data coordinates

The legacy map painted every location into one fixed PNG. The redesign places locations in an extensible coordinate grid. New maps or DLC can add location data and adjacency rules without changing the interface structure.

:::image
src: /assets/projects/undying-map/detail/travel-flow.webp
alt: Complete interaction flow for map travel
caption: The new flow covers route planning, random locations, vehicle checks, exception states, and final departure.
layout: wide
:::

## 04. Validation and reflection

- Tile-by-tile planning and live costs created a clear action–feedback loop; the design team found the new version more participatory.
- Testing showed that cost feedback in the lower-left area could still be missed, so future iterations should move critical changes closer to the route endpoint.
- The destination panel covers the full decision chain, but its density still needs calibration through player testing.
- The data-driven grid solves the scalability problem and creates room for random locations and future map content.

This redesign reinforced a principle: a complex systems interface should not reveal everything at once; it should reveal the right information when the player needs to decide.
