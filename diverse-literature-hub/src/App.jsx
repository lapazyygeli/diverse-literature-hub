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
        </div>
      </header>
      <main>
        <section id="title-author" className="title-author">
          <div className="container">
            <h2>explore books by title or author</h2>
            <div className="introduction-wrapper">
              <div className="search-bar-avatar-wrapper">
                <div className="search-bar">
                  <button>
                    <img
                      src="/src/assets/images/icons/search.png"
                      alt="search icon"
                    />
                  </button>
                  <input type="text" placeholder="Book / Author name" />
                </div>
                <div className="avatar-wrapper">
                  <div className="real-avatar-wrapper">
                    <img
                      src="/src/assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                      alt="avatar image"
                    />
                  </div>
                  <p>
                    - “Narratives that inspire, inform, and transport you to
                    distant lands, all woven together by the threads of
                    compelling authorship and storytelling.”
                  </p>
                </div>
              </div>
              <div className="image-wrapper">
                <img src="/src/assets/images/ying-ge--Yo1cWJVKFY-unsplash.jpg" />
              </div>
            </div>
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
