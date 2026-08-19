---
slug: example-note
title: 笔记标题
published_at: "2026-08-18"
tags:
  - interaction-design
published: false
---

用一段文字概括笔记内容。

## 小节标题

正文内容。

:::columns
ratio: 1:2
:::column
### 观察

左侧内容。
:::
:::column
### 分析

右侧内容；窄屏会自动切换为单列。
:::
:::

```mermaid
flowchart LR
  A[起点] --> B{关键判断}
  B -->|路径一| C[结果一]
  B -->|路径二| D[结果二]
```

| 观察项 | 现象 | 结论 |
| --- | --- | --- |
| 示例 | 示例内容 | 示例结论 |

:::drawing
src: /assets/notes/example-note/task-flow.svg
dark_src: /assets/notes/example-note/task-flow.dark.svg
alt: 可视化编辑的任务流程图
caption: 源文件为 task-flow.excalidraw.md，保存时自动导出 SVG。
layout: wide
:::

![图片说明](/assets/notes/example-note/image.webp)

:::video_embed
src: https://www.youtube.com/watch?v=VIDEO_ID
title: 笔记视频演示
caption: 可以在中英文文档中分别填写不同视频地址和说明。
layout: wide
:::
