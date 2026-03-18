<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
  import { Baby, Activity, Code, Globe, Shield, Zap, ArrowRight, ExternalLink } from 'lucide-svelte';
</script>

<div class="flex flex-col min-h-screen">
  <!-- Hero Section -->
  <section class="relative py-24 lg:py-40 overflow-hidden bg-slate-950 text-slate-50">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.5),transparent)] opacity-50"></div>
    <div class="container mx-auto px-4 relative z-10 text-center space-y-8">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <span class="text-white/60">Crafting Digital Excellence</span>
      </div>
      <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 text-white">
        Native apps. <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">Refined.</span>
      </h1>
      <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
        OdesaHub specializes in high-performance, beautiful, and intuitive native applications.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
        <Button size="lg" class="rounded-full px-10 h-16 text-lg font-bold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
          The Apps
        </Button>
        <Button size="lg" variant="outline" class="rounded-full px-10 h-16 text-lg font-bold bg-white text-black border-2 border-white hover:bg-white/90 hover:text-black transition-all">
          Get in Touch
        </Button>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <div id="features">
    <section id="portfolio" class="py-24 bg-white dark:bg-slate-900 border-t">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div class="space-y-4">
            <h2 class="text-4xl md:text-5xl font-black tracking-tighter">Featured Products</h2>
            <p class="text-muted-foreground text-lg max-w-xl">
              Elegant, native solutions for real-world problems.
            </p>
          </div>
          <Button variant="link" class="text-lg font-bold group p-0">
            View all projects <ArrowRight class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- BabyDaily Card -->
          <a href="/babydaily" class="group block relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 border transition-all hover:shadow-2xl hover:-translate-y-2">
            <div class="aspect-video w-full bg-primary/10 flex items-center justify-center p-12 overflow-hidden">
              <div class="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl transition-transform group-hover:scale-110 duration-500">
                <Baby class="h-16 w-16 text-primary" />
              </div>
              <!-- Mock floating UI elements -->
              <div class="absolute top-10 right-10 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
                <div class="h-2 w-12 bg-primary/20 rounded-full mb-2"></div>
                <div class="h-2 w-8 bg-slate-200 rounded-full"></div>
              </div>
              <div class="absolute bottom-10 left-10 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg animate-pulse">
                <div class="flex gap-1 mb-2">
                  <div class="h-1 w-4 bg-green-400 rounded-full"></div>
                  <div class="h-1 w-4 bg-green-400 rounded-full"></div>
                </div>
                <div class="h-2 w-10 bg-slate-200 rounded-full"></div>
              </div>
            </div>
            <div class="p-8 space-y-6">
              <div class="flex justify-between items-start">
                <div class="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-sm">Featured App</div>
                <ExternalLink class="h-6 w-6 text-slate-400 transition-colors group-hover:text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <h3 class="text-3xl font-black tracking-tight">BabyDaily</h3>
                <p class="text-muted-foreground leading-relaxed">
                  The smartest, fastest baby tracker for iOS. Real-time syncing, home screen widgets, and beautiful insights.
                </p>
              </div>
            </div>
          </a>

          <!-- Placeholder for next app -->
          <div class="group relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-950 border-2 border-dashed flex flex-col items-center justify-center p-12 text-center space-y-6">
            <div class="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              <Code class="h-10 w-10 text-slate-400" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-slate-500 dark:text-slate-400">Coming Soon</h3>
              <p class="text-slate-500 dark:text-slate-400 max-w-xs mx-auto mt-2">
                Currently developing the next application. Stay tuned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- About / Why Us Section -->
  <div id="faq">
    <section id="about" class="py-24 bg-slate-950 text-white">
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
              <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mx-auto md:mx-0">
                <Zap class="h-6 w-6 text-black" />
              </div>
              <h4 class="text-xl font-bold">High Performance</h4>
              <p class="text-slate-300">Optimized codebases that run cool and fast, even on older devices.</p>
            </div>
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mx-auto md:mx-0">
                <Globe class="h-6 w-6 text-black" />
              </div>
              <h4 class="text-xl font-bold">Seamless Sync</h4>
              <p class="text-slate-300">Multi-device cloud syncing that just works, with state-of-the-art conflict resolution.</p>
            </div>
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mx-auto md:mx-0">
                <Shield class="h-6 w-6 text-black" />
              </div>
              <h4 class="text-xl font-bold">Privacy Centric</h4>
              <p class="text-slate-300">End-to-end encryption and total user control over data ownership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
