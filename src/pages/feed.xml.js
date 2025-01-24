import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog', ({ data }) => data?.published);
  return rss({
    title: 'Matt DeCamp\'s Blog',
    description: 'Thoughts on life, software development, music, books, and more.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title, 
      pubDate: post.data.pubDate, 
      description: post.data.description,
      author: post.data.author,
      tags: [...post.data.tags],
      link: `/blog/${post.id}/`,
    })),
  })
}