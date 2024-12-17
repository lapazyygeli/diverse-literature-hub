import PropTypes from "prop-types";
import searchIcon from "../../assets/images/icons/search.png";
import styles from "./SearchBar.module.css";
import { useRef } from "react";

export default function SearchBar({ placeholder, alt, onClick }) {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    const inputVal = inputRef.current.value;
    onClick(inputVal);
  };

  return (
    <div className={styles.searchbar}>
      <button onClick={handleButtonClick}>
        <img src={searchIcon} alt={alt} />
      </button>
      <input ref={inputRef} type="text" placeholder={placeholder} />
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
