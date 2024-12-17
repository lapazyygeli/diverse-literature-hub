import IntroductionWrapper from "./../../components/IntroductionWrapper/IntroductionWrapper.jsx";
import CardContainer from "../CardContainer/CardContainer.jsx";
import { useState } from "react";

export default function AuthorSection() {
  const [isCardContainerVisible, setIsCardContainerVisible] = useState(false);
  const [jsonBooksByAuthor, setJsonBooksByAuthor] = useState([]);

  const onSearchSuccess = (bookData) => {
    setJsonBooksByAuthor(bookData);
    setIsCardContainerVisible(true);
  };

  return (
    <section id="title-author" className="title-author">
      <div className="container">
        <h2>explore books by title or author</h2>
        <IntroductionWrapper onSearchSuccess={onSearchSuccess} />
        {isCardContainerVisible && (
          <CardContainer jsonBooksByAuthor={jsonBooksByAuthor} />
        )}
      </div>
    </section>
  );
}
