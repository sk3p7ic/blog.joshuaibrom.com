<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
  import { siteConfig } from '$lib/siteConfig';
  import { type Post } from '$lib/postTypes';
  import Tag from './posts/tag.svelte';
  export let post: Post;
</script>

<div
  class="group p-2 h-full flex flex-col gap-2 bg-white border-2 border-b-4 border-e-4 border-black hover:scale-[101%] rounded-md transition-all"
>
  <div class="flex flex-col">
    <h3 class="font-bitter font-semibold text-3xl">{post.title}</h3>
    <span class="text-xl"
      >{siteConfig.dateFormatter(post.date, 'short', 'en')}</span
    >
  </div>
  <div class="flex flex-row flex-wrap gap-2">
    {#each post.tags as tn}
      <Tag tagName={tn} />
    {/each}
  </div>
  <p class="text-lg text-justify">{post.description}</p>
  <a
    href={post.href}
    class="ms-auto mt-auto flex flex-row items-center gap-1 p-1 w-fit bg-white group-hover:bg-violet-300 group-hover:text-black scale-100 hover:scale-105 border-2 border-b-4 border-e-4 border-black rounded-md hover:rounded-lg transition-all"
    >Read post <ArrowRight size={18} /></a
  >
</div>
