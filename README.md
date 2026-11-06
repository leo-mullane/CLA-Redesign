# CLA Global redesign: proof of concept

Interactive HTML mock-up of the claglobal.com page furniture and homepage, redesigned with CLA's new design system (Connect mode) and using the CLA Global logo.

## Publishing on GitHub Pages
1. Upload everything in this folder to the root of the repository: `index.html`, `css/`, `js/`, `.nojekyll` and this README.
2. In Settings › Pages, set Source to **Deploy from a branch**, Branch to **main** and the folder to **/ (root)**.
3. The site will be at `https://<account>.github.io/<repo>/`.

## What's in it
- Page furniture: header (with menus and search), mobile navigation, footer, breadcrumb and cookie banner.
- Homepage: every section rebuilt from a design system module. The "Show design system modules" toggle shows which module each section uses.
- A Desktop/Mobile toggle that shows the same page at 1440px and 390px.
- Content is taken unchanged from claglobal.com, and no new back-end functionality is assumed.

## Imagery
Photos, the hero video and the YouTube video load live from claglobal.com, its video CDN and YouTube. If any of them fails to load, a labelled tinted block takes its place.

## Font limitation
The design system specifies **Museo Sans**, a licensed Adobe font. **Nunito Sans** (Google Fonts) stands in for it, so letter shapes and widths differ slightly. Sizes, weights, line heights and spacing follow the design system.
To use the real font, add the CLA Adobe Fonts kit to the `<head>` of `index.html`, for example:
`<link rel="stylesheet" href="https://use.typekit.net/XXXXXXX.css">`
The font stack in `css/styles.css` already lists `museo-sans` first, so it will be used automatically once the kit is in place. The kit must allow the GitHub Pages domain.
