// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    published: z.boolean(),
    tags: z.array(z.string()),
  }),
});
const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    status: z.boolean(),
    audiobook: z.boolean(),
    didntFinish: z.boolean(),
    bookTitle: z.string(),
    dateRead: z.coerce.date(),
    bookAuthor: z.string(),
    bookImage: z.string(),
    bookYear: z.number().optional(),
    bookBuyUrl: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, books };
