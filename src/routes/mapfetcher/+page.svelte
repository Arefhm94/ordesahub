<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Map, Box, Ruler, Download, Globe, ExternalLink } from "lucide-svelte";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>MapFetcher | by OrdesaHub</title>
  <meta name="description" content="MapFetcher is a fullscreen interactive 3D map viewer and geo-data extraction tool. Explore with 3D buildings, terrain, contours — export to GeoJSON, OBJ, DXF, or GeoTIFF." />
</svelte:head>

<!-- ─── Hero ─────────────────────────────────────────────────── -->
<section class="relative py-24 lg:py-40 overflow-hidden bg-background text-slate-50">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]"></div>
  <div class="container mx-auto px-4 relative z-10 text-center space-y-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
      <Map class="h-4 w-4 text-indigo-400" />
      <span class="text-white/60">Geo-Data Extraction Tool</span>
    </div>

    <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-4 duration-400 text-white">
      Explore maps.
      <span class="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-indigo-400/40">Extract data.</span>
    </h1>

    <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-400 delay-100">
      A fullscreen 3D map viewer with building extrusions, terrain, contour lines,
      and one-click export to GeoJSON, OBJ, DXF, and GeoTIFF — all in your browser.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-400 delay-150">
      <Button
        href="https://mapfetcher.ordesahub.com/"
        size="lg"
        class="rounded-full px-10 h-14 text-base font-bold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
      >
        <ExternalLink class="h-5 w-5" />
        Launch MapFetcher
      </Button>
      <Button
        href="{base}/#portfolio"
        size="lg"
        variant="outline"
        class="rounded-full px-10 h-14 text-base font-bold bg-white text-black border-2 border-white hover:bg-white/90 hover:text-black transition-all"
      >
        Back to Portfolio
      </Button>
    </div>
  </div>
</section>

