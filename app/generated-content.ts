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
            "case-study",
            "game-ui"
          ],
          "published": true,
          "order": 10,
          "body": "## 01. 背景与问题\n\n游戏中期加入路径规划与策略性资源管理后，地图迁移从“选择地点并前往”扩展为一条需要连续判断的决策链。旧版界面以固定图片承载地点，既无法清楚反馈路线消耗，也难以继续增加地点。\n\n核心问题不是把更多信息塞进地图，而是让玩家在行动前理解三个问题：**去哪里、要付出什么、是否值得去。**\n\n:::image\nsrc: /assets/projects/undying-map/detail/legacy-map.webp\nalt: 旧版地图以固定画面呈现地点和详情\ncaption: 旧版地图：地点数量、详情层级与画布尺寸互相制约。\nlayout: wide\n:::\n\n## 02. 设计目标\n\n1. 玩家可以逐格规划路线，并实时得知燃料、时间与载具耐久的变化。\n2. 玩家在确认出发前，可以看到目的地资源、危险等级与载具状态。\n3. 地图结构可以通过坐标数据持续增加地点，而不需要重做整张背景图。\n\n> 设计重点从“展示一张地图”转向“支持一次有依据的旅行决策”。\n\n## 03. 核心设计决策\n\n### 3.1 把路径规划变成可见的操作与反馈\n\n玩家使用方向键逐格延伸路线。路径线同时承担方向、可达状态与确认进度三种反馈：正在规划、无法前往、可以前往。资源消耗随每一步即时更新，避免把关键后果推迟到确认之后。\n\n:::image\nsrc: /assets/projects/undying-map/detail/route-planning.webp\nalt: 新版格子地图中的路径规划与目的地详情\ncaption: 路线、消耗和目的地情报在同一操作上下文中同步变化。\nlayout: wide\n:::\n\n### 3.2 按决策顺序分层呈现信息\n\n地图只保留判断当前位置与目标所需的信息；目的地面板负责名称、距离、危险与资源；载具面板负责耐久、燃料、时间、背包和储物空间。玩家可以先快速比较地点，再按需打开更深一层的信息。\n\n:::image\nsrc: /assets/projects/undying-map/detail/vehicle-information.webp\nalt: 载具状态和储物格信息面板\ncaption: 载具状态被前置到出发决策中，减少到达后才发现资源不足的挫败。\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-map/detail/destination-information.webp\nalt: 目的地名称、距离、危险与资源详情面板\ncaption: 目的地信息从身份、风险到收益分层排列。\nlayout: standard\n:::\n\n### 3.3 用数据坐标替代固定地图图片\n\n旧地图把地点画在一张固定尺寸的 PNG 上；新版把地点放入可延伸的格子坐标。新增地图或 DLC 时，只需增加地点数据与相邻关系，不再受单张图片尺寸限制。\n\n:::image\nsrc: /assets/projects/undying-map/detail/travel-flow.webp\nalt: 地图旅行的完整交互流程图\ncaption: 新流程覆盖路线规划、随机地点、载具检查、异常状态与最终出发。\nlayout: wide\n:::\n\n## 04. 验证与反思\n\n- 逐格规划和实时消耗形成了清晰的“操作—反馈”闭环，策划反馈新版更有参与感。\n- 测试中发现左下角的消耗信息仍可能被忽略，后续应把关键变化进一步靠近当前地点或路径终点。\n- 目的地面板覆盖了完整决策信息，但信息密度仍需通过玩家测试继续校准。\n- 数据化格子结构解决了扩展性问题，也为随机地点与后续地图内容留下了空间。\n\n这次重构让我确认：复杂系统界面的核心不是一次呈现所有信息，而是让信息在玩家需要做决定的那一刻出现。"
        },
        {
          "slug": "undying-art",
          "title": "《苏醒之路》游戏美术作品展示",
          "summary": "汇总项目中的角色、场景与界面美术实践，呈现独立游戏视觉风格从探索到落地的过程。",
          "cover": "/assets/projects/undying-art/home-cover.png",
          "cover_alt": "《苏醒之路》游戏美术作品展示预览",
          "home_thumbnail": "/assets/projects/undying-art/home-cover.png",
          "year": 2024,
          "tags": [
            "game-art",
            "indie-game"
          ],
          "published": true,
          "order": 20,
          "body": ""
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
        "indie-game": "独立游戏"
      },
      "entries": [
        {
          "slug": "interaction-flow-review",
          "title": "从玩家目标反推交互流程",
          "published_at": "2026-08-18",
          "year": 2026,
          "tags": [
            "interaction-design",
            "case-study"
          ],
          "published": true,
          "body": "## 从结果开始，而不是从页面开始\n\n做交互流程时，我更愿意先写下玩家最终想完成的事情，再回推界面需要提供的动作、信息与反馈。这样可以避免流程图沦为页面之间的连线，也能更早发现“界面存在，但玩家没有理由使用”的步骤。\n\n:::image\nsrc: /assets/notes/interaction-flow-review/player-goal-flow.webp\nalt: 从玩家目标回推决策、反馈与异常路径的手绘流程示意\ncaption: 先定义玩家目标，再拆解关键决策、系统反馈和失败后的恢复路径。\nlayout: wide\n:::\n\n## 一条流程至少要回答四个问题\n\n1. **目标是什么？** 玩家进入这个功能时想完成什么，而不是产品希望他看见什么。\n2. **做决定需要什么信息？** 信息应在决定之前出现，并与当前动作保持空间上的关联。\n3. **系统如何回应？** 每个有效输入都要有可感知的状态变化，尤其是等待、失败和不可用状态。\n4. **出错后怎么回来？** 异常路径不应该只是一个报错弹窗，还要告诉玩家下一步能做什么。\n\n> 正常路径说明功能如何工作；异常路径决定玩家是否信任这个功能。\n\n## 用最小闭环检查设计\n\n我通常把第一版流程压缩成“意图—动作—反馈—下一步”四个节点。如果其中任何一段需要依赖说明文字才能理解，就回到信息层级或控件状态继续修改。确认最小闭环后，再加入分支、权限、资源不足与中断恢复等边界情况。\n\n最后再把流程映射回页面：每个页面只承担清晰的任务，每次跳转都有理由，每个状态都能被玩家识别。这样产出的流程图不仅是交付物，也会成为原型、文案和测试用例共享的结构。"
        },
        {
          "slug": "game-ui-feedback",
          "title": "游戏 UI 中的即时反馈与节奏",
          "published_at": "2026-07-26",
          "year": 2026,
          "tags": [
            "game-ui",
            "game-design"
          ],
          "published": true,
          "body": "用于预览笔记列表结构的示例内容。讨论即时反馈如何帮助玩家理解操作结果，并维持界面节奏。"
        },
        {
          "slug": "indie-game-interface-notes",
          "title": "独立游戏界面原型的三个取舍",
          "published_at": "2026-06-14",
          "year": 2026,
          "tags": [
            "indie-game",
            "interaction-design"
          ],
          "published": true,
          "body": "用于预览笔记列表结构的示例内容。整理独立游戏界面原型中信息密度、制作成本与表现力之间的取舍。"
        }
      ]
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
            "case-study",
            "game-ui"
          ],
          "published": true,
          "order": 10,
          "body": "## 01. Context and problem\n\nWhen route planning and strategic resource management were introduced mid-production, map travel grew from “select a place and go” into a chain of connected decisions. The old fixed-image map could neither explain route costs clearly nor scale to additional locations.\n\nThe real problem was not fitting more data on the map. It was helping players answer three questions before acting: **Where am I going, what will it cost, and is it worth it?**\n\n:::image\nsrc: /assets/projects/undying-map/detail/legacy-map.webp\nalt: The legacy map presented locations and details on a fixed canvas\ncaption: Legacy map: location count, information hierarchy, and canvas size constrained one another.\nlayout: wide\n:::\n\n## 02. Design goals\n\n1. Let players plan a route tile by tile and see fuel, time, and vehicle durability update immediately.\n2. Show destination resources, danger, and vehicle status before the player confirms travel.\n3. Allow the map to grow through coordinate data without rebuilding a single background image.\n\n> The design focus shifted from “displaying a map” to “supporting an informed travel decision.”\n\n## 03. Core design decisions\n\n### 3.1 Make route planning a visible action–feedback loop\n\nPlayers extend a route one tile at a time with the directional controls. The route line communicates direction, reachability, and confirmation state: planning, unavailable, or ready to travel. Resource costs update with every step so consequences are visible before confirmation.\n\n:::image\nsrc: /assets/projects/undying-map/detail/route-planning.webp\nalt: Route planning and destination details on the redesigned grid map\ncaption: Route, cost, and destination intelligence update within the same interaction context.\nlayout: wide\n:::\n\n### 3.2 Reveal information in decision order\n\nThe map keeps only what is needed to compare the current position and destination. The destination panel owns identity, distance, danger, and resources; the vehicle panel owns durability, fuel, time, inventory, and storage. Players can compare quickly, then reveal deeper information on demand.\n\n:::image\nsrc: /assets/projects/undying-map/detail/vehicle-information.webp\nalt: Vehicle status and storage information panel\ncaption: Vehicle state is brought into the departure decision, reducing surprises after travel begins.\nlayout: wide\n:::\n\n:::image\nsrc: /assets/projects/undying-map/detail/destination-information.webp\nalt: Destination name, distance, danger, and resource panel\ncaption: Destination information is layered from identity and risk to potential reward.\nlayout: standard\n:::\n\n### 3.3 Replace a fixed map image with data coordinates\n\nThe legacy map painted every location into one fixed PNG. The redesign places locations in an extensible coordinate grid. New maps or DLC can add location data and adjacency rules without changing the interface structure.\n\n:::image\nsrc: /assets/projects/undying-map/detail/travel-flow.webp\nalt: Complete interaction flow for map travel\ncaption: The new flow covers route planning, random locations, vehicle checks, exception states, and final departure.\nlayout: wide\n:::\n\n## 04. Validation and reflection\n\n- Tile-by-tile planning and live costs created a clear action–feedback loop; the design team found the new version more participatory.\n- Testing showed that cost feedback in the lower-left area could still be missed, so future iterations should move critical changes closer to the route endpoint.\n- The destination panel covers the full decision chain, but its density still needs calibration through player testing.\n- The data-driven grid solves the scalability problem and creates room for random locations and future map content.\n\nThis redesign reinforced a principle: a complex systems interface should not reveal everything at once; it should reveal the right information when the player needs to decide."
        },
        {
          "slug": "undying-art",
          "title": "Undying Game Art Showcase",
          "summary": "A collection of character, environment, and interface artwork showing how the indie game's visual direction developed from exploration to production.",
          "cover": "/assets/projects/undying-art/home-cover.png",
          "cover_alt": "Preview of the Undying game art showcase",
          "home_thumbnail": "/assets/projects/undying-art/home-cover.png",
          "year": 2024,
          "tags": [
            "game-art",
            "indie-game"
          ],
          "published": true,
          "order": 20,
          "body": ""
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
        "indie-game": "Indie Game"
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
          "body": "## Start with the outcome, not the screen\n\nWhen mapping an interaction, I prefer to write down what the player ultimately wants to accomplish, then work backwards to the actions, information, and feedback the interface must provide. This keeps the flow from becoming a diagram of screens and exposes steps that exist without a player reason to use them.\n\n:::image\nsrc: /assets/notes/interaction-flow-review/player-goal-flow.webp\nalt: Hand-drawn flow that works backwards from a player goal through decisions, feedback, and edge cases\ncaption: Define the player goal first, then break down key decisions, system feedback, and recovery paths.\nlayout: wide\n:::\n\n## Every flow should answer four questions\n\n1. **What is the goal?** What does the player want when entering the feature, rather than what the product wants to show?\n2. **What information supports the decision?** It should appear before the choice and remain spatially connected to the current action.\n3. **How does the system respond?** Every valid input needs a perceptible state change, especially waiting, failure, and unavailable states.\n4. **How does the player recover?** An exception path should offer a useful next action, not merely an error message.\n\n> The happy path explains how a feature works; the exception path determines whether players trust it.\n\n## Test the smallest complete loop\n\nI compress the first draft into four nodes: intent, action, feedback, and next step. If any connection depends on explanatory copy to make sense, I revisit the information hierarchy or control state. Only after the smallest loop is clear do I add branches, permissions, resource shortages, and interruption recovery.\n\nThe final step is mapping the flow back to screens: each screen owns a clear job, each transition has a reason, and each state is recognizable. The diagram then becomes more than a deliverable—it becomes shared structure for prototypes, copy, and test cases."
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
          "zh": "《苏醒之路》游戏美术作品展示",
          "en": "Undying Game Art Showcase"
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
