# 网站内容模板使用说明

这套模板根据 Figma 文件 `PortfolioWebsite` 中 `theSite` 页面现有的四个 Desktop 界面整理：

1. Home
2. Works
3. Resume
4. About

模板还为未来的第五个入口 `Notes` 预留了页面和内容结构。

## 你的解析结果需要补充的部分

- Header、Contact、语言/主题切换的辅助文字和 Footer 都是跨页面共享内容，归入 `global.md`。
- Contact 不是独立页面，而是 Header 中可增删、可排序的联系方式列表。每一项包含显示文字、图标和目标链接。
- Home 包含 Hero 标题和 Short description。
- Works 页面在原解析中被遗漏。设计稿显示 5 个可重复的项目卡片，每张卡片包含封面、项目名称和项目简介；链接作为卡片行为配置。
- 每个项目详情页单独使用一个 Markdown 文件。Works 卡片从详情文件的 Front Matter 自动读取标题、简介和封面，因此不重复维护内容。
- Resume 不只是“大标题、小标题、正文、Label”。它包含姓名、栏目标题、条目标题、时间、Label 列表和正文，并允许教育、经历等条目重复增加。
- About 包含两个内容区块：`关于我` 和 `关于本站`；每个区块都有大标题和正文。
- Footer 当前显示版权文字和“返回顶部”的辅助文字。

## 为什么不使用一个大文档

使用一个文档会让中英文、共享内容和页面内容相互干扰。推荐结构是：

```text
content/
├─ zh/
│  ├─ global.md
│  ├─ home.md
│  ├─ work.md
│  ├─ work/projects/[project-slug].md
│  ├─ resume.md
│  ├─ about.md
│  ├─ notes.md
│  └─ notes/[note-slug].md
└─ en/
   ├─ global.md
   ├─ home.md
   ├─ work.md
   ├─ work/projects/[project-slug].md
   ├─ resume.md
   ├─ about.md
   ├─ notes.md
   └─ notes/[note-slug].md
```

## 编辑规则

- 只编辑引号中的文字、`|` 后的正文、链接地址和素材路径。
- 不要修改字段名称，例如 `hero_title`、`sections`、`items`。
- `id` 是中英文对应关系，不显示在网站上；中英文文件中的同一内容必须使用相同 `id`。
- 可重复内容可以复制整个 `- id: ...` 区块进行增加。
- 删除可重复内容时，删除完整区块，不要只删除其中一个字段。
- `href` 和 `icon` 不作为文字显示，但决定按钮跳转和图标素材。
- 中英文内容不互相回退。若英文内容缺失，构建应报错，避免网站出现中英混排。

## 模板入口

- 中文：[全局内容](zh/global.md)、[Home](zh/home.md)、[Works](zh/work.md)、[Project 详情模板](zh/work/projects/project-template.md)、[Resume](zh/resume.md)、[About](zh/about.md)、[Notes](zh/notes.md)、[Note 详情模板](zh/notes/note-template.md)
- English: [Global](en/global.md), [Home](en/home.md), [Works](en/work.md), [Project detail template](en/work/projects/project-template.md), [Resume](en/resume.md), [About](en/about.md), [Notes](en/notes.md), [Note detail template](en/notes/note-template.md)

## Project 详情页规则

- 每个 Project 单独一个 Markdown 文件。
- 中文和英文文件使用相同的 `id` 与 `slug`，分别放在对应语言目录。
- Works 卡片读取详情文件中的 `title`、`summary` 和 `cover`。
- 项目详情正文使用普通 Markdown，可自由增加或删除二级标题。
- `work.md` 只控制卡片顺序，不重复填写项目名称和简介。

## Notes 预留接口

- Header 文案已在 `global.md` 中预留 `notes` 字段。
- 当前 `notes.md` 使用 `status: work-in-progress`，页面只显示 `work in progress`。
- 未来将状态改为 `published` 后，同一页面显示 Notes 网格。
- 每篇 Note 单独一个 Markdown 文件，文件名使用稳定 `slug`。
- 卡片显示 `title`、格式化后的 `published_at` 日期和可选 `thumbnail`。
- 当 `thumbnail` 为素材路径时，卡片使用 `with-thumbnail` 变体。
- 当 `thumbnail: null` 时，卡片使用 `text-only` 变体，不保留空白图片框，标题和日期使用完整卡片空间。
- 两种卡片具有相同网格宽度；高度可以统一，也可以让纯文字卡片跨两行，具体视觉规则在实现页面时确定。

## 本地化策略

- 中文使用 `zh-CN`，英文使用 `en`。
- 两套文件保持完全相同的字段结构和 `id`。
- Header、Footer、按钮辅助文字也必须本地化，不能只翻译页面正文。
- 品牌名、软件名和专有名词可保持原文，但应在两份文件中明确填写。
- 日期可按语言分别书写，例如中文 `2024.3 – 至今`，英文 `Mar 2024 – Present`。
