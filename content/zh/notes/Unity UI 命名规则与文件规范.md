---
slug: unity-ui-naming-conventions
title: Unity UI 命名规则与文件规范
published_at: 2026-08-25
tags:
  - game-ui
  - game-design
  - unity
published: true
---

> 适用范围：Unity移动端项目（横屏/竖屏）
## 一、命名规范

### 1.1 节点命名和层级 game object

采用 **PascalCase + 类型前缀**，确保一眼识别组件类型与职责。

| 前缀 | 含义 | 示例 |
|------|------|------|
| `Pnl` | 面板 / 容器（Panel） | `PnlHeader`, `PnlContent`, `PnlFooter` |
| `Btn` | 按钮（Button） | `BtnBack`, `BtnStart`, `BtnConfirm` |
| `Img` | 图片（Image） | `ImgBg`, `ImgFrame`, `ImgAvatar` |
| `Txt` | 文本（TextMeshPro） | `TxtTitle`, `TxtCount`, `TxtDesc` |
| `Icon` | 图标 | `IconCoin`, `IconDiamond`, `IconBuff` |
| `Scr` | 滚动视图（ScrollRect） | `ScrItemList`, `ScrRank` |
| `Sld` | 滑动条（Slider） | `SldVolume`, `SldProgress` |
| `Bg` | 背景（Background） | `BgHome`, `BgPopup`, `BgMask` |
| `View` | 完整界面根节点 | `View_Home`, `View_Shop` |
| `Popup` | 弹窗根节点 | `Popup_Settings`, `Popup_Confirm` |

**示例结构：**

```
View_Home
├── BgHome
├── PnlHeader
│   ├── BtnBack
│   │   ├── ImgFrame          ← 按钮底板
│   │   └── IconBack          ← 按钮图标
│   ├── TxtTitle
│   └── PnlCurrency
│       ├── ImgFrame
│       ├── IconCoin
│       └── TxtCount
├── PnlContent
│   ├── ScrItemList
│   └── BtnFilter             ← 本界面特有按钮
└── PnlFooter
    ├── BtnTabShop            ← Common_BtnTab 实例
    └── BtnTabBag             ← Common_BtnTab 实例
```

### 1.2 预制体命名 prefab

| 类型 | 前缀 | 示例 |
|------|------|------|
| 通用组件 | `Common_` | `Common_BtnPrimary`, `Common_ItemSlot`, `Common_Toggle` |
| 主界面 | `View_` | `View_Home`, `View_Bag`, `View_Shop` |
| 弹窗 | `Popup_` | `Popup_Settings`, `Popup_Reward` |
| 提示 | `Toast_` | `Toast_Normal`, `Toast_Error` |

### 1.3 素材文件命名 Art 文件夹目录下

**全小写 + 下划线分隔**，结构为：`功能_类型_状态`。

```
btn_primary_normal.png
btn_primary_pressed.png
btn_primary_disabled.png
icon_coin.png
icon_diamond.png
icon_buff_atk.png
frame_dialog.png
frame_toast.png
bg_home.jpg
bg_popup.png
```

---

## 二、素材文件夹结构

```
Assets/
├── Art/
│   └── UI/
│       ├── Common/                 ← 通用素材（按钮、图标、框体）
│       │   ├── Buttons/
│       │   ├── Icons/
│       │   └── Frames/
│       ├── Views/                  ← 按界面分目录
│       │   ├── Home/
│       │   ├── Shop/
│       │   └── Bag/
│       └── Atlas/                  ← 图集输出目录
│           ├── UICommon.spriteatlas
│           └── UIHome.spriteatlas
│
├── Prefabs/
│   └── UI/
│       ├── Common/                 ← 通用 Prefab
│       │   ├── Common_BtnPrimary.prefab
│       │   ├── Common_ItemSlot.prefab
│       │   └── Common_Toggle.prefab
│       ├── Views/                  ← 主界面 Prefab
│       │   ├── View_Home.prefab
│       │   └── View_Shop.prefab
│       └── Popups/                 ← 弹窗 Prefab
│           ├── Popup_Settings.prefab
│           └── Popup_Confirm.prefab
│
└── Scripts/
    └── UI/
        ├── Common/                 ← 通用组件脚本
        ├── Views/                  ← 界面逻辑脚本
        └── Popups/                 ← 弹窗逻辑脚本
```

---

## 三、引擎内组件结构

### 3.1 画布全局分层 canvas

一个场景内建议只保留 **一个 EventSystem**，Canvas 按视觉层级拆分：

```
Canvas_Root (Screen Space - Overlay)
├── BackgroundLayer (Sorting Order: 0)
│   └── 全屏背景、场景过渡遮罩
├── MainLayer (Sorting Order: 10)
│   └── View_Home, View_Shop, View_Bag...
├── PopupLayer (Sorting Order: 20)
│   └── Popup_Settings, Popup_Confirm...
├── ToastLayer (Sorting Order: 30)
│   └── Toast_Normal, Toast_Error...
└── DebugLayer (Sorting Order: 100)
    └── FPS 显示、GM 面板
```

> 每个 Layer 是一个空 GameObject，仅作为容器，挂载 `Canvas` 组件并设置不同的 `Sorting Order`。

### 3.2 单个界面内部结构

```
View_XXX (界面根节点)
├── BgXXX                         ← 背景图（可选）
├── PnlHeader                     ← 顶部区域
│   ├── BtnBack
│   ├── TxtTitle
│   └── ...
├── PnlContent                    ← 内容区域（核心交互区）
│   ├── ScrXXX (滚动列表)
│   └── ...
└── PnlFooter                     ← 底部区域
    ├── BtnTabHome
    ├── BtnTabShop
    └── ...
```

