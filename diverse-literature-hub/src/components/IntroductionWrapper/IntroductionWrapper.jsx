import { v4 as uuidv4 } from "uuid";
import styles from "./IntroductionWrapper.module.css"
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

/**
 * @param size options: S, M, L
 */
const IMAGE_BY_KEY_URL = (key, size) =>
  `https://covers.openlibrary.org/b/id/${key}-${size}.jpg`;
const AUTHOR_BY_NAME_URL = (author) =>
  `https://openlibrary.org/search/authors.json?q=${author}&limit=1`;
const AUTHOR_BY_KEY_URL = (key) =>
  `https://openlibrary.org/authors/${key}/works.json`;
const COVER_SIZE = "L";

const getAuthorData = (json) => {
  const authorKey = json.docs[0]?.key || null;
  const author = json.docs[0]?.name || "Unknown author";
  return [authorKey, author];
};

const getBookData = (json, onlyWithCover = false) => {
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
          ? IMAGE_BY_KEY_URL(entry.covers[0], COVER_SIZE)
          : null,
      };
      return book;
    });
};

const combineAuthorAndBookData = (bookData, author) =>
  // todo: books lack uuidv4
  bookData.map((book) => ({
    title: book.title,
    author,
    publicationYear: book.publicationYear,
    description: book.description,
    coverImageUrl: book.coverImageUrl,
  }));

const IntroductionWrapper = ({ onSearchSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchAuthorData = async (authorName) => {
    const response = await fetch(AUTHOR_BY_NAME_URL(authorName));
    const data = await response.json();
    const [authorKey, author] = getAuthorData(data);

    if (!authorKey) {
      throw new Error("No author found with the given name. Give some valid input.");
    }

    return { authorKey, author };
  };

  const fetchBooksByAuthor = async (authorKey, author) => {
    const response = await fetch(AUTHOR_BY_KEY_URL(authorKey));
    const data = await response.json();
    const books = getBookData(data, true);

    if (books.length === 0) {
      throw new Error("No books found for this author.");
    }

    return combineAuthorAndBookData(books, author);
  };

  const onSearch = async (authorName) => {
    if (!authorName.trim()) {
      alert("Please enter an author name.");
      return;
    }

    setIsLoading(true);
    try {
      const { authorKey, author } = await fetchAuthorData(authorName);
      const parsedData = await fetchBooksByAuthor(authorKey, author);
      onSearchSuccess(parsedData);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.introductionWrapper}>
      <div className={styles.searchBarAvatarWrapper}>
        <SearchBar
          placeholder="Author name"
          alt="search icon"
          onClick={onSearch}
          isLoading={isLoading}
        />
        <div className={styles.avatarWrapper}>
          <div className={styles.realAvatarWrapper}>
            <img
              src="/src/assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
              alt="avatar image"
            />
          </div>
          <p>
            - “Narratives that inspire, inform, and transport you to distant
            lands, all woven together by the threads of compelling authorship
            and storytelling.”
          </p>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src="/src/assets/images/ying-ge--Yo1cWJVKFY-unsplash.jpg" />
      </div>
    </div>
  );
};

IntroductionWrapper.propTypes = {
  onSearchSuccess: PropTypes.func.isRequired,
};

export default IntroductionWrapper;
