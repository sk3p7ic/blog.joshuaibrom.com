<script lang="ts">
  import { Rss } from 'lucide-svelte';
  import type { NavItemType } from '$lib/navbarTypes';

  export let item: NavItemType;
  let icon: typeof Rss | undefined = undefined;
  if (item.icon !== undefined) {
    switch (item.icon) {
      case 'rss':
        icon = Rss;
    }
  }
</script>

{#if icon !== undefined}
  <svelte:component this={icon} />
{:else}
  {item.name}
{/if}
