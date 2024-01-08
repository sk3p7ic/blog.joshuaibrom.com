<script lang="ts">
  import { siteConfig } from '$lib/siteConfig';
  import NavMenu from '../components/NavMenu.svelte';
  import type { NavItemType } from '$lib/navbarTypes';

  const navItems: NavItemType[] = [
    { name: 'All Posts', href: '/posts' },
    { name: 'My Site', href: 'https://joshuaibrom.com', openInNewTab: true },
    { name: 'RSS Feed', href: '/rss.xml', icon: 'rss' },
  ];
</script>

<header
  class="fixed top-0 left-0 right-0 h-16 px-4 flex justify-between items-center font-jura bg-white border-b-4 border-black z-10"
>
  <h2 class="text-2xl"><a href="/">{siteConfig.title}</a></h2>
  <NavMenu contents={navItems} />
</header>
