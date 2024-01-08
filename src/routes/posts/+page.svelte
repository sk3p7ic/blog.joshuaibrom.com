<script lang="ts">
  import PostCard from '../../components/PostCard.svelte';
  export let data;
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
</script>

<div class="grow flex flex-col p-4 bg-amber-200 font-nunito">
  <h2 class="font-bitter text-4xl font-bold">All Posts:</h2>
  {#each data.groupedPosts as grouping}
    <div class="flex flex-col gap-2">
      <h3 class="font-bitter text-2xl font-bold">{grouping.year}</h3>
      <ul class="flex flex-col">
        {#each grouping.months as month}
          <li>
            <h4 class="font-bitter text-xl font-bold">{month.month}: {months[parseInt(month.month) - 1]}</h4>
            <ul class="py-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
              {#each month.posts as post}
                <li class="h-full"><PostCard {post} /></li>
              {/each}
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
