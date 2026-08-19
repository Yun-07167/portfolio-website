---
slug: visual-drawing-workflow
title: 用可视化绘图梳理玩家任务流程
published_at: "2026-08-18"
tags:
  - interaction-design
  - workflow
published: false
---

## 为什么先用可视化绘图

当流程还处于探索阶段时，直接写 Mermaid 往往会过早地固定结构。我会先在 Obsidian Excalidraw 中拖拽节点、移动分支和重连箭头，等信息关系稳定后，再决定保留手绘图还是整理成 Mermaid。

:::drawing
src: /assets/notes/interaction-flow-review/player-goal-flow.webp
alt: 从玩家目标出发，连接关键决策、系统反馈和异常恢复路径的可视化流程图
caption: 这个案例把玩家目标放在起点，通过拖拽节点快速比较正常路径与异常恢复路径。点击图片可以放大查看。
layout: wide
:::

## 实际的 Excalidraw → SVG 案例

下面这张图来自仓库中的 `player-task-flow.excalidraw.md`。Obsidian 保存绘图时覆盖同名的 `player-task-flow.excalidraw.svg`，网站构建时再把当前 SVG 自动同步到公开素材目录；不需要手动复制，也不会为每次编辑创建新的 SVG。

:::drawing
src: /assets/drawings/notes/visual-drawing-workflow/player-task-flow.excalidraw.svg
alt: 从 Obsidian Excalidraw 实际导出、保留手绘线条和内嵌字体的 SVG 示例
caption: 实际工作流案例：可编辑源文件与当前导出 SVG 一同进行版本控制，网站只展示同步后的 SVG。
layout: wide
:::

## 案例：地图导航流程

这张图用于讨论玩家打开地图后的完整任务，而不是只描述几个页面。工作时先放置“选择目的地”“查看路径”和“确认行动”三个核心节点，再补充资源不足、目标不可达等异常分支。节点位置与连线可以在 Excalidraw 中直接拖动，不需要修改代码。

| 编辑阶段 | 在 Excalidraw 中做什么 | 网站使用的结果 |
| --- | --- | --- |
| 发散 | 拖入节点、便签和连接线 | 不发布，保留源文件 |
| 整理 | 对齐节点、简化分支、补充说明 | 自动导出 SVG 或 PNG |
| 发布 | 检查亮暗模式和文字尺寸 | Markdown 引用导出文件 |

> `.excalidraw.md` 是可编辑源文件；网站展示的是自动导出的 SVG 或 PNG。两者应当一起保存在项目中。
