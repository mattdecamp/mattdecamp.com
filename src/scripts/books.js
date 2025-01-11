// import { Client } from "@notionhq/client";

// const notion = new Client({ auth: import.meta.env.NOTION_API_KEY });
// const databaseId = import.meta.env.NOTION_BOOKS_DB;
// let cachedBooks = COllectionEntry < "books" > [] | null = null;

// export async function getBooks(): Promise<CollectionEntry<"books">[]> {
//   if (cachedBooks) return cachedBooks;
//   try {
//     const response = await notion.databases.query({
//       database_id: databaseId,
//       sorts: [
//         {
//           "property": "Status",
//           "direction": "ascending",
//         },
//         {
//           "property": "dateRead",
//           "direction": "descending",
//         },

//       ],
//     });
//     const books = response.results.map((book: any) => ({
//         id: book.id,
//     }));
//     cachedBooks = books;
//     return books;
//   } catch (error) {
//     console.error("Error fetchin books from Notion: ", error);
//     throw error;
//   }
// }

import { Client } from "@notionhq/client";

export async function getBooks() {
  const notion = new Client({ auth: import.meta.env.NOTION_API_KEY });
  const database = import.meta.env.NOTION_BOOKS_DB;
  const pages = await notion.databases.query({
    database_id: database,
    sorts: [
      {
        property: "Status",
        direction: "ascending",
      },
      {
        property: "dateRead",
        direction: "descending",
      },
    ],
  });
  const books = pages.results.map((book) => {
    return {
      id: book.id,
      title: book.properties["bookTitle"].rich_text[0].text.content,
      author: book.properties["bookAuthor"].rich_text[0].text.content,
      image: book.properties["bookImage"].url,
      url: book.properties["bookBuyUrl"].url,
      status: book.properties["Status"].checkbox,
      dateRead: book.properties.dateRead.date.start,
      audiobook: book.properties["Audiobook"].checkbox,
      didntFinish: book.properties["Didn't Finish"].checkbox,
    };
  });
  // console.log(books)
  return books;
}
