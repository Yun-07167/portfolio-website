---
slug: unity-ui-naming-conventions
title: Unity UI Naming Conventions and File Standards
published_at: "2026-08-25"
tags:
  - game-ui
  - game-design
  - unity
published: true
---

> Scope: Unity mobile projects in landscape or portrait orientation.

## 1. Naming Conventions

### 1.1 Node Names and the GameObject Hierarchy

Use **PascalCase with a type prefix** so that each component's type and responsibility can be recognized at a glance.

| Prefix | Meaning | Examples |
|------|------|------|
| `Pnl` | Panel / container | `PnlHeader`, `PnlContent`, `PnlFooter` |
| `Btn` | Button | `BtnBack`, `BtnStart`, `BtnConfirm` |
| `Img` | Image | `ImgBg`, `ImgFrame`, `ImgAvatar` |
| `Txt` | TextMeshPro text | `TxtTitle`, `TxtCount`, `TxtDesc` |
| `Icon` | Icon | `IconCoin`, `IconDiamond`, `IconBuff` |
| `Scr` | ScrollRect | `ScrItemList`, `ScrRank` |
| `Sld` | Slider | `SldVolume`, `SldProgress` |
| `Bg` | Background | `BgHome`, `BgPopup`, `BgMask` |
| `View` | Root node of a complete screen | `View_Home`, `View_Shop` |
| `Popup` | Popup root node | `Popup_Settings`, `Popup_Confirm` |

**Example hierarchy:**

```
View_Home
├── BgHome
├── PnlHeader
│   ├── BtnBack
│   │   ├── ImgFrame          ← button background
│   │   └── IconBack          ← button icon
│   ├── TxtTitle
│   └── PnlCurrency
│       ├── ImgFrame
│       ├── IconCoin
│       └── TxtCount
├── PnlContent
│   ├── ScrItemList
│   └── BtnFilter             ← screen-specific button
└── PnlFooter
    ├── BtnTabShop            ← Common_BtnTab instance
    └── BtnTabBag             ← Common_BtnTab instance
```

### 1.2 Prefab Naming

| Type | Prefix | Examples |
|------|------|------|
| Shared component | `Common_` | `Common_BtnPrimary`, `Common_ItemSlot`, `Common_Toggle` |
| Main screen | `View_` | `View_Home`, `View_Bag`, `View_Shop` |
| Popup | `Popup_` | `Popup_Settings`, `Popup_Reward` |
| Toast | `Toast_` | `Toast_Normal`, `Toast_Error` |

### 1.3 Asset File Naming in the Art Folder

Use **lowercase letters separated by underscores**, following the structure `function_type_state`.

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

## 2. Asset Folder Structure

```
Assets/
├── Art/
│   └── UI/
│       ├── Common/                 ← shared assets: buttons, icons, frames
│       │   ├── Buttons/
│       │   ├── Icons/
│       │   └── Frames/
│       ├── Views/                  ← organized by screen
│       │   ├── Home/
│       │   ├── Shop/
│       │   └── Bag/
│       └── Atlas/                  ← atlas output directory
│           ├── UICommon.spriteatlas
│           └── UIHome.spriteatlas
│
├── Prefabs/
│   └── UI/
│       ├── Common/                 ← shared prefabs
│       │   ├── Common_BtnPrimary.prefab
│       │   ├── Common_ItemSlot.prefab
│       │   └── Common_Toggle.prefab
│       ├── Views/                  ← main-screen prefabs
│       │   ├── View_Home.prefab
│       │   └── View_Shop.prefab
│       └── Popups/                 ← popup prefabs
│           ├── Popup_Settings.prefab
│           └── Popup_Confirm.prefab
│
└── Scripts/
    └── UI/
        ├── Common/                 ← shared component scripts
        ├── Views/                  ← screen logic scripts
        └── Popups/                 ← popup logic scripts
```

---

## 3. In-Engine Component Structure

### 3.1 Global Canvas Layers

A scene should normally contain only **one EventSystem**. Divide Canvases by visual layer:

```
Canvas_Root (Screen Space - Overlay)
├── BackgroundLayer (Sorting Order: 0)
│   └── full-screen backgrounds and transition masks
├── MainLayer (Sorting Order: 10)
│   └── View_Home, View_Shop, View_Bag...
├── PopupLayer (Sorting Order: 20)
│   └── Popup_Settings, Popup_Confirm...
├── ToastLayer (Sorting Order: 30)
│   └── Toast_Normal, Toast_Error...
└── DebugLayer (Sorting Order: 100)
    └── FPS display and GM tools
```

> Each Layer is an empty GameObject used as a container. Attach a `Canvas` component and assign a different `Sorting Order` to each one.

### 3.2 Internal Structure of a Screen

```
View_XXX (screen root)
├── BgXXX                         ← optional background image
├── PnlHeader                     ← top area
│   ├── BtnBack
│   ├── TxtTitle
│   └── ...
├── PnlContent                    ← core interaction area
│   ├── ScrXXX (scrolling list)
│   └── ...
└── PnlFooter                     ← bottom area
    ├── BtnTabHome
    ├── BtnTabShop
    └── ...
```

