<script lang="ts">
  import type { NavItemType } from "$lib/navbarTypes";
  import NavItem from "./NavItem.svelte";

  export let contents: NavItemType[];

</script>

<nav class="flex flex-row gap-2 md:gap-4 items-start text-lg">
  {#each contents as item}
    {#if item.openInNewTab !== undefined && item.openInNewTab !== false}
      <a href={item.href}><NavItem item={item} /></a>
    {:else}
      <a href={item.href} target="_blank"><NavItem item={item} /></a>
    {/if}
  {/each}
</nav>
