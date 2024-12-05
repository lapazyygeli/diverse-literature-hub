const json = [
  {
    bookTitle: "Something",
    author: "name",
    publicationYear: 1234,
    contentDescription: "asdfasfsdf",
    imageUrl: "https://covers.openlibrary.org/b/id/{id}-L.jpg",
  },
];

const rightBit = {
  bookTitle: "Something",
  author: "name",
  publicationYear: 1234,
  contentDescription: "asdfasfsdf",
  imageUrl: "https://covers.openlibrary.org/b/id/{id}-L.jpg",
};

import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card-image-container"></div>
      <div className="card-info-container">
        <p>{rightBit.bookTitle}</p>
        <p>{rightBit.author}</p>
        <p>{rightBit.publicationYear}</p>
      </div>
    </div>
  );
}
