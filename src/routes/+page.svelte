<script lang="ts">
  import { siteConfig } from '$lib/siteConfig';
  import PostCard from '../components/PostCard.svelte';
  export let data;
</script>

<div class="grow flex flex-col bg-amber-200 font-nunito">
  <div class="grow flex flex-col gap-4 mx-auto p-4 h-full">
    <div class="grow grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col gap-2">
          <h1 class="font-bitter font-bold text-6xl">{siteConfig.title}</h1>
          <p class="font-jura text-3xl md:max-w-96">{siteConfig.description}</p>
        </div>
      </div>
      <div
        class="p-4 flex flex-col items-center justify-center bg-pink-200 text-xl text-justify border-4 border-black rounded-lg"
      >
        <div class="flex flex-col gap-4">
          <p>
            I&apos;m sk3p7ic, a graduate student and research technician at
            Texas A&amp;M University - San Antonio currently supporting
            University research through facilitating further collaboration among
            faculty. I have previously researched serverless cloud computing,
            specifically focusing on the impacts of cold starts and how those
            might be lessened. I am currently seeking a role as a junior
            software engineer, AI/ML engineer, or web developer.
          </p>
          <p>
            I enjoy working on web applications due to the variety of work that
            web development may bring, especially in the context of full stack
            development. In addition to web development, I am also interested in
            systems programming and compiler design. I&apos;m a huge fan of Rust
            and I enjoy using it for personal projects. I am also a fan of C and
            Zig (but not C++).
          </p>
        </div>
      </div>
    </div>
    <div class="p-4 bg-emerald-300 border-2 border-black rounded-lg">
      <h2 class="font-bitter text-4xl font-bold">Recent Posts</h2>
      <ul class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {#each data.posts as post}
          <li class="h-full"><PostCard {post} /></li>
        {/each}
      </ul>
    </div>
  </div>
</div>
