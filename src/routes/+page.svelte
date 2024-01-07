<script lang="ts">
  import { siteConfig } from '$lib/siteConfig';
  export let data;
</script>

<div class="grow bg-pink-200 font-nunito">
  <div>
    <h1>{siteConfig.title}</h1>
    <p>{siteConfig.description}</p>
  </div>
  <ul>
    {#each data.posts as post}
      <li><a href={post.href}>{post.title}</a></li>
    {/each}
  </ul>
</div>
