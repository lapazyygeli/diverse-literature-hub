import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card(props) {
  const { title, author, coverImageUrl } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        {coverImageUrl && <img src={coverImageUrl} />}
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string,
};
