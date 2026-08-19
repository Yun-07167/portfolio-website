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
  - game-ui
  - indie-game
published: true
order: 10
---
## 1. 背景与问题

游戏中期加入路径规划机制和策略性资源管理玩法后，地图迁移的用户体验流程扩展了。  
旧版界面无法支撑新增的路径规划功能。

:::columns
ratio: 1:1

:::column
旧版本设计稿截图
:::image
src: /assets/projects/undying-map/details/legacy-map.webp
alt: 旧版地图以固定画面呈现地点和详情
caption: 
layout: wide
:::
:::
:::column
:::image
src: /assets/projects/undying-map/details/undying-map_userflow_sc_01.png
localized: true
alt: 旧版地图以固定画面呈现地点和详情
caption: 
layout: wide
:::
:::
:::

| 新系统需求                               | 旧界面                   | 缺口               |
| ----------------------------------- | --------------------- | ---------------- |
| 玩家手动规划路径并实时观察消耗变化                   | 无路径规划交互框架             | 信息不足（可用性问题）      |
| 玩家在出发前评估载具储物格是否足够                   | 无储物状态反馈               | 交互模式缺失（易用性问题）    |
| 地图上会有一些随机地点出现，每次打开地图都不一样，玩家可以选择是否前往 | 无随机事件处理逻辑             | 交互模式缺失（易用性问题）    |
| 未来新增可探索的地图数量不确定，可能会有DLC             | 地图有边界，所有地点都在一张大的png图上 | 地点数量无法扩展（可拓展性问题） |

## 02. 设计目标

**目标一：玩家可以得知当前路径的消耗**
玩家可以通过方向键逐格点选规划路线，实时观察消耗数值变化，并在途中自主决定是否探索隐藏地点。

**目标二：玩家可以得知做选择所需要的信息**
在玩家点击"确定前往"前，界面已提供完整的目的地情报（资源、危险等级等）与载具状态（剩余储物格、消耗耐久、燃料等）。

**目标三：地图可承载更多新增地点**

## 03. 核心设计决策

### 3.1 把路径规划变成可见的操作与反馈

玩家通过方向键逐格移动一条带箭头的路径线，在格子地图上实时探索。

:::image
src: /assets/projects/undying-map/details/undying-map_status_sc_01.png
localized: true
alt: 新版格子地图中的路径规划与目的地详情
caption: 
layout: wide
:::

:::image
src: /assets/projects/undying-map/details/route-planning.webp
alt: 新版格子地图中的路径规划与目的地详情
caption: 新版设计预览
layout: wide
:::

### 3.2 信息呈现
###### 新地图流程图
:::image
src: /assets/projects/undying-map/details/undying-map_userflow_sc_02.png
alt: 新版流程
caption: 新版流程
layout: wide
:::

:::columns
ratio: 1:1

:::column
###### 载具信息
规划到某地点时，消耗的信息（车辆耐久、汽油、时间）实时变化；且玩家可以选择打开载具储物格查看当前栏位。
:::image
src: /assets/projects/undying-map/details/undying-map_vehicle_01.png
alt: 载具状态和储物格信息面板
caption: 载具状态被前置到出发决策中，减少到达后才发现资源不足的挫败。
layout: wide
:::
:::

:::column
###### 目标地点信息
目标地点信息分层显示，从上到下依次为：  
地点名称和距离/方位、地点图片（分为已解锁地点和未解锁地点两种状态）、该地危险等级、该地资源、该地描述文字。
:::image
src: /assets/projects/undying-map/details/destination-information.webp
alt: 目的地名称、距离、危险与资源详情面板
caption: 目的地信息从身份、风险到收益分层排列。
layout: standard
:::
:::
:::
### 3.3 用数据坐标替代固定地图图片

旧地图把地点画在一张固定尺寸的 PNG 上；新版把地点放入可延伸的格子坐标。新增地图或 DLC 时，只需增加地点数据与相邻关系，不再受单张图片尺寸限制。

:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/undying-map/details/undying-map_oldversion_01.png
alt: 旧版设计稿截图
caption: 旧版设计稿截图
layout: wide
:::
:::

:::column
:::image
src: /assets/projects/undying-map/details/undying-map_newversion_01.png
alt: 新版设计稿截图
caption: 新版设计稿截图
layout: wide
:::
:::
:::
## 04. 验证与反思

**对于目标一：玩家可以得知当前路径的消耗**
- 方向键逐格点选 + 左下角实时消耗显示，实现了"操作 + 反馈"的闭环；
- 策划反馈：新版比以前系统更有参与感；
- 迭代：玩家测试表明，左下角实时消耗较为难以被注意到，后续增添了在地点图标四周以图标+数值的形式显示的消耗提示。

**对于目标二：玩家知道做选择所需要的信息**
- 信息分步呈现的策略在设计上覆盖了完整决策链路（查地点→看资源→确认储物→出发）；
- 载具储物格通过数值形式前置显示，玩家也可自行打开储物栏查看载具内具体的物品数量，一定程度上可以避免"出发后才发现储物格不够"的挫败场景；
- 右侧地点详情面板的信息密度是否过高，缺乏玩家反馈；

**对于目标三：地图可承载更多新增地点**
- 格子系统支持通过坐标数据动态添加地点，无需修改界面结构；
- 相比旧版固定PNG，扩展性问题已解决；

*本项目美术素材均为原创；部分地点截图为游戏场景截图*
