<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight } from "lucide-svelte";

  let { imageSrc = "" } = $props();
</script>

<section class="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
  <!-- Background blobs -->
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_40%,oklch(0.50_0.22_260/0.12)_0%,transparent_100%)]"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px]"></div>

  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

      <!-- Text block -->
      <div class="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span>New</span>
          <span class="w-1 h-1 rounded-full bg-primary"></span>
          <span>By OrdesaHub</span>
        </div>

        <h1 class="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
          Track your baby's day,
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            effortlessly.
          </span>
        </h1>

        <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-7 duration-700 delay-200">
          A fast, native baby tracker built for iOS. Log feedings, diapers, and sleep directly from your home screen, and sync instantly with your partner.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 animate-in fade-in slide-in-from-bottom-9 duration-700 delay-300">
          <!-- Disabled until App Store link is live -->
          <Button
            size="lg"
            class="rounded-full px-8 h-14 text-base font-semibold opacity-60 cursor-not-allowed"
            disabled
          >
            Coming Soon on iOS
          </Button>
          <Button
            href="#features"
            variant="outline"
            size="lg"
            class="rounded-full px-8 h-14 text-base font-semibold transition-all active:scale-95"
          >
            See Features
            <ArrowRight class="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <!-- Phone mockup -->
      <div class="flex-1 relative animate-in fade-in zoom-in-95 duration-700 delay-200">
        <div class="phone-tilt relative z-10 w-full max-w-[340px] mx-auto transition-all duration-700 ease-out">
          {#if imageSrc}
            <div class="relative rounded-[2.5rem] overflow-hidden border-[10px] border-slate-900 shadow-2xl bg-slate-900">
              <img
                src={imageSrc}
                alt="BabyDaily App"
                class="w-full h-auto block"
              />
              <div class="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-20"></div>
            </div>
          {:else}
            <div class="aspect-[9/19.5] w-full bg-muted animate-pulse rounded-[3rem] shadow-2xl"></div>
          {/if}

          <!-- Glow blobs behind phone -->
          <div class="absolute -top-8 -right-8 w-28 h-28 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div class="absolute -bottom-8 -left-8 w-28 h-28 bg-primary/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  .phone-tilt {
    perspective: 1000px;
    transform: rotateY(-10deg) rotateX(5deg);
  }
  .phone-tilt:hover {
    transform: rotateY(0deg) rotateX(0deg);
  }
</style>
