<script lang="ts">
  import { siteConfig } from '$lib/siteConfig';
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <meta name="description" content={siteConfig.description} />
  <meta name="author" content={siteConfig.author} />
  <title>{siteConfig.title}</title>
</svelte:head>

<Header />
<main class="grow mt-16 flex flex-col bg-white">
  <slot />
</main>
<Footer />
