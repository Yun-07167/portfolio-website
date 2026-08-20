---
slug: petitplanet-casestudy-camfunction
title: Case Study — Photography in Petit Planet
summary: System breakdown and mobile-layout recreation
cover: /assets/projects/petitPlanet-casestudy-cam/petitPlanet-casestudy-cam_cover.png
cover_alt: Case study — Photography in Petit Planet
home_thumbnail: /assets/projects/petitPlanet-casestudy-cam/petitPlanet-casestudy-cam_cover.png
year: 2026
tags:
  - interaction-design
  - case-study
published: true
order: 10
---
Petit Planet is a 3D life-simulation game planned for PC, mobile, and other platforms. It is currently still in development.  
  
Its photography feature has been well received by test players. It meets players' social and self-expression needs, while its friendship-level unlock requirement encourages players to form connections with others and supports retention.

###### Project Schedule

| | Aug 13 | Aug 14 | Aug 16 |
| --- | --- | --- | --- |
| Interaction | #1 Feature analysis: describe the photography feature and map its core experience flow | | #4 Documentation: organize the flow, states, edge-case assumptions, asset list, and UGUI prototype notes |
| Visual | #2 Mobile UI recreation: adapt PC video references into a mobile layout and recreate export-ready UI assets | | |
| Assembly | | #3 Unity assembly: define naming and folder conventions based on the analysis, export assets accordingly, and recreate the interface in-engine | |

> **Core Deliverables Checklist:**
> **Design and Interaction Documentation**
> Study and break down the core cooperative-photography experience, then produce designs and documentation suitable for implementation.
>
> **Static UGUI Interface**
> Recreate the mobile interface in Unity, become familiar with UGUI, and propose a foundational mobile-adaptation approach.

#### #1 Feature Analysis
### Strengths and Optimization Opportunities

:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_01.png
alt: Single-player photography screenshot
caption:
layout: wide
:::
###### Strengths
- The layout resembles a phone camera and follows Jakob's Law. The core functions are simple and easy to use, leaving players with almost no learning cost for taking a photo.
- Cooperative photos can be shared immediately after capture, instantly meeting players' social needs.
- The selfie-stick feature adds playfulness and immersion.
:::
:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_02.png
alt: Two-player photography screenshot
caption:
layout: wide
:::
###### Optimization Opportunities
- During cooperative photography between real players, guidance about each participant's state is insufficient. I observed a player trying to use the Neighbor pose entry to prompt another player to pose, only to receive a message saying that no eligible Neighbor was nearby.
- A photographed player can tell that a photo is being taken only through either a bubble above their head or the pose currently being performed; only one of these cues appears at a time. The photographer may be waiting for them to pose, but insufficient guidance can prevent the photographed player from recognizing this expectation.
:::
:::

### Core Experience
The photography system has two core goals corresponding to two player needs: documentation and social interaction. Its three main scenarios are:

###### Basic Photography
The player controls the camera — solo documentation.
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_01_sc.png
alt: Basic photography experience flow
caption:
layout: wide
:::

###### Photography with a “Neighbor” NPC
The player controls both the camera and the Neighbor — solo, staged documentation.
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_02_sc.png
alt: Photography flow with a Neighbor
caption:
layout: wide
:::

###### Photography with a Real Player
The photographer controls the camera while both participants control their own characters — social collaboration.
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_03_sc.png
alt: Cooperative photography flow with a real player
caption:
layout: wide
:::

*Mixed situations can also occur, such as photographing both a real player and a Neighbor, or photographing multiple real players.*

### Detailed Flowchart
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-flowchart_01_sc.svg
alt: Detailed photography flowchart
caption:
layout: wide
:::

### Two-role Flow for Real-player Photography
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-flowchart_02_sc.svg
alt: Two-role cooperative photography flowchart
caption:
layout: wide
:::
**I did not observe a formal cooperative-photo option. In the reference videos, players coordinated primarily by observing each other's state.**
When the photographed player switches from selecting an expression to selecting an item, the existing camera bubble disappears, potentially breaking mutual state awareness.

