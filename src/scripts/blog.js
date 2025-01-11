import { Client } from "@notionhq/client";
const apiKey = import.meta.env.NOTION_API_KEY;
const blogId = import.meta.env.NOTION_BLOG_DB;

const notion = new Client({ auth: apiKey });

export async function getAllBlogPosts() {
  console.log("Checking for blog posts...")
  try {
    const response = await notion.databases.query({
      database_id: blogId,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
      filter: {
        and: [
          {
            property: "Status",
            status: {
              equals: "Published",
            },
          },
        ],
      },
    });
    const posts = response.results.map((post) => ({
      id: post.id,
      title: post.properties["Title"].title.pop().plain_text,
      pubDate: post.properties["Date"].date?.start,
      excerpt: post.properties["Excerpt"].rich_text.pop().plain_text,
      tags: post.properties["Tags"].multi_select,
      content: undefined,
    }));
    // cachedPosts = posts;
    console.log(posts);
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts from Notion:", error);
    throw error;
  }
}

getAllBlogPosts();
