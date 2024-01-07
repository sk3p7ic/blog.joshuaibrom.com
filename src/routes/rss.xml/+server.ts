import {siteConfig} from '$lib/siteConfig';
import {type Post} from '$lib/postTypes';
import {type RequestHandler} from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch }) => {
  const posts: Post[] = await (await fetch('api/posts')).json();
  const headers = { 'Content-Type': 'application/xml' };
  const xml = `
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${siteConfig.title}</title>
				<description>${siteConfig.description}</description>
				<link>https://blog.joshuaibrom.com</link>
				<atom:link href="https://blog.joshuaibrom.com/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>https://blog.joshuaibrom.com${post.href}</link>
							<guid isPermaLink="true">https://blog.joshuaibrom.com${post.href}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
  `.trim();
  return new Response(xml, {headers});
}
