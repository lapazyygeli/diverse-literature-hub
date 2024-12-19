import { v4 as uuidv4 } from "uuid";

/**
 * @param size options: S, M, L
 */
export const getImageByKeyUrl = (key, size = "L") =>
  `https://covers.openlibrary.org/b/id/${key}-${size}.jpg`;

export const getAuthorByNameUrl = (author) =>
  `https://openlibrary.org/search/authors.json?q=${author}&limit=1`;

export const getAuthorByKeyUrl = (key) =>
  `https://openlibrary.org/authors/${key}/works.json`;

export const getAuthorData = (json) => {
  const authorKey = json.docs[0]?.key || null;
  const author = json.docs[0]?.name || "Unknown author";
  return [authorKey, author];
};

export const getBookData = (json, onlyWithCover = false) => {
  const entries = json.entries;

  return entries
    .filter((entry) => {
      if (onlyWithCover) {
        return entry.covers?.[0];
      }
      return true;
    })
    .map((entry) => {
      const description =
        typeof entry.description === "string"
          ? entry.description
          : entry.description?.value || "Description not defined";

      const book = {
        title: entry.title || "Untitled",
        publicationYear: entry.first_publish_date || "Unknown Year",
        description: description,
        coverImageUrl: entry.covers?.[0]
          ? getImageByKeyUrl(entry.covers[0])
          : null,
      };
      return book;
    });
};

export const combineAuthorAndBookData = (bookData, author) =>
  // todo: books lack identifier / uuidv4
  bookData.map((book) => ({
    ...book,
    author,
  }));
