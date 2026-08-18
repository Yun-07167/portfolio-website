---
slug: interaction-flow-review
title: "Designing Interaction Flows Backwards from Player Goals"
published_at: "2026-08-18"
tags:
  - interaction-design
  - case-study
published: true
---

## Start with the outcome, not the screen

When mapping an interaction, I prefer to write down what the player ultimately wants to accomplish, then work backwards to the actions, information, and feedback the interface must provide. This keeps the flow from becoming a diagram of screens and exposes steps that exist without a player reason to use them.

:::image
src: /assets/notes/interaction-flow-review/player-goal-flow.webp
alt: Hand-drawn flow that works backwards from a player goal through decisions, feedback, and edge cases
caption: Define the player goal first, then break down key decisions, system feedback, and recovery paths.
layout: wide
:::

## Every flow should answer four questions

1. **What is the goal?** What does the player want when entering the feature, rather than what the product wants to show?
2. **What information supports the decision?** It should appear before the choice and remain spatially connected to the current action.
3. **How does the system respond?** Every valid input needs a perceptible state change, especially waiting, failure, and unavailable states.
4. **How does the player recover?** An exception path should offer a useful next action, not merely an error message.

> The happy path explains how a feature works; the exception path determines whether players trust it.

## Test the smallest complete loop

I compress the first draft into four nodes: intent, action, feedback, and next step. If any connection depends on explanatory copy to make sense, I revisit the information hierarchy or control state. Only after the smallest loop is clear do I add branches, permissions, resource shortages, and interruption recovery.

The final step is mapping the flow back to screens: each screen owns a clear job, each transition has a reason, and each state is recognizable. The diagram then becomes more than a deliverable—it becomes shared structure for prototypes, copy, and test cases.
