---
slug: petitplanet-casestudy-camfunction
title: 案例分析——《星布谷地》拍照功能
summary: 系统拆解与移动端布局复刻
cover: /assets/projects/petitPlanet-casestudy-cam/petitPlanet-casestudy-cam_cover.png
cover_alt: 案例分析——《星布谷地》拍照功能
home_thumbnail: /assets/projects/petitPlanet-casestudy-cam/petitPlanet-casestudy-cam_cover.png
year: 2026
tags:
  - interaction-design
  - case-study
published: true
order: 10
---
#### 《星布谷地》与拍照功能简介
《星布谷地》是一款3d视角生活模拟类游戏，预计在PC、移动等多端发行。目前还处于开发阶段。  
  
其中的拍照功能广受测试服玩家好评。一方面，该功能满足玩家的社交与展示需求，另一方面，由于解锁条件为好友亲密度，这一设置也同更鼓励玩家与其他玩家建立联结，促进用户留存。

###### 任务步骤

|     | 8.13                                        | 8.14                                                  | 8.16                                          |
| --- | ------------------------------------------- | ----------------------------------------------------- | --------------------------------------------- |
| 交互  | #1 功能分析：描述拍照功能，梳理核心体验流程                     |                                                       | #4 文档撰写与整理：文档包含流程、状态、边界预设、素材列表、UGUI原型说明几个核心部分 |
| 视觉  | #2 移动端UI复刻：根据PC端视频素材，调整成移动端布局，临摹并导出可落地UI素材； |                                                       |                                               |
| 拼接  |                                             | #3 Unity拼接：根据功能分析结果输出命名、文件结构规范并按规范导出素材，用素材在引擎中进行落地还原。 |                                               |

> **核心输出Check list：**
> **设计稿和交互文档**
> 学习和拆解合拍功能的核心体验，输出可支持落地的设计稿和文档；
> 
> **UGUI静态界面搭建**
> 在unity中进行移动端的界面复刻，学习并熟悉UGUI的用法，提出基础的移动端适配方案。

#### #1 功能分析
### 功能亮点与优化机会

:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_01.png
alt: 单人拍照截图
caption: 
layout: wide
:::
###### 功能亮点
- 界面布局类似手机相机，符合”雅各布定律”，基本功能简单易用，对于玩家来说几乎没有拍照这个动作的学习成本很低。
- 合拍照片拍完之后即刻就能分享，即时满足玩家的社交需求。
- 自拍杆功能增加玩法的趣味性和沉浸感。
:::
:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_02.png
alt: 双人拍照截图
caption: 
layout: wide
:::
###### 优化机会
- 真人玩家在合拍时，拍摄者和入镜者彼此对对方的状态信息的引导都有些不足。观察到玩家尝试点击进入“友邻”拍照姿势界面入口来催促真人玩家摆姿势拍照，但是得到“附近没有符合条件的友邻”的提示。
- 玩家在被拍摄时仅能通过头上的气泡或者其他正在摆出的拍照姿势判断是在拍摄（两种提示只会出现一种），此时拍摄者可能在等待入境者摆姿势，但是由于此处引导不足，入境者可能反应不过来。
:::
:::

### 核心体验梳理
拍照功能系统的核心目标分为两个方面，分别对应不同玩家的两个需求：记录和社交。主要场景有以下三种：

###### 基础拍照
玩家控制镜头（单机记录）
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_01_sc.png
alt: 基础拍照体验流程
caption: 
layout: wide
:::

###### 与‘友邻’（npc）合拍
玩家控制镜头和友邻（单机记录 - 编排式记录）
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_02_sc.png
alt: 友邻拍照体验流程
caption: 
layout: wide
:::

###### 与真人玩家合拍
拍摄者控制镜头，双方各控制自己（社交协作）
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_03_sc.png
alt: 真人合拍体验流程
caption: 
layout: wide
:::

*有时也会出现同时与真人玩家以及友邻合拍或多名真人玩家合拍的混合情况*
### 详细流程图
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-flowchart_01_sc.svg
alt: 详细流程图
caption: 
layout: wide
:::

