<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Map, Box, Layers, Ruler, Download, Globe, ExternalLink } from "lucide-svelte";
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
          <Layers class="h-4 w-4" />
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
            <Layers class="h-16 w-16 text-emerald-400/60" />
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
