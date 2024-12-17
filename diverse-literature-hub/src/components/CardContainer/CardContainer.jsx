import { v4 as uuidv4 } from "uuid";
import Card from "../Card/Card.jsx";
import Controls from "../Controls/Controls.jsx";
import styles from "./CardContainer.module.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// uuid pitäis laittaa sitten fetchaamisen jälkeen
// vielä jokaselle objectille. Jos sen laittaa vasta
// mäppäys vaiheessa, ni sillon hommat ei oo puree

// joku homma pitää säättää, ettei kortteja näy enempää,
// ku kymmene
/*
const jsonBooksByAuthor = [
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 1234,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/9293464-L.jpg",
  },
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 12345,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/7885268-L.jpg",
  },
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 12346,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/11529684-L.jpg",
  },
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 12347,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/{id}-L.jpg",
  },
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 12348,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/{id}-L.jpg",
  },
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 12349,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/{id}-L.jpg",
  },
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 1234,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/{id}-L.jpg",
  },
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 1234,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/{id}-L.jpg",
  },
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 1234,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/{id}-L.jpg",
  },
];*/

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
          publicationYear={book.publicationYear}
          coverImageUrl={book.coverImageUrl}
        />
      ) : (
        <div
          key={`placeholder-${index}`}
          className={`${styles.card} ${styles.placeholder}`}
        />
      )
  );

  return (
    <>
      <div className={styles.cardContainer}>{cards}</div>
      <Controls page={page} onNext={onNext} onPrev={onPrev} />
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
