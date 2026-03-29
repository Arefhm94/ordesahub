<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Baby, Activity, Code, Globe, Shield, Zap, ExternalLink } from 'lucide-svelte';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>OrdesaHub | Native Apps, Refined</title>
  <meta name="description" content="OrdesaHub builds high-performance, beautiful native applications. Home of BabyDaily — the smartest baby tracker for iOS." />
</svelte:head>

<div class="flex flex-col min-h-screen">

  <!-- ─── Hero ─────────────────────────────────────────────────── -->
  <section class="relative py-24 lg:py-40 overflow-hidden bg-background text-slate-50">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]"></div>
    <div class="container mx-auto px-4 relative z-10 text-center space-y-8">

      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
        <span class="text-white/60">Crafting Digital Excellence</span>
      </div>

      <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-4 duration-400 text-white">
        Native apps.
        <span class="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-indigo-400/40">Refined.</span>
      </h1>

      <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-400 delay-100">
        OrdesaHub specializes in high-performance, beautiful, and intuitive native applications.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-400 delay-150">
        <Button
          href="{base}/#portfolio"
          size="lg"
          class="rounded-full px-10 h-14 text-base font-bold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          See the Apps
        </Button>
        <Button
          href="mailto:arefsn89@gmail.com"
          size="lg"
          variant="outline"
          class="rounded-full px-10 h-14 text-base font-bold bg-white text-black border-2 border-white hover:bg-white/90 hover:text-black transition-all"
        >
          Get in Touch
        </Button>
      </div>
    </div>
  </section>

  <!-- ─── Portfolio ──────────────────────────────────────────────── -->
  <section id="portfolio" class="py-24 bg-background relative">
    <div class="absolute inset-0 bg-linear-to-b from-indigo-500/5 to-transparent h-40"></div>
    <div class="container mx-auto px-4">
      <div class="space-y-4 mb-16">
        <h2 class="text-4xl md:text-5xl font-black tracking-tighter">Featured Products</h2>
        <p class="text-muted-foreground text-lg max-w-xl">
          Elegant, native solutions for real-world problems.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- BabyDaily Card -->
        <a href="{base}/babydaily/" class="group block relative overflow-hidden rounded-3xl bg-card/50 border transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div class="aspect-video w-full bg-primary/10 flex items-center justify-center p-12 overflow-hidden relative">
            <div class="bg-card p-6 rounded-3xl shadow-xl transition-transform group-hover:scale-110 duration-500">
              <Baby class="h-16 w-16 text-primary" />
            </div>
            <div class="absolute top-10 right-10 bg-card p-3 rounded-xl shadow-lg animate-bounce" style="animation-duration:3s">
              <div class="h-2 w-12 bg-primary/20 rounded-full mb-2"></div>
              <div class="h-2 w-8 bg-slate-200 rounded-full"></div>
            </div>
            <div class="absolute bottom-10 left-10 bg-card p-3 rounded-xl shadow-lg animate-pulse">
              <div class="flex gap-1 mb-2">
                <div class="h-1 w-4 bg-green-400 rounded-full"></div>
                <div class="h-1 w-4 bg-green-400 rounded-full"></div>
              </div>
              <div class="h-2 w-10 bg-slate-200 rounded-full"></div>
            </div>
          </div>
          <div class="p-8 space-y-4">
            <div class="flex justify-between items-start">
              <div class="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">Featured App</div>
              <ExternalLink class="h-5 w-5 text-slate-400 transition-colors group-hover:text-primary" />
            </div>
            <div>
              <h3 class="text-2xl font-black tracking-tight">BabyDaily</h3>
              <p class="text-muted-foreground leading-relaxed mt-1">
                The smartest, fastest baby tracker for iOS. Real-time syncing, home screen widgets, and beautiful insights.
              </p>
            </div>
          </div>
        </a>

        <!-- Coming Soon -->
        <div class="relative overflow-hidden rounded-3xl bg-muted/30 border-2 border-dashed flex flex-col items-center justify-center p-12 text-center space-y-6 min-h-80">
          <div class="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
            <Code class="h-10 w-10 text-muted-foreground" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-muted-foreground">Coming Soon</h3>
            <p class="text-muted-foreground max-w-xs mx-auto mt-2 text-sm">
              Currently developing the next application. Stay tuned.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── About ──────────────────────────────────────────────────── -->
  <section id="about" class="py-24 bg-slate-900/20 text-white relative">
    <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto space-y-16">

        <div class="text-center space-y-6">
          <h2 class="text-4xl md:text-6xl font-black tracking-tighter">Native first. User always.</h2>
          <p class="text-xl text-slate-300 leading-relaxed">
            High-fidelity native experiences designed for the device they run on. No cross-platform compromises.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto md:mx-0">
              <Zap class="h-6 w-6 text-indigo-400" />
            </div>
            <h4 class="text-xl font-bold">High Performance</h4>
            <p class="text-slate-400">Optimized codebases that run cool and fast, even on older devices.</p>
          </div>
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto md:mx-0">
              <Globe class="h-6 w-6 text-indigo-400" />
            </div>
            <h4 class="text-xl font-bold">Seamless Sync</h4>
            <p class="text-slate-400">Multi-device cloud syncing that just works, with real-time conflict resolution.</p>
          </div>
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto md:mx-0">
              <Shield class="h-6 w-6 text-indigo-400" />
            </div>
            <h4 class="text-xl font-bold">Privacy Centric</h4>
            <p class="text-slate-400">End-to-end encryption and total user control over data ownership.</p>
          </div>
        </div>

        <div class="text-center">
          <Button
            href="mailto:arefsn89@gmail.com"
            size="lg"
            variant="outline"
            class="rounded-full px-10 h-14 text-base font-bold bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all"
          >
            Get in Touch
          </Button>
        </div>

      </div>
    </div>
  </section>

</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