### 3.3 通用组件与特有组件的关系

- **通用组件**：以 Prefab 形式存在于 `Prefabs/UI/Common/`，**不**直接嵌死在某个 View 里。
- **特有组件**：直接挂在当前 View Prefab 下，命名体现界面归属（如 `Home_SpecialBanner`）。
- **实例化后两者在 Hierarchy 中平级**，通用组件修改 Prefab 原型即可全局生效。

---

## 四、导入和拼接 SOP

### 4.1 素材导入（Unity）
1. 所有素材尺寸均为2的倍数，尽量4的倍数；
2. 将 PNG 拖入 `Assets/Art/UI/对应目录/`。
3. 选中素材，Inspector 设置：
   - **Texture Type**：`Sprite (2D and UI)`
   - **Sprite Mode**：`Single`（普通图）或 `Multiple`（图集）
   - **Pixels Per Unit**：`100`（默认）
1. **九宫切分**（仅限边框/底板类素材）：
   - 点击 **Sprite Editor** → 拖动四条绿色切分线。
   - **Border 值必须 ≥ 圆角半径**，确保四角不被拉伸。
   - 点击 **Apply**。
4. **图集打包**（推荐）：将同界面/同类型的 Sprite 放入 Sprite Atlas，减少 Draw Call。

### 4.2 Canvas 创建与配置

#### Step 1：创建 Canvas
- `Hierarchy` 右键 → `UI` → `Canvas`
- **Render Mode**：`Screen Space - Overlay`（手游默认）
- 自动创建的 `EventSystem` 保留一个即可，多余删除。

#### Step 2：配置 Canvas Scaler
选中 Canvas，Inspector 设置 **Canvas Scaler**：

| 属性 | 设置值 | 说明 |
|------|--------|------|
| **UI Scale Mode** | `Scale With Screen Size` | 按屏幕尺寸自动缩放 |
| **Reference Resolution** | `X: 402, Y: 874` | 与设计稿逻辑分辨率一致 |
| **Screen Match Mode** | `Match Width Or Height` | 按宽高比适配 |
| **Match** | 竖屏：`1` (Height) <br> 横屏：`0.5` | 竖屏保高度，横屏取折中 |

> 横屏 Match 设为 0.5 的原因：横屏设备比例跨度大（4:3 ~ 21:9），0.5 可在宽度与高度之间取得平衡，避免单侧过度裁切。

#### Step 3：添加 Game View 屏幕比例预设
- Game View 左上角下拉菜单 → 点击 **+** → **Add**
- 添加以下 **Aspect**（比例）预设：
  - `9:16 Aspect`（矮屏，如 iPhone SE）
  - `9:19.5 Aspect`（主流全面屏 iPhone）
  - `9:20 Aspect`（主流安卓全面屏）
  - `9:21 Aspect`（极端修长屏）
  - `3:4 Aspect`（iPad 竖屏）
  - `4:3 Aspect`（iPad 横屏）
- 开发过程中**频繁切换**不同比例检查 UI 适配情况。

### 4.4 UI 拼接流程

#### Step 1：创建界面根节点
- 在 `MainLayer` 下创建空物体，命名为 `View_XXX`。
- 添加 `RectTransform`，`Anchor Min/Max` 设为 `(0, 0)` / `(1, 1)`，铺满全屏。

#### Step 2：划分功能区域
- 在 `View_XXX` 下创建三个空容器：
  - `PnlHeader`（顶部）
  - `PnlContent`（内容区）
  - `PnlFooter`（底部）
- 用 **Anchor** 固定各区域位置，避免拉伸变形。

#### Step 3：放置通用组件
- 从 `Prefabs/UI/Common/` 拖拽通用 Prefab（如 `Common_BtnPrimary`）到对应区域。
- 实例化后按实际功能重命名（如 `BtnConfirm`）。

#### Step 4：创建特有组件
- 直接创建 Image / Button / Text 等，按命名规范命名。
- 按钮结构示例：
  ```
  BtnConfirm
  ├── ImgFrame          (Image, 按钮底板)
  └── IconConfirm       (Image, 按钮图标)
  ```

#### Step 5：9-Slice 边框设置（如适用）
- 边框 Image 的 **Image Type** 设为 `Sliced`。
- **Fill Center**：
  - 中间有内容 → 勾选
  - 中间镂空 → **取消勾选**

#### Step 6：多比例验证
- 在 Game View 中依次切换已添加的 Aspect 预设。
- 检查：
  - 四角圆角是否变形
  - 中间固定图案是否被拉伸
  - 按钮是否被裁切或重叠
  - 文字是否溢出

---

## 五、常见问题速查（累加中

| 问题                | 原因                           | 解决                                              |
| ----------------- | ---------------------------- | ----------------------------------------------- |
| 9-Slice 圆角被拉扁     | Border 值 < 圆角半径              | Border L/R/T/B ≥ 圆角半径                           |
| 中间镂空区域变形          | 9-Slice 中间区域双向拉伸             | 拆分边框与中间内容，或限制整体比例                               |
| UI 在 Game View 显小 | Reference Resolution 与设计稿不匹配 | 改为设计稿逻辑分辨率                                      |
| Sprite Editor 打不开 | 缺少 2D Sprite 包               | Package Manager → Unity Registry → 安装 2D Sprite |