### 3.3 Relationship Between Shared and Screen-Specific Components

- **Shared components:** Stored as Prefabs under `Prefabs/UI/Common/`; they should not be permanently embedded in one View.
- **Screen-specific components:** Created directly under the current View Prefab, with names that identify the owning screen, such as `Home_SpecialBanner`.
- **After instantiation, both types are peers in the Hierarchy.** Editing the shared Prefab source updates every instance.

---

## 4. Import and Assembly SOP

### 4.1 Importing Assets into Unity

1. Keep every asset dimension divisible by 2, and preferably by 4.
2. Drag PNG files into `Assets/Art/UI/corresponding-directory/`.
3. Select the asset and configure it in the Inspector:
   - **Texture Type:** `Sprite (2D and UI)`
   - **Sprite Mode:** `Single` for a normal image or `Multiple` for a sprite sheet
   - **Pixels Per Unit:** `100` by default
4. **9-slice setup** for frames and backgrounds only:
   - Open **Sprite Editor** and drag the four green slicing guides.
   - The **Border values must be greater than or equal to the corner radius** so the corners are not stretched.
   - Click **Apply**.
5. **Atlas packing, recommended:** Place Sprites from the same screen or category into one Sprite Atlas to reduce draw calls.

### 4.2 Creating and Configuring a Canvas

#### Step 1: Create the Canvas

- In `Hierarchy`, right-click and select `UI` → `Canvas`.
- Set **Render Mode** to `Screen Space - Overlay`, the default choice for mobile games.
- Keep only one automatically created `EventSystem`; delete duplicates.

#### Step 2: Configure Canvas Scaler

Select the Canvas and configure **Canvas Scaler** in the Inspector:

| Property | Value | Description |
|------|------|------|
| **UI Scale Mode** | `Scale With Screen Size` | Scales automatically with screen dimensions |
| **Reference Resolution** | `X: 402, Y: 874` | Matches the design's logical resolution |
| **Screen Match Mode** | `Match Width Or Height` | Adapts according to aspect ratio |
| **Match** | Portrait: `1` (Height); Landscape: `0.5` | Preserve height in portrait and balance width and height in landscape |

> A Match value of 0.5 works well in landscape because landscape devices range widely from 4:3 to 21:9. It balances width and height and prevents excessive cropping on one axis.

#### Step 3: Add Game View Aspect-Ratio Presets

- Open the dropdown in the upper-left corner of Game View, click **+**, and choose **Add**.
- Add these **Aspect** presets:
  - `9:16 Aspect` for shorter screens such as iPhone SE
  - `9:19.5 Aspect` for mainstream full-screen iPhones
  - `9:20 Aspect` for mainstream full-screen Android devices
  - `9:21 Aspect` for extremely tall screens
  - `3:4 Aspect` for iPad portrait
  - `4:3 Aspect` for iPad landscape
- Switch between these presets frequently during development to verify UI adaptation.

### 4.4 UI Assembly Process

#### Step 1: Create the Screen Root

- Create an empty object under `MainLayer` and name it `View_XXX`.
- Add a `RectTransform`, then set Anchor Min/Max to `(0, 0)` / `(1, 1)` to fill the screen.

#### Step 2: Divide Functional Areas

- Create three empty containers under `View_XXX`:
  - `PnlHeader` for the top area
  - `PnlContent` for the content area
  - `PnlFooter` for the bottom area
- Use **Anchors** to fix each area's position and prevent unintended stretching.

#### Step 3: Place Shared Components

- Drag shared Prefabs such as `Common_BtnPrimary` from `Prefabs/UI/Common/` into the appropriate area.
- Rename each instance for its actual function, such as `BtnConfirm`.

#### Step 4: Create Screen-Specific Components

- Create Images, Buttons, and Text directly, following the naming conventions.
- Example button hierarchy:

  ```
  BtnConfirm
  ├── ImgFrame          (Image, button background)
  └── IconConfirm       (Image, button icon)
  ```

#### Step 5: Configure 9-Slice Frames When Applicable

- Set the frame Image's **Image Type** to `Sliced`.
- Configure **Fill Center**:
  - Enable it when the center contains content.
  - Disable it when the center should remain transparent.

#### Step 6: Verify Multiple Aspect Ratios

- Switch through all previously added Aspect presets in Game View.
- Check whether:
  - rounded corners are distorted;
  - fixed artwork in the center is stretched;
  - buttons are clipped or overlap;
  - text overflows.

---

## 5. Common-Issue Reference, Expanded Over Time

| Problem | Cause | Solution |
|------|------|------|
| 9-slice corners are flattened | Border value is smaller than the corner radius | Set Border L/R/T/B greater than or equal to the corner radius |
| Transparent center is distorted | The center of the 9-slice is stretched in two directions | Separate the frame from its center content, or constrain the overall aspect ratio |
| UI looks too small in Game View | Reference Resolution does not match the design | Change it to the design's logical resolution |
| Sprite Editor cannot open | The 2D Sprite package is missing | Open Package Manager → Unity Registry and install 2D Sprite |
