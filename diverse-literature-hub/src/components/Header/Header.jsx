import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header>
      <div className={styles.heroImage}>
        <Navbar />
        <h1>
          books that
          <br />
          inspire adventure
        </h1>
      </div>
    </header>
  );
}
