import PropTypes from "prop-types";
import styles from "./SocialMediaIcon.module.css";

const SocialMediaIcon = ({ img, alt }) => {
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

SocialMediaIcon.defaultProps = {
  alt: "Social Media Icon",
};

export default SocialMediaIcon;
