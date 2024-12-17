import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card(props) {
  const { title, author, publicationYear, coverImageUrl } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        {coverImageUrl && <img src={coverImageUrl} />}
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.publicationYear}>{publicationYear}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publicationYear: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string,
};
