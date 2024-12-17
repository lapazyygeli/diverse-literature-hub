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
  bookData.map((book) => ({
    title: book.title,
    author,
    publicationYear: book.publicationYear,
    description: book.description,
    coverImageUrl: book.coverImageUrl,
  }));

const IntroductionWrapper = ({ onSearchSuccess }) => {
  const onSearch = async (authorName) => {
    console.log(`IntroWrapper: - authorName: ${authorName} `);
    // should be represent some loading animation
    // also uuidv4 to be added to list items
    // OTetaan vain sellaset, joilla on coveri,  -- vuosi ei toimi

    // tsekkaa vuosiluvut
    // errori tuli, ku kirjotettiin: kalakukko
    // errori on tämä: Something went wrong: TypeError: Cannot read properties of undefined (reading 'filter')
    try {
      const response1 = await fetch(AUTHOR_BY_NAME_URL(authorName));
      const json1 = await response1.json();
      const [authorKey, author] = getAuthorData(json1);

      const response2 = await fetch(AUTHOR_BY_KEY_URL(authorKey));
      const json2 = await response2.json();
      const books = getBookData(json2, true);

      const parsedData = combineAuthorAndBookData(books, author);
      onSearchSuccess(parsedData);
    } catch (err) {
      alert(`Something went wrong: ${err}`);
    } finally {
      console.log("asdf");
    }
  };

  return (
    <div className="introduction-wrapper">
      <div className="search-bar-avatar-wrapper">
        <SearchBar
          placeholder="Author name"
          alt="search icon"
          onClick={onSearch}
        />
        <div className="avatar-wrapper">
          <div className="real-avatar-wrapper">
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
      <div className="image-wrapper">
        <img src="/src/assets/images/ying-ge--Yo1cWJVKFY-unsplash.jpg" />
      </div>
    </div>
  );
};

IntroductionWrapper.propTypes = {
  onSearchSuccess: PropTypes.func.isRequired,
};

export default IntroductionWrapper;
