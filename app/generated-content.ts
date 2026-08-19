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
          "dialog_body": "微信二维码尚未配置。添加二维码素材后，只需在本文件中填写 dialog_image。",
          "dialog_image": null
        },
        {
          "id": "email",
          "label": "邮箱",
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
        "indie-game": "独立游戏"
      },
      "projects": [
        {
          "slug": "undying-map",
          "title": "《苏醒之路》地图界面重构设计案例",
          "summary": "重构地图迁移流程与区域信息层级，帮助玩家更清晰地判断目的地、资源与行动成本。",
          "cover": "/assets/projects/undying-map/home-cover.png",
          "cover_alt": "《苏醒之路》地图界面重构设计预览",
          "home_thumbnail": "/assets/projects/undying-map/home-cover.png",
          "year": 2026,
          "tags": [
            "interaction-design",
            "game-ui",
            "indie-game"
          ],
          "published": true,
          "order": 10,
          "body": "## 1. 背景与问题\r\n\r\n游戏中期加入路径规划机制和策略性资源管理玩法后，地图迁移的用户体验流程扩展了。  \r\n旧版界面无法支撑新增的路径规划功能。\r\n\r\n:::columns\r\nratio: 1:1\r\n\r\n:::column\r\n:::image\r\nsrc: /assets/projects/undying-map/details/legacy-map.webp\r\nalt: 旧版地图以固定画面呈现地点和详情\r\ncaption: 旧版本设计稿截图\r\nlayout: wide\r\n:::\r\n:::\r\n:::column\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_userflow_sc_01.png\r\nlocalized: true\r\nalt: 旧版地图以固定画面呈现地点和详情\r\ncaption: 新旧流程对比\r\nlayout: wide\r\n:::\r\n:::\r\n:::\r\n\r\n| 新系统需求                               | 旧界面                   | 缺口               |\r\n| ----------------------------------- | --------------------- | ---------------- |\r\n| 玩家手动规划路径并实时观察消耗变化                   | 无路径规划交互框架             | 信息不足（可用性问题）      |\r\n| 玩家在出发前评估载具储物格是否足够                   | 无储物状态反馈               | 交互模式缺失（易用性问题）    |\r\n| 地图上会有一些随机地点出现，每次打开地图都不一样，玩家可以选择是否前往 | 无随机事件处理逻辑             | 交互模式缺失（易用性问题）    |\r\n| 未来新增可探索的地图数量不确定，可能会有DLC             | 地图有边界，所有地点都在一张大的png图上 | 地点数量无法扩展（可拓展性问题） |\r\n\r\n## 02. 设计目标\r\n\r\n**目标一：玩家可以得知当前路径的消耗**\r\n玩家可以通过方向键逐格点选规划路线，实时观察消耗数值变化，并在途中自主决定是否探索隐藏地点。\r\n\r\n**目标二：玩家可以得知做选择所需要的信息**\r\n在玩家点击\"确定前往\"前，界面已提供完整的目的地情报（资源、危险等级等）与载具状态（剩余储物格、消耗耐久、燃料等）。\r\n\r\n**目标三：地图可承载更多新增地点**\r\n\r\n## 03. 核心设计决策\r\n\r\n### 3.1 把路径规划变成可见的操作与反馈\r\n\r\n玩家通过方向键逐格移动一条带箭头的路径线，在格子地图上实时探索。\r\n\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_status_sc_01.png\r\nlocalized: true\r\nalt: 新版格子地图中的路径规划与目的地详情\r\ncaption: \r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-map/details/route-planning.webp\r\nalt: 新版格子地图中的路径规划与目的地详情\r\ncaption: 新版设计预览\r\nlayout: wide\r\n:::\r\n\r\n### 3.2 信息呈现\r\n###### 新地图流程图\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_userflow_sc_02.png\r\nalt: 新版流程\r\ncaption: 新版流程\r\nlayout: wide\r\n:::\r\n\r\n:::columns\r\nratio: 1:1\r\n\r\n:::column\r\n###### 载具信息\r\n规划到某地点时，消耗的信息（车辆耐久、汽油、时间）实时变化；且玩家可以选择打开载具储物格查看当前栏位。\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_vehicle_01.png\r\nalt: 载具状态和储物格信息面板\r\ncaption: 载具状态被前置到出发决策中，减少到达后才发现资源不足的挫败。\r\nlayout: wide\r\n:::\r\n:::\r\n\r\n:::column\r\n###### 目标地点信息\r\n目标地点信息分层显示，从上到下依次为：  \r\n地点名称和距离/方位、地点图片（分为已解锁地点和未解锁地点两种状态）、该地危险等级、该地资源、该地描述文字。\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_destinationInfo_01.png\r\nalt: 目的地名称、距离、危险与资源详情面板\r\ncaption: 目的地信息从身份、风险到收益分层排列。\r\nlayout: standard\r\n:::\r\n:::\r\n:::\r\n### 3.3 用数据坐标替代固定地图图片\r\n\r\n旧地图把地点画在一张固定尺寸的 PNG 上；新版把地点放入可延伸的格子坐标。新增地图或 DLC 时，只需增加地点数据与相邻关系，不再受单张图片尺寸限制。\r\n\r\n:::columns\r\nratio: 1:1\r\n\r\n:::column\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_oldversion_01.png\r\nalt: 旧版设计稿截图\r\ncaption: 旧版设计稿截图\r\nlayout: wide\r\n:::\r\n:::\r\n\r\n:::column\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_newversion_01.png\r\nalt: 新版设计稿截图\r\ncaption: 新版设计稿截图\r\nlayout: wide\r\n:::\r\n:::\r\n:::\r\n## 04. 验证与反思\r\n\r\n**对于目标一：玩家可以得知当前路径的消耗**\r\n- 方向键逐格点选 + 左下角实时消耗显示，实现了\"操作 + 反馈\"的闭环；\r\n- 策划反馈：新版比以前系统更有参与感；\r\n- 迭代：玩家测试表明，左下角实时消耗较为难以被注意到，后续增添了在地点图标四周以图标+数值的形式显示的消耗提示。\r\n\r\n**对于目标二：玩家知道做选择所需要的信息**\r\n- 信息分步呈现的策略在设计上覆盖了完整决策链路（查地点→看资源→确认储物→出发）；\r\n- 载具储物格通过数值形式前置显示，玩家也可自行打开储物栏查看载具内具体的物品数量，一定程度上可以避免\"出发后才发现储物格不够\"的挫败场景；\r\n- 右侧地点详情面板的信息密度是否过高，缺乏玩家反馈；\r\n\r\n**对于目标三：地图可承载更多新增地点**\r\n- 格子系统支持通过坐标数据动态添加地点，无需修改界面结构；\r\n- 相比旧版固定PNG，扩展性问题已解决；\r\n\r\n*本项目美术素材均为原创；部分地点截图为游戏场景截图*"
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
            "indie-game"
          ],
          "published": true,
          "order": 25,
          "body": ":::image\r\nsrc: /assets/projects/undying-uiart/details/undying_uiart_skills.png\r\nalt: 副主角技能，左侧是基础技能，右侧是进阶技能，下方共用详细说明\r\ncaption: 副主角技能\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-uiart/details/undying_uiart_attributes_01.png\r\nalt: 双主角的基础属性\r\ncaption: 人物属性\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-uiart/details/undying_uiart_attributes_02.png\r\nalt: 主角的症状列表\r\ncaption: 主角症状\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-uiart/details/undying_uiart_cook.png\r\nalt: 料理台，左侧选择食材，加入中间的锅里，右侧是产出与消耗信息\r\ncaption: 料理台\r\nlayout: wide\r\n:::"
        },
        {
          "slug": "undying-art",
          "title": "《苏醒之路》中的一些2d美术汇总",
          "summary": "包含kv、插画图标等",
          "cover": "/assets/projects/undying-art/home-cover.png",
          "cover_alt": "《苏醒之路》游戏美术作品展示预览",
          "home_thumbnail": "/assets/projects/undying-art/home-cover.png",
          "year": 2022,
          "tags": [
            "game-art",
            "indie-game"
          ],
          "published": true,
          "order": 30,
          "body": ":::image\r\nsrc: /assets/projects/undying-art/details/undying_art_kv.png\r\nalt: 圣诞节KV\r\ncaption: 圣诞节KV\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_kv_2020winter.png\r\nalt: 2020年steam冬日新品节\r\ncaption: 2020年steam冬日新品节\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_opening_01.png\r\nalt: 开场动态漫彩插\r\ncaption: 开场动态漫彩插-开车\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_opening_02.png\r\nalt: 开场动态漫彩插\r\ncaption: 开场动态漫彩插-飞奔回家\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_opening_03.png\r\nalt: 开场动态漫彩插\r\ncaption: 开场动态漫彩插-堵门\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_icons_01.png\r\nalt: 彩色图标\r\ncaption: 彩色图标\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_icons_02.png\r\nalt: 单色图标\r\ncaption: 单色图标\r\nlayout: wide\r\n:::"
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
          "dialog_body": "The WeChat QR code has not been added yet. Once the image is ready, only dialog_image in this file needs to be updated.",
          "dialog_image": null
        },
        {
          "id": "email",
          "label": "Email",
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
        "indie-game": "Indie Game"
      },
      "projects": [
        {
          "slug": "undying-map",
          "title": "Undying Map Interface Redesign",
          "summary": "A redesign of the map travel flow and regional information hierarchy, helping players compare destinations, resources, and action costs more clearly.",
          "cover": "/assets/projects/undying-map/home-cover.png",
          "cover_alt": "Preview of the Undying map interface redesign",
          "home_thumbnail": "/assets/projects/undying-map/home-cover.png",
          "year": 2026,
          "tags": [
            "interaction-design",
            "game-ui",
            "indie-game"
          ],
          "published": true,
          "order": 10,
          "body": "## 1. Context and Problem\r\n\r\nWhen route planning and strategic resource management were introduced mid-production, the map travel experience expanded significantly.  \r\nThe previous interface could not support the new route-planning features.\r\n\r\n:::columns\r\nratio: 1:1\r\n\r\n:::column\r\n:::image\r\nsrc: /assets/projects/undying-map/details/legacy-map.webp\r\nalt: The legacy map presented locations and details on a fixed canvas\r\ncaption: Previous design mockup\r\nlayout: wide\r\n:::\r\n:::\r\n:::column\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_userflow_en_01.png\r\nlocalized: true\r\nalt: User flow for the previous map interface\r\ncaption: Comparison of the previous and redesigned flows\r\nlayout: wide\r\n:::\r\n:::\r\n:::\r\n\r\n| New system requirement | Previous interface | Gap |\r\n| --- | --- | --- |\r\n| Let players plan a route manually and observe cost changes in real time | No route-planning interaction framework | Insufficient information (usability issue) |\r\n| Let players evaluate whether the vehicle has enough storage before departure | No storage-state feedback | Missing interaction pattern (ease-of-use issue) |\r\n| Show randomized locations whenever the map opens and let players decide whether to visit them | No logic for handling random events | Missing interaction pattern (ease-of-use issue) |\r\n| Support an unknown number of future maps and possible DLC | The bounded map places every location on one large PNG | Location count cannot scale (extensibility issue) |\r\n\r\n## 02. Design goals\r\n\r\n**Goal 1: Help players understand the cost of the current route**\r\nPlayers can select a route tile by tile with the directional controls, observe cost values changing in real time, and decide whether to explore hidden locations along the way.\r\n\r\n**Goal 2: Give players the information required to make a decision**\r\nBefore selecting “Confirm Travel,” players can review complete destination intelligence—such as resources and danger—as well as vehicle status, including remaining storage, durability cost, and fuel.\r\n\r\n**Goal 3: Allow the map to support more locations**\r\n\r\n## 03. Core design decisions\r\n\r\n### 3.1 Make route planning a visible action–feedback loop\r\n\r\nPlayers use the directional controls to move an arrowed route line one tile at a time while exploring the grid map.\r\n\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_status_en_01.png\r\nlocalized: true\r\nalt: Route-planning states and destination details in the redesigned grid map\r\ncaption:\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-map/details/route-planning.webp\r\nalt: Route planning and destination details on the redesigned grid map\r\ncaption: Preview of the redesigned interface\r\nlayout: wide\r\n:::\r\n\r\n### 3.2 Information Presentation\r\n\r\n###### New Map User Flow\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_userflow_sc_02.png\r\nalt: User flow for the redesigned map\r\ncaption: Redesigned user flow\r\nlayout: wide\r\n:::\r\n\r\n:::columns\r\nratio: 1:1\r\n\r\n:::column\r\n###### Vehicle Information\r\nWhen a player plans a route to a destination, vehicle durability, fuel, and time costs update in real time. The player can also open the vehicle storage panel to inspect the available slots.\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_vehicle_01.png\r\nalt: Vehicle status and storage information panel\r\ncaption: Vehicle status is brought into the departure decision, reducing the frustration of discovering insufficient storage after setting out.\r\nlayout: wide\r\n:::\r\n:::\r\n\r\n:::column\r\n###### Destination Information\r\nDestination information is presented in layers from top to bottom:  \r\nname and distance/direction; location image in locked or unlocked state; danger level; available resources; and a short location description.\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_destinationInfo_01.png\r\nalt: Destination name, distance, danger, and resource panel\r\ncaption: Destination information is layered from identity and risk to potential reward.\r\nlayout: standard\r\n:::\r\n:::\r\n:::\r\n\r\n### 3.3 Replace a fixed map image with data coordinates\r\n\r\nThe previous map painted every location onto one fixed-size PNG. The redesign places locations on an extensible coordinate grid. New maps or DLC can add location data and adjacency rules without being constrained by a single image.\r\n\r\n:::columns\r\nratio: 1:1\r\n\r\n:::column\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_oldversion_01.png\r\nalt: Previous map design mockup\r\ncaption: Previous design\r\nlayout: wide\r\n:::\r\n:::\r\n\r\n:::column\r\n:::image\r\nsrc: /assets/projects/undying-map/details/undying-map_newversion_01.png\r\nalt: Redesigned map interface mockup\r\ncaption: Redesigned interface\r\nlayout: wide\r\n:::\r\n:::\r\n:::\r\n\r\n## 04. Validation and reflection\r\n\r\n**Goal 1: Help players understand the cost of the current route**\r\n- Tile-by-tile directional input and live costs in the lower-left corner created a complete action–feedback loop.\r\n- The design team felt that the redesigned system offered more player participation.\r\n- Playtesting showed that the live cost display in the lower-left corner was easy to miss. A later iteration added icon-and-value cost indicators around each location marker.\r\n\r\n**Goal 2: Give players the information required to make a decision**\r\n- Progressive disclosure covers the complete decision chain: inspect a destination, review its resources, confirm storage, and depart.\r\n- Vehicle storage is surfaced numerically before departure, while players can still open the storage panel to inspect individual items. This helps prevent the frustration of discovering insufficient capacity after setting out.\r\n- The information density of the destination panel still needs further player feedback.\r\n\r\n**Goal 3: Allow the map to support more locations**\r\n- The grid system can add locations dynamically through coordinate data without changing the interface structure.\r\n- Compared with the previous fixed PNG, the extensibility limitation has been resolved.\r\n\r\n*All artwork in this project is original; some location images are screenshots from the game.*"
        },
        {
          "slug": "undying-art",
          "title": "A Collection of 2D Art from Undying",
          "summary": "A selection of key visuals, illustrations, and icons created for the game.",
          "cover": "/assets/projects/undying-art/home-cover.png",
          "cover_alt": "Preview of the Undying game art showcase",
          "home_thumbnail": "/assets/projects/undying-art/home-cover.png",
          "year": 2022,
          "tags": [
            "game-art",
            "indie-game"
          ],
          "published": true,
          "order": 30,
          "body": ":::image\r\nsrc: /assets/projects/undying-art/details/undying_art_kv.png\r\nalt: Christmas key visual for Undying\r\ncaption: Christmas key visual\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_kv_2020winter.png\r\nalt: Key visual for the 2020 Steam Game Festival Winter Edition\r\ncaption: 2020 Steam Game Festival Winter Edition\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_opening_01.png\r\nalt: Color illustration from the animated opening comic showing a car journey\r\ncaption: Animated opening comic — On the road\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_opening_02.png\r\nalt: Color illustration from the animated opening comic showing the characters rushing home\r\ncaption: Animated opening comic — Rushing home\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_opening_03.png\r\nalt: Color illustration from the animated opening comic showing a barricaded doorway\r\ncaption: Animated opening comic — Barricading the door\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_icons_01.png\r\nalt: A collection of full-color game icons\r\ncaption: Full-color icons\r\nlayout: wide\r\n:::\r\n\r\n:::image\r\nsrc: /assets/projects/undying-art/details/undying_art_icons_02.png\r\nalt: A collection of monochrome game icons\r\ncaption: Monochrome icons\r\nlayout: wide\r\n:::"
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
          "body": "## Start with the outcome, not the screen\r\n\r\nWhen mapping an interaction, I prefer to write down what the player ultimately wants to accomplish, then work backwards to the actions, information, and feedback the interface must provide. This keeps the flow from becoming a diagram of screens and exposes steps that exist without a player reason to use them.\r\n\r\n```mermaid\r\nflowchart LR\r\n  A[Player goal] --> B[Choose a key action]\r\n  B --> C{Are system conditions met?}\r\n  C -->|Yes| D[Execute and show feedback]\r\n  C -->|No| E[Explain the cause and recovery]\r\n  E --> B\r\n  D --> F[Confirm the next step]\r\n```\r\n\r\n:::image\r\nsrc: /assets/notes/interaction-flow-review/player-goal-flow.webp\r\nalt: Hand-drawn flow that works backwards from a player goal through decisions, feedback, and edge cases\r\ncaption: Define the player goal first, then break down key decisions, system feedback, and recovery paths.\r\nlayout: wide\r\n:::\r\n\r\n## Every flow should answer four questions\r\n\r\n| Check | Question to answer | Common omission |\r\n| --- | --- | --- |\r\n| Goal | Why did the player enter this feature? | Describing screens instead of intent |\r\n| Information | What is needed before the decision? | Critical information appears too late |\r\n| Feedback | What changed after the input? | Waiting and unavailable states are unclear |\r\n| Recovery | How can the player continue after failure? | An error without a next step |\r\n\r\n1. **What is the goal?** What does the player want when entering the feature, rather than what the product wants to show?\r\n2. **What information supports the decision?** It should appear before the choice and remain spatially connected to the current action.\r\n3. **How does the system respond?** Every valid input needs a perceptible state change, especially waiting, failure, and unavailable states.\r\n4. **How does the player recover?** An exception path should offer a useful next action, not merely an error message.\r\n\r\n> The happy path explains how a feature works; the exception path determines whether players trust it.\r\n\r\n## Test the smallest complete loop\r\n\r\nI compress the first draft into four nodes: intent, action, feedback, and next step. If any connection depends on explanatory copy to make sense, I revisit the information hierarchy or control state. Only after the smallest loop is clear do I add branches, permissions, resource shortages, and interruption recovery.\r\n\r\nThe final step is mapping the flow back to screens: each screen owns a clear job, each transition has a reason, and each state is recognizable. The diagram then becomes more than a deliverable—it becomes shared structure for prototypes, copy, and test cases."
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
          "body": "## Why start with a visual drawing\r\n\r\nWriting Mermaid too early can lock an exploratory flow into a rigid structure. I first move nodes, branches, and connectors in Obsidian Excalidraw, then decide whether the stable result should remain a hand-drawn diagram or be formalized as Mermaid.\r\n\r\n:::drawing\r\nsrc: /assets/notes/interaction-flow-review/player-goal-flow.webp\r\nalt: Visual flow connecting a player goal to key decisions, system feedback, and exception recovery\r\ncaption: This example starts with the player goal and uses movable nodes to compare the happy path with recovery paths. Select the drawing to enlarge it.\r\nlayout: wide\r\n:::\r\n\r\n## A real Excalidraw → SVG example\r\n\r\nThe drawing below comes from `player-task-flow.excalidraw.md` in the repository. Saving in Obsidian overwrites the matching `player-task-flow.excalidraw.svg`; the website build then syncs that current SVG into its public assets. There is no manual copying and no new SVG for every edit.\r\n\r\n:::drawing\r\nsrc: /assets/drawings/notes/visual-drawing-workflow/player-task-flow.excalidraw.svg\r\nalt: SVG exported from Obsidian Excalidraw with hand-drawn strokes and embedded font styling preserved\r\ncaption: Real workflow example: version the editable source and current SVG together; the website displays only the synchronized SVG.\r\nlayout: wide\r\n:::\r\n\r\n## Example: a map navigation flow\r\n\r\nThe drawing frames the player's complete task after opening the map instead of merely listing screens. I begin with three core nodes—choose a destination, inspect the route, and confirm the action—then add branches for insufficient resources and unreachable targets. Nodes and connectors remain directly draggable in Excalidraw, without editing code.\r\n\r\n| Stage | Work in Excalidraw | Website output |\r\n| --- | --- | --- |\r\n| Explore | Add nodes, notes, and connectors | Keep the source unpublished |\r\n| Refine | Align nodes, simplify branches, add labels | Auto-export SVG or PNG |\r\n| Publish | Check themes and text sizing | Reference the export in Markdown |\r\n\r\n> The `.excalidraw.md` file is the editable source; the website displays its exported SVG or PNG. Keep both files in the project."
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
        "/assets/archive/home-legacy/avatar/avatar-base-jpeg.jpeg",
        "/assets/archive/home-legacy/avatar/avatar-base-low-resolution.png",
        "/assets/archive/home-legacy/avatar/avatar-hover-duplicate.jpeg",
        "/assets/archive/home-legacy/avatar/avatar-hover-low-resolution.jpeg",
        "/assets/archive/home-legacy/backgrounds/grid-1920x1080.png",
        "/assets/archive/home-legacy/backgrounds/grid-480x270.png",
        "/assets/archive/home-legacy/project-covers/undying-art-low-resolution.png",
        "/assets/archive/home-legacy/project-covers/undying-map-low-resolution.png",
        "/assets/archive/home-legacy/reference-captures/home-page-long-capture.png",
        "/assets/archive/home-legacy/reference-captures/home-page-narrow-capture.png"
      ]
    }
  }
} as const;
