# CLA Global redesign: full prototype

Interactive HTML prototype of every claglobal.com page layout, component and page furniture item, redesigned with CLA's new design system (Connect mode) and using the CLA Global logo.

## Publishing on GitHub Pages
1. Upload everything in this folder to the root of the repository: all the `.html` files, `css/`, `js/`, `.nojekyll` and this README. If the repository already holds the proof of concept, replace its files with these.
2. In Settings › Pages, set Source to **Deploy from a branch**, Branch to **main** and the folder to **/ (root)**.
3. The site will be at `https://<account>.github.io/<repo>/`.

## What's in it
| File | What it shows |
|---|---|
| `index.html` | ClerksWell-branded overview, with links to everything below (styles in `css/clerkswell.css`, logo in `img/`) |
| `home.html` | L1 Homepage |
| `why-cla-global.html` | L2 Modular landing page (Why CLA Global?) |
| `advisory.html` | L3 Service page (Advisory) |
| `contact.html` | L4 Form page (Contact Us and Join CLA Global) |
| `insights.html` | L5 Article listing (Insights; Media is the same) |
| `article.html` | L6 Article detail |
| `leadership.html` | L7 Team listing |
| `profile.html` | L8 Person profile |
| `firms.html` | L9 Firm directory |
| `firm-detail.html` | L10 Member firm detail |
| `legal.html` | L11 Legal and utility pages, plus the 404 page |
| `search.html` | L12 Search results |
| `campaign.html` | L13 Campaign landing page |
| `components.html` | Every component (C1–C29) and furniture item (F1–F5) with all its variants on one page |
| `furniture.html` | Page furniture open states: menus, search, mobile navigation, cookie banner |

Every page has a page picker, a Desktop/Mobile toggle (1440px and 390px) and a "Show design system modules" toggle. Codes (L, C, F) match the inventory and the design system mapping spreadsheet. Content is taken from claglobal.com as it is today (long pages are excerpted), and no new back-end functionality is assumed.

## Imagery
Photos, the hero video and the YouTube video load live from claglobal.com, its video CDN and YouTube. If any of them fails to load, a labelled tinted block takes its place.

## Font limitation
The design system specifies **Museo Sans**, a licensed Adobe font. **Nunito Sans** (Google Fonts) stands in for it, so letter shapes and widths differ slightly. Sizes, weights, line heights and spacing follow the design system.
To use the real font, add the CLA Adobe Fonts kit to the `<head>` of every `.html` file, for example:
`<link rel="stylesheet" href="https://use.typekit.net/XXXXXXX.css">`
The font stack in `css/styles.css` already lists `museo-sans` first, so it will be used automatically once the kit is in place. The kit must allow the GitHub Pages domain.
