<script lang="ts">
  import './layout.css';
  import Header from '$lib/components/site/Header.svelte';
  import Footer from '$lib/components/site/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>OrdesaHub | Native Apps, Refined</title>
  <meta name="description" content="OrdesaHub builds high-performance, beautiful native applications. Home of BabyDaily — the smartest baby tracker for iOS." />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
</div>
