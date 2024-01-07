import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkCodeTitle from 'remark-code-title';
import remarkMath from 'remark-math';
import shiki from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  rehypePlugins: [rehypeKatexSvelte],
  remarkPlugins: [remarkCodeTitle, remarkMath],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await shiki.getHighlighter({
        theme: 'rose-pine-moon',
      });
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
      return `{@html \`${html}\` }`;
    },
  },
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
  },
};

export default config;
