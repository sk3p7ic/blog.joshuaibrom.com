<script lang="ts">
  import { siteConfig } from '$lib/siteConfig';
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title} | {siteConfig.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="px-4 py-2">
  <div>
    <h1>{data.meta.title}</h1>
  </div>
  <div>
    {#each data.meta.tags as category}
      <span>&num;{category}</span>
    {/each}
  </div>
  <div id="article-content">
    <svelte:component this={data.content} />
  </div>
</article>
