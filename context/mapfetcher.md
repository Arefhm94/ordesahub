# MapFetcher — Project Summary

## What It Is

MapFetcher is a fullscreen, no-chrome interactive 3D map viewer and geo-data
extraction tool. Users explore a global map with 3D buildings, terrain, contour
lines, and water lines; draw bounding-box areas of interest or custom shapes;
and export selected data in GeoJSON, OBJ, DXF, or GeoTIFF format — all
entirely in the browser.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Svelte 5 (runes) + SvelteKit 2, TypeScript, Vite 6 |
| CSS | Tailwind CSS v4 + glassmorphism custom properties |
| UI | shadcn-svelte (bits-ui) |
| Icons | lucide-svelte + custom SVG icon components |
| Map Engine | MapLibre GL JS v5 via svelte-maplibre-gl v2 |
| Drawing | terra-draw + @svelte-maplibre-gl/terradraw |
| Contours | maplibre-contour |
| Geospatial | @turf/turf |
| Auth | Supabase Auth (email + Google OAuth) |
| Database | Supabase PostgreSQL (jobs, profiles) |
| Payments | Stripe Checkout |
| Deployment | @sveltejs/adapter-auto (Vercel) |

## Key Features

- **3D Buildings** — fill-extrusion from OSM vector tiles
- **3D Terrain** — Mapterhorn DEM tiles with hillshading
- **Contour Lines** — zoom-adaptive, theme-reactive colors
- **Water Lines** — waterways, coastline, lakes
- **Bounding Box Draw** — rectangle selection with resize/drag handles
- **Shape Drawing** — point, line, rectangle, circle, polygon
- **Distance Measurement (Ruler)** — rubber-band style with live label
- **GeoJSON Import** — drag-and-drop onto map
- **Style Switcher** — Voyager, Dark Matter, Satellite
- **Multi-format Export** — GeoJSON, OBJ (Z-up, Blender-ready), DXF, GeoTIFF
- **Export Pricing** — < 3 km² free, €5/km² above via Stripe
- **Job History** — dashboard with status badges, re-download support
- **Dark Mode** — mode-watcher, theme-aware layers

## UI Layout

Fullscreen map (100vw × 100vh) with floating glassmorphism controls:
- **Left panel**: Export section + Footprints section (collapsible)
- **Right toggle column**: Buildings, Terrain, Contours, Water, BBox, Draw, Ruler
- **Bottom-left**: Style switcher
- **Bottom-right**: Navigation controls + 3D/2D toggle
- **Bottom-center**: BBox editor panel / Ruler panel (contextual)

## Source

`/Users/arefmoalemi/Documents/Github/extract_geo_data`
