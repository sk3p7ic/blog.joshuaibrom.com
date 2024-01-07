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
            I'm sk3p7ic, a senior computer science student at Texas A&amp;M
            University - San Antonio. I'm also a student worker for my
            university's IT department, acting as a member of their web team.
            I'm currently looking for a full-time position as a software
            engineer or web developer, as am I heavily considering graduate
            school.
          </p>
          <p>
            In addition to web development, I'm also interested in systems
            programming and compiler design. I'm a huge fan of Rust, and I enjoy
            using it for most of my personal projects. I'm also a fan of C and
            Zig (C++ is a no-go for me, though).
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
