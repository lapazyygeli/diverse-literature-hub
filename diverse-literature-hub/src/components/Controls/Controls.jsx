import styles from "./Controls.module.css";
import PropTypes from "prop-types";

export default function Controls({ page, onNext, onPrev }) {
  return (
    <div className={styles.controls}>
      <button onClick={onPrev}>&lt;&lt; Prev{page}</button>
      <button onClick={onNext}>Next &gt;&gt;</button>
    </div>
  );
}

Controls.propTypes = {
  page: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
