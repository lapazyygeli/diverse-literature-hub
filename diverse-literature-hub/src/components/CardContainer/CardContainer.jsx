import Card from "../Card/Card.jsx";
import Controls from "../Controls/Controls.jsx";
import styles from "./CardContainer.module.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

/*
const jsonBooksByAuthor = [
  {
    title: "Something",
    author: "name",
    publicationYear: "1234",
    description: "asdfasfsdf",
    coverImageUrl: "https://covers.openlibrary.org/b/id/9293464-L.jpg",
  },
*/

const getContainerSize = () => (window.innerWidth <= 768 ? 2 : 6);

const CardContainer = ({ jsonBooksByAuthor }) => {
  const [page, setPage] = useState(0);
  const [containerSize, setContainerSize] = useState(getContainerSize());

  useEffect(() => {
    const onResize = () => setContainerSize(getContainerSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalPages = Math.ceil(jsonBooksByAuthor.length / containerSize);
  const pageStartingIndex = page * containerSize;

  const onNext = () => page < totalPages - 1 && setPage((prev) => prev + 1);
  const onPrev = () => page > 0 && setPage((prev) => prev - 1);

  const books = jsonBooksByAuthor.slice(
    pageStartingIndex,
    pageStartingIndex + containerSize
  );

  const placeholderAmount =
    books.length < containerSize ? containerSize - books.length : 0;

  const cards = [...books, ...Array(placeholderAmount).fill(null)].map(
    (book, index) =>
      book ? (
        <Card
          key={index} // Use index temporarily; better to assign unique keys during data fetch
          title={book.title}
          author={book.author}
          coverImageUrl={book.coverImageUrl}
        />
      ) : (
        <div
          key={`placeholder-${index}`}
          className={`${styles.card} ${styles.placeholder}`}
        >
        </div>
      )
  );

  return (
    <>
      <div id="card-container" className={styles.cardContainer}>
        {cards}
      </div>
      <Controls onNext={onNext} onPrev={onPrev} />
    </>
  );
};

CardContainer.propTypes = {
  jsonBooksByAuthor: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publicationYear: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      coverImageUrl: PropTypes.string,
    })
  ).isRequired,
};

export default CardContainer;
