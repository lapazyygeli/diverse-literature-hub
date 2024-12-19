import styles from "./Footer.module.css";
import Navbar from "./../Navbar/Navbar";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";
import { iconsData } from "./data.js";

export default function Footer() {
  const socialMediaIcons = iconsData.map((icon, index) => (
    <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
      <SocialMediaIcon img={icon.img} alt={icon.alt} />
    </a>
  ));

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.domain}>diverseliteraturehub.com</p>
        <Navbar />
        <div className={styles.socialMediaIcons}>{socialMediaIcons}</div>
        <p className={styles.copyRight}>© Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
}
