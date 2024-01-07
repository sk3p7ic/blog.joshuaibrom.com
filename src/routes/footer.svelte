<script lang="ts">
  import { siteConfig } from '$lib/siteConfig';
  import { Github, Computer, Linkedin } from 'lucide-svelte';
</script>

<footer
  class="px-4 py-4 flex flex-row items-center justify-center font-bitter text-lg bg-black text-white border-t-2 border-fuchsia-600"
>
  <div class="flex flex-col gap-1">
    <span>{siteConfig.author}, {new Date().getFullYear()}.</span>
    <div class="flex flex-row justify-center divide-x">
      <a
        href="https://github.com/sk3p7ic/blog.joshuaibrom.com/"
        target="_blank"
        class="px-2"
        title="View this project on GitHub."
      >
        <Github size="20" />
      </a>
      <a
        href="https://joshuaibrom.com"
        target="_blank"
        class="px-2"
        title="My personal portfolio website."
      >
        <Computer size="20" />
      </a>
      <a
        href="https://linkedin.com/Joshua-Ibrom"
        target="_blank"
        class="px-2"
        title="View my profile on LinkedIn."
      >
        <Linkedin size="20" />
      </a>
    </div>
  </div>
</footer>

<style>
  a {
    @apply text-white;
  }

  a:hover {
    @apply text-fuchsia-600;
  }
</style>
