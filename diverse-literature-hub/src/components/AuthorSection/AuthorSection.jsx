import IntroductionWrapper from "./../../components/IntroductionWrapper/IntroductionWrapper.jsx";
import CardContainer from "../CardContainer/CardContainer.jsx";
import styles from "./AuthorSection.module.css"
import { useEffect, useState } from "react";

export default function AuthorSection() {
  const [isCardContainerVisible, setIsCardContainerVisible] = useState(false);
  const [jsonBooksByAuthor, setJsonBooksByAuthor] = useState([]);

  useEffect(() => {
    // Scroll to card container
    if (isCardContainerVisible) {
      const targetElement = document.getElementById("card-container");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [isCardContainerVisible]);

  const onSearchSuccess = (bookData) => {
    setJsonBooksByAuthor(bookData);
    setIsCardContainerVisible(true);
  };

  return (
    <section id="title-author" className={styles.titleAuthor}>
      <div className="container">
        <h2>explore books by author</h2>
        <IntroductionWrapper onSearchSuccess={onSearchSuccess} />
        {isCardContainerVisible && (
          <CardContainer jsonBooksByAuthor={jsonBooksByAuthor} />
        )}
      </div>
    </section>
  );
}
