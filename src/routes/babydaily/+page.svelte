<script lang="ts">
  import Hero from "$lib/components/site/Hero.svelte";
  import ScreenshotGallery from "$lib/components/site/ScreenshotGallery.svelte";
  import Features from "$lib/components/site/Features.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Star } from "lucide-svelte";
  import heroImage from "$lib/assets/babydaily_ss/HomePageDark.png";
</script>

<svelte:head>
  <title>BabyDaily | Baby Tracker by OrdesaHub</title>
  <meta name="description" content="A fast, native baby tracker for iOS. Log feedings, diapers, and sleep right from your home screen. Sync instantly with your partner. Made by OrdesaHub." />
</svelte:head>

<Hero imageSrc={heroImage} />

<ScreenshotGallery />

<Features />

<!-- ─── Testimonial ──────────────────────────────────────────── -->
<section class="py-24 bg-slate-900/10 relative">
  <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center space-y-8">
      <div class="flex justify-center gap-1 text-yellow-400">
        {#each Array(5) as _}
          <Star class="h-5 w-5 fill-current" />
        {/each}
      </div>
      <blockquote class="text-2xl md:text-3xl font-bold italic tracking-tight leading-snug">
        "BabyDaily has transformed how we track our daughter's naps and feeds.
        The widget is a game-changer!"
      </blockquote>
      <div class="flex flex-col items-center gap-1">
        <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
          IR
        </div>
        <p class="font-semibold text-sm">Irene Rivera</p>
        <p class="text-xs text-muted-foreground">New Mom &amp; App Enthusiast</p>
      </div>
    </div>
  </div>
</section>

<!-- ─── CTA ──────────────────────────────────────────────────── -->
<section class="py-24 bg-primary text-primary-foreground">
  <div class="container mx-auto px-4 text-center space-y-8">
    <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight">
      Ready to simplify parenting?
    </h2>
    <p class="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
      Join parents using BabyDaily to stay in sync and give their babies the best care.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <!-- TODO: Replace with App Store URL once published -->
      <Button
        size="lg"
        variant="secondary"
        class="rounded-full px-10 h-14 text-base font-bold opacity-70 cursor-not-allowed"
        disabled
      >
        Download for iOS — Coming Soon
      </Button>
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
