---
slug: undying-map
title: Undying Map Interface Redesign
summary: A redesign of the map travel flow and regional information hierarchy, helping players compare destinations, resources, and action costs more clearly.
cover: /assets/projects/undying-map/home-cover.png
cover_alt: Preview of the Undying map interface redesign
home_thumbnail: /assets/projects/undying-map/home-cover.png
year: 2022
tags:
  - interaction-design
  - game-ui
  - indie-game
published: true
order: 10
---

When route planning and strategic resource management were introduced mid-production, the map travel experience expanded significantly.  
The previous interface could not support the new route-planning features.

:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/undying-map/details/legacy-map.webp
alt: The legacy map presented locations and details on a fixed canvas
caption: Previous design mockup
layout: wide
:::
:::
:::column
:::image
src: /assets/projects/undying-map/details/undying-map_userflow_en_01.png
localized: true
alt: User flow for the previous map interface
caption: Comparison of the previous and redesigned flows
layout: wide
:::
:::
:::

| New system requirement | Previous interface | Gap |
| --- | --- | --- |
| Let players plan a route manually and observe cost changes in real time | No route-planning interaction framework | Insufficient information (usability issue) |
| Let players evaluate whether the vehicle has enough storage before departure | No storage-state feedback | Missing interaction pattern (ease-of-use issue) |
| Show randomized locations whenever the map opens and let players decide whether to visit them | No logic for handling random events | Missing interaction pattern (ease-of-use issue) |
| Support an unknown number of future maps and possible DLC | The bounded map places every location on one large PNG | Location count cannot scale (extensibility issue) |

## 02. Design goals

**Goal 1: Help players understand the cost of the current route**
Players can select a route tile by tile with the directional controls, observe cost values changing in real time, and decide whether to explore hidden locations along the way.

**Goal 2: Give players the information required to make a decision**
Before selecting “Confirm Travel,” players can review complete destination intelligence—such as resources and danger—as well as vehicle status, including remaining storage, durability cost, and fuel.

**Goal 3: Allow the map to support more locations**

## 03. Core design decisions

### 3.1 Make route planning a visible action–feedback loop

Players use the directional controls to move an arrowed route line one tile at a time while exploring the grid map.

:::image
src: /assets/projects/undying-map/details/undying-map_status_en_01.png
localized: true
alt: Route-planning states and destination details in the redesigned grid map
caption:
layout: wide
:::

:::image
src: /assets/projects/undying-map/details/route-planning.webp
alt: Route planning and destination details on the redesigned grid map
caption: Preview of the redesigned interface
layout: wide
:::

### 3.2 Information Presentation

###### New Map User Flow
:::image
src: /assets/projects/undying-map/details/undying-map_userflow_sc_02.png
alt: User flow for the redesigned map
caption: Redesigned user flow
layout: wide
:::

:::columns
ratio: 1:1

:::column
###### Vehicle Information
When a player plans a route to a destination, vehicle durability, fuel, and time costs update in real time. The player can also open the vehicle storage panel to inspect the available slots.
:::image
src: /assets/projects/undying-map/details/undying-map_vehicle_01.png
alt: Vehicle status and storage information panel
caption: Vehicle status is brought into the departure decision, reducing the frustration of discovering insufficient storage after setting out.
layout: wide
:::
:::

:::column
###### Destination Information
Destination information is presented in layers from top to bottom:  
name and distance/direction; location image in locked or unlocked state; danger level; available resources; and a short location description.
:::image
src: /assets/projects/undying-map/details/undying-map_destinationInfo_01.png
alt: Destination name, distance, danger, and resource panel
caption: Destination information is layered from identity and risk to potential reward.
layout: standard
:::
:::
:::

### 3.3 Replace a fixed map image with data coordinates

The previous map painted every location onto one fixed-size PNG. The redesign places locations on an extensible coordinate grid. New maps or DLC can add location data and adjacency rules without being constrained by a single image.

:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/undying-map/details/undying-map_oldversion_01.png
alt: Previous map design mockup
caption: Previous design
layout: wide
:::
:::

:::column
:::image
src: /assets/projects/undying-map/details/undying-map_newversion_01.png
alt: Redesigned map interface mockup
caption: Redesigned interface
layout: wide
:::
:::
:::

## 04. Validation and reflection

**Goal 1: Help players understand the cost of the current route**
- Tile-by-tile directional input and live costs in the lower-left corner created a complete action–feedback loop.
- The design team felt that the redesigned system offered more player participation.
- Playtesting showed that the live cost display in the lower-left corner was easy to miss. A later iteration added icon-and-value cost indicators around each location marker.

**Goal 2: Give players the information required to make a decision**
- Progressive disclosure covers the complete decision chain: inspect a destination, review its resources, confirm storage, and depart.
- Vehicle storage is surfaced numerically before departure, while players can still open the storage panel to inspect individual items. This helps prevent the frustration of discovering insufficient capacity after setting out.
- The information density of the destination panel still needs further player feedback.

**Goal 3: Allow the map to support more locations**
- The grid system can add locations dynamically through coordinate data without changing the interface structure.
- Compared with the previous fixed PNG, the extensibility limitation has been resolved.

*All artwork in this project is original; some location images are screenshots from the game.*
