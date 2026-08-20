---
slug: overwatch2-casestudy-findGame
title: Case Study — Matchmaking Flow in Overwatch 2
summary: Matchmaking-flow analysis and a stylized UI redesign
cover: /assets/projects/overwatch2-casestudy-uiremaster/overwatch2-casestudy-uiremaster_cover.png
cover_alt: Case study — Matchmaking flow in Overwatch 2
home_thumbnail: /assets/projects/overwatch2-casestudy-uiremaster/overwatch2-casestudy-uiremaster_cover.png
year: 2024
tags:
  - interaction-design
  - case-study
published: true
order: 25
---
#### Process
1. Player journey map
2. Paper prototype
3. Flowchart
4. Wireframe prototype
5. Usability testing
6. UI moodboard
7. UI visual direction
8. UI screen redesign
9. Accessibility testing — color-vision testing

#### Player Journey Map
By watching one hour of gameplay footage and combining it with my own experience, I mapped the player's first twenty minutes. I focused on interaction flows: what options the designers provide, which options and information they want players to notice, how players respond, and what players do in pursuit of their goals. I then identified details that could be improved.

:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_playerJourney_01_Sc.png
alt: Player journey map
caption:
layout: wide
:::

#### Paper Prototype
I isolated the options provided by the game design and created a paper prototype to organize the available screens and prepare for drawing the flowchart.

Screens and options
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_paperprototype_01_Sc.png
alt: Paper prototype of screens and options
caption:
layout: wide
:::

#### Flowchart
This process clarified the functional buttons and prompts required on each screen and prepared the work for wireframing. Arrow symbols replace secondary-flow connectors to keep the chart concise and readable. The process also began to reveal the hierarchy among different UI elements.
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_flowchart_01_Sc.png
alt: Interface flowchart
caption:
layout: wide
:::

#### Wireframe Prototype
At this stage, a simple prototype made it possible to conduct small-scale user testing.
[https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down](https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down)
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_01_Sc.png
alt: Initial wireframe prototype
caption:
layout: wide
:::

#### User Testing
I invited three users to test the prototype, assigned them a set of tasks, and designed a questionnaire. The purpose was to translate their feedback into specific points for improvement.

Prototype:  
[https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down](https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down)  
Full test results:  
[https://www.figma.com/design/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?node-id=1-11&t=aZ56RvApciZYL033-4](https://s177yed7drj.typeform.com/to/VkVNZcIL)  
Online questionnaire:  
[https://s177yed7drj.typeform.com/to/VkVNZcIL](https://s177yed7drj.typeform.com/to/VkVNZcIL)

##### Research Goals
- Evaluate whether the wireframe communicates information clearly and identify ambiguous details.
- Determine whether players understand every piece of information in the wireframes and, where they do not, understand why.
- Ensure that players can enter a match quickly from the home screen.
- Understand players' opinions of the wireframe layout.
- Iterate the wireframes based on this usability study.

##### Research Plan
**Recruitment:**  
- Target users: PC players aged 16–55
- Three participants
- Recruited through online communities and personal contacts

**Tool:**  
- Figma prototype

**Tasks:**  
- Move through six wireframe screens: Home, Play, Matchmaking, Finding Game, Hero Select, and in-game HUD.

**Schedule:**  
- Date: May 2024
- Questionnaire distributed individually

↓↓↓

##### Questionnaire
**Observe the Home screen and provide feedback:**  
1. What do you think about the options on this screen?
2. What do you think about the layout?

**Enter the Play and Mode Select screens, explore them, complete the following tasks, and leave feedback:**  
1. Task 1: Can you explain the difference between the two Quick Play options?
2. Task 2: Imagine that you want to play the Tank role. Interact with the interface to choose that role. Can you complete the process smoothly, and what do you think of it?
3. What do you think about the layout of these two screens?

**Enter the Finding Game screen and provide feedback:**  
1. Is the non-interactive information on this screen presented clearly?

**Enter the Hero Select screen, explore it, complete the following tasks, and leave feedback:**  
1. Task 3: Can you describe the status of your teammates from this screen?
2. Task 4: Select “Skin C” and continue.
3. What do you think about the layout of this screen?

**Review the in-game information and provide feedback:**  
1. What information can you see on this screen?
2. What do you think about the options shown?

**Thank you for your time — we are almost finished:**  
1. Do you have any other questions, feedback, or suggestions?
2. Do you consider yourself a PC player?
3. Please leave a name or preferred form of address.

↓↓↓

**Synthesized Findings**

| Screen | Player feedback | Improvement |
| --- | --- | --- |
| Home | The meaning of Merge Account was unclear, and it felt less important than the other options. | Remove it from the Home screen and move it to Menu → Settings. |
| Play and matchmaking | The distinction between role-specific matchmaking and open matchmaking was small, and choosing a role required too many steps. | Add compact role-selection controls directly to this screen and remove the following screen. |
| Finding Game | Players wanted to see which role they had selected so they could change it. | Display the currently selected role here. |
| Hero Select | The skin-selection control was not prominent enough. | Reposition the Select Skin dropdown. |
| Hero Select | The teammate list in the upper-right did not include the player's own portrait, which made the player feel excluded from the team. | Add the player's portrait beside their teammates. |
| Hero Select | The number of heroes shown did not appear scalable. | Change the layout into a scrollable structure. |
| In-game | The objective-capture information at the top center was unclear. | Redesign the layout of this information. |

#### Wireframe Iteration Based on Testing
:::columns
ratio: 1:1
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_02.png
alt: Wireframe redesign 01
caption: Home — Remove Merge Account and move it to Menu → Settings
layout: wide
:::
:::
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_03.png
alt: Wireframe redesign 02
caption: Play screen
layout: wide
:::
:::
:::

:::columns
ratio: 1:1
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_04.png
alt: Wireframe redesign 03
caption: Matchmaking — Add compact role-selection controls directly to this screen and remove the following screen
layout: wide
:::
:::
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_05.png
alt: Wireframe redesign 04
caption: Finding Game — Display the currently selected role
layout: wide
:::
:::
:::

:::columns
ratio: 1:1
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_06.png
alt: Wireframe redesign 05
caption: Hero Select — Reposition the Select Skin dropdown, add the player's portrait beside teammates, and use a scrollable layout
layout: wide
:::
:::
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_07.png
alt: Wireframe redesign 06
caption: In-game HUD — Redesign objective capture information, replacing success and failure icons with differences in graphic scale
layout: wide
:::
:::
:::

#### UI Screens
I referenced the wasteland and American-comic themes in Junker Queen's promotional video, selected several wireframes, and developed them into UI screens.
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_01.png
alt: UI design 01
caption:
layout: wide
:::
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_02.png
alt: UI design 02
caption:
layout: wide
:::
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_03.png
alt: UI design 03
caption:
layout: wide
:::

#### Moodboard
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_moodboard_01.png
alt: UI moodboard
caption:
layout: wide
:::

#### Style Guide
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_styleguide_01.png
alt: UI style guide
caption:
layout: wide
:::

#### UI Component Design
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_componentDesign_01.png
alt: UI component design
caption:
layout: wide
:::

#### Usability Testing — Color-vision Testing
I used a color-vision testing tool to evaluate the completed interfaces and made small color adjustments based on the results.
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_usabilityTest_01.png
alt: Color-vision usability test
caption:
layout: wide
:::
