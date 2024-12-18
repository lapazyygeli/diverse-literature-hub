import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#title-author">search</a>
        </li>
        <li>
          <a href="#categories">categories</a>
        </li>
        <li>
          <a href="#latest-releases">latest releases</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
    </nav>
  );
}
