# 杨天韵 Portfolio

Home vertical slice built from the provided Figma design. It includes a unified animated header, scroll-scrubbed project stack, bounded freeform dragging, language and theme controls, and responsive fallbacks.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## 修改网站文字

网站实际读取 `content/zh` 和 `content/en` 中的 Markdown。请不要编辑 `app/generated-content.ts`，它会在开发和构建前自动重新生成。

- `content/zh/global.md` 与 `content/en/global.md`：Header、Contact 和 Footer。
- `content/zh/home.md` 与 `content/en/home.md`：Home 标题和简介。
- `content/zh/about.md`、`resume.md`、`work.md`、`notes.md`：其他页面内容。
- `content-templates/`：新增 Project 或 Note 时可复制的空白模板，不直接显示在网站上。

提交至 GitHub 的 `main` 分支后，GitHub 会自动构建并检查 Markdown 是否可以正常生成网站。当前 ChatGPT Sites 版本仍需由 Codex 发布；如需完全无人值守发布，需要把托管连接到支持 GitHub 持续部署的平台。