<!-- ─── Feature Showcases ────────────────────────────────────── -->
<section class="py-24 bg-background overflow-hidden relative">
  <div class="container mx-auto px-4 space-y-32">

    <!-- 3D Buildings & Terrain -->
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div class="flex-1 space-y-6 max-w-xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold uppercase tracking-wider">
          <Box class="h-4 w-4" />
          3D Visualization
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">3D buildings and terrain at your fingertips.</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          Toggle extruded buildings from OpenStreetMap data and realistic terrain
          elevation with a single click. The map responds instantly — no reloads,
          no page transitions.
        </p>
        <ul class="space-y-3 pt-4">
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></span> <span>OSM building footprints with heights</span></li>
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></span> <span>Mapterhorn DEM terrain tiles (free)</span></li>
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></span> <span>Automatic hillshading</span></li>
        </ul>
      </div>
      <div class="flex-1 relative">
        <div class="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-110 -z-10"></div>
        <div class="w-full max-w-sm mx-auto rounded-[2.5rem] border border-white/10 bg-card/50 p-4 shadow-2xl backdrop-blur">
          <div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900/40 via-indigo-900/20 to-slate-900 flex items-center justify-center">
            <Box class="h-16 w-16 text-blue-400/60" />
          </div>
        </div>
      </div>
    </div>

    <!-- Contour & Water Layers -->
    <div class="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
      <div class="flex-1 space-y-6 max-w-xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-bold uppercase tracking-wider">
          <svg width="16" height="16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-emerald-500">
            <path d="M50 22.56c-1.21 0-2.419.254-3.342.76L1.383 48.166c-1.847 1.013-1.847 2.655 0 3.668L46.658 76.68c1.846 1.012 4.839 1.013 6.684 0l45.275-24.846c1.845-1.013 1.845-2.655 0-3.668L53.342 23.32c-.923-.506-2.133-.76-3.342-.76zm0 6.26L88.596 50l-6.102 3.348c-2.576-2.926-7.635-8.215-13.152-11.385c-7.026-4.037-13.26-6.895-19.768-7.15c-6.507-.256-13.052 2.224-20.267 8.183c-3.7 3.056-5.594 5.795-5.268 8.697c.163 1.452.953 2.694 1.943 3.606c.991.912 2.193 1.578 3.52 2.142c5.307 2.258 13 2.973 17.316 3.73c3.232.568 9.377 2.556 13.946 4.102L50 71.18L11.406 50L50 28.82zm-1.598 9.975c.34-.004.677 0 1.016.014c5.42.213 11.094 2.694 17.932 6.623c4.988 2.865 9.253 7.415 11.468 9.933L65.523 62.66c-3.118-1.127-12.581-4.474-18.013-5.428c-4.633-.813-12.208-1.669-16.444-3.47c-1.058-.45-1.883-.954-2.375-1.407c-.49-.452-.639-.768-.677-1.109c-.077-.682.564-2.46 3.84-5.166c6.315-5.215 11.463-7.23 16.548-7.285zm.473 2.914c-2.343.134-4.718 1.278-7.404 3.508c-1.62 1.344-2.615 2.655-2.438 4.238c.089.791.523 1.466 1.02 1.926c.497.46 1.062.769 1.662 1.025c2.4 1.027 5.642 1.304 7.396 1.614c1.593.28 3.683 1.172 5.946 1.912c2.262.74 4.774 1.345 7.347.71c1.353-.333 2.54-1.155 2.912-2.398c.373-1.242-.054-2.425-.695-3.47c-1.281-2.092-3.716-4.112-6.766-5.874c-2.925-1.69-5.302-3.013-7.976-3.187a8.21 8.21 0 0 0-1.004-.004zm.148 2.992c.222-.01.441-.008.66.006c1.754.114 3.794 1.129 6.672 2.791c2.755 1.59 4.911 3.54 5.71 4.844c.399.651.384 1.022.378 1.039c-.005.017.01.16-.757.35c-1.67.412-3.619.028-5.696-.65c-2.077-.68-4.203-1.636-6.357-2.017c-1.993-.351-5.144-.734-6.738-1.416c-.399-.17-.682-.354-.805-.468c-.123-.114-.08-.096-.076-.059c.008.074.072-.515 1.373-1.596c2.424-2.012 4.085-2.748 5.636-2.824z"/>
          </svg>
          Thematic Layers
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">Contours, waterways, and more.</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          Enable zoom-adaptive contour lines with elevation labels, render
          waterways and coastline from OSM, and switch between Voyager, Dark
          Matter, and Satellite basemaps.
        </p>
        <ul class="space-y-3 pt-4">
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span> <span>Zoom-adaptive contour thresholds</span></li>
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span> <span>Theme-reactive layer colors</span></li>
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span> <span>Three map styles with auto dark mode</span></li>
        </ul>
      </div>
      <div class="flex-1 relative">
        <div class="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-110 -z-10"></div>
        <div class="w-full max-w-sm mx-auto rounded-[2.5rem] border border-white/10 bg-card/50 p-4 shadow-2xl backdrop-blur">
          <div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-900/40 via-teal-900/20 to-slate-900 flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-emerald-400/60">
              <path d="M50 22.56c-1.21 0-2.419.254-3.342.76L1.383 48.166c-1.847 1.013-1.847 2.655 0 3.668L46.658 76.68c1.846 1.012 4.839 1.013 6.684 0l45.275-24.846c1.845-1.013 1.845-2.655 0-3.668L53.342 23.32c-.923-.506-2.133-.76-3.342-.76zm0 6.26L88.596 50l-6.102 3.348c-2.576-2.926-7.635-8.215-13.152-11.385c-7.026-4.037-13.26-6.895-19.768-7.15c-6.507-.256-13.052 2.224-20.267 8.183c-3.7 3.056-5.594 5.795-5.268 8.697c.163 1.452.953 2.694 1.943 3.606c.991.912 2.193 1.578 3.52 2.142c5.307 2.258 13 2.973 17.316 3.73c3.232.568 9.377 2.556 13.946 4.102L50 71.18L11.406 50L50 28.82zm-1.598 9.975c.34-.004.677 0 1.016.014c5.42.213 11.094 2.694 17.932 6.623c4.988 2.865 9.253 7.415 11.468 9.933L65.523 62.66c-3.118-1.127-12.581-4.474-18.013-5.428c-4.633-.813-12.208-1.669-16.444-3.47c-1.058-.45-1.883-.954-2.375-1.407c-.49-.452-.639-.768-.677-1.109c-.077-.682.564-2.46 3.84-5.166c6.315-5.215 11.463-7.23 16.548-7.285zm.473 2.914c-2.343.134-4.718 1.278-7.404 3.508c-1.62 1.344-2.615 2.655-2.438 4.238c.089.791.523 1.466 1.02 1.926c.497.46 1.062.769 1.662 1.025c2.4 1.027 5.642 1.304 7.396 1.614c1.593.28 3.683 1.172 5.946 1.912c2.262.74 4.774 1.345 7.347.71c1.353-.333 2.54-1.155 2.912-2.398c.373-1.242-.054-2.425-.695-3.47c-1.281-2.092-3.716-4.112-6.766-5.874c-2.925-1.69-5.302-3.013-7.976-3.187a8.21 8.21 0 0 0-1.004-.004zm.148 2.992c.222-.01.441-.008.66.006c1.754.114 3.794 1.129 6.672 2.791c2.755 1.59 4.911 3.54 5.71 4.844c.399.651.384 1.022.378 1.039c-.005.017.01.16-.757.35c-1.67.412-3.619.028-5.696-.65c-2.077-.68-4.203-1.636-6.357-2.017c-1.993-.351-5.144-.734-6.738-1.416c-.399-.17-.682-.354-.805-.468c-.123-.114-.08-.096-.076-.059c.008.074.072-.515 1.373-1.596c2.424-2.012 4.085-2.748 5.636-2.824z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Draw & Measure -->
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div class="flex-1 space-y-6 max-w-xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-bold uppercase tracking-wider">
          <Ruler class="h-4 w-4" />
          Draw & Measure
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">Draw areas, measure distances.</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          Define areas of interest with a bounding box or draw custom shapes
          (points, lines, rectangles, circles, polygons). Measure distances
          with the rubber-band ruler tool — live labels, real-time updates.
        </p>
        <ul class="space-y-3 pt-4">
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0"></span> <span>Bounding box with resize and drag handles</span></li>
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0"></span> <span>Five shape types (point, line, rect, circle, polygon)</span></li>
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0"></span> <span>Distance measurement via @turf/turf</span></li>
        </ul>
      </div>
      <div class="flex-1 relative">
        <div class="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full scale-110 -z-10"></div>
        <div class="w-full max-w-sm mx-auto rounded-[2.5rem] border border-white/10 bg-card/50 p-4 shadow-2xl backdrop-blur">
          <div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-900/40 via-amber-900/20 to-slate-900 flex items-center justify-center">
            <Ruler class="h-16 w-16 text-orange-400/60" />
          </div>
        </div>
      </div>
    </div>

    <!-- Export -->
    <div class="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
      <div class="flex-1 space-y-6 max-w-xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-bold uppercase tracking-wider">
          <Download class="h-4 w-4" />
          Multi-Format Export
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">Export exactly what you need.</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          Choose from GeoJSON, OBJ (Blender-ready, Z-up), DXF, or GeoTIFF.
          Select layers individually — terrain mesh, building footprints, contour
          lines, water lines — and download with one click.
        </p>
        <ul class="space-y-3 pt-4">
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0"></span> <span>GeoJSON, OBJ, DXF, and GeoTIFF formats</span></li>
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0"></span> <span>Selectable layers per export</span></li>
          <li class="flex items-center gap-3"><span class="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0"></span> <span>Free for areas under 3 km²</span></li>
        </ul>
      </div>
      <div class="flex-1 relative">
        <div class="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full scale-110 -z-10"></div>
        <div class="w-full max-w-sm mx-auto rounded-[2.5rem] border border-white/10 bg-card/50 p-4 shadow-2xl backdrop-blur">
          <div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-900/40 via-violet-900/20 to-slate-900 flex items-center justify-center">
            <Download class="h-16 w-16 text-purple-400/60" />
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ─── CTA ──────────────────────────────────────────────────── -->
<section class="py-24 bg-primary text-primary-foreground">
  <div class="container mx-auto px-4 text-center space-y-10">
    <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight">
      Ready to explore the map?
    </h2>
    <p class="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
      No sign-up required. Free exports for areas under 3 km².
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
      <a
        href="https://mapfetcher.ordesahub.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-3 bg-white text-black rounded-2xl px-8 py-4 hover:opacity-85 transition-opacity active:scale-95 shadow-xl text-lg font-bold"
      >
        <Map class="h-6 w-6" />
        Launch MapFetcher
      </a>
      <Button
        href="mailto:arefsn89@gmail.com"
        size="lg"
        variant="outline"
        class="rounded-full px-10 h-14 text-base font-bold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
      >
        Get in touch
      </Button>
    </div>
  </div>
</section>
