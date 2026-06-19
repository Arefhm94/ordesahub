# Feature: Replace "Coming Soon" with MapFetcher Landing Page

## Context

Replace the "Coming Soon" card on the OrdesaHub homepage with a clickable
MapFetcher project card that links to a dedicated landing page describing
the tool.

The MapFetcher project lives at `/Users/arefmoalemi/Documents/Github/extract_geo_data`
and is deployed at `https://mapfetcher.ordesahub.com/`.

## Prerequisite

Before implementing the UI, read through all context files in
`/Users/arefmoalemi/Documents/Github/extract_geo_data/context/` and create
a summary document at `context/mapfetcher.md` capturing what MapFetcher
does, its tech stack, and its key features. This research step ensures the
landing page content is accurate.

## Requirements

### Homepage card (replaces "Coming Soon")
- Same card style / dimensions as the Kiko card to keep the grid visually
  balanced — use `bg-card/50 border`, rounded corners, hover lift effect.
- Card content: MapFetcher icon/app logo, title "MapFetcher", short tagline
  describing the tool (interactive 3D map viewer with GeoJSON/OBJ export).
- Link to `/mapfetcher/` (the new landing page).

### Landing page at `src/routes/mapfetcher/+page.svelte`
- Hero: full-width intro with the project name, tagline, and screenshot or
  mockup of the map interface.
- Feature section: list what MapFetcher does (3D buildings, terrain, bbox
  export, contour lines, etc.) — use the same showcase pattern as the Kiko
  page (alternating image + text sections).
- Call to action: prominent button linking to `https://mapfetcher.ordesahub.com/`
  with an external link icon, and a secondary link to the source repo.
- Consistent styling: same "Permanent Midnight" theme, typography, shadcn
  button components, `animate-in` entry animations.

### Navigation
- Header nav: add a "MapFetcher" link (with a Map icon) next to "Kiko".
- Footer: add MapFetcher link in the Product column.