### 真人合照的双角色流程
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-flowchart_02_sc.svg
alt: 真人合照双角色流程
caption: 
layout: wide
:::
**没有观察到系统建立了正式的合拍选项，几个参考视频中的合拍动作都是主要依靠玩家双方对彼此状态的观察完成。**
当入镜者从“选择表情”切换到“选择物品”时，原有的拍照气泡会消失，双方的状态认知可能由此中断。

#### 状态
根据参考视频的观察，此处仅记录“社交协作”体验有关的状态。

| 角色状态     | 自己看到的内容      | 其他人看到的内容      |
| -------- | ------------ | ------------- |
| 正常移动     | 游戏内常规界面（hud） | 常规角色表现        |
| 拍摄者打开相机  | 相机操作界面       | 拍摄者拿出相机/自拍杆动作 |
| 玩家选择表情   | 表情动作菜单+思考动作  | 头顶照相机气泡       |
| 玩家展示已选动作 | 当前表情动作       | 角色摆出动作        |
| 物品选择界面   | 未观察到拍照气泡     | 玩家选择物品展示      |
| 照片结果界面   | 查看照片         | 无法确认          |
| 分享照片     | 手机传输动作和气泡    | 手机传输动作和气泡     |
#### 社交状态反馈
:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_03.png
alt: 已覆盖状态截图
caption: 
layout: wide
:::
###### 已覆盖状态
拍摄者已经完成构图，但另一名玩家仍在浏览或选择动作，双方的准备进度不同。  
  
处理方案：  
当被拍摄玩家进入表情动作选择状态时，头顶会显示照相机气泡。拍摄者可以借此判断对方仍在准备，而不是已经退出互动。
:::
:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_04.png
alt: 状态断层截图
caption: 
layout: wide
:::
###### 状态断层
被拍摄的玩家希望在合照中拿出并展示某件物品，因此暂时离开表情选择，进入物品选择流程。  
但目前观察到的照相机气泡似乎只与表情动作系统绑定。玩家选择物品时，气泡不会显示。  
这导致会导致拍摄者无法分辨对方正在：寻找合照要展示的物品/ 暂停参与 / 结束合照 / 进行其他无关操作  
这会中断双方原本通过状态提示建立起来的默契，使拍摄者不确定应该继续等待还是直接拍照。  
目前没有观察到对应的解决方案。
:::
:::

#### #2 移动端UI复刻
### UI临摹与移动端适配
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_01.png
alt: ui临摹移动端
caption: *人物素材截自b站用户 伊伊星，背景素材非游戏画面，来自互联网*
layout: wide
:::

### 与PC端按钮布局对比与适配规则
:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_05.png
alt: ui临摹移动端
caption: pc端视频截图
layout: wide
:::
:::

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_02.png
alt: ui临摹移动端
caption: 临摹版移动端截图
layout: wide
:::
:::
:::
###### 移动端配饰规则
1. 调整相机模式按钮组，避开虚拟摇杆区域，降低移动过程中的误触。
2. UI沿屏幕边缘排列，保持中心角色与主要拍摄区域无遮挡。
3. 锚点分组： 顶部（header）、右（footer）、及中心信息（content）分别按照所属区域设置锚点。
4. 放大PC端小型按钮，统一同组按钮尺寸与操作间距。
5. 保持在不同屏幕比例下保持核心功能可见，并为安全区域预留空间。
#### #3 Unity拼接
### 组件导出
临摹的UI组件被分为了“通用”、“表情动作界面”以及“照相模式界面”。  
理想情况下，如果新增系统仅为照相模式组件，应该只导出“新增组件”即可。  
无纹理样式尽量导出白色进入引擎后再按色卡着色。

:::columns
ratio: 1:1

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_01.png
alt: 组件
caption: 
layout: wide
:::
:::

:::column
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_02.png
alt: 导入引擎
caption: 引擎内素材文件结构
layout: wide
:::
:::
:::
### 静态界面层级与移动机型适配
:::video
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-unitystructure_01.mp4
alt: canvas structure
caption: 引擎内素材文件结构
layout: wide
:::

#### #4 文档撰写与整理
### 特殊说明
:::columns
ratio: 1:1

