// import reactLogo from './assets/svgs/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AuthorSection from "./components/AuthorSection/AuthorSection.jsx";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection.jsx";
import LatestReleasesSection from "./components/LatestReleasesSection/LatestReleasesSection.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <AuthorSection />
        <CategoriesSection />
        <LatestReleasesSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