#### States
Based on the reference videos, this section records only states related to the social-collaboration experience.

| Character state | What the player sees | What others see |
| --- | --- | --- |
| Normal movement | Standard in-game HUD | Standard character behavior |
| Photographer opens the camera | Camera controls | Photographer takes out the camera or selfie stick |
| Player selects an expression | Expression menu + thinking animation | Camera bubble above the head |
| Player performs the selected action | Current expression animation | Character performs the action |
| Item-selection screen | No camera bubble observed | Player browsing or displaying items |
| Photo-result screen | Photo preview | Unconfirmed |
| Share photo | Phone-transfer animation and bubble | Phone-transfer animation and bubble |

#### Social-state Feedback
:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_03.png
alt: Screenshot of a covered state
caption:
layout: wide
:::
###### Covered State
The photographer has completed the composition, but the other player is still browsing or choosing an action, so the participants are at different stages of readiness.  
  
Current treatment:  
When the photographed player enters expression selection, a camera bubble appears above their head. The photographer can therefore tell that the other participant is still preparing rather than having left the interaction.
:::
:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_04.png
alt: Screenshot of a state-communication gap
caption:
layout: wide
:::
###### State-communication Gap
The photographed player wants to hold and display an item, so they temporarily leave expression selection and enter the item-selection flow.  
The observed camera bubble appears to be tied only to the expression system and disappears while an item is being selected.  
The photographer can no longer tell whether the other participant is finding an item for the photo, pausing participation, ending the photo session, or performing an unrelated action.  
This interrupts the shared understanding created by the earlier state cue and leaves the photographer unsure whether to keep waiting or take the photo.  
I did not observe a corresponding solution.
:::
:::

#### #2 Mobile UI Recreation
### UI Recreation and Mobile Adaptation
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_01.webp
alt: Recreated mobile UI
caption: *Character footage captured from Bilibili creator Yi Yi Xing; the background is not game footage and was sourced online.*
layout: wide
:::

### Comparison with the PC Button Layout and Adaptation Rules
:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_05.webp
alt: PC photography UI reference
caption: Screenshot from PC video footage
layout: wide
:::
:::

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_02.png
alt: Recreated mobile screenshot
caption: Recreated mobile layout
layout: wide
:::
:::
:::

###### Mobile Adaptation Rules
1. Reposition the camera-mode button group away from the virtual joystick to reduce accidental input while moving.
2. Arrange UI controls along screen edges so the central character and primary capture area remain unobstructed.
3. Group anchors by region: top header, right-side footer, and central information content each use anchors appropriate to their area.
4. Enlarge small PC buttons and standardize button sizes and operating gaps within each group.
5. Keep core functions visible across aspect ratios and reserve space for device safe areas.

#### #3 Unity Assembly
### Component Export
The recreated UI components were divided into General, Expression Selection, and Photography Mode groups.  
Ideally, if the new system consists only of photography-mode components, only those newly added components should need to be exported.  
Elements without baked textures should be exported in white wherever possible and tinted in-engine using the project's palette.

:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_01.png
alt: UI components
caption:
layout: wide
:::
:::

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_02.png
alt: Assets imported into Unity
caption: In-engine asset folder structure
layout: wide
:::
:::
:::

### Static Hierarchy and Mobile-device Adaptation
:::video
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-unitystructure_01.mp4
alt: Canvas structure
caption: In-engine UI hierarchy
layout: wide
:::

#### #4 Documentation
### Special Notes
:::columns
ratio: 1:1

