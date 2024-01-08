<script lang="ts">
  import PostCard from '../../components/PostCard.svelte';
  export let data;
  console.log(data)
</script>

<div class="grow flex flex-col p-4 bg-amber-200 font-nunito">
  <h2 class="font-bitter text-4xl font-bold">All Posts:</h2>
  <ul class="py-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
    {#each data.posts as post}
      <li class="h-full"><PostCard {post} /></li>
    {/each}
  </ul>
</div>
