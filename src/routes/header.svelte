<script lang="ts">
  import {siteConfig} from '$lib/siteConfig';
  import { Rss } from 'lucide-svelte';
</script>

<header
  class="fixed top-0 left-0 right-0 h-16 px-4 flex justify-between items-center font-jura bg-white border-b-4 border-black z-10"
>
  <h2 class="text-2xl"><a href="/">{siteConfig.title}</a></h2>
  <nav class="flex flex-row gap-4 items-center text-lg">
    <a
      href="https://joshuaibrom.com"
      target="_blank"
      title="My personal website.">My Site</a
    >
    <!-- TODO: Add link to view posts. -->
    <a href="/feed" title="RSS Feed."><Rss /></a>
  </nav>
</header>
