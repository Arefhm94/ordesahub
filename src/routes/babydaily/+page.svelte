<script lang="ts">
  import Hero from "$lib/components/site/Hero.svelte";
  import ScreenshotGallery from "$lib/components/site/ScreenshotGallery.svelte";
  import Features from "$lib/components/site/Features.svelte";
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight, Star } from "lucide-svelte";
  import heroImage from "$lib/assets/babydaily_ss/HomePageLight.png";
</script>

<Hero imageSrc={heroImage} />

<ScreenshotGallery />

<Features />

<!-- Testimonial / Social Proof Section -->
<section class="py-24 border-t overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <div class="flex justify-center gap-1 text-yellow-400">
        {#each Array(5) as _}
          <Star class="h-6 w-6 fill-current" />
        {/each}
      </div>
      <h3 class="text-3xl md:text-4xl font-bold italic serif tracking-tight">
        "BabyDaily has transformed how we track our daughter's naps and feeds.
        The widget is a game-changer!"
      </h3>
      <div class="flex flex-col items-center">
        <div
          class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary mb-2"
        >
          JD
        </div>
        <p class="font-semibold text-foreground">Irene Rivera</p>
        <p class="text-sm text-muted-foreground">New Mom & App Enthusiast</p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section id="faq" class="py-24 bg-primary text-primary-foreground">
  <div class="container mx-auto px-4 text-center space-y-8">
    <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight">
      Ready to simplify parenting?
    </h2>
    <p class="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
      Join thousands of parents using BabyDaily to stay in sync and give their
      babies the best care.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <Button
        size="lg"
        variant="secondary"
        class="rounded-full px-10 h-16 text-lg font-bold"
      >
        Download for iOS
      </Button>
      <Button
        size="lg"
        variant="outline"
        class="rounded-full px-10 h-16 text-lg font-bold bg-transparent border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
      >
        Get in touch
      </Button>
    </div>
  </div>
</section>
