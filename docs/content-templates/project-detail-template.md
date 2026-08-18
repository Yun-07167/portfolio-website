---
slug: example-project
title: 项目名称
summary: 用一到两句话说明项目目标和主要成果。
cover: /assets/projects/example-project/cover.webp
cover_alt: 项目封面内容说明
home_thumbnail: /assets/projects/example-project/home-thumbnail.webp
year: 2026
tags:
  - interaction-design
  - case-study
published: false
order: 100
---

## 项目背景

说明项目、受众、平台、职责和限制。

![界面概览](/assets/projects/example-project/overview.webp)

## 问题与目标

- 问题一
- 问题二

## 设计过程

```mermaid
flowchart LR
  A[玩家目标] --> B[关键操作]
  B --> C{资源是否足够}
  C -->|是| D[确认结果]
  C -->|否| E[调整方案]
  E --> B
```

| 状态 | 系统反馈 | 玩家下一步 |
| --- | --- | --- |
| 默认 | 显示当前信息 | 选择目标 |
| 不可用 | 强调限制原因 | 调整选择 |
| 可确认 | 显示预期结果 | 确认操作 |

:::drawing
src: /assets/projects/example-project/task-flow.svg
dark_src: /assets/projects/example-project/task-flow.dark.svg
alt: 可视化编辑的玩家任务流程图
caption: 源文件为 task-flow.excalidraw.md，保存时自动导出 SVG。
layout: wide
:::

:::image
src: /assets/projects/example-project/process.webp
alt: 设计过程图
caption: 从信息架构到高保真原型
layout: wide
:::

## 最终方案

:::video
src: /assets/projects/example-project/demo.mp4
poster: /assets/projects/example-project/demo-poster.webp
captions: /assets/projects/example-project/demo-captions.vtt
caption: 最终交互演示
:::

## 结果与复盘

说明验证方式、结果和下一步。
