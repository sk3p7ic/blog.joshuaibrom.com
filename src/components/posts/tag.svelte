<script lang="ts">
  export let tagName: string;
</script>

<a href={`/tags/${tagName}`} class="block w-min px-4 py-1 font-jura font-semibold bg-sky-300 hover:text-black hover:bg-cyan-600 rounded-md border-black border-2 border-b-4 border-e-4 scale-100 hover:scale-105 transition-all"
  >{tagName}</a
>
