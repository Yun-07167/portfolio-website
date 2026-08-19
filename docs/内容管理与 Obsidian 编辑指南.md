# 内容管理与 Obsidian 编辑指南

网站内容保存在 content/，图片和视频保存在 public/assets/。不要直接编辑 app/generated-content.ts，它会在启动和构建时自动生成。

## 使用 Obsidian

可以把项目根目录或 content 目录作为 Vault 打开。请使用标准 Markdown，避免 Obsidian 专有的双链图片嵌入语法。网站素材路径统一写成 /assets/...；Obsidian 不一定能直接预览这种网站绝对路径，但浏览器本地预览会显示最终效果。

推荐为每个项目建立独立素材目录：

    public/assets/projects/<slug>/

中英文文档共用素材：

    content/zh/work/projects/<slug>.md
    content/en/work/projects/<slug>.md

同一个 slug 可以只存在于一个语言目录中，也可以在中英文中分别设置发布状态与顺序：项目使用各自的 `published` 和 `order`，笔记使用各自的 `published` 和 `published_at`。若两种语言都存在，则年份、标签、封面路径以及标题层级和媒体素材顺序仍须保持对应；文字、图片 alt 和 caption 可以翻译。

如果项目还被 `content/home-showcase.md` 选作首页项目卡片，则该项目必须同时存在已发布的中英文版本，因为首页展示区在两种语言中共用同一组卡片。

## 标准图片

    ![有意义的替代文本](/assets/projects/example/image.webp)

每张图片必须填写 alt；构建会检查素材是否存在。

## 带说明和布局的图片

    :::image
    src: /assets/projects/example/image.webp
    alt: 图片内容说明
    caption: 页面中显示的图片说明
    layout: wide
    :::

layout 可省略，默认跟随正文宽度；使用 wide 可以显示为宽图。

## 视频

    :::video
    src: /assets/projects/example/demo.mp4
    poster: /assets/projects/example/demo-poster.webp
    captions: /assets/projects/example/demo-captions.vtt
    caption: 交互原型演示
    :::

视频默认使用 controls、playsInline 和 preload metadata，不会在页面载入时下载完整视频。建议始终提供压缩后的 poster，并在有对白或关键信息时提供 WebVTT captions。

## 外部视频嵌入

作品与笔记详情都支持 YouTube、YouTube No-Cookie、Vimeo 和哔哩哔哩：

    :::video_embed
    src: https://www.bilibili.com/video/BV_ID
    title: 地图交互完整演示
    caption: 展示路线选择、资源判断与确认反馈。
    layout: wide
    :::

中英文文档中的 `src`、`title` 和 `caption` 可以完全不同。例如中文版使用哔哩哔哩，英文版使用 YouTube；只需保证两个文档对应位置都使用一个 `:::video_embed` 块。普通分享页链接会自动转换为受限的播放器地址，必须使用 HTTPS。视频默认懒加载、保持 16:9，并允许全屏播放。

## Mermaid 流程图

Obsidian 原生支持 Mermaid。在 Markdown 中插入 `mermaid` 代码块即可同时在 Obsidian 阅读视图和网站中显示：

    ```mermaid
    flowchart LR
      A[打开地图] --> B[规划路线]
      B --> C{资源是否足够}
      C -->|足够| D[确认前往]
      C -->|不足| E[调整路线]
    ```

网站会根据亮暗模式重新着色。读者可以点击流程图打开大图，并使用放大、缩小、复位和关闭按钮。建议节点文字保持简短；非常宽的流程图在正文中可横向滚动。

## Markdown 表格

使用 Obsidian 支持的标准 Markdown 表格：

    | 状态 | 系统反馈 | 玩家下一步 |
    | --- | :---: | ---: |
    | 默认 | 显示当前信息 | 选择目标 |
    | 不可用 | 强调限制原因 | 调整选择 |

第二行控制列对齐：`---` 为左对齐，`:---:` 为居中，`---:` 为右对齐。网站在窄屏上会为表格提供横向滚动，不会压缩到无法阅读。

## Obsidian Excalidraw 可视化绘图

复杂流程图可以用 Obsidian 的 Excalidraw 社区插件拖拽编辑，不需要编写 Mermaid。安装方式：

1. 打开 Obsidian 设置 → 第三方插件，关闭安全模式。
2. 浏览社区插件并安装、启用 `Excalidraw`。
3. 在 Excalidraw 设置的 `Embed & Export` 中启用保存时自动导出 SVG。
4. 把可编辑的 `.excalidraw.md` 放在 `content-drawings/` 中；插件会在旁边覆盖更新同名的 `.excalidraw.svg`。
5. 开发和构建启动前会自动运行 `drawings:sync`，把当前 SVG/PNG/WebP 按原目录结构复制到 `public/assets/drawings/`。

网站使用独立绘图内容块：

    :::drawing
    src: /assets/drawings/projects/example/task-flow.excalidraw.svg
    dark_src: /assets/drawings/projects/example/task-flow.dark.excalidraw.svg
    alt: 玩家任务流程图
    caption: 从选择目标到确认行动的完整路径
    layout: wide
    :::

`dark_src` 可省略；提供后会跟随网站自己的亮暗模式切换，而不是跟随操作系统模式。点击绘图可以打开大图并进行缩放。SVG 最适合流程图；包含大量位图或复杂笔触时可以改用 WebP/PNG。

请不要在网站 Markdown 中直接引用 `.excalidraw.md`。它是编辑源文件，不是浏览器展示素材；发布时应引用同步后的 `/assets/drawings/...` SVG/PNG。

版本控制建议同时提交 `.excalidraw.md` 和当前的 `.excalidraw.svg`，这样源文件可继续编辑，网站构建也始终有确定的导出结果。自动同步到 `public/assets/drawings/` 的副本已被 Git 忽略，不需要重复提交。正常自动导出会覆盖同名 SVG，不会保留每次保存的副本；历史版本由 Git 管理即可。

## 支持的正文格式

- 一级至四级标题
- 普通段落
- 有序和无序列表
- 引用
- 代码块
- Mermaid 流程图
- Excalidraw 导出的可缩放绘图
- Markdown 表格
- 粗体和链接
- 标准图片、图片媒体块、视频媒体块
- 外部视频嵌入（中英文可使用不同链接）

正文不执行 HTML、JavaScript 或 JSX。

## 发布流程

1. 同时编辑中文和英文 Markdown。
2. 把素材放进对应的 public/assets/projects/<slug>/ 或 public/assets/notes/<slug>/。
3. 运行 npm run content:generate 检查字段、素材和双语结构。
4. 运行 npm test 完成构建和页面验证。
5. 提交并部署。

列表卡片会自动链接至 /work/<slug> 或 /notes/<slug>。详情页标题、描述和分享图片由同一份 Markdown 数据生成。
