import PropTypes from "prop-types";
import searchIcon from "../../assets/images/icons/search.png";
import styles from "./SearchBar.module.css";
import { useRef } from "react";

export default function SearchBar({
  placeholder,
  alt,
  onClick,
  isLoading = false,
}) {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    const inputVal = inputRef.current.value.trim();
    onClick(inputVal);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className={styles.searchbar}>
      <button onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? (
          <div className={styles.spinner}></div>
        ) : (
          <img src={searchIcon} alt={alt} />
        )}
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
