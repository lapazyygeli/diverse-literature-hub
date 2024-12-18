import styles from "./Controls.module.css";
import PropTypes from "prop-types";

export default function Controls({ onNext, onPrev }) {
  return (
    <div className={styles.controls}>
      <button onClick={onPrev}>&lt;&lt; Prev</button>
      <button onClick={onNext}>Next &gt;&gt;</button>
    </div>
  );
}

Controls.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
