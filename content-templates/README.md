# 网站内容模板使用说明

这套模板根据 Figma 文件 `PortfolioWebsite` 中 `theSite` 页面现有的四个 Desktop 界面整理：

1. Home
2. Works
3. Resume
4. About

## 你的解析结果需要补充的部分

- Header、Contact、语言/主题切换的辅助文字和 Footer 都是跨页面共享内容，归入 `global.md`。
- Contact 不是独立页面，而是 Header 中可增删、可排序的联系方式列表。每一项包含显示文字、图标和目标链接。
- Home 包含 Hero 标题和 Short description。
- Works 页面在原解析中被遗漏。设计稿显示 5 个可重复的项目卡片，每张卡片包含封面、项目名称和项目简介；链接作为卡片行为配置。
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
│  ├─ resume.md
│  └─ about.md
└─ en/
   ├─ global.md
   ├─ home.md
   ├─ work.md
   ├─ resume.md
   └─ about.md
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

- 中文：[全局内容](zh/global.md)、[Home](zh/home.md)、[Works](zh/work.md)、[Resume](zh/resume.md)、[About](zh/about.md)
- English: [Global](en/global.md), [Home](en/home.md), [Works](en/work.md), [Resume](en/resume.md), [About](en/about.md)

## 本地化策略

- 中文使用 `zh-CN`，英文使用 `en`。
- 两套文件保持完全相同的字段结构和 `id`。
- Header、Footer、按钮辅助文字也必须本地化，不能只翻译页面正文。
- 品牌名、软件名和专有名词可保持原文，但应在两份文件中明确填写。
- 日期可按语言分别书写，例如中文 `2024.3 – 至今`，英文 `Mar 2024 – Present`。
