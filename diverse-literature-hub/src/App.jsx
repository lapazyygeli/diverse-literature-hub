// import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="hero-image">
          <nav className="navbar">
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#title-author">search</a></li>
              <li><a href="#categories">categories</a></li>
              <li><a href="#latest-releases">latest releases</a></li>
              <li><a href="#">about</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="title-author" className="title-author">
          <div className="container">
            <h2>explore books by title or author</h2>
          </div>
        </section>
        <section id="categories" className="categories">
          <div className="container">
            <h2>explore books by categories</h2>
          </div>
        </section>
        <section id="latest-releases" className="latest-releases">
          <div className="container">
            <h2>latest releases</h2>
          </div>
        </section>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
