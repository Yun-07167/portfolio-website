# Design QA — Typography

- Source visual truth: the eight Figma text-style screenshots supplied in the current request.
- Implementation screenshot: `C:\Users\yangt\.codex\visualizations\2026\08\06\019fd5da-e5a8-72e3-bbde-400ffc3bcf42\portfolio-website\qa-fonts.png`
- Implementation URL: `https://yang-tianyun-portfolio.yangtianyun7.chatgpt.site/`
- Viewport: 1264 × 708 CSS px, device scale factor 1.
- State: desktop Home page, light theme, default header.
- Density normalization: source images are Figma inspector captures and were used as numeric type specifications; the implementation screenshot was evaluated at CSS pixel size.

## Full-view comparison evidence

- Browser rendering shows the Swei display/body typography and HarmonyOS navigation typography applied without clipping or unexpected wrapping.
- Page composition, colors, imagery, and copy were intentionally unchanged.

## Focused typography evidence

- Header: Swei B2 Sugar CJK SC, 500, 50px, 60px line height, -2.25px letter spacing.
- Body: Swei B2 Sugar CJK SC, 400, 24px, 36.48px line height, -1.08px letter spacing.
- Navigation/footer: HarmonyOS Sans SC, 400, 16px, 16.48px line height, -0.72px letter spacing.
- Browser font checks returned true for Swei Regular, Swei Medium, and HarmonyOS Regular; `document.fonts.status` returned `loaded`.

## Findings

- No actionable P0/P1/P2 typography mismatch remains against the supplied numeric specifications.
- One existing GSAP console warning about `.site-header` was observed during hydration. It predates and is unrelated to the font change; it does not affect the rendered typography.

## Required fidelity surfaces

- Fonts and typography: passed; family, weight, size, line height, and letter spacing match the supplied specifications.
- Spacing and layout rhythm: unchanged; no new clipping or wrapping observed.
- Colors and visual tokens: unchanged.
- Image quality and asset fidelity: unchanged.
- Copy and content: unchanged.

## Comparison history

- Before: font families were declared without bundled font files; title and body weights were inverted, and navigation used a different fallback family.
- Fix: bundled the three supplied WOFF2 files and mapped display, body, navigation, social links, and footer to the new text tokens.
- After: browser-computed styles and font availability checks match all requested values.

final result: passed

---

# Design QA — About navigation hover

- Source visual truth: user-approved sizing direction in the current task plus `public/assets/about-illustration.svg` (`88 × 56`) and `public/assets/connects-circle.svg` (`82 × 34`).
- Implementation URL: `https://yang-tianyun-portfolio.yangtianyun7.chatgpt.site/`
- Implementation screenshot: unavailable; the in-app browser rendered and exposed layout metrics, but its screenshot command timed out repeatedly.
- Checked viewport: 812 × 731 CSS px, device scale factor 2.
- State: desktop Home page, light theme, About hover.
- Density normalization: browser layout was evaluated in CSS pixels; no raster comparison was possible.

## Focused comparison evidence

- Iteration 1: the illustration was changed from a shared `60 × 60` square with padding to its native `88 × 56` ratio and moved from `top:42px` to `top:48px`.
- Browser metrics showed the illustration ending at y=156 and the ring beginning at y=157, leaving only 1px; this was too tight.
- Iteration 2: the reveal was moved to `top:44px`, producing a target 5px separation between the illustration and the ring.
- The About ring source is `82 × 34`, while the shared ring box was `104 × 40`; contain-fitting therefore reduced its rendered width relative to the `82 × 30` rings.
- Iteration 3: About received a dedicated `104 × 43px` ring box, preserving its source ratio while restoring the intended visual width and slightly strengthening the stroke.

## Required fidelity surfaces

- Fonts and typography: unchanged.
- Spacing and layout rhythm: illustration-to-ring spacing corrected from 1px to approximately 5px.
- Colors and visual tokens: unchanged.
- Image quality and asset fidelity: original SVG assets retained; no stretching or replacement artwork introduced.
- Copy and content: unchanged.

## Findings

- No known code-level or measured P0/P1/P2 mismatch remains in the About hover geometry.
- Final screenshot-based visual comparison remains blocked because the in-app browser could not capture an image after repeated attempts.

final result: blocked

---

# Design QA — Centered stage, expanded drag bounds, and card tilt

- Source visual truth: `C:\Users\yangt\AppData\Local\Temp\codex-clipboard-f29e3f84-201a-44d1-aa9d-8e0151689b8b.png`, together with the user's requested `-3°` to `3°` completed-state rotation.
- Implementation screenshot: `C:\Users\yangt\.codex\visualizations\2026\08\06\019fd5da-e5a8-72e3-bbde-400ffc3bcf42\portfolio-website\audit\centered-drag-tilt-2026-08-11\implementation-2048x1024-assembled-final.png`.
- Combined comparison: `C:\Users\yangt\.codex\visualizations\2026\08\06\019fd5da-e5a8-72e3-bbde-400ffc3bcf42\portfolio-website\audit\centered-drag-tilt-2026-08-11\comparison-source-vs-implementation.png`.
- Viewport: 2048 × 1024 CSS px, device scale factor 1.
- Source and implementation pixels: both 2048 × 1024; no density normalization required before the side-by-side comparison.
- State: desktop Home page, light theme, scroll-completed portfolio stage.

## Full-view comparison evidence

- The drag canvas now measures 2016px wide and begins approximately 8px from the viewport edge at this viewport, matching the requested nearly full-screen working area.
- The two-column composition is centered on the 1024px viewport axis instead of inheriting the previous right-shifted 1280px page-shell axis.
- Each of the eight cards/decorative items has a stable completed-state rotation between -2.4° and 2.7°, producing the requested hand-arranged variation without changing between refreshes.

## Focused interaction evidence

- Dragging the `skill` snapshot toward the far left produced a -657px drag offset and a rendered left edge of approximately 6px, confirming that the widened viewport-relative boundary is active.
- Project cards remain links and are excluded from free dragging; snapshot and decorative cards remain draggable only in the assembled state.
- No browser runtime errors were reported. One pre-existing GSAP hydration warning about `.site-header` remains unrelated to this change.

## Required fidelity surfaces

- Fonts and typography: unchanged.
- Spacing and layout rhythm: passed; card gaps remain unchanged while the full composition is recentered.
- Colors and visual tokens: unchanged.
- Image quality and asset fidelity: passed; original raster assets are preserved without stretching or replacement.
- Copy and content: unchanged.

## Findings

- No actionable P0/P1/P2 mismatch remains for the requested drag boundary, central axis, or completed-state tilt.
- P3: the fixed rotation set can be tuned after subjective review if a specific card feels too lively or too quiet.

## Comparison history

- Before: the drag boundary was tied to a fixed 906px canvas and the composition axis sat about 37px to the right at the 1280px design viewport.
- Iteration 1: expanded the fixed canvas to 1216px and added stable completed-state rotations; visual inspection showed this was still too narrow on a 2048px viewport.
- Iteration 2: changed the stage to a viewport-relative width with 16px nominal side gutters and calculated every card position around the true viewport center.
- After: the 2048px capture shows the canvas spanning nearly the full viewport, the card composition centered, and all requested rotations visible without clipping.

final result: passed
