import styles from "./IntroductionWrapper.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

// import utility functions
import {
  getAuthorByNameUrl,
  getAuthorByKeyUrl,
  getAuthorData,
  getBookData,
  combineAuthorAndBookData,
} from "./utils.js";

const IntroductionWrapper = ({ onSearchSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchAuthorData = async (authorName) => {
    const response = await fetch(getAuthorByNameUrl(authorName));
    const data = await response.json();
    const [authorKey, author] = getAuthorData(data);

    if (!authorKey) {
      throw new Error(
        "No author found with the given name. Give some valid input."
      );
    }

    return { authorKey, author };
  };

  const fetchBooksByAuthor = async (authorKey, author) => {
    const response = await fetch(getAuthorByKeyUrl(authorKey));
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
