<script lang="ts">
  import { siteConfig } from '$lib/siteConfig';
  import Tag from '../../../components/posts/tag.svelte';
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title} | {siteConfig.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="px-4 py-2 mx-auto max-w-prose flex flex-col gap-4">
  <div class="border-b border-black">
    <h1 class="font-bitter font-bold text-5xl">{data.meta.title}</h1>
    <p class="mt-2">
      Published {siteConfig.dateFormatter(data.meta.date, 'medium', 'en')} by {siteConfig.author}.
    </p>
  </div>
  <div class="flex flex-row gap-2 flex-wrap">
    {#each data.meta.tags as tn}
      <Tag tagName={`${tn}`} />
    {/each}
  </div>
  <div id="article-content">
    <svelte:component this={data.content} />
  </div>
</article>
