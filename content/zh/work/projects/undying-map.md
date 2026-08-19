---
slug: undying-map
title: 《苏醒之路》地图界面重构设计案例
summary: 重构地图迁移流程与区域信息层级，帮助玩家更清晰地判断目的地、资源与行动成本。
cover: /assets/projects/undying-map/home-cover.png
cover_alt: 《苏醒之路》地图界面重构设计预览
home_thumbnail: /assets/projects/undying-map/home-cover.png
year: 2026
tags:
  - interaction-design
  - case-study
  - game-ui
published: true
order: 10
---
## 1. 背景与问题

游戏中期加入路径规划机制和策略性资源管理玩法后，地图迁移的用户体验流程扩展了。  
旧版界面无法支撑新增的路径规划功能。

:::image
src: /assets/projects/undying-map/detail/legacy-map.webp
alt: 旧版地图以固定画面呈现地点和详情
caption: 旧版设计稿截图
layout: wide
:::

:::drawing

## 02. 设计目标

1. 玩家可以逐格规划路线，并实时得知燃料、时间与载具耐久的变化。
2. 玩家在确认出发前，可以看到目的地资源、危险等级与载具状态。
3. 地图结构可以通过坐标数据持续增加地点，而不需要重做整张背景图。

> 设计重点从“展示一张地图”转向“支持一次有依据的旅行决策”。

## 03. 核心设计决策

### 3.1 把路径规划变成可见的操作与反馈

玩家使用方向键逐格延伸路线。路径线同时承担方向、可达状态与确认进度三种反馈：正在规划、无法前往、可以前往。资源消耗随每一步即时更新，避免把关键后果推迟到确认之后。

:::image
src: /assets/projects/undying-map/detail/route-planning.webp
alt: 新版格子地图中的路径规划与目的地详情
caption: 路线、消耗和目的地情报在同一操作上下文中同步变化。
layout: wide
:::

### 3.2 按决策顺序分层呈现信息

地图只保留判断当前位置与目标所需的信息；目的地面板负责名称、距离、危险与资源；载具面板负责耐久、燃料、时间、背包和储物空间。玩家可以先快速比较地点，再按需打开更深一层的信息。

:::image
src: /assets/projects/undying-map/detail/vehicle-information.webp
alt: 载具状态和储物格信息面板
caption: 载具状态被前置到出发决策中，减少到达后才发现资源不足的挫败。
layout: wide
:::

:::image
src: /assets/projects/undying-map/detail/destination-information.webp
alt: 目的地名称、距离、危险与资源详情面板
caption: 目的地信息从身份、风险到收益分层排列。
layout: standard
:::

### 3.3 用数据坐标替代固定地图图片

旧地图把地点画在一张固定尺寸的 PNG 上；新版把地点放入可延伸的格子坐标。新增地图或 DLC 时，只需增加地点数据与相邻关系，不再受单张图片尺寸限制。

:::image
src: /assets/projects/undying-map/detail/travel-flow.webp
alt: 地图旅行的完整交互流程图
caption: 新流程覆盖路线规划、随机地点、载具检查、异常状态与最终出发。
layout: wide
:::

## 04. 验证与反思

- 逐格规划和实时消耗形成了清晰的“操作—反馈”闭环，策划反馈新版更有参与感。
- 测试中发现左下角的消耗信息仍可能被忽略，后续应把关键变化进一步靠近当前地点或路径终点。
- 目的地面板覆盖了完整决策信息，但信息密度仍需通过玩家测试继续校准。
- 数据化格子结构解决了扩展性问题，也为随机地点与后续地图内容留下了空间。

这次重构让我确认：复杂系统界面的核心不是一次呈现所有信息，而是让信息在玩家需要做决定的那一刻出现。

*本项目美术素材均为原创；部分地点截图为游戏场景截图*