:::column
1. 进入拍照模式时，默认使用以玩家角色为视觉中心的镜头模式。
2. 首次进入自拍模式时，默认显示自拍杆。 玩家修改自拍杆显示状态后，后续进入自拍模式时沿用上一次设置。
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_03.png
alt: ui截图默认相机
caption:
layout: wide
:::
:::
:::column
**组件复用假设**
本次原型没有接入实际业务逻辑。为模拟真实项目的协作方式，假定关闭按钮、开关按钮及动作菜单等元素来自项目现有通用组件库；拍照模式专属控件作为新增组件处理。
:::image
src: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_03_sc.png
alt: 复用组件
caption:
layout: wide
:::
:::
:::

### 局限性与待验证问题

###### 观察样本有限
游戏尚未正式上线，测试版本目前已经关闭。本次分析主要基于测试玩家发布在社交媒体上的实况视频，无法控制拍摄场景，也无法确认视频是否完整呈现了所有操作和系统反馈。

###### 部分机制来自行为推断
真人玩家之间是否存在隐藏的合照判定、状态同步或提示条件，无法仅凭视频确认。

###### 无法进行真实用户测试
由于无法进入测试版本，本次项目没有进行可用性测试、玩家访谈或对照实验。关于“拍摄者是否理解气泡”“入镜者是否意识到正在参与合照”等判断，仍需通过真实玩家验证。、状态同步或提示条件，无法仅凭视频确认。

###### 原型范围有限
受3天项目周期限制，本次Unity产出聚焦于：  

- UI素材整理；
- UGUI节点层级；
- Anchor设置；
- 横屏移动端布局还原。

当前为静态布局原型，尚未实现按钮反馈、页面跳转、相机控制、角色动作、照片生成以及多人状态同步。  
  
此外，尚未实现边框组件针对16：10、4：3机型的适配。

###### 移动端适配尚未经过真机验证
当前适配主要通过设计稿和Unity Game View验证。按钮实际触控尺寸、安全区域、不同设备比例、性能及操作手感仍需在真实移动设备上测试。

###### 待验证问题
**真人合照**：
- 玩家选择物品时，照相机气泡消失是否为固定规则？
- 系统是否有判定玩家正在参与拍照的功能？
- 被拍玩家可以了解到拍摄者是在构图、选择动作还是已经完成拍摄吗？
**移动端交互**
- 右侧功能按钮是否会与镜头操作或角色移动产生误触？
- 不同屏幕比例下，界面是否会遮挡角色和核心取景区域？
- PC端操作迁移至触控后，按钮尺寸和信息密度是否适合实际操作？

#### 任务总结
本项目主要以学习和熟悉UGUI为目的，在有限资料和时间内，梳理拍照系统的核心体验、识别真人合照中的状态沟通问题，并验证移动端UI在Unity中的基础落地方式。

#### 参考
*本次任务通过现有一测、二测玩家分享在社交媒体上的实况视频为观察对象*
参考视频如下：

B站用户 1787963 发布视频：邀请友邻拍照
https://www.bilibili.com/video/BV1TzCHBEESD?spm_id_from=333.788.player.player_end_recommend&vd_source=9417ea2103fef5aeef9ef95ef006db0c&trackid=web_related_0.router-related-2479604-9kkcc.1786869262846.202

B站用户 一小时游戏 发布视频：被拍状态
[https://www.bilibili.com/video/BV1ixoQB1End/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1ixoQB1End/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)

b站用户 伊伊星 发布视频：和真人玩家的拍照经历
[https://www.bilibili.com/video/BV1WPZcBQERb/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1WPZcBQERb/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)

b站用户 星布布布菇 发布视频：拍摄好友做动作
[https://www.bilibili.com/video/BV1p1LM6BEXd/?spm_id_from=333.1391.0.0&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1p1LM6BEXd/?spm_id_from=333.1391.0.0&vd_source=9417ea2103fef5aeef9ef95ef006db0c)

b站用户 折耳根Gen 等 发布共创视频：多人合拍情况
[https://www.bilibili.com/video/BV1YY9dB2EEE/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1YY9dB2EEE/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)

b站用户 阿咪_游戏版 发布视频：“小街角”照片分享功能演示
[https://www.bilibili.com/video/BV14soEBMEvt/?spm_id_from=333.1387.upload.video_card.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV14soEBMEvt/?spm_id_from=333.1387.upload.video_card.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)
