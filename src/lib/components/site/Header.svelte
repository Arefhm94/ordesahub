<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Baby, Activity } from "lucide-svelte";
  import { base } from "$app/paths";
</script>

<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div class="container flex h-16 items-center justify-between mx-auto px-4">
    <div class="flex items-center gap-8">
      <a href="{base}/" class="flex items-center space-x-2 group">
        <div class="bg-primary p-1 rounded-lg transition-transform group-hover:scale-110">
          <Activity class="h-5 w-5 text-primary-foreground" />
        </div>
        <span class="inline-block font-extrabold text-xl tracking-tighter">OrdesaHub</span>
      </a>

      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="{base}/babydaily/" class="flex items-center gap-2 transition-colors hover:text-primary text-muted-foreground">
          <Baby class="h-4 w-4" />
          <span>BabyDaily</span>
        </a>
        <a href="{base}/#about" class="transition-colors hover:text-primary text-muted-foreground">About</a>
        <a href="{base}/#portfolio" class="transition-colors hover:text-primary text-muted-foreground">Portfolio</a>
      </nav>
    </div>

    <Button href="mailto:arefsn89@gmail.com" variant="default" class="rounded-full px-6">
      Get in Touch
    </Button>
  </div>
</header>
