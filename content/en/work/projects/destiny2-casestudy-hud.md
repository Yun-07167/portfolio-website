---
slug: destiny2-casestudy-hud
title: Case Study — Onboarding HUD Flow in Destiny 2
summary: |-
  Improving HUD and character screens
  for usability and scalability
cover: /assets/projects/destiny2-casestudy-hud/destiny2-casestudy-hud_cover.png
cover_alt: Case study — Onboarding HUD flow in Destiny 2
home_thumbnail: /assets/projects/destiny2-casestudy-hud/destiny2-casestudy-hud_cover.png
year: 2025
tags:
  - interaction-design
  - case-study
published: true
order: 15
---
#### Project Steps
**#1 Background and Context**
For new players, some commonly used interaction components in Destiny 2 are not intuitive enough.

**#2 Define Optimization Goals**
Improve the usability and scalability of combat and equipment management by redesigning selected UI components.

**#3 Detailed Process**
User experience flowchart → Multi-platform wireframes →  
Communication document → Project reflection

#### Background and Context
**About Destiny 2**
As a long-running GaaS title, Destiny 2 has accumulated increasingly complex systems over successive releases.  
The existing HUD framework was not originally designed for this level of information density. To reduce the barrier to entry for new players and the cognitive load placed on experienced players during complex combat, improving the hierarchy of interface information is essential to sustaining the game's vitality.

**About This Project**
Pain-point observation: During play, I found that in high-pressure combat situations players struggle to read critical skill cooldowns or health states from the corner HUD within milliseconds.  
External validation: Community videos show that players often rely on plugins or third-party tools such as DIM to compensate for friction in the native map and equipment interfaces. This indicates clear room to improve the efficiency of the native UI.

#### Pain-point Analysis
### HUD
Presentation of the ultimate ability, regular abilities, health, and weapon information

I grouped the current experience issues into two dimensions: **Usability** and **Scalability**. This study focuses on interaction logic and information architecture rather than visual aesthetics or technical implementation.

| Usability issues | Scalability issues |
| --- | --- |
| The health bar and ultimate-energy bar are too similar visually, making them difficult to distinguish quickly during high-pressure combat. | The current framework leaves insufficient space for future ability slots, which could cause crowding or require a structural redesign. |
| Key prompts for abilities and weapon switching are not intuitive, delaying feedback for new or multi-platform players. | |

### Character Management Screen
Equipment and class

| Usability issues | Scalability issues |
| --- | --- |
| The entry point for switching class is not prominent enough and can be difficult to locate quickly. | The current grid layout cannot easily accommodate possible future equipment slots. |
| Attribute icons lack clear textual explanations or semantic associations, increasing the effort required to make equipment decisions. | |

#### References

:::columns
ratio: 1:1
:::column
:::image
src: /assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_ref_01.png
alt: Reference — Marvel Rivals
caption: HUD — Marvel Rivals — NetEase Games
layout: wide
:::
- Key mapping prompts: Clear key prompts sit beside ability icons, while highly contrasting states distinguish available abilities from abilities on cooldown.
- Energy bars: The health and ultimate bars use clearly different geometries, reducing cognitive load in fast-paced combat.
:::
:::column
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_ref_02.png
alt: Reference — Fortnite
caption: HUD — Fortnite — Epic Games
layout: wide
:::
- Mobile layout: As a benchmark for cross-platform operation, Fortnite provides a valuable reference for mobile HUD arrangement, including virtual joysticks and ability buttons.
- Scalability: Its UI supports a degree of player customization and can accommodate varied items and special-ability slots. This validates the need for modular reserved space as GaaS games continue to add progression content.
:::
:::

#### Optimization Goals and Priorities

| Priority | Category | Design goal |
| --- | --- | --- |
| 0 | HUD — Usability | Strengthen the visual identity of the ultimate-energy bar in the lower-left corner and add dynamic key prompts. |
| 0 | Character screen — Usability | Strengthen attribute descriptions to support faster equipment decisions. |
| 1 | HUD + Character screen — Scalability | Ensure that the HUD and equipment grid can seamlessly support new abilities or slots. |
| 2 | Character screen — Usability | Provide a more intuitive way to inspect and switch classes. |

### HUD
#### Experience Flow Breakdown
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_flowchart_01_sc.png
alt: HUD flowchart
caption: Information shown in the existing HUD experience
layout: wide
:::

#### Design Adjustments
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_01_sc.png
alt: PC redesign
caption: Redesigned PC wireframe
layout: wide
:::
- Redesigned the ultimate-energy bar so its geometry differentiates it from the health bar and improves visual salience.
- Introduced key-icon prompts. When an ability finishes cooling down, its key prompt becomes highlighted, significantly reducing memory load during combat.
- Reserved space for potential new abilities so the UI architecture remains stable through long-term updates.

Mobile adaptation: Interaction hit areas were defined for touch input to maintain consistent logic across platforms.
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_02_sc.png
alt: Mobile redesign
caption: Mobile wireframe
layout: wide
:::
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_03_sc.png
alt: Tablet redesign
caption: Tablet wireframe
layout: wide
:::

### Character Screen
#### Experience Flow Breakdown
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_02_sc.png
alt: PC redesign
caption: Redesigned PC wireframe — Character screen
layout: wide
:::

#### Changes
:::columns
ratio: 2:1
:::column
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-character_01_sc.png
alt: PC character-screen redesign
caption: Redesigned PC wireframe — Character screen
layout: wide
:::
:::
:::column
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_original-character_01_sc.png
alt: Original PC character screen
caption: Original PC character screen
layout: wide
:::
:::
:::
- Adjusted the layout logic of the class icon so class switching follows the user's visual flow more naturally.
- Changed icon proportions and the overall composition so the equipment grid can expand in multiple directions and support additional future slots.
- Added a title to each attribute icon, changing recognition from icon-only identification to combined text-and-image semantics and improving decision efficiency.

#### Additional Analysis
###### Retrospective Comparison with the Officially Licensed Mobile Game Destiny: Rising

**Comparison and Reflection**
Destiny: Rising is an officially licensed mobile shooter RPG developed by NetEase based on Destiny 2. It launched in China in October 2025, after I completed this design exercise. Comparing it with my proposal produced the following insights and reflections:  

- The mobile version simplifies its feature set by removing one weapon and one regular ability. Its cooldown treatment is almost identical to the approach used in my exercise.
- The layout closely follows mobile interaction zones, placing virtual buttons in more prominent positions and at larger sizes.
- Jump and slide share the same virtual button, improving space utilization.
- This showed me that future mobile designs should engage more deeply with native ergonomic constraints rather than simply scaling down desktop logic.
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_comparison_01_sc.png
alt: Comparison with Destiny: Rising
caption:
layout: wide
:::
