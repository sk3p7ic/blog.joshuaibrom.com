<script lang="ts">
  export let data;
</script>

<div class="grow bg-pink-200 font-nunito">
  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <ul>
    {#each data.posts as post}
      <li><a href={post.slug}>{post.title}</a></li>
    {/each}
  </ul>
</div>
