<script lang="ts">
  import Header from './header.svelte';
  import Footer from './footer.svelte';
  import '../app.css';
</script>

<Header />
<main class="grow mt-16 flex flex-col bg-white">
  <slot />
</main>
<Footer />
