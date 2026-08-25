---
slug: game-ui-interaction-spec-template
title: Game UI Interaction Design Specification Template
published_at: "2026-08-25"
tags:
  - game-design
  - unity
published: true
---

> **Document name:** `[screen/system name]`  
> **Version:** `v0.0.0`  
> **Game version:** `[related game iteration]`  
> **Status:** `Draft / In Review / Final / Deprecated`  
> **Updated:** `YYYY-MM-DD`  
> **Interaction designer:** `[name]`  
> **Visual designer:** `[name]`  
> **UI engineer:** `[name]`  
> **Feature owner:** `[name]`  
> **Related requirement:** `[PRD link / requirement ID]`

---

## Contents

1. [Design Overview](#1-design-overview)
2. [Information Architecture](#2-information-architecture)
3. [User Flow](#3-user-flow)
4. [Screen Specifications](#4-screen-specifications)
5. [Edge Cases and Error Handling](#5-edge-cases--error-handling)
6. [Multi-Platform Adaptation](#6-multi-platform-adaptation)
7. [Analytics](#7-analytics)
8. [Assets and Deliverables](#8-assets--deliverables)
9. [Changelog](#9-changelog)

---

## 1. Design Overview

### 1.1 Design Goals

> Describe the problem this screen or system needs to solve and the intended experience outcomes.

- `[Goal 1: for example, reduce cognitive load for new players]`
- `[Goal 2: for example, improve inventory-management efficiency]`
- `[Goal 3: for example, increase conversion]`

### 1.2 Design Scope

> State which screens and features are included, and explicitly identify exclusions to prevent scope creep.

**Included:**

- `[Scope item 1]`
- `[Scope item 2]`

**Excluded:**

- `[Exclusion 1]`
- `[Exclusion 2]`

### 1.3 Target Platforms and Input Methods

> Specify supported hardware platforms and their primary input methods.

| Platform | Input | Priority |
| --- | --- | --- |
| PC | Keyboard and mouse | `[P0/P1/P2]` |
| Mobile, iOS/Android | Touch | `[P0/P1/P2]` |
| Console, PS/Xbox/Switch | Controller | `[P0/P1/P2]` |

### 1.4 References and Benchmarks

> List comparable products or strong examples, explain what is being referenced, and identify how this design differs.

| Reference | Relevant aspect | Our difference |
| --- | --- | --- |
| `[Product A]` | `[For example, inventory-category filtering]` | `[For example, add one-click sorting]` |
| `[Product B]` | `[For example, map-marker interactions]` | `[For example, support voice markers]` |

### 1.5 Core Experience Metrics

> Define measurable experience goals for later acceptance testing.

- `[Metric 1: inventory sorting takes no more than three actions]`
- `[Metric 2: menu depth does not exceed two levels]`
- `[Metric 3: first-open loading time is under 500 ms]`

---

## 2. Information Architecture

### 2.1 Sitemap

> Use a text hierarchy or an external flowchart to show all related screens and navigation relationships.

```
[Main screen]
├── [Subscreen A]
│   ├── [Subscreen A-1]
│   └── [Subscreen A-2]
├── [Subscreen B]
└── [Subscreen C]
```

### 2.2 Entry and Exit Points

> Describe where and how players enter the screen, and how they leave it.

| Entry | Trigger | Prerequisite |
| --- | --- | --- |
| `[Click the inventory button on the main screen]` | `[Click]` | `[Player is not in combat]` |
| `[Press shortcut I]` | `[Key press]` | `[No modal is blocking input]` |

| Exit | Trigger | Destination |
| --- | --- | --- |
| `[Click Close]` | `[Click]` | `[Return to the previous screen]` |
| `[Press Esc / controller Circle]` | `[Button press]` | `[Close the screen]` |

### 2.3 Mutual-Exclusion Rules

> Describe which systems or screens cannot coexist with this one and whether opening it should close other interfaces.

- `[Rule 1: the screen cannot open during combat]`
- `[Rule 2: opening this screen automatically closes chat]`

---

## 3. User Flow

### 3.1 Main Flow

> Describe the complete path for the player's core task. A flowchart or sequence diagram is recommended.

```
[Step 1: player action] → [Step 2: system response] → [Step 3: UI feedback] → [Step 4: task complete]
```

### 3.2 Branching Flows

> Document exceptional paths, shortcuts, and mutually exclusive choices.

| Branch | Trigger | Handling |
| --- | --- | --- |
| `[Rapid repeated input]` | `[Repeated clicks within 200 ms]` | `[Debounce and respond only to the first click]` |
| `[Cancel operation]` | `[Click Cancel]` | `[Return to the previous state without saving]` |

### 3.3 State-Transition Diagram

> Describe the state machine for the screen's core module.

```
[State A: Locked] --(Condition X)--> [State B: Unlocking] --(Condition Y)--> [State C: Unlocked]
```

### 3.4 Input Mapping

> Map each action to keyboard, controller, and touch input.

| Action | PC, keyboard/mouse | Console, controller | Mobile, touch |
| --- | --- | --- | --- |
| `[Confirm/select]` | `[Left click / Enter]` | `[A / Cross]` | `[Tap]` |
| `[Back/close]` | `[Esc / right click]` | `[B / Circle]` | `[Swipe from the left edge]` |
| `[Navigate up/down]` | `[W/S / arrow keys]` | `[Left stick / D-pad]` | `[Swipe]` |
| `[Shortcut action]` | `[Tab]` | `[L1]` | `[Long press]` |

---

## 4. Screen Specifications

> Break the feature down screen by screen or module by module. Duplicate Section 4.x for every additional screen.

---

### 4.1 [Subscreen / Module Name]

#### 4.1.1 Layout and Visual Hierarchy

> Document wireframes, safe-area annotations, and resolution-adaptation rules.

- **Wireframe:** `[insert a wireframe or annotation link]`
- **Safe area:** `[platform-safe margins, such as 44 px top and 34 px bottom]`
- **Resolution adaptation:** `[16:9 displays normally; 21:9 extends the side backgrounds; 4:3 crops horizontally]`

#### 4.1.2 Element Inventory

| Element ID | Name | Type | Default state | Interaction | Data source |
| --- | --- | --- | --- | --- | --- |
| `[BTN_001]` | `[Confirm button]` | `[Button]` | `[Normal]` | `[Close the dialog and save]` | `[Local configuration]` |
| `[TXT_003]` | `[Player name]` | `[Text]` | `[Normal]` | `[Truncate beyond 12 characters]` | `[Server player data]` |
| `[IMG_005]` | `[Avatar frame]` | `[Image]` | `[Normal]` | `[Open the player profile]` | `[Server avatar URL]` |
| `[LIST_010]` | `[Item list]` | `[Scrollable list]` | `[Normal]` | `[Supports drag-to-reorder]` | `[Local inventory data]` |

#### 4.1.3 States

> Enumerate every state of each core element and define transition rules.

| Element ID | State | Visual treatment | Trigger | Transitions to |
| --- | --- | --- | --- | --- |
| `[BTN_001]` | `[Normal]` | `[Default appearance]` | `[Default]` | `[Hover/Pressed/Disabled]` |
| `[BTN_001]` | `[Hover/Focus]` | `[Highlight and scale to 1.05]` | `[Pointer hover / controller focus]` | `[Normal/Pressed]` |
| `[BTN_001]` | `[Pressed]` | `[Scale to 0.95 and darken]` | `[Click / button down]` | `[Normal/Disabled]` |
| `[BTN_001]` | `[Disabled]` | `[Grayscale at 50% opacity]` | `[Requirements not met]` | `[Normal]` |
| `[BTN_001]` | `[Loading]` | `[Show loading animation]` | `[Request in progress]` | `[Normal/Error]` |

#### 4.1.4 Interaction and Motion

| Element ID | Trigger | Animation | Duration | Easing | Parameters |
| --- | --- | --- | --- | --- | --- |
| `[BTN_001]` | `[Click]` | `[Scale feedback]` | `[100 ms]` | `[Ease-out]` | `[1.0 → 0.95 → 1.0]` |
| `[PANEL_A]` | `[Screen opens]` | `[Slide and fade in]` | `[300 ms]` | `[Cubic-bezier(0.4,0,0.2,1)]` | `[Y +50 px → 0; opacity 0 → 1]` |
| `[LIST_010]` | `[Data refresh]` | `[Fade in]` | `[200 ms]` | `[Linear]` | `[Opacity 0 → 1; stagger each item by 50 ms]` |

#### 4.1.5 Audio and Haptics

| Element ID | Event | Sound ID | Description | Controller vibration | Touch vibration |
| --- | --- | --- | --- | --- | --- |
| `[BTN_001]` | `[Click]` | `[SFX_UI_Click_01]` | `[Shared confirmation sound]` | `[None]` | `[Light feedback]` |
| `[BTN_001]` | `[Hover]` | `[SFX_UI_Hover_01]` | `[Subtle hover sound]` | `[None]` | `[None]` |
| `[BTN_002]` | `[Invalid click]` | `[SFX_UI_Error_01]` | `[Low-frequency warning]` | `[Light, 100 ms]` | `[Strong vibration]` |

#### 4.1.6 Data and Logic

| Data | Type | Source | Formatting rule | Refresh frequency |
| --- | --- | --- | --- | --- |
| `[Player currency]` | `[Integer]` | `[Server]` | `[10000 → 10K / 10,000]` | `[Real time]` |
| `[Item quantity]` | `[Local]` | `[Integer]` | `[Cap at 999; display 999+ above the cap]` | `[Immediately after an action]` |
| `[List sorting]` | `[Enum]` | `[Local configuration]` | `[Newest acquisition first by default]` | `[Manual]` |

---

### 4.2 [Next Subscreen / Module]

> Duplicate the Section 4.1 structure and continue.

---

## 5. Edge Cases and Error Handling

### 5.1 Network Errors

| Scenario | Presentation | Player action | System behavior |
| --- | --- | --- | --- |
| `[Offline when opening]` | `[Show a disconnected message]` | `[Click Retry]` | `[Request the data again]` |
| `[Connection lost during an action]` | `[Disable the action button]` | `[Wait for reconnection]` | `[Cache the pending operation locally]` |

### 5.2 Data Errors

| Scenario | Presentation | Handling |
| --- | --- | --- |
| `[Value is zero]` | `[Show a no-data placeholder]` | `[Disable related actions]` |
| `[Value is extremely large]` | `[Use scientific notation or truncate]` | `[Enforce a frontend upper bound]` |
| `[Invalid data format]` | `[Show the default placeholder]` | `[Report an error log]` |

### 5.3 Concurrency and Performance Boundaries

| Scenario | Presentation | Handling |
| --- | --- | --- |
| `[Rapid repeated clicks]` | `[Only the first input is accepted]` | `[Apply a 200 ms debounce or duplicate guard]` |
| `[Frame-rate drop]` | `[Reduce or skip animation]` | `[Disable nonessential motion below 30 fps]` |
| `[Memory warning]` | `[Lower texture resolution]` | `[Release assets for hidden screens]` |

---

## 6. Multi-Platform Adaptation

### 6.1 PC, Keyboard and Mouse

| Adaptation item | Rule |
| --- | --- |
| `[Key prompts]` | `[Show the relevant shortcut for each interactive element, such as Esc to close]` |
| `[Hover state]` | `[Show a tooltip after a 200 ms delay]` |
| `[Context menu]` | `[Support a right-click shortcut menu]` |
| `[Cursor]` | `[Use a pointer cursor over interactive elements]` |

### 6.2 Console, Controller

| Adaptation item | Rule |
| --- | --- |
| `[Focus loop]` | `[Navigate with the D-pad or stick; loop or stop at boundaries]` |
| `[Button prompts]` | `[Use platform-standard symbols such as Square, Cross, Circle, and Triangle]` |
| `[Default focus]` | `[Focus the first interactive element when the screen opens]` |
| `[Long-list scrolling]` | `[Accelerate while the direction is held and stop on release]` |

### 6.3 Mobile, Touch

| Adaptation item | Rule |
| --- | --- |
| `[Gesture conflicts]` | `[Define how list scrolling and map panning are prioritized]` |
| `[Mis-touch prevention]` | `[Keep critical touch targets at least 88 × 88 pt]` |
| `[Soft keyboard]` | `[Move the interface up while an input is focused and restore it afterward]` |
| `[Long press and swipe]` | `[Long press opens shortcuts; swipe scrolls; use a 500 ms / 10 px threshold]` |

---

## 7. Analytics

### 7.1 Event List

| Event ID | Event name | Trigger | Properties | Priority |
| --- | --- | --- | --- | --- |
| `[UI_Backpack_Open]` | `[Inventory opened]` | `[Click inventory]` | `[Source context, active tab]` | `[P0]` |
| `[UI_Backpack_ItemClick]` | `[Inventory item clicked]` | `[Click an item icon]` | `[Item ID, item type]` | `[P0]` |
| `[UI_Backpack_Sort]` | `[Inventory sorted]` | `[Change sorting mode]` | `[Sort type]` | `[P1]` |

### 7.2 A/B Test Plan, If Applicable

| Experiment ID | Name | Control | Variant | Metric |
| --- | --- | --- | --- | --- |
| `[EXP_001]` | `[Button-color comparison]` | `[Blue button]` | `[Orange button]` | `[Click-through rate]` |

---

## 8. Assets and Deliverables

### 8.1 Visual Assets

| Asset | Format | Dimensions | Naming convention | Notes |
| --- | --- | --- | --- | --- |
| `[btn_confirm_nor]` | `[PNG]` | `[256 × 64]` | `[btn_confirm_{state}]` | `[9-slice, 8 px border]` |
| `[icon_item_bg]` | `[TGA]` | `[128 × 128]` | `[icon_{type}_bg]` | `[Includes alpha]` |

### 8.2 Typography

| Use | Typeface | Size | Weight | Color | Locale fallback |
| --- | --- | --- | --- | --- | --- |
| `[Heading]` | `[Source Han Sans]` | `[32 px]` | `[Bold]` | `[#FFFFFF]` | `[Noto Sans]` |
| `[Body]` | `[Source Han Sans]` | `[24 px]` | `[Regular]` | `[#CCCCCC]` | `[Noto Sans]` |
| `[Hint text]` | `[Source Han Sans]` | `[20 px]` | `[Regular]` | `[#888888]` | `[Noto Sans]` |

### 8.3 Motion Files

| Motion | Export format | Authoring tool | Target engine | Notes |
| --- | --- | --- | --- | --- |
| `[Screen-open animation]` | `[Built in engine]` | `[UE UMG]` | `[Unreal]` | `[Use material animation]` |
| `[Button-click feedback]` | `[Lottie JSON]` | `[After Effects]` | `[Unity]` | `[Must support color replacement]` |

### 8.4 Audio Files

| Sound ID | Format | Duration | Loop | Notes |
| --- | --- | --- | --- | --- |
| `[SFX_UI_Click_01]` | `[WAV]` | `[0.3 s]` | `[No]` | `[Shared confirmation sound]` |
| `[SFX_UI_Error_01]` | `[WAV]` | `[0.5 s]` | `[No]` | `[Low-frequency warning]` |

---

## 9. Changelog

| Version | Date | Author | Change | Scope | Status |
| --- | --- | --- | --- | --- | --- |
| `[v0.1.0]` | `[YYYY-MM-DD]` | `[Name]` | `[Initial draft]` | `[Global]` | `[Draft]` |
| `[v0.2.0]` | `[YYYY-MM-DD]` | `[Name]` | `[Added interaction details for feature X]` | `[Feature X]` | `[In Review]` |
| `[v1.0.0]` | `[YYYY-MM-DD]` | `[Name]` | `[Finalized]` | `[Global]` | `[Final]` |

---

## Appendix

### A. Glossary

| Term | Definition |
| --- | --- |
| `[Term 1]` | `[Definition]` |
| `[Term 2]` | `[Definition]` |

### B. Related Documents

- `[Feature PRD link]`
- `[Visual design link]`
- `[Technical API documentation link]`
- `[Shared component interaction standards]`

---

> **How to use this template:**
> 1. Replace and remove every item in `[square brackets]`.
> 2. If a section does not apply, retain its heading and mark it `N/A`.
> 3. Use Figma, Axure, or an annotation-platform link for visual specifications.
> 4. After approval, synchronize this document to the project Wiki or Confluence and notify all relevant stakeholders.
