---
slug: destiny2-casestudy-hud
title: 案例分析——《命运2》hud的新手流程
summary: |-
  基于易用性与可延展性的
  HUD与角色界面优化
cover: /assets/projects/destiny2-casestudy-hud/destiny2-casestudy-hud_cover.png
cover_alt: 案例分析——《星布谷地》拍照功能
home_thumbnail: /assets/projects/destiny2-casestudy-hud/destiny2-casestudy-hud_cover.png
year: 2025
tags:
  - interaction-design
  - case-study
published: true
order: 15
---
#### 任务步骤
**#1 背景与情境说明**
对于新手玩家来说，命运2的一些常用交互组件不够直观。

**#2 定义优化目标**
通过重新设计部分UI组件来提升战斗和装备管理的易用性和可延展性

**#3 具体步骤**
用户体验流程图 → 多平台线框图→  
沟通文档 → 项目反思

#### 背景与情境说明
**关于命运2**
作为一款长线运营的GaaS游戏，随着版本的更迭，游戏系统日益臃肿。  
现有的HUD框架在设计之初并未预料到如此高的信息密度。因此，为了降低新玩家的“准入门槛”并减轻老玩家在复杂战斗中的“认知负荷”，优化界面信息的层级结构是维持游戏活力的关键。

**关于本项目**
痛点观察：在游玩中发现，高压战斗场景下，玩家难以在毫秒间从角落的 HUD 中准确读取关键技能冷却或血条状态。  
外部验证： 通过观察社区视频发现，玩家常需通过插件或第三方工具（如 DIM）来弥补原生地图/装备界面的交互滞后感。这证明了原生 UI 在效率上的提升空间。

#### 痛点分析
### HUD
大招、小技能、生命值和武器信息陈列

我将当前体验中的问题归纳为**易用性 (Usability)** 与 **可延展性 (Scalability)** 两个维度。本研究重点关注交互逻辑与架构，暂不讨论视觉美感或技术实现细节维度。

| 易用性问题                                       | 可延展性问题                               |
| ------------------------------------------- | ------------------------------------ |
| 血条（HP）与终极技能（大招）能量条在视觉特征上过于相似，高压战斗下玩家难以快速区分。 | 现有框架预留空间不足，若未来版本新增技能位，将导致界面拥挤或需推翻重构。 |
| 技能与武器切换的快捷键提示不直观，新手玩家或多平台玩家在操作反馈上存在认知滞后。    |                                      |

### 角色管理界面
装备与职业


| 易用性问题                                             | 可延展性问题                    |
| ------------------------------------------------- | ------------------------- |
| 切换职业（Class）的操作入口不够显眼，玩家难以快速定位。                    | 现有的网格布局难以直接容纳未来可能新增的装备槽位。 |
| 属性图标（Attributes）缺乏直观的文字解释或语义关联，增加了玩家制定装备策略时的理解成本。 |                           |

#### 参考

:::columns
ratio: 1:1
:::column
:::image
src: /assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_ref_01.png
alt: 参考-漫威争锋
caption: HUD - 漫威争锋 - 网易游戏
layout: wide
:::
- 按键映射提示： 在技能图标旁提供了非常清晰的快捷键提示，且通过高度对比的视觉状态区分“可用”与“冷却中”。
- 能量槽： 血条与大招条在 UI 构图上有明确的几何区分，有效降低了高频战斗中的认知负荷。
:::
:::column
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_ref_02.png
alt: 参考-堡垒之夜
caption: HUD - 堡垒之夜 - Epic Games
layout: wide
:::
- 移动端布局： 作为跨平台运营的标杆，《堡垒之夜》在手机端的 HUD 布局（如虚拟摇杆与技能按键的排布）具有极高的参考价值。
- 可延展性： 它的 UI 系统允许玩家一定程度的自定义，且能容纳多样的道具和特殊技能位。验证模组化预留空间策略的必要性，以应对 GaaS 游戏持续增加的新养成内容。
:::
:::

#### 优化目标与优先级

| 优先级 | 目标分类              | 具体设计目标                        |
| --- | ----------------- | ----------------------------- |
| 0   | hud - 易用性         | 强化左下角能量条的“终极技能”视觉属性；增加动态按键提示。 |
| 0   | 角色界面 - 易用性        | 强化属性文案说明，辅助玩家快速决策装备策略。        |
| 1   | hud + 角色界面 - 可延展性 | 确保 HUD 和装备栏能无缝适配新增技能或槽位。      |
| 2   | 角色界面 - 易用性        | 提供更直观的职业查看与一键切换入口。            |

### HUD
#### 功能体验流程图拆解
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_flowchart_01_sc.png
alt: 流程图-hud
caption: 现有体验的hud信息显示
layout: wide
:::

#### 设计调整说明
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_01_sc.png
alt: pc-redesign
caption: pc端线框图重新设计
layout: wide
:::
- 重新设计了终极技能能量条的形态，利用几何形状的变化区分血条与能量，提升视觉显著性。
- 引入了按键图标提示。当技能冷却完成时，按键高亮显示，显著降低玩家在战斗中的记忆负担。
- 为潜在的新技能留出了占位空间，保证了UI架构在长线更新中的稳定性。

移动端适配：针对触控操作定义了交互热区，确保跨平台逻辑的一致性。
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_02_sc.png
alt: mobile-redesign
caption: 移动端线框图
layout: wide
:::
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_03_sc.png
alt: tablet-redesign
caption: 平板线框图
layout: wide
:::

### 角色界面
#### 功能体验流程图拆解
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_02_sc.png
alt: pc-redesign
caption: pc端线框图重新设计-角色界面
layout: wide
:::

#### 修改内容
:::columns
ratio: 2:1
:::column
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-character_01_sc.png
alt: pc-redesign
caption: pc端线框图重新设计-角色界面
layout: wide
:::
:::
:::column
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_original-character_01_sc.png
alt: pc-redesign
caption: pc端线框图重新设计-角色界面
layout: wide
:::
:::
:::
- 调整了职业显示图标的布局逻辑，使职业切换操作更符合用户的视觉流向。
- 通过调整图标比例与整体版式，使装备栏具备向四周扩展的能力，以支持未来更多装备位的加入。
- 为每个属性图标增加了标题说明，将“图标识别”转化为“图文语义识别”，提升决策效率。

#### 追加分析
###### 与官方授权手游《命运：群星》的对比复盘

**对比反思**
《命运·群星》是由网易获得正版授权，基于《命运2》制作的射击RPG手游，于2025年上线10月上线国服，这是在我进行本次模拟练习之后，通过对比，我获得了以下关键启示并对原方案进行了反思：  
  

- 手游端的功能做了轻量化设计，减少了一个武器和一个小技能。在技能冷却层面，几乎采用了和我的练习中一致的方案。
- 布局严格遵循了移动端的交互热区，将虚拟按钮放在了更明显的位置，尺寸也更大。
- 跳跃和滑铲是同一个虚拟按钮，提升了空间利用率。
- 这提示我在未来的移动端设计中，应更深度地考虑原生的人体工学属性，而非仅停留在桌面端逻辑的比例缩放。
:::image
src:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_comparison_01_sc.png
alt: pc-redesign
caption: 
layout: wide
:::
