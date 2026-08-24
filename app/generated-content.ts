// Generated from content/**/*.md. Edit Markdown, not this file.
export const siteContent = {
  "zh": {
    "global": {
      "locale": "zh-CN",
      "navigation": {
        "works": "我的作品",
        "notes": "笔记",
        "contact": "联系我",
        "resume": "查看简历",
        "about": "关于我"
      },
      "controls": {
        "home_label": "首页",
        "switch_to_other_language": "切换至英文",
        "switch_theme": "切换明暗模式",
        "back_to_top": "返回顶部",
        "close_dialog": "关闭"
      },
      "contact_options": [
        {
          "id": "wechat",
          "label": "微信",
          "action": "dialog",
          "href": null,
          "icon": "/assets/icon-wechat.svg",
          "dialog_title": "微信联系",
          "dialog_body": "扫描二维码，添加我为微信好友。",
          "dialog_image": "/assets/wechat-qr.jpg"
        },
        {
          "id": "email",
          "label": "yangtianyun7@foxmail.com",
          "action": "link",
          "href": "mailto:yangtianyun7@foxmail.com",
          "icon": "/assets/icon-email.svg",
          "dialog_title": null,
          "dialog_body": null,
          "dialog_image": null
        }
      ],
      "footer": {
        "copyright": "© 杨天韵 2026"
      }
    },
    "home": {
      "locale": "zh-CN",
      "hero_title": "你好，我叫杨天韵",
      "short_description": "我是一名游戏交互设计师。拥有完整的独立游戏落地UI和交互设计经验，同时也拥有本地化游戏运营视角。具备出海手游UI设计经验，熟悉Figma和Unity UGUI.\n"
    },
    "work": {
      "locale": "zh-CN",
      "title": "项目列表",
      "translation_missing": "这个项目暂时没有中文版，已返回中文项目列表。",
      "filters": {
        "year": "年份",
        "tag": "标签",
        "all": "全部",
        "clear": "清除筛选",
        "empty": "没有符合当前条件的项目。"
      },
      "tag_labels": {
        "interaction-design": "交互设计",
        "case-study": "案例分析",
        "game-ui": "游戏 UI",
        "game-art": "游戏美术",
        "indie-game": "独立游戏",
        "gamejam": "Game Jam",
        "game-design": "游戏设计",
        "unity": "Unity"
      },
      "projects": [
        {
          "slug": "petitplanet-casestudy-camfunction",
          "title": "案例分析——《星布谷地》拍照功能",
          "summary": "系统拆解与移动端布局复刻",
          "cover": "/assets/projects/petitPlanet-casestudy-cam/petitPlanet-casestudy-cam_cover.png",
          "cover_alt": "案例分析——《星布谷地》拍照功能",
          "home_thumbnail": "/assets/projects/petitPlanet-casestudy-cam/petitPlanet-casestudy-cam_cover.png",
          "year": 2026,
          "tags": [
            "interaction-design",
            "case-study"
          ],
          "published": true,
          "order": 10,
          "body": "《星布谷地》是一款3d视角生活模拟类游戏，预计在PC、移动等多端发行。目前还处于开发阶段。  \n  \n其中的拍照功能广受测试服玩家好评。一方面，该功能满足玩家的社交与展示需求，另一方面，由于解锁条件为好友亲密度，这一设置也同更鼓励玩家与其他玩家建立联结，促进用户留存。\n\n###### 任务步骤\n\n|     | 8.13                                        | 8.14                                                  | 8.16                                          |\n| --- | ------------------------------------------- | ----------------------------------------------------- | --------------------------------------------- |\n| 交互  | #1 功能分析：描述拍照功能，梳理核心体验流程                     |                                                       | #4 文档撰写与整理：文档包含流程、状态、边界预设、素材列表、UGUI原型说明几个核心部分 |\n| 视觉  | #2 移动端UI复刻：根据PC端视频素材，调整成移动端布局，临摹并导出可落地UI素材； |                                                       |                                               |\n| 拼接  |                                             | #3 Unity拼接：根据功能分析结果输出命名、文件结构规范并按规范导出素材，用素材在引擎中进行落地还原。 |                                               |\n\n> **核心输出Check list：**\n> **设计稿和交互文档**\n> 学习和拆解合拍功能的核心体验，输出可支持落地的设计稿和文档；\n> \n> **UGUI静态界面搭建**\n> 在unity中进行移动端的界面复刻，学习并熟悉UGUI的用法，提出基础的移动端适配方案。\n\n#### #1 功能分析\n### 功能亮点与优化机会\n\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_01.png\nalt: 单人拍照截图\ncaption: \nlayout: wide\n:::\n###### 功能亮点\n- 界面布局类似手机相机，符合”雅各布定律”，基本功能简单易用，对于玩家来说几乎没有拍照这个动作的学习成本很低。\n- 合拍照片拍完之后即刻就能分享，即时满足玩家的社交需求。\n- 自拍杆功能增加玩法的趣味性和沉浸感。\n:::\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_02.png\nalt: 双人拍照截图\ncaption: \nlayout: wide\n:::\n###### 优化机会\n- 真人玩家在合拍时，拍摄者和入镜者彼此对对方的状态信息的引导都有些不足。观察到玩家尝试点击进入“友邻”拍照姿势界面入口来催促真人玩家摆姿势拍照，但是得到“附近没有符合条件的友邻”的提示。\n- 玩家在被拍摄时仅能通过头上的气泡或者其他正在摆出的拍照姿势判断是在拍摄（两种提示只会出现一种），此时拍摄者可能在等待入境者摆姿势，但是由于此处引导不足，入境者可能反应不过来。\n:::\n:::\n\n### 核心体验梳理\n拍照功能系统的核心目标分为两个方面，分别对应不同玩家的两个需求：记录和社交。主要场景有以下三种：\n\n###### 基础拍照\n玩家控制镜头（单机记录）\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_01_sc.png\nalt: 基础拍照体验流程\ncaption: \nlayout: wide\n:::\n\n###### 与‘友邻’（npc）合拍\n玩家控制镜头和友邻（单机记录 - 编排式记录）\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_02_sc.png\nalt: 友邻拍照体验流程\ncaption: \nlayout: wide\n:::\n\n###### 与真人玩家合拍\n拍摄者控制镜头，双方各控制自己（社交协作）\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_03_sc.png\nalt: 真人合拍体验流程\ncaption: \nlayout: wide\n:::\n\n*有时也会出现同时与真人玩家以及友邻合拍或多名真人玩家合拍的混合情况*\n### 详细流程图\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-flowchart_01_sc.svg\nalt: 详细流程图\ncaption: \nlayout: wide\n:::\n\n### 真人合照的双角色流程\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-flowchart_02_sc.svg\nalt: 真人合照双角色流程\ncaption: \nlayout: wide\n:::\n**没有观察到系统建立了正式的合拍选项，几个参考视频中的合拍动作都是主要依靠玩家双方对彼此状态的观察完成。**\n当入镜者从“选择表情”切换到“选择物品”时，原有的拍照气泡会消失，双方的状态认知可能由此中断。\n\n#### 状态\n根据参考视频的观察，此处仅记录“社交协作”体验有关的状态。\n\n| 角色状态     | 自己看到的内容      | 其他人看到的内容      |\n| -------- | ------------ | ------------- |\n| 正常移动     | 游戏内常规界面（hud） | 常规角色表现        |\n| 拍摄者打开相机  | 相机操作界面       | 拍摄者拿出相机/自拍杆动作 |\n| 玩家选择表情   | 表情动作菜单+思考动作  | 头顶照相机气泡       |\n| 玩家展示已选动作 | 当前表情动作       | 角色摆出动作        |\n| 物品选择界面   | 未观察到拍照气泡     | 玩家选择物品展示      |\n| 照片结果界面   | 查看照片         | 无法确认          |\n| 分享照片     | 手机传输动作和气泡    | 手机传输动作和气泡     |\n#### 社交状态反馈\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_03.png\nalt: 已覆盖状态截图\ncaption: \nlayout: wide\n:::\n###### 已覆盖状态\n拍摄者已经完成构图，但另一名玩家仍在浏览或选择动作，双方的准备进度不同。  \n  \n处理方案：  \n当被拍摄玩家进入表情动作选择状态时，头顶会显示照相机气泡。拍摄者可以借此判断对方仍在准备，而不是已经退出互动。\n:::\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_04.png\nalt: 状态断层截图\ncaption: \nlayout: wide\n:::\n###### 状态断层\n被拍摄的玩家希望在合照中拿出并展示某件物品，因此暂时离开表情选择，进入物品选择流程。  \n但目前观察到的照相机气泡似乎只与表情动作系统绑定。玩家选择物品时，气泡不会显示。  \n这导致会导致拍摄者无法分辨对方正在：寻找合照要展示的物品/ 暂停参与 / 结束合照 / 进行其他无关操作  \n这会中断双方原本通过状态提示建立起来的默契，使拍摄者不确定应该继续等待还是直接拍照。  \n目前没有观察到对应的解决方案。\n:::\n:::\n\n#### #2 移动端UI复刻\n### UI临摹与移动端适配\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_01.webp\nalt: ui临摹移动端\ncaption: *人物素材截自b站用户 伊伊星，背景素材非游戏画面，来自互联网*\nlayout: wide\n:::\n\n### 与PC端按钮布局对比与适配规则\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_05.webp\nalt: ui临摹移动端\ncaption: pc端视频截图\nlayout: wide\n:::\n:::\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_02.png\nalt: ui临摹移动端\ncaption: 临摹版移动端截图\nlayout: wide\n:::\n:::\n:::\n###### 移动端配饰规则\n1. 调整相机模式按钮组，避开虚拟摇杆区域，降低移动过程中的误触。\n2. UI沿屏幕边缘排列，保持中心角色与主要拍摄区域无遮挡。\n3. 锚点分组： 顶部（header）、右（footer）、及中心信息（content）分别按照所属区域设置锚点。\n4. 放大PC端小型按钮，统一同组按钮尺寸与操作间距。\n5. 保持在不同屏幕比例下保持核心功能可见，并为安全区域预留空间。\n#### #3 Unity拼接\n### 组件导出\n临摹的UI组件被分为了“通用”、“表情动作界面”以及“照相模式界面”。  \n理想情况下，如果新增系统仅为照相模式组件，应该只导出“新增组件”即可。  \n无纹理样式尽量导出白色进入引擎后再按色卡着色。\n\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_01.png\nalt: 组件\ncaption: \nlayout: wide\n:::\n:::\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_02.png\nalt: 导入引擎\ncaption: 引擎内素材文件结构\nlayout: wide\n:::\n:::\n:::\n### 静态界面层级与移动机型适配\n:::video\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-unitystructure_01.mp4\nalt: canvas structure\ncaption: 引擎内素材文件结构\nlayout: wide\n:::\n\n#### #4 文档撰写与整理\n### 特殊说明\n:::columns\nratio: 1:1\n\n:::column\n1. 进入拍照模式时，默认使用以玩家角色为视觉中心的镜头模式。\n2. 首次进入自拍模式时，默认显示自拍杆。 玩家修改自拍杆显示状态后，后续进入自拍模式时沿用上一次设置。\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_03.png\nalt: ui截图默认相机\ncaption:\nlayout: wide\n:::\n:::\n:::column\n**组件复用假设**\n本次原型没有接入实际业务逻辑。为模拟真实项目的协作方式，假定关闭按钮、开关按钮及动作菜单等元素来自项目现有通用组件库；拍照模式专属控件作为新增组件处理。\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_03_sc.png\nalt: 复用组件\ncaption:\nlayout: wide\n:::\n:::\n:::\n\n### 局限性与待验证问题\n\n###### 观察样本有限\n游戏尚未正式上线，测试版本目前已经关闭。本次分析主要基于测试玩家发布在社交媒体上的实况视频，无法控制拍摄场景，也无法确认视频是否完整呈现了所有操作和系统反馈。\n\n###### 部分机制来自行为推断\n真人玩家之间是否存在隐藏的合照判定、状态同步或提示条件，无法仅凭视频确认。\n\n###### 无法进行真实用户测试\n由于无法进入测试版本，本次项目没有进行可用性测试、玩家访谈或对照实验。关于“拍摄者是否理解气泡”“入镜者是否意识到正在参与合照”等判断，仍需通过真实玩家验证。、状态同步或提示条件，无法仅凭视频确认。\n\n###### 原型范围有限\n受3天项目周期限制，本次Unity产出聚焦于：  \n\n- UI素材整理；\n- UGUI节点层级；\n- Anchor设置；\n- 横屏移动端布局还原。\n\n当前为静态布局原型，尚未实现按钮反馈、页面跳转、相机控制、角色动作、照片生成以及多人状态同步。  \n  \n此外，尚未实现边框组件针对16：10、4：3机型的适配。\n\n###### 移动端适配尚未经过真机验证\n当前适配主要通过设计稿和Unity Game View验证。按钮实际触控尺寸、安全区域、不同设备比例、性能及操作手感仍需在真实移动设备上测试。\n\n###### 待验证问题\n**真人合照**：\n- 玩家选择物品时，照相机气泡消失是否为固定规则？\n- 系统是否有判定玩家正在参与拍照的功能？\n- 被拍玩家可以了解到拍摄者是在构图、选择动作还是已经完成拍摄吗？\n**移动端交互**\n- 右侧功能按钮是否会与镜头操作或角色移动产生误触？\n- 不同屏幕比例下，界面是否会遮挡角色和核心取景区域？\n- PC端操作迁移至触控后，按钮尺寸和信息密度是否适合实际操作？\n\n#### 任务总结\n本项目主要以学习和熟悉UGUI为目的，在有限资料和时间内，梳理拍照系统的核心体验、识别真人合照中的状态沟通问题，并验证移动端UI在Unity中的基础落地方式。\n\n#### 参考\n*本次任务通过现有一测、二测玩家分享在社交媒体上的实况视频为观察对象*\n参考视频如下：\n\nB站用户 1787963 发布视频：邀请友邻拍照\nhttps://www.bilibili.com/video/BV1TzCHBEESD?spm_id_from=333.788.player.player_end_recommend&vd_source=9417ea2103fef5aeef9ef95ef006db0c&trackid=web_related_0.router-related-2479604-9kkcc.1786869262846.202\n\nB站用户 一小时游戏 发布视频：被拍状态\n[https://www.bilibili.com/video/BV1ixoQB1End/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1ixoQB1End/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)\n\nb站用户 伊伊星 发布视频：和真人玩家的拍照经历\n[https://www.bilibili.com/video/BV1WPZcBQERb/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1WPZcBQERb/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)\n\nb站用户 星布布布菇 发布视频：拍摄好友做动作\n[https://www.bilibili.com/video/BV1p1LM6BEXd/?spm_id_from=333.1391.0.0&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1p1LM6BEXd/?spm_id_from=333.1391.0.0&vd_source=9417ea2103fef5aeef9ef95ef006db0c)\n\nb站用户 折耳根Gen 等 发布共创视频：多人合拍情况\n[https://www.bilibili.com/video/BV1YY9dB2EEE/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1YY9dB2EEE/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)\n\nb站用户 阿咪_游戏版 发布视频：“小街角”照片分享功能演示\n[https://www.bilibili.com/video/BV14soEBMEvt/?spm_id_from=333.1387.upload.video_card.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV14soEBMEvt/?spm_id_from=333.1387.upload.video_card.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)"
        },
        {
          "slug": "destiny2-casestudy-hud",
          "title": "案例分析——《命运2》hud的新手流程",
          "summary": "基于易用性与可延展性的\nHUD与角色界面优化",
          "cover": "/assets/projects/destiny2-casestudy-hud/destiny2-casestudy-hud_cover.png",
          "cover_alt": "案例分析——《星布谷地》拍照功能",
          "home_thumbnail": "/assets/projects/destiny2-casestudy-hud/destiny2-casestudy-hud_cover.png",
          "year": 2025,
          "tags": [
            "interaction-design",
            "case-study"
          ],
          "published": true,
          "order": 15,
          "body": "#### 任务步骤\n**#1 背景与情境说明**\n对于新手玩家来说，命运2的一些常用交互组件不够直观。\n\n**#2 定义优化目标**\n通过重新设计部分UI组件来提升战斗和装备管理的易用性和可延展性\n\n**#3 具体步骤**\n用户体验流程图 → 多平台线框图→  \n沟通文档 → 项目反思\n\n#### 背景与情境说明\n**关于命运2**\n作为一款长线运营的GaaS游戏，随着版本的更迭，游戏系统日益臃肿。  \n现有的HUD框架在设计之初并未预料到如此高的信息密度。因此，为了降低新玩家的“准入门槛”并减轻老玩家在复杂战斗中的“认知负荷”，优化界面信息的层级结构是维持游戏活力的关键。\n\n**关于本项目**\n痛点观察：在游玩中发现，高压战斗场景下，玩家难以在毫秒间从角落的 HUD 中准确读取关键技能冷却或血条状态。  \n外部验证： 通过观察社区视频发现，玩家常需通过插件或第三方工具（如 DIM）来弥补原生地图/装备界面的交互滞后感。这证明了原生 UI 在效率上的提升空间。\n\n#### 痛点分析\n### HUD\n大招、小技能、生命值和武器信息陈列\n\n我将当前体验中的问题归纳为**易用性 (Usability)** 与 **可延展性 (Scalability)** 两个维度。本研究重点关注交互逻辑与架构，暂不讨论视觉美感或技术实现细节维度。\n\n| 易用性问题                                       | 可延展性问题                               |\n| ------------------------------------------- | ------------------------------------ |\n| 血条（HP）与终极技能（大招）能量条在视觉特征上过于相似，高压战斗下玩家难以快速区分。 | 现有框架预留空间不足，若未来版本新增技能位，将导致界面拥挤或需推翻重构。 |\n| 技能与武器切换的快捷键提示不直观，新手玩家或多平台玩家在操作反馈上存在认知滞后。    |                                      |\n\n### 角色管理界面\n装备与职业\n\n\n| 易用性问题                                             | 可延展性问题                    |\n| ------------------------------------------------- | ------------------------- |\n| 切换职业（Class）的操作入口不够显眼，玩家难以快速定位。                    | 现有的网格布局难以直接容纳未来可能新增的装备槽位。 |\n| 属性图标（Attributes）缺乏直观的文字解释或语义关联，增加了玩家制定装备策略时的理解成本。 |                           |\n\n#### 参考\n\n:::columns\nratio: 1:1\n:::column\n:::image\nsrc: /assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_ref_01.png\nalt: 参考-漫威争锋\ncaption: HUD - 漫威争锋 - 网易游戏\nlayout: wide\n:::\n- 按键映射提示： 在技能图标旁提供了非常清晰的快捷键提示，且通过高度对比的视觉状态区分“可用”与“冷却中”。\n- 能量槽： 血条与大招条在 UI 构图上有明确的几何区分，有效降低了高频战斗中的认知负荷。\n:::\n:::column\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_ref_02.png\nalt: 参考-堡垒之夜\ncaption: HUD - 堡垒之夜 - Epic Games\nlayout: wide\n:::\n- 移动端布局： 作为跨平台运营的标杆，《堡垒之夜》在手机端的 HUD 布局（如虚拟摇杆与技能按键的排布）具有极高的参考价值。\n- 可延展性： 它的 UI 系统允许玩家一定程度的自定义，且能容纳多样的道具和特殊技能位。验证模组化预留空间策略的必要性，以应对 GaaS 游戏持续增加的新养成内容。\n:::\n:::\n\n#### 优化目标与优先级\n\n| 优先级 | 目标分类              | 具体设计目标                        |\n| --- | ----------------- | ----------------------------- |\n| 0   | hud - 易用性         | 强化左下角能量条的“终极技能”视觉属性；增加动态按键提示。 |\n| 0   | 角色界面 - 易用性        | 强化属性文案说明，辅助玩家快速决策装备策略。        |\n| 1   | hud + 角色界面 - 可延展性 | 确保 HUD 和装备栏能无缝适配新增技能或槽位。      |\n| 2   | 角色界面 - 易用性        | 提供更直观的职业查看与一键切换入口。            |\n\n### HUD\n#### 功能体验流程图拆解\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_flowchart_01_sc.png\nalt: 流程图-hud\ncaption: 现有体验的hud信息显示\nlayout: wide\n:::\n\n#### 设计调整说明\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_01_sc.png\nalt: pc-redesign\ncaption: pc端线框图重新设计\nlayout: wide\n:::\n- 重新设计了终极技能能量条的形态，利用几何形状的变化区分血条与能量，提升视觉显著性。\n- 引入了按键图标提示。当技能冷却完成时，按键高亮显示，显著降低玩家在战斗中的记忆负担。\n- 为潜在的新技能留出了占位空间，保证了UI架构在长线更新中的稳定性。\n\n移动端适配：针对触控操作定义了交互热区，确保跨平台逻辑的一致性。\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_02_sc.png\nalt: mobile-redesign\ncaption: 移动端线框图\nlayout: wide\n:::\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_03_sc.png\nalt: tablet-redesign\ncaption: 平板线框图\nlayout: wide\n:::\n\n### 角色界面\n#### 功能体验流程图拆解\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_02_sc.png\nalt: pc-redesign\ncaption: pc端线框图重新设计-角色界面\nlayout: wide\n:::\n\n#### 修改内容\n:::columns\nratio: 2:1\n:::column\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-character_01_sc.png\nalt: pc-redesign\ncaption: pc端线框图重新设计-角色界面\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_original-character_01_sc.png\nalt: pc-redesign\ncaption: pc端线框图重新设计-角色界面\nlayout: wide\n:::\n:::\n:::\n- 调整了职业显示图标的布局逻辑，使职业切换操作更符合用户的视觉流向。\n- 通过调整图标比例与整体版式，使装备栏具备向四周扩展的能力，以支持未来更多装备位的加入。\n- 为每个属性图标增加了标题说明，将“图标识别”转化为“图文语义识别”，提升决策效率。\n\n#### 追加分析\n###### 与官方授权手游《命运：群星》的对比复盘\n\n**对比反思**\n《命运·群星》是由网易获得正版授权，基于《命运2》制作的射击RPG手游，于2025年上线10月上线国服，这是在我进行本次模拟练习之后，通过对比，我获得了以下关键启示并对原方案进行了反思：  \n  \n\n- 手游端的功能做了轻量化设计，减少了一个武器和一个小技能。在技能冷却层面，几乎采用了和我的练习中一致的方案。\n- 布局严格遵循了移动端的交互热区，将虚拟按钮放在了更明显的位置，尺寸也更大。\n- 跳跃和滑铲是同一个虚拟按钮，提升了空间利用率。\n- 这提示我在未来的移动端设计中，应更深度地考虑原生的人体工学属性，而非仅停留在桌面端逻辑的比例缩放。\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_comparison_01_sc.png\nalt: pc-redesign\ncaption: \nlayout: wide\n:::"
        },
        {
          "slug": "undying-map",
          "title": "《苏醒之路》地图界面重构设计案例",
          "summary": "重构地图迁移流程与区域信息层级，帮助玩家更清晰地判断目的地、资源与行动成本。",
          "cover": "/assets/projects/undying-map/home-cover.png",
          "cover_alt": "《苏醒之路》地图界面重构设计预览",
          "home_thumbnail": "/assets/projects/undying-map/home-cover.png",
          "year": 2022,
          "tags": [
            "interaction-design",
            "game-ui",
            "indie-game"
          ],
          "published": true,
          "order": 15,
          "body": "游戏中期加入路径规划机制和策略性资源管理玩法后，地图迁移的用户体验流程扩展了。  \n旧版界面无法支撑新增的路径规划功能。\n\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/undying-map/details/legacy-map.webp\nalt: 旧版地图以固定画面呈现地点和详情\ncaption: 旧版本设计稿截图\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_userflow_sc_01.png\nlocalized: true\nalt: 旧版地图以固定画面呈现地点和详情\ncaption: 新旧流程对比\nlayout: wide\n:::\n:::\n:::\n\n| 新系统需求                               | 旧界面                   | 缺口               |\n| ----------------------------------- | --------------------- | ---------------- |\n| 玩家手动规划路径并实时观察消耗变化                   | 无路径规划交互框架             | 信息不足（可用性问题）      |\n| 玩家在出发前评估载具储物格是否足够                   | 无储物状态反馈               | 交互模式缺失（易用性问题）    |\n| 地图上会有一些随机地点出现，每次打开地图都不一样，玩家可以选择是否前往 | 无随机事件处理逻辑             | 交互模式缺失（易用性问题）    |\n| 未来新增可探索的地图数量不确定，可能会有DLC             | 地图有边界，所有地点都在一张大的png图上 | 地点数量无法扩展（可拓展性问题） |\n\n## 02. 设计目标\n\n**目标一：玩家可以得知当前路径的消耗**\n玩家可以通过方向键逐格点选规划路线，实时观察消耗数值变化，并在途中自主决定是否探索隐藏地点。\n\n**目标二：玩家可以得知做选择所需要的信息**\n在玩家点击\"确定前往\"前，界面已提供完整的目的地情报（资源、危险等级等）与载具状态（剩余储物格、消耗耐久、燃料等）。\n\n**目标三：地图可承载更多新增地点**\n\n## 03. 核心设计决策\n\n### 3.1 把路径规划变成可见的操作与反馈\n\n玩家通过方向键逐格移动一条带箭头的路径线，在格子地图上实时探索。\n\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_status_sc_01.png\nlocalized: true\nalt: 新版格子地图中的路径规划与目的地详情\ncaption: \nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-map/details/route-planning.webp\nalt: 新版格子地图中的路径规划与目的地详情\ncaption: 新版设计预览\nlayout: wide\n:::\n\n### 3.2 信息呈现\n###### 新地图流程图\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_userflow_sc_02.png\nalt: 新版流程\ncaption: 新版流程\nlayout: wide\n:::\n\n:::columns\nratio: 1:1\n\n:::column\n###### 载具信息\n规划到某地点时，消耗的信息（车辆耐久、汽油、时间）实时变化；且玩家可以选择打开载具储物格查看当前栏位。\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_vehicle_01.png\nalt: 载具状态和储物格信息面板\ncaption: 载具状态被前置到出发决策中，减少到达后才发现资源不足的挫败。\nlayout: wide\n:::\n:::\n\n:::column\n###### 目标地点信息\n目标地点信息分层显示，从上到下依次为：  \n地点名称和距离/方位、地点图片（分为已解锁地点和未解锁地点两种状态）、该地危险等级、该地资源、该地描述文字。\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_destinationInfo_01.png\nalt: 目的地名称、距离、危险与资源详情面板\ncaption: 目的地信息从身份、风险到收益分层排列。\nlayout: standard\n:::\n:::\n:::\n### 3.3 用数据坐标替代固定地图图片\n\n旧地图把地点画在一张固定尺寸的 PNG 上；新版把地点放入可延伸的格子坐标。新增地图或 DLC 时，只需增加地点数据与相邻关系，不再受单张图片尺寸限制。\n\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_oldversion_01.png\nalt: 旧版设计稿截图\ncaption: 旧版设计稿截图\nlayout: wide\n:::\n:::\n\n:::column\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_newversion_01.png\nalt: 新版设计稿截图\ncaption: 新版设计稿截图\nlayout: wide\n:::\n:::\n:::\n## 04. 验证与反思\n\n**对于目标一：玩家可以得知当前路径的消耗**\n- 方向键逐格点选 + 左下角实时消耗显示，实现了\"操作 + 反馈\"的闭环；\n- 策划反馈：新版比以前系统更有参与感；\n- 迭代：玩家测试表明，左下角实时消耗较为难以被注意到，后续增添了在地点图标四周以图标+数值的形式显示的消耗提示。\n\n**对于目标二：玩家知道做选择所需要的信息**\n- 信息分步呈现的策略在设计上覆盖了完整决策链路（查地点→看资源→确认储物→出发）；\n- 载具储物格通过数值形式前置显示，玩家也可自行打开储物栏查看载具内具体的物品数量，一定程度上可以避免\"出发后才发现储物格不够\"的挫败场景；\n- 右侧地点详情面板的信息密度是否过高，缺乏玩家反馈；\n\n**对于目标三：地图可承载更多新增地点**\n- 格子系统支持通过坐标数据动态添加地点，无需修改界面结构；\n- 相比旧版固定PNG，扩展性问题已解决；\n\n*本项目美术素材均为原创；部分地点截图为游戏场景截图*"
        },
        {
          "slug": "EmptyEye-indiegame-gamejam",
          "title": "《空眼眶》——gamejam游戏",
          "summary": "获机核网BOOOOMjam2025年优秀游戏提名",
          "cover": "/assets/projects/emptyeye-gamejam/emptyeye-cover.webp",
          "cover_alt": "《空眼眶》——gamejam游戏",
          "home_thumbnail": "/assets/projects/emptyeye-gamejam/emptyeye-cover.webp",
          "year": 2025,
          "tags": [
            "interaction-design",
            "gamejam",
            "game-design",
            "game-art",
            "unity"
          ],
          "published": true,
          "order": 16,
          "body": "#### 游戏简介\n《空眼眶》是一款横版2D点击式文字冒险游戏，融合微解谜与诗意的叙事。玩家将扮演一位曾经无忧无虑的王子的灵魂，被困在雕像中。随着远方的燕子来访，在一次次给予与剥落中，王子将逐步理解这个世间，理解苦难与温柔的意义，并最终拥有一颗“心”。游戏预计总时长0.5-1小时，通过点击探索场景、收集物品并触发事件而推进剧情，讲述一段关于人间、失去与爱的童话。\n\n这是一个gamejam组队项目，活动由机核网在2025年举办，《空眼眶》获得了优秀游戏提名。\n我在这个项目中负责游戏交互与界面设计、场景美术设计与Unity落地、与一些执行策划的工作。团队成员中还有：一名叙事策划、两名程序员、一名npc形象设计美术、一名音乐与音效设计师；活动主题“奉献”，**我们的设计目标是通过游戏叙事与玩法交互体现为玩家营造”奉献“的感受**。\n\n#### 游戏下载链接：\nhttps://pan.baidu.com/s/1jyaugjP665IYVr7hG5UO9A?pwd=avu3\n\n#### 游玩过程演示：\n:::video_embed\nsrc: https://www.bilibili.com/video/BV1Yr8T6pEMG/?share_source=copy_web&vd_source=d7a11c85f2283687ef971437c6fafc75\ntitle: 全流程游玩演示\ncaption: 全流程游玩演示\nlayout: wide\n:::\n\n<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=117132180325559&bvid=BV1Yr8T6pEMG&cid=41094286425&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>"
        },
        {
          "slug": "overwatch2-casestudy-findGame",
          "title": "案例分析——《守望先锋2》匹配流程",
          "summary": "分析匹配流程并进行风格化UI重构",
          "cover": "/assets/projects/overwatch2-casestudy-uiremaster/overwatch2-casestudy-uiremaster_cover.png",
          "cover_alt": "案例分析——《守望先锋2》匹配流程",
          "home_thumbnail": "/assets/projects/overwatch2-casestudy-uiremaster/overwatch2-casestudy-uiremaster_cover.png",
          "year": 2024,
          "tags": [
            "interaction-design",
            "case-study"
          ],
          "published": true,
          "order": 25,
          "body": "#### 步骤\n1. 玩家体验旅程\n2. 纸面原型\n3. 流程图\n4. 线框图原型\n5. 可用性测试\n6. UI情绪板\n7. UI风格\n8. UI界面充值\n9. 可访问性测试（色盲测试）\n\n#### 玩家体验地图\n通过观看一个小时的玩家游玩视频并结合我自己的游玩体验，我梳理了前二十分钟的玩家体验流程，重点关注了交互流程，目标在于了解游戏设计师为游戏设计的选项有哪些，哪些是希望玩家关注的选项和信息，玩家的反映又是很什么样的，玩家做了哪些行为，试图达成哪些事情。并最终整理了一些可以被优化的细节。\n\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_playerJourney_01_Sc.png\nalt: playerJourney\ncaption: \nlayout: wide\n:::\n#### 纸面原型\n我挑出了由策划给出的选项并制作了一下纸面原型来整理思路，确认游戏当中的界面有哪些，以便接下来的流程图绘制。\n\n界面以及选项\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_paperprototype_01_Sc.png\nalt: playerJourney\ncaption: \nlayout: wide\n:::\n#### 流程图\n通过这个过程进一步梳理出每个界面该有的功能按钮和显示的提示信息，以便下一步的线框图原型制作。使用箭头标志代替次要流程的连线，保持流程图简洁易读。在这个过程中可以先初步逐渐梳理出不同的UI元素层级。\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_flowchart_01_Sc.png\nalt: playerJourney\ncaption: \nlayout: wide\n:::\n#### 线框原型\n在这一步中，利用简单的原型，可以进行一些小范围的用户测试\n[https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down](https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down)\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_01_Sc.png\nalt: playerJourney\ncaption: \nlayout: wide\n:::\n#### 用户测试\n我邀请了三位用户来测试我的原型，为他们设定了一些任务，并设计了一份调查问卷，目的是将收集到的反馈转化为可以优化的细节点。\n测试原型链接：  \n[https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down](https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down)  \n完整测试结果：  \n[https://www.figma.com/design/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?node-id=1-11&t=aZ56RvApciZYL033-4](https://s177yed7drj.typeform.com/to/VkVNZcIL)  \n在线问卷链接：  \n[https://s177yed7drj.typeform.com/to/VkVNZcIL](https://s177yed7drj.typeform.com/to/VkVNZcIL)\n\n##### 调查目标：\n- 评估线框原型的交流信息是否清晰，找出容易引起歧义的细节点\n- 了解玩家是否可以理解线框图提供的每一个信息，如果没能理解的话，了解其原因\n- 确保玩家可以从主界面快速进入对局\n- 了解玩家对于线框图布局的看法\n- 根据本用户体验测试，叠代线框图。\n\n##### 调查逻辑：\n**招募：**  \n- 目标用户为16~55周岁的端游玩家\n- 三名测试者\n- 网上社群和身边的朋友\n\n**工具：**  \n- Figma原型\n\n**任务设计：**  \n- 过6个不同的线框图界面：“主界面”、“游玩界面”、“匹配界面”、“寻找对局界面“、”选择英雄界面“以及“游戏内HUD”\n\n**时间安排：**  \n- 日期：2024.5\n- 单独发出问卷测试\n\n↓↓↓\n\n##### 问卷调查内容设计：\n**请观察“主界面”并留下你的反馈：**  \n1. 请问你对这个界面上的选项有什么想法？\n2. 请问你对这个界面的排版有什么看法？\n\n**现在请进入“游玩界面”和“模式选择”界面，请浏览，并进行交互，完成以下任务并留下你的反馈：  **\n1. 任务一：你可以阐明两种”快速匹配”的区别吗？\n2. 任务二：请你想象一下，如果你想要玩坦克位置，请与界面交互，完成选择位置这一过程，你可以顺利完成吗？针对这一过程，你有什么想法吗？\n3. 你对这两个界面的排版有何看法？\n\n**现在请你进入“寻找游戏”界面，并留下你的反馈：**  \n1. 在这个界面中，你认为非交互的信息陈列的是否清晰？\n\n**现在请你进入“英雄选择”界面，请浏览，并进行交互，完成以下任务并留下你的反馈：**  \n1. 任务三：从这个界面中，你可以描述你的队友的状态吗？\n2. 任务四：请选择“皮肤C”并进入到下一步\n3. 请问你对本屏的界面排版有何看法？\n\n**请浏览游戏内信息并给出你的反馈：**  \n1. 在本屏信息中，你可以看到哪些信息？\n2. 请问你对本屏中的选项有何看法？\n\n**感谢你的时间，我们就快结束了！**  \n1. 请问你还有什么别的问题、反馈或建议吗？\n2. 请问你认为自己是一个PC玩家吗？\n3. 请在下面留下你的称呼\n\n↓↓↓\n\n**提炼测试结果**\n\n|         | 玩家反馈                                | 优化                          |\n| ------- | ----------------------------------- | --------------------------- |\n| 主界面     | “合并账户”意义不明，也不如别的选项重要                | 在主界面移除此选项，将它加入到菜单→设置        |\n| 游玩与匹配界面 | ”特定位置匹配“与”开放匹配“的区别不大；选择位置的步骤有些繁琐    | 在本界面内加入小按钮解决位置选择的功能，移除下一个界面 |\n| 寻找对局界面  | 玩家表示希望可以在这个界面看到ta选择了什么位置，以便更改       | 在这里加入一个当前位置的显示              |\n| 英雄选择界面  | 选择皮肤的地方不太显眼；                        | 调整“选择皮肤”下拉菜单的位置             |\n|         | 看到右上角的队友列表却没有包括玩家自己的头像，这感觉有点被队伍排除了； | 将玩家自己的头像加入到队友旁边             |\n|         | 这一屏的英雄数量看上去无法拓展                     | 调整排版，做成可滑动样式的               |\n| 游戏内     | 屏幕中间上面占点的信息不够明确                     | 重新设计这一部分的排版布局               |\n\n#### 根据测试，继续优化线框图\n:::columns\nratio: 1:1\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_02.png\nalt: wireframe-redesign-01\ncaption: 主界面：在主界面移除”Merge account“，将它加入到菜单→设置\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_03.png\nalt: wireframe-redesign-02\ncaption: 游玩界面\nlayout: wide\n:::\n:::\n:::\n\n:::columns\nratio: 1:1\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_04.png\nalt: wireframe-redesign-03\ncaption: 匹配界面：在本界面内加入小按钮解决位置选择的功能，移除下一个界面\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_05.png\nalt: wireframe-redesign-04\ncaption: 寻找对局界面：在这里加入一个当前位置的显示\nlayout: wide\n:::\n:::\n:::\n\n:::columns\nratio: 1:1\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_06.png\nalt: wireframe-redesign-05\ncaption: 英雄选择界面：调整“选择皮肤”下拉菜单的位置，将玩家自己的头像加入到队友旁边，调整排版，做成可滑动样式的\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_07.png\nalt: wireframe-redesign-06\ncaption: 游戏内HUD：重新设计了占点的信息，之前的信息需要依靠“x”和“√”的图标来表示是否占点成功了，改为了使用图形的尺寸来区分\nlayout: wide\n:::\n:::\n:::\n#### UI界面\n我参考了“渣客女王”的宣传视频的废土、美式漫画主题，从线框图中挑出了几张制作了几个UI界面\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_01.png\nalt: uidesign01\ncaption:\nlayout: wide\n:::\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_02.png\nalt: uidesign02\ncaption:\nlayout: wide\n:::\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_03.png\nalt: uidesign03\ncaption:\nlayout: wide\n:::\n\n#### 情绪板\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_moodboard_01.png\nalt: uidesign01\ncaption:\nlayout: wide\n:::\n#### 风格规范制定\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_styleguide_01.png\nalt: uidesign01\ncaption:\nlayout: wide\n:::\n#### UI控件设计\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_componentDesign_01.png\nalt: UI控件设计\ncaption:\nlayout: wide\n:::\n#### 易用性测试 - 色盲测试\n利用色盲检测工具对完成的界面进行测试，并根据测试结果微调了界面的颜色。\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_usabilityTest_01.png\nalt: 色盲可用性测试\ncaption:\nlayout: wide\n:::"
        },
        {
          "slug": "undying-uiart",
          "title": "《苏醒之路》中的一些界面",
          "summary": "汇总项目中的部分界面部分设计",
          "cover": "/assets/projects/undying-uiart/uiart-cover.png",
          "cover_alt": "《苏醒之路》游戏中的一些界面",
          "home_thumbnail": "/assets/projects/undying-uiart/uiart-cover.png",
          "year": 2022,
          "tags": [
            "game-art",
            "indie-game",
            "game-ui"
          ],
          "published": true,
          "order": 26,
          "body": ":::image\nsrc: /assets/projects/undying-uiart/uiart-cover.png\nalt: 副主角技能，左侧是基础技能，右侧是进阶技能，下方共用详细说明\ncaption: 副主角技能\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-uiart/details/undying_uiart_attributes_01.png\nalt: 双主角的基础属性\ncaption: 人物属性\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-uiart/details/undying_uiart_attributes_02.png\nalt: 主角的症状列表\ncaption: 主角症状\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-uiart/details/undying_uiart_cook.png\nalt: 料理台，左侧选择食材，加入中间的锅里，右侧是产出与消耗信息\ncaption: 料理台\nlayout: wide\n:::"
        },
        {
          "slug": "undying-art",
          "title": "《苏醒之路》中的一些2d美术汇总",
          "summary": "包含kv、插画图标等",
          "cover": "/assets/projects/undying-art/home-cover.png",
          "cover_alt": "《苏醒之路》游戏美术作品展示预览",
          "home_thumbnail": "/assets/projects/undying-art/home-cover.png",
          "year": 2021,
          "tags": [
            "game-art",
            "indie-game"
          ],
          "published": true,
          "order": 30,
          "body": ":::image\nsrc: /assets/projects/undying-art/home-cover.png\nalt: 圣诞节KV\ncaption: 圣诞节KV\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_kv_2020winter.png\nalt: 2020年steam冬日新品节\ncaption: 2020年steam冬日新品节\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_opening_01.png\nalt: 开场动态漫彩插\ncaption: 开场动态漫彩插-开车\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_opening_02.png\nalt: 开场动态漫彩插\ncaption: 开场动态漫彩插-飞奔回家\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_opening_03.png\nalt: 开场动态漫彩插\ncaption: 开场动态漫彩插-堵门\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_icons_01.png\nalt: 彩色图标\ncaption: 彩色图标\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_icons_02.png\nalt: 单色图标\ncaption: 单色图标\nlayout: wide\n:::"
        }
      ]
    },
    "resume": {
      "locale": "zh-CN",
      "name": "杨天韵",
      "profile": {
        "title": "个人简介",
        "body": "海外游戏设计研究生，游戏美术本科；具备大厂出海与百万销量独游经验；擅长复杂系统的信息架构重构；精通 Figma 级高保真原型设计，掌握 Unity (UGUI) 引擎内界面还原与调试；具备全英文跨国协作能力。\n"
      },
      "education": {
        "title": "教育背景",
        "items": [
          {
            "id": "education-uppsala",
            "institution": "乌普萨拉大学 (QS100)",
            "institution_en": "Uppsala University",
            "qualification": "游戏设计研究生",
            "qualification_en": "MA in Game Design Programme",
            "date": "2025 – 2026"
          },
          {
            "id": "education-limkokwing",
            "institution": "林国荣创意科技大学",
            "institution_en": "Limkokwing University",
            "qualification": "游戏艺术与研发学士学位",
            "qualification_en": "(Hon) BA in Game Art and Development",
            "date": "2016 – 2019"
          }
        ]
      },
      "skills": {
        "title": "技能",
        "groups": [
          {
            "id": "design-tools",
            "label": "设计工具",
            "body": "Figma；Adobe XD；Photoshop；Illustrator；XMind"
          },
          {
            "id": "development-tools",
            "label": "研发工具",
            "body": "Unity (UGUI)；Godot 4"
          },
          {
            "id": "specialties",
            "label": "专业方向",
            "body": "交互策划 / 游戏 UI 设计 / 2D 美术"
          }
        ]
      },
      "experience": {
        "title": "工作/项目经历",
        "items": [
          {
            "id": "experience-misfig",
            "heading": "联合创始人 & 游戏UI/UX设计师｜北京米斯菲格科技有限公司",
            "date": "2024.3 – 至今",
            "labels": [
              "信息层级梳理",
              "可用性迭代"
            ],
            "body": "工作室创立与项目交付：创立独立视觉设计工作室，面向海内外游戏及桌游项目提供高品质 UI/UX 与平面视觉外包服务。独立主导商务对接、需求拆解及全链路视觉交付。\n\n项目案例：狩魂者TRPG（本体与扩展模组）｜客户：熔炼炮团。长期作为核心主创，跟进国风 TRPG 产品的全套视觉体系设计。通过收集跑团玩家的真实测试反馈，识别原有角色卡布局在信息层级上的认知负载问题；对基础属性、技能、灵能力等栏目进行多轮视觉与逻辑层级迭代，优化留白与视觉动线。制定国风视觉规范、字体系统、排版栅格与配色，并交付 Banner、众筹商品详情页、传单和易拉宝等宣发物料。项目本体最终获得超过80万元众筹款。\n\n项目案例：某海外在研单机游戏。作为独立承包商远程对接美国研发团队，负责图标视觉设计与资产交付。\n"
          },
          {
            "id": "experience-ioi",
            "heading": "用户研究 & 本地化运营负责人｜质像（成都）科技有限公司 IOI Gamer",
            "date": "2023.3 – 2024.2",
            "labels": [],
            "body": "负责某百万级销量海外多人联机游戏的国区官方化运营启动。通过参与式观察和半结构化访谈主导简体中文玩家体验调研，输出本地化用户体验优化报告，挖掘交互痛点并辅助提升营销转化效率。\n\n排查游戏本地化可用性问题，在与海外研发团队的英文会议中持续跟进并推动修复上线。独立从0搭建官方社媒矩阵，其中B站半年累计涨粉2万以上；制定跨平台内容分发策略并创造百万级曝光，半年内帮助该产品中国区 Steam 销售额提升17%。\n"
          },
          {
            "id": "experience-igg",
            "heading": "UI界面拼接 & UI设计师｜放置类出海手游 Game of Honor｜IGG上海",
            "date": "2022.12 – 2023.3",
            "labels": [
              "Unity",
              "UI设计",
              "手游"
            ],
            "body": "负责月卡、工会排行榜等界面设计，按需交付高质量设计稿。使用 Unity UGUI 在引擎中进行 UI 拼接，确保设计还原度与落地品质；配合程序完成不同移动设备适配，并排查多语言字体长度显示问题。\n"
          },
          {
            "id": "experience-undying",
            "heading": "游戏 UI/UX｜独立游戏《苏醒之路》｜北京威魔纪元科技有限公司",
            "date": "2019.8 – 2022.12",
            "labels": [
              "界面设计",
              "Steam/PC"
            ],
            "body": "《苏醒之路》是一款带有资源管理元素的末日生存角色扮演单机独立游戏。作为 UI/UX 设计主力，主导背包管理、角色属性、地图迁移等多个核心系统的交互体验设计，并根据用户反馈和玩法迭代持续优化可用性。\n\n梳理策划案功能需求，建立清晰的信息架构与交互流程；使用 Figma 完成高保真原型并落地至 Unity；从0到1搭建游戏 UI 设计规范与整体视觉语言；负责背包系统、NPC 对话、技能界面等核心 UI 的设计实现，以及 Logo 与视觉体系建立。\n"
          }
        ]
      },
      "other_experience": {
        "title": "其他经历",
        "items": [
          {
            "id": "other-elvtr",
            "title": "ELVTR 课程学习",
            "context": "《守望先锋2》案例分析；《命运2》HUD优化练习",
            "date": "2024.3 – 2025.8",
            "description": "完成 UI/UX for Games 与 Advanced UI/UX for Games 课程及 Figma 实战项目。"
          },
          {
            "id": "other-booomjam",
            "title": "Booomjam 2025 参赛",
            "context": "《空眼眶》",
            "date": "2025.5",
            "description": "主导游戏核心机制设计，绘制 UI 与关卡美术素材，在 Unity 中完成 UI 资源拼接和关卡还原；成功提交参赛版本，并获最佳游戏提名。"
          }
        ]
      },
      "gaming_experience": {
        "title": "游戏经历",
        "body": "英雄联盟（端游3000h+）；金铲铲之弈（最高段位大师，端游+手游+外服）；Apex Legends（150h+）；博德之门3（150h+）；文明6（150h+）；饥荒（PC端185h）；深海迷航系列通关；重生细胞手游端；哈迪斯手游端；恋与深空（80级）。\n"
      }
    },
    "about": {
      "locale": "zh-CN",
      "sections": [
        {
          "id": "about-me",
          "title": "关于我",
          "body": "2019年毕业以后，我以独立游戏美术的身份入行，花了大量时间学习手绘技巧。在独立游戏团队的实际经验让我意识到在策划文档和UI美术之间，还应该存在着一个交互设计师的角色。对内，将策划的设计决策翻译成可以执行的方案，对外，也要对玩家最终的体验负责，通过合适的测试方法与玩家共情，创造真正易用有趣的可交互界面。\n\n我带着困惑走出了视觉舒适区的起点。2022年我进入单机游戏发行领域，第一次从上线后的玩家反馈、数据波动和版本迭代中，理解了什么是“设计决策的长期后果”。我发现，对于玩家来说，赏心悦目的界面固然重要，但是它背后相对应的层面同样不可或缺。\n\n2025年，我回到校园，进入游戏设计研究生专业，系统学习了游戏设计、用户体验与交互设计的方法论，并尝试利用AI时代的工具将我过去的经验整合成一套结构化的设计思维。\n\n现在，我希望作为一名游戏交互设计师重新开始，用信息架构和交互流程更好地共情玩家，帮助玩家更顺畅地探索游戏世界。目前我也在补全 UE5 UMG 的拼接能力，同时持续拆解开放世界游戏的界面系统。\n\n除了设计执行，我也热衷于整理设计规范、建立组件化思维，并在团队中推动设计文档的标准化，这些习惯来自我多年与程序、美术、策划协作的经验。\n\n如果您希望了解我过往的工作经历，请查看我的简历。或者联系我：yangtianyun7@foxmail.com\n"
        },
        {
          "id": "about-site",
          "title": "关于本站",
          "body": "这个网站是我用 Codex 从零搭建的第一个纯静态作品集站点。使用了Figma进行原型设计，整个过程让我经历了一次完整的设计意图转化为技术实现的过程，目前它还只是一个简陋的毛坯房，我会继续优化，也欢迎你来我的毛坯房坐坐。\n"
        }
      ],
      "resume_link_text": "查看我的简历",
      "contact_link_text": "联系我"
    },
    "notes": {
      "locale": "zh-CN",
      "page_title": "笔记",
      "translation_missing": "这篇笔记暂时没有中文版，已返回中文笔记列表。",
      "filters": {
        "year": "年份",
        "tag": "标签",
        "all": "全部",
        "clear": "清除筛选",
        "empty": "目前还没有发布笔记。"
      },
      "tag_labels": {
        "interaction-design": "交互设计",
        "game-design": "游戏设计",
        "game-ui": "游戏 UI",
        "case-study": "案例分析",
        "indie-game": "独立游戏",
        "workflow": "工作流程"
      },
      "entries": []
    }
  },
  "en": {
    "global": {
      "locale": "en",
      "navigation": {
        "works": "Projects",
        "notes": "Notes",
        "contact": "Connect",
        "resume": "Resume",
        "about": "About me"
      },
      "controls": {
        "home_label": "Home",
        "switch_to_other_language": "Switch to Chinese",
        "switch_theme": "Toggle light or dark mode",
        "back_to_top": "Back to top",
        "close_dialog": "Close"
      },
      "contact_options": [
        {
          "id": "wechat",
          "label": "WeChat",
          "action": "dialog",
          "href": null,
          "icon": "/assets/icon-wechat.svg",
          "dialog_title": "Contact me on WeChat",
          "dialog_body": "Scan the QR code to add me on WeChat.",
          "dialog_image": "/assets/wechat-qr.jpg"
        },
        {
          "id": "email",
          "label": "yangtianyun7@foxmail.com",
          "action": "link",
          "href": "mailto:yangtianyun7@foxmail.com",
          "icon": "/assets/icon-email.svg",
          "dialog_title": null,
          "dialog_body": null,
          "dialog_image": null
        }
      ],
      "footer": {
        "copyright": "© Tianyun Yang 2026. All rights reserved."
      }
    },
    "home": {
      "locale": "en",
      "hero_title": "Hi, I’m Tianyun Yang",
      "short_description": "I’m a game interaction designer with end-to-end experience delivering UI and interaction design for indie games, along with a localization and game-operations perspective. I also have experience designing UI for mobile games published overseas and am proficient in Figma and Unity UGUI.\n"
    },
    "work": {
      "locale": "en",
      "title": "Projects",
      "translation_missing": "This project is not available in English yet. You have been returned to the English project list.",
      "filters": {
        "year": "Year",
        "tag": "Tags",
        "all": "All",
        "clear": "Clear filters",
        "empty": "No projects match the current filters."
      },
      "tag_labels": {
        "interaction-design": "Interaction Design",
        "case-study": "Case Study",
        "game-ui": "Game UI",
        "game-art": "Game Art",
        "indie-game": "Indie Game",
        "gamejam": "Game Jam",
        "game-design": "Game Design",
        "unity": "Unity"
      },
      "projects": [
        {
          "slug": "petitplanet-casestudy-camfunction",
          "title": "Case Study — Photography in Petit Planet",
          "summary": "System breakdown and mobile-layout recreation",
          "cover": "/assets/projects/petitPlanet-casestudy-cam/petitPlanet-casestudy-cam_cover.png",
          "cover_alt": "Case study — Photography in Petit Planet",
          "home_thumbnail": "/assets/projects/petitPlanet-casestudy-cam/petitPlanet-casestudy-cam_cover.png",
          "year": 2026,
          "tags": [
            "interaction-design",
            "case-study"
          ],
          "published": true,
          "order": 10,
          "body": "Petit Planet is a 3D life-simulation game planned for PC, mobile, and other platforms. It is currently still in development.  \n  \nIts photography feature has been well received by test players. It meets players' social and self-expression needs, while its friendship-level unlock requirement encourages players to form connections with others and supports retention.\n\n###### Project Schedule\n\n| | Aug 13 | Aug 14 | Aug 16 |\n| --- | --- | --- | --- |\n| Interaction | #1 Feature analysis: describe the photography feature and map its core experience flow | | #4 Documentation: organize the flow, states, edge-case assumptions, asset list, and UGUI prototype notes |\n| Visual | #2 Mobile UI recreation: adapt PC video references into a mobile layout and recreate export-ready UI assets | | |\n| Assembly | | #3 Unity assembly: define naming and folder conventions based on the analysis, export assets accordingly, and recreate the interface in-engine | |\n\n> **Core Deliverables Checklist:**\n> **Design and Interaction Documentation**\n> Study and break down the core cooperative-photography experience, then produce designs and documentation suitable for implementation.\n>\n> **Static UGUI Interface**\n> Recreate the mobile interface in Unity, become familiar with UGUI, and propose a foundational mobile-adaptation approach.\n\n#### #1 Feature Analysis\n### Strengths and Optimization Opportunities\n\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_01.png\nalt: Single-player photography screenshot\ncaption:\nlayout: wide\n:::\n###### Strengths\n- The layout resembles a phone camera and follows Jakob's Law. The core functions are simple and easy to use, leaving players with almost no learning cost for taking a photo.\n- Cooperative photos can be shared immediately after capture, instantly meeting players' social needs.\n- The selfie-stick feature adds playfulness and immersion.\n:::\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_02.png\nalt: Two-player photography screenshot\ncaption:\nlayout: wide\n:::\n###### Optimization Opportunities\n- During cooperative photography between real players, guidance about each participant's state is insufficient. I observed a player trying to use the Neighbor pose entry to prompt another player to pose, only to receive a message saying that no eligible Neighbor was nearby.\n- A photographed player can tell that a photo is being taken only through either a bubble above their head or the pose currently being performed; only one of these cues appears at a time. The photographer may be waiting for them to pose, but insufficient guidance can prevent the photographed player from recognizing this expectation.\n:::\n:::\n\n### Core Experience\nThe photography system has two core goals corresponding to two player needs: documentation and social interaction. Its three main scenarios are:\n\n###### Basic Photography\nThe player controls the camera — solo documentation.\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_01_sc.png\nalt: Basic photography experience flow\ncaption:\nlayout: wide\n:::\n\n###### Photography with a “Neighbor” NPC\nThe player controls both the camera and the Neighbor — solo, staged documentation.\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_02_sc.png\nalt: Photography flow with a Neighbor\ncaption:\nlayout: wide\n:::\n\n###### Photography with a Real Player\nThe photographer controls the camera while both participants control their own characters — social collaboration.\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-userflow_03_sc.png\nalt: Cooperative photography flow with a real player\ncaption:\nlayout: wide\n:::\n\n*Mixed situations can also occur, such as photographing both a real player and a Neighbor, or photographing multiple real players.*\n\n### Detailed Flowchart\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-flowchart_01_sc.svg\nalt: Detailed photography flowchart\ncaption:\nlayout: wide\n:::\n\n### Two-role Flow for Real-player Photography\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-flowchart_02_sc.svg\nalt: Two-role cooperative photography flowchart\ncaption:\nlayout: wide\n:::\n**I did not observe a formal cooperative-photo option. In the reference videos, players coordinated primarily by observing each other's state.**\nWhen the photographed player switches from selecting an expression to selecting an item, the existing camera bubble disappears, potentially breaking mutual state awareness.\n\n#### States\nBased on the reference videos, this section records only states related to the social-collaboration experience.\n\n| Character state | What the player sees | What others see |\n| --- | --- | --- |\n| Normal movement | Standard in-game HUD | Standard character behavior |\n| Photographer opens the camera | Camera controls | Photographer takes out the camera or selfie stick |\n| Player selects an expression | Expression menu + thinking animation | Camera bubble above the head |\n| Player performs the selected action | Current expression animation | Character performs the action |\n| Item-selection screen | No camera bubble observed | Player browsing or displaying items |\n| Photo-result screen | Photo preview | Unconfirmed |\n| Share photo | Phone-transfer animation and bubble | Phone-transfer animation and bubble |\n\n#### Social-state Feedback\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_03.png\nalt: Screenshot of a covered state\ncaption:\nlayout: wide\n:::\n###### Covered State\nThe photographer has completed the composition, but the other player is still browsing or choosing an action, so the participants are at different stages of readiness.  \n  \nCurrent treatment:  \nWhen the photographed player enters expression selection, a camera bubble appears above their head. The photographer can therefore tell that the other participant is still preparing rather than having left the interaction.\n:::\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_04.png\nalt: Screenshot of a state-communication gap\ncaption:\nlayout: wide\n:::\n###### State-communication Gap\nThe photographed player wants to hold and display an item, so they temporarily leave expression selection and enter the item-selection flow.  \nThe observed camera bubble appears to be tied only to the expression system and disappears while an item is being selected.  \nThe photographer can no longer tell whether the other participant is finding an item for the photo, pausing participation, ending the photo session, or performing an unrelated action.  \nThis interrupts the shared understanding created by the earlier state cue and leaves the photographer unsure whether to keep waiting or take the photo.  \nI did not observe a corresponding solution.\n:::\n:::\n\n#### #2 Mobile UI Recreation\n### UI Recreation and Mobile Adaptation\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_01.webp\nalt: Recreated mobile UI\ncaption: *Character footage captured from Bilibili creator Yi Yi Xing; the background is not game footage and was sourced online.*\nlayout: wide\n:::\n\n### Comparison with the PC Button Layout and Adaptation Rules\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-screenshot_05.webp\nalt: PC photography UI reference\ncaption: Screenshot from PC video footage\nlayout: wide\n:::\n:::\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_02.png\nalt: Recreated mobile screenshot\ncaption: Recreated mobile layout\nlayout: wide\n:::\n:::\n:::\n\n###### Mobile Adaptation Rules\n1. Reposition the camera-mode button group away from the virtual joystick to reduce accidental input while moving.\n2. Arrange UI controls along screen edges so the central character and primary capture area remain unobstructed.\n3. Group anchors by region: top header, right-side footer, and central information content each use anchors appropriate to their area.\n4. Enlarge small PC buttons and standardize button sizes and operating gaps within each group.\n5. Keep core functions visible across aspect ratios and reserve space for device safe areas.\n\n#### #3 Unity Assembly\n### Component Export\nThe recreated UI components were divided into General, Expression Selection, and Photography Mode groups.  \nIdeally, if the new system consists only of photography-mode components, only those newly added components should need to be exported.  \nElements without baked textures should be exported in white wherever possible and tinted in-engine using the project's palette.\n\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_01.png\nalt: UI components\ncaption:\nlayout: wide\n:::\n:::\n\n:::column\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_02.png\nalt: Assets imported into Unity\ncaption: In-engine asset folder structure\nlayout: wide\n:::\n:::\n:::\n\n### Static Hierarchy and Mobile-device Adaptation\n:::video\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-unitystructure_01.mp4\nalt: Canvas structure\ncaption: In-engine UI hierarchy\nlayout: wide\n:::\n\n#### #4 Documentation\n### Special Notes\n:::columns\nratio: 1:1\n\n:::column\n1. Entering photography mode defaults to a camera mode centered visually on the player character.\n2. The selfie stick is shown by default the first time selfie mode is opened. After the player changes this setting, future sessions retain the previous choice.\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-uiscreen_03.png\nalt: Default photography camera UI\ncaption:\nlayout: wide\n:::\n:::\n:::column\n**Component-reuse Assumption**\nThis prototype is not connected to production logic. To simulate a realistic collaboration workflow, close buttons, toggles, action menus, and similar elements are assumed to come from the project's existing component library; photography-specific controls are treated as new components.\n:::image\nsrc: /assets/projects/petitPlanet-casestudy-cam/details/petitPlanet-casestudy-components_03_sc.png\nalt: Reused and new components\ncaption:\nlayout: wide\n:::\n:::\n:::\n\n### Limitations and Open Questions\n\n###### Limited Observation Sample\nThe game has not yet launched and its test build is no longer available. This analysis therefore relies mainly on gameplay videos posted by test players. I could not control the capture scenarios or confirm whether the footage presented every operation and system response.\n\n###### Some Mechanics Were Inferred from Behavior\nVideo evidence alone cannot confirm whether hidden cooperative-photo detection, state synchronization, or prompting conditions exist between real players.\n\n###### No Access to Real-user Testing\nBecause I could not access the test build, the project did not include usability testing, player interviews, or controlled comparisons. Assumptions such as whether photographers understand the camera bubble or photographed players realize they are participating still require validation with real players.\n\n###### Limited Prototype Scope\nBecause the project lasted three days, the Unity output focused on:\n\n- Organizing UI assets;\n- Building the UGUI hierarchy;\n- Configuring anchors;\n- Recreating the landscape mobile layout.\n\nThe result is a static-layout prototype. It does not implement button feedback, navigation, camera control, character actions, photo generation, or multiplayer state synchronization.  \n  \nThe border component has also not yet been adapted for 16:10 or 4:3 devices.\n\n###### Mobile Adaptation Has Not Been Tested on Devices\nThe current adaptation was evaluated mainly in the design file and Unity Game View. Actual touch sizes, safe areas, device ratios, performance, and operating feel still require testing on physical devices.\n\n###### Questions to Validate\n**Real-player cooperative photos:**\n- Is the disappearance of the camera bubble during item selection a fixed rule?\n- Does the system detect whether a player is participating in a photo?\n- Can the photographed player tell whether the photographer is composing, selecting an action, or has finished shooting?\n\n**Mobile interaction:**\n- Could the right-side function buttons conflict with camera control or character movement?\n- Will the interface obscure the character or core capture area at different aspect ratios?\n- After migrating PC controls to touch, are button sizes and information density appropriate for real use?\n\n#### Project Summary\nThis project primarily served as an exercise in learning and becoming familiar with UGUI. With limited source material and time, I mapped the core photography experience, identified state-communication issues in real-player cooperative photos, and validated a foundational approach for recreating the mobile UI in Unity.\n\n#### References\n*This project used gameplay footage shared on social media by players from the first and second tests.*\n\nBilibili user 1787963 — Inviting a Neighbor to take a photo  \nhttps://www.bilibili.com/video/BV1TzCHBEESD?spm_id_from=333.788.player.player_end_recommend&vd_source=9417ea2103fef5aeef9ef95ef006db0c&trackid=web_related_0.router-related-2479604-9kkcc.1786869262846.202\n\nBilibili user 一小时游戏 — Being photographed  \n[https://www.bilibili.com/video/BV1ixoQB1End/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1ixoQB1End/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)\n\nBilibili user 伊伊星 — Taking photos with real players  \n[https://www.bilibili.com/video/BV1WPZcBQERb/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1WPZcBQERb/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)\n\nBilibili user 星布布布菇 — Photographing a friend performing actions  \n[https://www.bilibili.com/video/BV1p1LM6BEXd/?spm_id_from=333.1391.0.0&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1p1LM6BEXd/?spm_id_from=333.1391.0.0&vd_source=9417ea2103fef5aeef9ef95ef006db0c)\n\nBilibili users including 折耳根Gen — Multi-player cooperative photography  \n[https://www.bilibili.com/video/BV1YY9dB2EEE/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV1YY9dB2EEE/?spm_id_from=333.337.search-card.all.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)\n\nBilibili user 阿咪_游戏版 — “Street Corner” photo sharing  \n[https://www.bilibili.com/video/BV14soEBMEvt/?spm_id_from=333.1387.upload_video_card.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c](https://www.bilibili.com/video/BV14soEBMEvt/?spm_id_from=333.1387.upload_video_card.click&vd_source=9417ea2103fef5aeef9ef95ef006db0c)"
        },
        {
          "slug": "undying-map",
          "title": "Undying Map Interface Redesign",
          "summary": "A redesign of the map travel flow and regional information hierarchy, helping players compare destinations, resources, and action costs more clearly.",
          "cover": "/assets/projects/undying-map/home-cover.png",
          "cover_alt": "Preview of the Undying map interface redesign",
          "home_thumbnail": "/assets/projects/undying-map/home-cover.png",
          "year": 2022,
          "tags": [
            "interaction-design",
            "game-ui",
            "indie-game"
          ],
          "published": true,
          "order": 10,
          "body": "When route planning and strategic resource management were introduced mid-production, the map travel experience expanded significantly.  \nThe previous interface could not support the new route-planning features.\n\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/undying-map/details/legacy-map.webp\nalt: The legacy map presented locations and details on a fixed canvas\ncaption: Previous design mockup\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_userflow_en_01.png\nlocalized: true\nalt: User flow for the previous map interface\ncaption: Comparison of the previous and redesigned flows\nlayout: wide\n:::\n:::\n:::\n\n| New system requirement | Previous interface | Gap |\n| --- | --- | --- |\n| Let players plan a route manually and observe cost changes in real time | No route-planning interaction framework | Insufficient information (usability issue) |\n| Let players evaluate whether the vehicle has enough storage before departure | No storage-state feedback | Missing interaction pattern (ease-of-use issue) |\n| Show randomized locations whenever the map opens and let players decide whether to visit them | No logic for handling random events | Missing interaction pattern (ease-of-use issue) |\n| Support an unknown number of future maps and possible DLC | The bounded map places every location on one large PNG | Location count cannot scale (extensibility issue) |\n\n## 02. Design goals\n\n**Goal 1: Help players understand the cost of the current route**\nPlayers can select a route tile by tile with the directional controls, observe cost values changing in real time, and decide whether to explore hidden locations along the way.\n\n**Goal 2: Give players the information required to make a decision**\nBefore selecting “Confirm Travel,” players can review complete destination intelligence—such as resources and danger—as well as vehicle status, including remaining storage, durability cost, and fuel.\n\n**Goal 3: Allow the map to support more locations**\n\n## 03. Core design decisions\n\n### 3.1 Make route planning a visible action–feedback loop\n\nPlayers use the directional controls to move an arrowed route line one tile at a time while exploring the grid map.\n\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_status_en_01.png\nlocalized: true\nalt: Route-planning states and destination details in the redesigned grid map\ncaption:\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-map/details/route-planning.webp\nalt: Route planning and destination details on the redesigned grid map\ncaption: Preview of the redesigned interface\nlayout: wide\n:::\n\n### 3.2 Information Presentation\n\n###### New Map User Flow\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_userflow_sc_02.png\nalt: User flow for the redesigned map\ncaption: Redesigned user flow\nlayout: wide\n:::\n\n:::columns\nratio: 1:1\n\n:::column\n###### Vehicle Information\nWhen a player plans a route to a destination, vehicle durability, fuel, and time costs update in real time. The player can also open the vehicle storage panel to inspect the available slots.\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_vehicle_01.png\nalt: Vehicle status and storage information panel\ncaption: Vehicle status is brought into the departure decision, reducing the frustration of discovering insufficient storage after setting out.\nlayout: wide\n:::\n:::\n\n:::column\n###### Destination Information\nDestination information is presented in layers from top to bottom:  \nname and distance/direction; location image in locked or unlocked state; danger level; available resources; and a short location description.\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_destinationInfo_01.png\nalt: Destination name, distance, danger, and resource panel\ncaption: Destination information is layered from identity and risk to potential reward.\nlayout: standard\n:::\n:::\n:::\n\n### 3.3 Replace a fixed map image with data coordinates\n\nThe previous map painted every location onto one fixed-size PNG. The redesign places locations on an extensible coordinate grid. New maps or DLC can add location data and adjacency rules without being constrained by a single image.\n\n:::columns\nratio: 1:1\n\n:::column\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_oldversion_01.png\nalt: Previous map design mockup\ncaption: Previous design\nlayout: wide\n:::\n:::\n\n:::column\n:::image\nsrc: /assets/projects/undying-map/details/undying-map_newversion_01.png\nalt: Redesigned map interface mockup\ncaption: Redesigned interface\nlayout: wide\n:::\n:::\n:::\n\n## 04. Validation and reflection\n\n**Goal 1: Help players understand the cost of the current route**\n- Tile-by-tile directional input and live costs in the lower-left corner created a complete action–feedback loop.\n- The design team felt that the redesigned system offered more player participation.\n- Playtesting showed that the live cost display in the lower-left corner was easy to miss. A later iteration added icon-and-value cost indicators around each location marker.\n\n**Goal 2: Give players the information required to make a decision**\n- Progressive disclosure covers the complete decision chain: inspect a destination, review its resources, confirm storage, and depart.\n- Vehicle storage is surfaced numerically before departure, while players can still open the storage panel to inspect individual items. This helps prevent the frustration of discovering insufficient capacity after setting out.\n- The information density of the destination panel still needs further player feedback.\n\n**Goal 3: Allow the map to support more locations**\n- The grid system can add locations dynamically through coordinate data without changing the interface structure.\n- Compared with the previous fixed PNG, the extensibility limitation has been resolved.\n\n*All artwork in this project is original; some location images are screenshots from the game.*"
        },
        {
          "slug": "destiny2-casestudy-hud",
          "title": "A Game UX Case Study of Destiny 2",
          "summary": "Gameplay Flow Improvements",
          "cover": "/assets/projects/destiny2-casestudy-hud/destiny2-casestudy-hud_cover.png",
          "cover_alt": "Case study — Onboarding HUD flow in Destiny 2",
          "home_thumbnail": "/assets/projects/destiny2-casestudy-hud/destiny2-casestudy-hud_cover.png",
          "year": 2025,
          "tags": [
            "interaction-design",
            "case-study"
          ],
          "published": true,
          "order": 15,
          "body": "#### Agenda\n**#1 Background and Context**\nSome of Destiny 2’s most-used UI elements still cause friction in fast-paced gameplay.\n\n**#2 Experience Goals**\nImproving usability and scalability in combat and gear management through targeted UI redesigns.\n\n**#3 Work Process**\n- Flow Chart\n- Wireframes (Support Cross-Platforms)\n- Stakeholder Communication\n\n#### Background and Context\n**About Destiny 2**\nDestiny 2 is a fast and complex game.\n:::image\nsrc: /assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_gamealbum_01_en.png\nalt: game album\ncaption: Destiny 2\nlayout: wide\n:::\n\n**About This Project**\nSome parts of its UI still make gameplay harder than it should be. This project improves two areas: the bottom-left HUD, and the ‘character’ screen. These small changes help players act faster and manage gear more easily.\n:::columns\nratio: 1:1\n:::column\n:::image\nsrc: /assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud-oridesign_hud_01_en.png\nalt: The Character screen\ncaption: The Character screen\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc: /assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud-oridesign_hud_01_en.png\nalt: HUD\ncaption: HUD\nlayout: wide\n:::\n:::\n:::\n#### PExperience Goals (Visions)\nImproving usability and scalability in combat and gear management through targeted UI redesigns.\n\n#### Pin-points\n### HUD\nPresentation of the ultimate ability, regular abilities, health, and weapon information\n\nI listed out the pin-points and categorized them in to *usability* issues and *scalability* issues. This study does not contain desirability and feasibility issues.\n\n| Usability issues                                                              | Scalability issues                                                           |\n| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |\n| It’s hard to distinguish hp bar and ultimate skill energy bar.                | It can be hard to make more rooms if the designer want to add another skill. |\n| Players may find it hard to remember the key of skills and switching weapons. |                                                                              |\n\n#### Pin-points\n### Character Management Screen\nManage gears & class\n\n| Usability issues                                                                                          | Scalability issues                                                     |\n| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |\n| Player may find it’s unclear to change the class.prominent enough and can be difficult to locate quickly. | If there are more gears to equip, the screen may has to be redesigned. |\n| It is hard to tell the different meaning of the attribute icons.                                          |                                                                        |\n\n#### References\n\n:::columns\nratio: 1:1\n:::column\n:::image\nsrc: /assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_ref_01.png\nalt: Reference — Marvel Rivals\ncaption: HUD — Marvel Rivals — NetEase Games\nlayout: wide\n:::\n- Clear key hint of skill and weapon usages.\n- Clear display of HP bar and ultimate skill cool down.\n:::\n:::column\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_ref_02.png\nalt: Reference — Fortnite\ncaption: HUD — Fortnite — Epic Games\nlayout: wide\n:::\n- Mobile platform reference\n:::\n:::\n\n#### Optimization Goals and Priorities\n0: Must be improved\n1: Nice to be improved\n\n| Priority | Category                       | Design goal                                                                                          |\n| -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------- |\n| 0        | HUD: Usability                 | Player can tell the bar of the down-left corner is related to the ultimate skill.                    |\n|          |                                | Remind players the skills and weapon key.                                                            |\n| 0        | HUD: Scalability               | Make the screen scalable for new skills                                                              |\n| 0        | Character screen: Usability    | Player can tell the differences among different attribute to better decide their equipment strategy. |\n| 0        | Character screen: Scalability  | The screen can be scalable for new equipment                                                         |\n| 1        | Character screen - Usability   | Player can find a way to view and change their class and relevant info directly.                     |\n| 1        | Character screen - Scalability | The screen can be scalable for new class                                                             |\n\n### Work Process\nFlowchart → Wireframe → Communication\n### HUD\n#### Experience Flow Breakdown\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_flowchart_01_en.png\nalt: HUD flowchart\ncaption: Information shown in the existing HUD experience\nlayout: wide\n:::\n\n#### Design Adjustments\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_01_sc.png\nalt: PC redesign\ncaption: Redesigned PC wireframe\nlayout: wide\n:::\nUsability:\n- Adjusted the shape of Ultimate skill’s energy bar\n- Add key icon to remind players of using skills and switching weapons. The skill can be used if the key icon turned lighter.\nScalability:\n- Some Extra room for potential new skills\n\nMobile adaptation: I redesigned the skill section in the HUD and added mobile device compatibility.\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_02_sc.png\nalt: Mobile redesign\ncaption: Mobile wireframe\nlayout: wide\n:::\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_03_sc.png\nalt: Tablet redesign\ncaption: Tablet wireframe\nlayout: wide\n:::\n\n### Character Screen\n#### Experience Flow Breakdown\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-hud_02_sc.png\nalt: PC redesign\ncaption: Redesigned PC wireframe — Character screen\nlayout: wide\n:::\n\n#### Changes\n:::columns\nratio: 2:1\n:::column\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_design-character_01_sc.png\nalt: PC character-screen redesign\ncaption: Redesigned PC wireframe — Character screen\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_original-character_01_sc.png\nalt: Original PC character screen\ncaption: Original PC character screen\nlayout: wide\n:::\n:::\n:::\nUsability:\n- Icon adjustment to help player understand the current class and indicating of changing classes\n- Added title to each attribute to help player better to decided their equipment strategy\nScalability:\n- Icon and layout adjustment for more slots of gears\n\n#### Additional Analysis\n###### Retrospective Comparison with the Officially Licensed Mobile Game Destiny: Rising\n\n**Comparison and Reflection**\nDestiny: Rising is an officially licensed mobile shooter RPG developed by NetEase based on Destiny 2. It launched in China in October 2025, after I completed this design exercise. Comparing it with my proposal produced the following insights and reflections:  \n\n- The mobile version simplifies its feature set by removing one weapon and one regular ability. Its cooldown treatment is almost identical to the approach used in my exercise.\n- The layout closely follows mobile interaction zones, placing virtual buttons in more prominent positions and at larger sizes.\n- Jump and slide share the same virtual button, improving space utilization.\n- This showed me that future mobile designs should engage more deeply with native ergonomic constraints rather than simply scaling down desktop logic.\n:::image\nsrc:/assets/projects/destiny2-casestudy-hud/details/destiny2-casestudy-hud_comparison_01_sc.png\nalt: Comparison with Destiny: Rising\ncaption:\nlayout: wide\n:::"
        },
        {
          "slug": "EmptyEye-indiegame-gamejam",
          "title": "Empty Eye Socket — A Game Jam Project",
          "summary": "Nominated for Outstanding Game at GCORES BOOOOM Jam 2025",
          "cover": "/assets/projects/emptyeye-gamejam/emptyeye-cover.webp",
          "cover_alt": "Empty Eye Socket — A game jam project",
          "home_thumbnail": "/assets/projects/emptyeye-gamejam/emptyeye-cover.webp",
          "year": 2025,
          "tags": [
            "interaction-design",
            "gamejam",
            "game-design",
            "game-art",
            "unity"
          ],
          "published": true,
          "order": 16,
          "body": "#### Game Overview\nEmpty Eye Socket is a side-scrolling 2D point-and-click narrative adventure that combines light puzzles with poetic storytelling. The player takes the role of the spirit of a once-carefree prince, now trapped inside a golden statue. As a swallow visits from afar, the prince gradually comes to understand the world, the meaning of suffering and tenderness, and ultimately gains a “heart” through repeated acts of giving and letting go. The game is expected to last 10-15 minutes. Players advance the story by clicking to explore scenes, collecting items, and triggering events, uncovering a fairy tale about humanity, loss, and love.\n\nThis was a team project created for a game jam hosted by GCORES in 2025. Empty Eye Socket received an Outstanding Game nomination.\nI was responsible for game interaction and interface design, environment art and Unity implementation, as well as some implementation-oriented game design work. The rest of the team consisted of one narrative designer, two programmers, one artist responsible for NPC character design, and one music and sound designer.\n\n#### Game Download\nhttps://pan.baidu.com/s/1jyaugjP665IYVr7hG5UO9A?pwd=avu3\n\n#### Gameplay Demonstration\n:::video_embed\nsrc: https://youtu.be/1OD6VOPE6AM\ntitle: Full Gameplay Demonstration\ncaption: Full gameplay demonstration\nlayout: wide\n:::"
        },
        {
          "slug": "overwatch2-casestudy-findGame",
          "title": "Case Study—Matchmaking Flow in Overwatch 2",
          "summary": "The goal of this project is to walk through the UX and UI process of Overwatch 2, and ultimately create my own case study including iterated wireframes, usability test and UI mockups.",
          "cover": "/assets/projects/overwatch2-casestudy-uiremaster/overwatch2-casestudy-uiremaster_cover.png",
          "cover_alt": "Case study — Matchmaking flow in Overwatch 2",
          "home_thumbnail": "/assets/projects/overwatch2-casestudy-uiremaster/overwatch2-casestudy-uiremaster_cover.png",
          "year": 2024,
          "tags": [
            "interaction-design",
            "case-study"
          ],
          "published": true,
          "order": 25,
          "body": "### About this project\n#### Overview\nThe goal of this project is to walk through the UX and UI process of Overwatch 2, and ultimately create my own case study including iterated wireframes, usability test and UI mockups.\n#### My role & Responsibilities\n1. UX + UI Design\n2. User Testing\n\n#### Length of this project\n- 7 weeks\n\n#### Tools\n- Figma\n- Photoshop\n\n#### Challenges\n1. Tight timeline\n2. Lack of UX knowledge\n3. The logic of the complex wireframe\n4. Struggled with the visual\n:::image\nsrc:/assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-challenges_01_en.png\nalt: challenges\ncaption:\nlayout: wide\n:::\n#### Work Process\n1. Player journey map\n2. Paper prototype\n3. Flowchart\n4. Wireframe prototype\n5. Usability testing\n6. UI moodboard\n7. UI visual direction\n8. UI screen redesign\n9. Accessibility testing — color-vision testing\n\n### UX design\n#### Player Journey - The Design Intension\nI reviewed a one-hour playthrough video and spent several hours playing the game myself. Based on these experiences, I mapped out a concise player journey, focusing on key interactions and gameplay flow. My goal was to understand the game’s options and the player's actions throughout the game and identify areas where the experience could be improved.\n\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_playerJourney_01_Sc.png\nalt: Player journey map\ncaption:\nlayout: wide\n:::\n\n#### Paper Prototype\nI isolated the options provided by the game design and created a paper prototype to organize the available screens and prepare for drawing the flowchart.\n\nScreens and options\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_paperprototype_01_Sc.png\nalt: Paper prototype of screens and options\ncaption:\nlayout: wide\n:::\n\n#### Flowchart\nThis process clarified the functional buttons and prompts required on each screen and prepared the work for wireframing. Arrow symbols replace secondary-flow connectors to keep the chart concise and readable. The process also began to reveal the hierarchy among different UI elements.\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_flowchart_01_Sc.png\nalt: Interface flowchart\ncaption:\nlayout: wide\n:::\n\n#### Wireframe Prototype\nAt this stage, a simple prototype made it possible to conduct small-scale user testing.\n[https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down](https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down)\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_01_Sc.png\nalt: Initial wireframe prototype\ncaption:\nlayout: wide\n:::\n\n#### User Testing\nI invited three users to test the prototype, assigned them a set of tasks, and designed a questionnaire. The purpose was to translate their feedback into specific points for improvement.\n\nPrototype:  \n[https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down](https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down)  \nFull test results:  \n[https://www.figma.com/design/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?node-id=1-11&t=aZ56RvApciZYL033-4](https://s177yed7drj.typeform.com/to/VkVNZcIL)  \nOnline questionnaire:  \n[https://s177yed7drj.typeform.com/to/VkVNZcIL](https://s177yed7drj.typeform.com/to/VkVNZcIL)\n\n##### Research Goals\n- Evaluate whether the wireframe communicates information clearly and identify ambiguous details.\n- Determine whether players understand every piece of information in the wireframes and, where they do not, understand why.\n- Ensure that players can enter a match quickly from the home screen.\n- Understand players' opinions of the wireframe layout.\n- Iterate the wireframes based on this usability study.\n\n##### Research Plan\n**Recruitment:**  \n- Target users: PC players aged 16–55\n- Three participants\n- Recruited through online communities and personal contacts\n\n**Tool:**  \n- Figma prototype\n\n**Tasks:**  \n- Move through six wireframe screens: Home, Play, Matchmaking, Finding Game, Hero Select, and in-game HUD.\n\n**Schedule:**  \n- Date: May 2024\n- Questionnaire distributed individually\n\n↓↓↓\n\n##### Questionnaire\n**Observe the Home screen and provide feedback:**  \n1. What do you think about the options on this screen?\n2. What do you think about the layout?\n\n**Enter the Play and Mode Select screens, explore them, complete the following tasks, and leave feedback:**  \n1. Task 1: Can you explain the difference between the two Quick Play options?\n2. Task 2: Imagine that you want to play the Tank role. Interact with the interface to choose that role. Can you complete the process smoothly, and what do you think of it?\n3. What do you think about the layout of these two screens?\n\n**Enter the Finding Game screen and provide feedback:**  \n1. Is the non-interactive information on this screen presented clearly?\n\n**Enter the Hero Select screen, explore it, complete the following tasks, and leave feedback:**  \n1. Task 3: Can you describe the status of your teammates from this screen?\n2. Task 4: Select “Skin C” and continue.\n3. What do you think about the layout of this screen?\n\n**Review the in-game information and provide feedback:**  \n1. What information can you see on this screen?\n2. What do you think about the options shown?\n\n**Thank you for your time — we are almost finished:**  \n1. Do you have any other questions, feedback, or suggestions?\n2. Do you consider yourself a PC player?\n3. Please leave a name or preferred form of address.\n\n↓↓↓\n\n**Synthesized Findings**\n\n| Screen | Player feedback | Improvement |\n| --- | --- | --- |\n| Home | The meaning of Merge Account was unclear, and it felt less important than the other options. | Remove it from the Home screen and move it to Menu → Settings. |\n| Play and matchmaking | The distinction between role-specific matchmaking and open matchmaking was small, and choosing a role required too many steps. | Add compact role-selection controls directly to this screen and remove the following screen. |\n| Finding Game | Players wanted to see which role they had selected so they could change it. | Display the currently selected role here. |\n| Hero Select | The skin-selection control was not prominent enough. | Reposition the Select Skin dropdown. |\n| Hero Select | The teammate list in the upper-right did not include the player's own portrait, which made the player feel excluded from the team. | Add the player's portrait beside their teammates. |\n| Hero Select | The number of heroes shown did not appear scalable. | Change the layout into a scrollable structure. |\n| In-game | The objective-capture information at the top center was unclear. | Redesign the layout of this information. |\n\n#### Wireframe Iteration Based on Testing\n:::columns\nratio: 1:1\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_02.png\nalt: Wireframe redesign 01\ncaption: Home — Remove Merge Account and move it to Menu → Settings\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_03.png\nalt: Wireframe redesign 02\ncaption: Play screen\nlayout: wide\n:::\n:::\n:::\n\n:::columns\nratio: 1:1\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_04.png\nalt: Wireframe redesign 03\ncaption: Matchmaking — Add compact role-selection controls directly to this screen and remove the following screen\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_05.png\nalt: Wireframe redesign 04\ncaption: Finding Game — Display the currently selected role\nlayout: wide\n:::\n:::\n:::\n\n:::columns\nratio: 1:1\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_06.png\nalt: Wireframe redesign 05\ncaption: Hero Select — Reposition the Select Skin dropdown, add the player's portrait beside teammates, and use a scrollable layout\nlayout: wide\n:::\n:::\n:::column\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_07.png\nalt: Wireframe redesign 06\ncaption: In-game HUD — Redesign objective capture information, replacing success and failure icons with differences in graphic scale\nlayout: wide\n:::\n:::\n:::\n\n#### UI Screens\nI referenced the wasteland and American-comic themes in Junker Queen's promotional video, selected several wireframes, and developed them into UI screens.\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_01.png\nalt: UI design 01\ncaption:\nlayout: wide\n:::\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_02.png\nalt: UI design 02\ncaption:\nlayout: wide\n:::\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_03.png\nalt: UI design 03\ncaption:\nlayout: wide\n:::\n\n#### Moodboard\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_moodboard_01.png\nalt: UI moodboard\ncaption:\nlayout: wide\n:::\n\n#### Style Guide\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_styleguide_01.png\nalt: UI style guide\ncaption:\nlayout: wide\n:::\n\n#### UI Component Design\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_componentDesign_01.png\nalt: UI component design\ncaption:\nlayout: wide\n:::\n\n#### Usability Testing — Color-vision Testing\nI used a color-vision testing tool to evaluate the completed interfaces and made small color adjustments based on the results.\n:::image\nsrc: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_usabilityTest_01.png\nalt: Color-vision usability test\ncaption:\nlayout: wide\n:::"
        },
        {
          "slug": "undying-uiart",
          "title": "Selected UI Work from Undying",
          "summary": "A collection of interface designs created for the project",
          "cover": "/assets/projects/undying-uiart/uiart-cover.png",
          "cover_alt": "Selected game interfaces from Undying",
          "home_thumbnail": "/assets/projects/undying-uiart/uiart-cover.png",
          "year": 2022,
          "tags": [
            "game-art",
            "indie-game",
            "game-ui"
          ],
          "published": true,
          "order": 26,
          "body": ":::image\nsrc: /assets/projects/undying-uiart/uiart-cover.png\nalt: The secondary protagonist's abilities, with basic abilities on the left, advanced abilities on the right, and shared details below\ncaption: Secondary protagonist abilities\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-uiart/details/undying_uiart_attributes_01.png\nalt: Base attributes for both protagonists\ncaption: Character attributes\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-uiart/details/undying_uiart_attributes_02.png\nalt: The protagonist's symptom list\ncaption: Protagonist symptoms\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-uiart/details/undying_uiart_cook.png\nalt: Cooking station with ingredient selection on the left, the cooking pot in the center, and output and consumption details on the right\ncaption: Cooking station\nlayout: wide\n:::"
        },
        {
          "slug": "undying-art",
          "title": "A Collection of 2D Art from Undying",
          "summary": "A selection of key visuals, illustrations, and icons created for the game.",
          "cover": "/assets/projects/undying-art/home-cover.png",
          "cover_alt": "Preview of the Undying game art showcase",
          "home_thumbnail": "/assets/projects/undying-art/home-cover.png",
          "year": 2021,
          "tags": [
            "game-art",
            "indie-game"
          ],
          "published": true,
          "order": 30,
          "body": ":::image\nsrc: /assets/projects/undying-art/home-cover.png\nalt: Christmas key visual for Undying\ncaption: Christmas key visual\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_kv_2020winter.png\nalt: Key visual for the 2020 Steam Game Festival Winter Edition\ncaption: 2020 Steam Game Festival Winter Edition\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_opening_01.png\nalt: Color illustration from the animated opening comic showing a car journey\ncaption: Animated opening comic — On the road\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_opening_02.png\nalt: Color illustration from the animated opening comic showing the characters rushing home\ncaption: Animated opening comic — Rushing home\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_opening_03.png\nalt: Color illustration from the animated opening comic showing a barricaded doorway\ncaption: Animated opening comic — Barricading the door\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_icons_01.png\nalt: A collection of full-color game icons\ncaption: Full-color icons\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-art/details/undying_art_icons_02.png\nalt: A collection of monochrome game icons\ncaption: Monochrome icons\nlayout: wide\n:::"
        }
      ]
    },
    "resume": {
      "locale": "en",
      "name": "Tianyun Yang",
      "profile": {
        "title": "Profile",
        "body": "Master’s student in game design with a bachelor’s degree in game art. Experience spans an internationally published mobile title and an indie game with over one million sales. Skilled in restructuring information architecture for complex systems, creating high-fidelity Figma prototypes, and implementing and debugging interfaces in Unity UGUI. Comfortable collaborating across borders in English.\n"
      },
      "education": {
        "title": "Education",
        "items": [
          {
            "id": "education-uppsala",
            "institution": "Uppsala University (QS Top 100)",
            "institution_en": "",
            "qualification": "MA in Game Design",
            "qualification_en": "",
            "date": "2025 – 2026"
          },
          {
            "id": "education-limkokwing",
            "institution": "Limkokwing University",
            "institution_en": "",
            "qualification": "BA (Hons) in Game Art and Development",
            "qualification_en": "",
            "date": "2016 – 2019"
          }
        ]
      },
      "skills": {
        "title": "Skills",
        "groups": [
          {
            "id": "design-tools",
            "label": "Design tools",
            "body": "Figma; Adobe XD; Photoshop; Illustrator; XMind"
          },
          {
            "id": "development-tools",
            "label": "Development",
            "body": "Unity (UGUI); Godot 4"
          },
          {
            "id": "specialties",
            "label": "Focus",
            "body": "Interaction design / Game UI design / 2D art"
          }
        ]
      },
      "experience": {
        "title": "Work and Project Experience",
        "items": [
          {
            "id": "experience-misfig",
            "heading": "Co-founder & Game UI/UX Designer｜Beijing Misfig Technology Co., Ltd.",
            "date": "Mar 2024 – Present",
            "labels": [
              "Information hierarchy",
              "Usability iteration"
            ],
            "body": "Founded an independent visual design studio delivering UI/UX and graphic design services for game and tabletop projects in China and overseas. Led client communication, requirement breakdown, and end-to-end visual delivery.\n\nFor the Chinese-fantasy tabletop RPG Soul Hunter, served as a core creator across the base product and expansion modules. Player testing exposed excessive cognitive load in the character sheet’s information hierarchy, so I iterated the priority, spacing, and visual flow of attributes, skills, and abilities. I also established the visual standards, typography, grid, and colour system, and produced campaign assets including banners, crowdfunding pages, flyers, and display stands. The base project ultimately raised more than RMB 800,000.\n\nAs an independent contractor for an overseas PC title in development, collaborated remotely with a US development team on icon design and asset delivery.\n"
          },
          {
            "id": "experience-ioi",
            "heading": "User Research & Localization Operations Lead｜IOI Gamer",
            "date": "Mar 2023 – Feb 2024",
            "labels": [],
            "body": "Helped launch official China-region operations for an overseas multiplayer game with more than one million sales. Led Simplified Chinese player research through participant observation and semi-structured interviews, producing a localization UX report that identified interaction barriers and supported marketing conversion.\n\nTracked localization usability issues in regular English meetings with the overseas team and drove fixes through release. Built the official social-media presence from zero, including more than 20,000 Bilibili followers in six months, and created cross-platform content strategies that generated millions of impressions and contributed to a 17% increase in China-region Steam revenue over six months.\n"
          },
          {
            "id": "experience-igg",
            "heading": "UI Implementer & UI Designer｜Game of Honor｜IGG Shanghai",
            "date": "Dec 2022 – Mar 2023",
            "labels": [
              "Unity",
              "UI design",
              "Mobile game"
            ],
            "body": "Designed interfaces including monthly-pass and guild-ranking screens. Implemented UI in Unity UGUI, maintained fidelity across devices, collaborated with programmers on responsive adaptation, and resolved text-length issues across localized languages.\n"
          },
          {
            "id": "experience-undying",
            "heading": "Game UI/UX Designer｜Undying｜Beijing Vanimals Games",
            "date": "Aug 2019 – Dec 2022",
            "labels": [
              "Interface design",
              "Steam/PC"
            ],
            "body": "Undying is a single-player post-apocalyptic survival RPG with resource-management systems. As a principal UI/UX designer, led interaction design for inventory management, character attributes, map travel, and other core systems, then iterated usability in response to player feedback and gameplay changes.\n\nTranslated design requirements into clear information architecture and interaction flows; created high-fidelity Figma prototypes and implemented them in Unity; established the game’s UI standards and visual language from zero; designed and implemented inventory, NPC dialogue, skill interfaces, the logo, and the wider visual system.\n"
          }
        ]
      },
      "other_experience": {
        "title": "Additional Experience",
        "items": [
          {
            "id": "other-elvtr",
            "title": "ELVTR coursework",
            "context": "Overwatch 2 case study and Destiny 2 HUD redesign",
            "date": "Mar 2024 – Aug 2025",
            "description": "Completed UI/UX for Games and Advanced UI/UX for Games, including practical Figma projects."
          },
          {
            "id": "other-booomjam",
            "title": "Booomjam 2025",
            "context": "Empty Eye Sockets",
            "date": "May 2025",
            "description": "Led the core mechanic design, created UI and environment art, and implemented UI assets and levels in Unity. The submitted game received a Best Game nomination."
          }
        ]
      },
      "gaming_experience": {
        "title": "Gaming Experience",
        "body": "League of Legends (3,000+ hours on PC); Teamfight Tactics / Golden Spatula (Master rank across PC, mobile, and overseas servers); Apex Legends (150+ hours); Baldur’s Gate 3 (150+ hours); Civilization VI (150+ hours); Don’t Starve (185 hours on PC); completed the Subnautica series; Dead Cells and Hades on mobile; Love and Deepspace (level 80).\n"
      }
    },
    "about": {
      "locale": "en",
      "sections": [
        {
          "id": "about-me",
          "title": "About me",
          "body": "After graduating in 2019, I entered the industry as an artist on an indie game and spent a great deal of time developing my hand-drawing skills. Working in an indie team made me realize that a game needs an interaction designer between the design document and the UI art: someone who translates design decisions into executable solutions for the team while remaining responsible for the player’s final experience, using appropriate testing methods and empathy to create interfaces that are both usable and enjoyable.\n\nThat realization pushed me beyond the comfort of purely visual work. In 2022, I moved into PC game publishing and began to understand the long-term consequences of design decisions through post-launch player feedback, data changes, and version updates. A beautiful interface matters, but the information structure and interaction behind it are just as essential.\n\nIn 2025, I returned to university for a master’s degree in game design, where I systematically studied game design, user experience, and interaction design methods. I have also been exploring how AI-era tools can help organize my past experience into a more structured design practice.\n\nToday, I am beginning again as a game interaction designer. I use information architecture and interaction flows to better empathize with players and help them explore game worlds more smoothly. I am currently expanding my UE5 UMG implementation skills while continuing to analyse the interface systems of open-world games.\n\nBeyond execution, I enjoy documenting design standards, thinking in reusable components, and promoting standardized design documentation within teams. These habits grew from years of collaboration with programmers, artists, and game designers.\n\nTo learn more about my previous experience, please view my résumé or contact me at yangtianyun7@foxmail.com.\n"
        },
        {
          "id": "about-site",
          "title": "About this site",
          "body": "This is the first static portfolio site I have built from scratch with Codex. I designed the prototype in Figma, and the process gave me first-hand experience translating design intent into a technical implementation. It is still a simple work in progress, and I will continue improving it. You are always welcome to stop by.\n"
        }
      ],
      "resume_link_text": "View my résumé",
      "contact_link_text": "Contact me"
    },
    "notes": {
      "locale": "en",
      "page_title": "Notes",
      "translation_missing": "This note is not available in English yet. You have been returned to the English notes list.",
      "filters": {
        "year": "Year",
        "tag": "Tags",
        "all": "All",
        "clear": "Clear filters",
        "empty": "No notes have been published yet."
      },
      "tag_labels": {
        "interaction-design": "Interaction Design",
        "game-design": "Game Design",
        "game-ui": "Game UI",
        "case-study": "Case Study",
        "indie-game": "Indie Game",
        "workflow": "Workflow"
      },
      "entries": [
        {
          "slug": "interaction-flow-review",
          "title": "Designing Interaction Flows Backwards from Player Goals",
          "published_at": "2026-08-18",
          "year": 2026,
          "tags": [
            "interaction-design",
            "case-study"
          ],
          "published": true,
          "body": "## Start with the outcome, not the screen\n\nWhen mapping an interaction, I prefer to write down what the player ultimately wants to accomplish, then work backwards to the actions, information, and feedback the interface must provide. This keeps the flow from becoming a diagram of screens and exposes steps that exist without a player reason to use them.\n\n```mermaid\nflowchart LR\n  A[Player goal] --> B[Choose a key action]\n  B --> C{Are system conditions met?}\n  C -->|Yes| D[Execute and show feedback]\n  C -->|No| E[Explain the cause and recovery]\n  E --> B\n  D --> F[Confirm the next step]\n```\n\n:::image\nsrc: /assets/notes/interaction-flow-review/player-goal-flow.webp\nalt: Hand-drawn flow that works backwards from a player goal through decisions, feedback, and edge cases\ncaption: Define the player goal first, then break down key decisions, system feedback, and recovery paths.\nlayout: wide\n:::\n\n## Every flow should answer four questions\n\n| Check | Question to answer | Common omission |\n| --- | --- | --- |\n| Goal | Why did the player enter this feature? | Describing screens instead of intent |\n| Information | What is needed before the decision? | Critical information appears too late |\n| Feedback | What changed after the input? | Waiting and unavailable states are unclear |\n| Recovery | How can the player continue after failure? | An error without a next step |\n\n1. **What is the goal?** What does the player want when entering the feature, rather than what the product wants to show?\n2. **What information supports the decision?** It should appear before the choice and remain spatially connected to the current action.\n3. **How does the system respond?** Every valid input needs a perceptible state change, especially waiting, failure, and unavailable states.\n4. **How does the player recover?** An exception path should offer a useful next action, not merely an error message.\n\n> The happy path explains how a feature works; the exception path determines whether players trust it.\n\n## Test the smallest complete loop\n\nI compress the first draft into four nodes: intent, action, feedback, and next step. If any connection depends on explanatory copy to make sense, I revisit the information hierarchy or control state. Only after the smallest loop is clear do I add branches, permissions, resource shortages, and interruption recovery.\n\nThe final step is mapping the flow back to screens: each screen owns a clear job, each transition has a reason, and each state is recognizable. The diagram then becomes more than a deliverable—it becomes shared structure for prototypes, copy, and test cases."
        },
        {
          "slug": "visual-drawing-workflow",
          "title": "Mapping Player Tasks with Visual Drawings",
          "published_at": "2026-08-18",
          "year": 2026,
          "tags": [
            "interaction-design",
            "workflow"
          ],
          "published": true,
          "body": "## Why start with a visual drawing\n\nWriting Mermaid too early can lock an exploratory flow into a rigid structure. I first move nodes, branches, and connectors in Obsidian Excalidraw, then decide whether the stable result should remain a hand-drawn diagram or be formalized as Mermaid.\n\n:::drawing\nsrc: /assets/notes/interaction-flow-review/player-goal-flow.webp\nalt: Visual flow connecting a player goal to key decisions, system feedback, and exception recovery\ncaption: This example starts with the player goal and uses movable nodes to compare the happy path with recovery paths. Select the drawing to enlarge it.\nlayout: wide\n:::\n\n## A real Excalidraw → SVG example\n\nThe drawing below comes from `player-task-flow.excalidraw.md` in the repository. Saving in Obsidian overwrites the matching `player-task-flow.excalidraw.svg`; the website build then syncs that current SVG into its public assets. There is no manual copying and no new SVG for every edit.\n\n:::drawing\nsrc: /assets/drawings/notes/visual-drawing-workflow/player-task-flow.excalidraw.svg\nalt: SVG exported from Obsidian Excalidraw with hand-drawn strokes and embedded font styling preserved\ncaption: Real workflow example: version the editable source and current SVG together; the website displays only the synchronized SVG.\nlayout: wide\n:::\n\n## Example: a map navigation flow\n\nThe drawing frames the player's complete task after opening the map instead of merely listing screens. I begin with three core nodes—choose a destination, inspect the route, and confirm the action—then add branches for insufficient resources and unreachable targets. Nodes and connectors remain directly draggable in Excalidraw, without editing code.\n\n| Stage | Work in Excalidraw | Website output |\n| --- | --- | --- |\n| Explore | Add nodes, notes, and connectors | Keep the source unpublished |\n| Refine | Align nodes, simplify branches, add labels | Auto-export SVG or PNG |\n| Publish | Check themes and text sizing | Reference the export in Markdown |\n\n> The `.excalidraw.md` file is the editable source; the website displays its exported SVG or PNG. Keep both files in the project."
        },
        {
          "slug": "game-ui-feedback",
          "title": "Immediate Feedback and Rhythm in Game UI",
          "published_at": "2026-07-26",
          "year": 2026,
          "tags": [
            "game-ui",
            "game-design"
          ],
          "published": true,
          "body": "Sample content for previewing the notes list, exploring how immediate feedback communicates outcomes and maintains interface rhythm."
        },
        {
          "slug": "indie-game-interface-notes",
          "title": "Three Trade-offs in Indie Game Interface Prototypes",
          "published_at": "2026-06-14",
          "year": 2026,
          "tags": [
            "indie-game",
            "interaction-design"
          ],
          "published": true,
          "body": "Sample content for previewing the notes list, summarizing trade-offs between information density, production cost, and visual expression."
        }
      ]
    }
  },
  "homeShowcase": {
    "items": [
      {
        "id": "map",
        "type": "project",
        "image": "/assets/projects/undying-map/home-cover.png",
        "alt": {
          "zh": "《苏醒之路》地图界面重构设计案例",
          "en": "Undying Map Interface Redesign"
        },
        "slot": "featured-left",
        "href": "/work/undying-map"
      },
      {
        "id": "art",
        "type": "project",
        "image": "/assets/projects/undying-art/home-cover.png",
        "alt": {
          "zh": "《苏醒之路》中的一些2d美术汇总",
          "en": "A Collection of 2D Art from Undying"
        },
        "slot": "featured-right",
        "href": "/work/undying-art"
      },
      {
        "id": "skill",
        "type": "snapshot",
        "image": "/assets/home/snapshots/skill-interface.png",
        "alt": {
          "zh": "游戏技能界面设计",
          "en": "Game skill interface design"
        },
        "slot": "snapshot-left-01"
      },
      {
        "id": "wireframe",
        "type": "snapshot",
        "image": "/assets/home/snapshots/inventory-wireframe.png",
        "alt": {
          "zh": "拆解与背包界面线框图",
          "en": "Inventory and dismantling interface wireframe"
        },
        "slot": "snapshot-left-02"
      },
      {
        "id": "illustration",
        "type": "snapshot",
        "image": "/assets/home/snapshots/narrative-illustration.png",
        "alt": {
          "zh": "游戏叙事插画",
          "en": "Game narrative illustration"
        },
        "slot": "snapshot-right-01"
      },
      {
        "id": "icons",
        "type": "snapshot",
        "image": "/assets/home/snapshots/character-icons.png",
        "alt": {
          "zh": "角色头像图标设计",
          "en": "Character portrait icon design"
        },
        "slot": "snapshot-right-02"
      },
      {
        "id": "shovel",
        "type": "decorative",
        "image": "/assets/home/decorations/shovel.png",
        "alt": {
          "zh": "",
          "en": ""
        },
        "slot": "decoration-top"
      },
      {
        "id": "tools",
        "type": "decorative",
        "image": "/assets/home/decorations/tools.png",
        "alt": {
          "zh": "",
          "en": ""
        },
        "slot": "decoration-bottom"
      }
    ],
    "audit": {
      "source_item_count": 8,
      "rendered_item_count": 8,
      "hidden_items": [],
      "unused_managed_assets": [],
      "archived_legacy_assets": [
        "archive/home-legacy/avatar/avatar-base-jpeg.jpeg",
        "archive/home-legacy/avatar/avatar-base-low-resolution.png",
        "archive/home-legacy/avatar/avatar-hover-duplicate.jpeg",
        "archive/home-legacy/avatar/avatar-hover-low-resolution.jpeg",
        "archive/home-legacy/backgrounds/grid-1920x1080.png",
        "archive/home-legacy/backgrounds/grid-480x270.png",
        "archive/home-legacy/project-covers/undying-art-low-resolution.png",
        "archive/home-legacy/project-covers/undying-map-low-resolution.png",
        "archive/home-legacy/reference-captures/home-page-long-capture.png",
        "archive/home-legacy/reference-captures/home-page-narrow-capture.png"
      ]
    }
  }
} as const;
