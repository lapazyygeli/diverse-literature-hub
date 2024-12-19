import PropTypes from "prop-types";
import styles from "./SocialMediaIcon.module.css";

const SocialMediaIcon = ({ img, alt = "Social Media Icon" }) => {
  return (
    <div className={styles.socialMediaIcon}>
      <img src={img} alt={alt} />
    </div>
  );
};

SocialMediaIcon.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default SocialMediaIcon;