:::column
1. Entering photography mode defaults to a camera mode centered visually on the player character.
2. The selfie stick is shown by default the first time selfie mode is opened. After the player changes this setting, future sessions retain the previous choice.
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_03.png
alt: Default photography camera UI
caption:
layout: wide
:::
:::
:::column
**Component-reuse Assumption**
This prototype is not connected to production logic. To simulate a realistic collaboration workflow, close buttons, toggles, action menus, and similar elements are assumed to come from the project's existing component library; photography-specific controls are treated as new components.
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_03_sc.png
alt: Reused and new components
caption:
layout: wide
:::
:::
:::

### Limitations and Open Questions

###### Limited Observation Sample
The game has not yet launched and its test build is no longer available. This analysis therefore relies mainly on gameplay videos posted by test players. I could not control the capture scenarios or confirm whether the footage presented every operation and system response.

###### Some Mechanics Were Inferred from Behavior
Video evidence alone cannot confirm whether hidden cooperative-photo detection, state synchronization, or prompting conditions exist between real players.

###### No Access to Real-user Testing
Because I could not access the test build, the project did not include usability testing, player interviews, or controlled comparisons. Assumptions such as whether photographers understand the camera bubble or photographed players realize they are participating still require validation with real players.

###### Limited Prototype Scope
Because the project lasted three days, the Unity output focused on:

- Organizing UI assets;
- Building the UGUI hierarchy;
- Configuring anchors;
- Recreating the landscape mobile layout.

The result is a static-layout prototype. It does not implement button feedback, navigation, camera control, character actions, photo generation, or multiplayer state synchronization.  
  
The border component has also not yet been adapted for 16:10 or 4:3 devices.

###### Mobile Adaptation Has Not Been Tested on Devices
The current adaptation was evaluated mainly in the design file and Unity Game View. Actual touch sizes, safe areas, device ratios, performance, and operating feel still require testing on physical devices.

###### Questions to Validate
**Real-player cooperative photos:**
- Is the disappearance of the camera bubble during item selection a fixed rule?
- Does the system detect whether a player is participating in a photo?
- Can the photographed player tell whether the photographer is composing, selecting an action, or has finished shooting?

**Mobile interaction:**
- Could the right-side function buttons conflict with camera control or character movement?
- Will the interface obscure the character or core capture area at different aspect ratios?
- After migrating PC controls to touch, are button sizes and information density appropriate for real use?

#### Project Summary
This project primarily served as an exercise in learning and becoming familiar with UGUI. With limited source material and time, I mapped the core photography experience, identified state-communication issues in real-player cooperative photos, and validated a foundational approach for recreating the mobile UI in Unity.

#### References
*This project used gameplay footage shared on social media by players from the first and second tests.*

Bilibili user 1787963 — Inviting a Neighbor to take a photo  
https://www.bilibili.com/video/BV1TzCHBEESD?spm_id_from=333.788.player.player_end_recommend&vd_source=9417ea2103fef5aeef9ef95ef006db0c&trackid=web_related_0.router-related-2479604-9kkcc.1786869262846.202

Bilibili user 一小时游戏 — Being photographed  
[https://www.bilibili.com/video/BV1ixoQB1End/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1ixoQB1End/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)

Bilibili user 伊伊星 — Taking photos with real players  
[https://www.bilibili.com/video/BV1WPZcBQERb/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1WPZcBQERb/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)

Bilibili user 星布布布菇 — Photographing a friend performing actions  
[https://www.bilibili.com/video/BV1p1LM6BEXd/?spm_id_from=333.1391.0.0&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1p1LM6BEXd/?spm_id_from=333.1391.0.0&vd_source=9417ea2103fef5aeef9ef95ef006db0c)

Bilibili users including 折耳根Gen — Multi-player cooperative photography  
[https://www.bilibili.com/video/BV1YY9dB2EEE/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1YY9dB2EEE/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)

Bilibili user 阿咪_游戏版 — “Street Corner” photo sharing  
[https://www.bilibili.com/video/BV14soEBMEvt/?spm_id_from=333.1387.upload_video_card.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV14soEBMEvt/?spm_id_from=333.1387.upload_video_card.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)
