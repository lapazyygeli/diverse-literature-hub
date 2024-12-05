import IntroductionWrapper from "./../../components/IntroductionWrapper/IntroductionWrapper.jsx"
import CardContainer from "../CardContainer/CardContainer.jsx";
  
export default function AuthorSection() {
  return (
    <section id="title-author" className="title-author">
      <div className="container">
        <h2>explore books by title or author</h2>
        <IntroductionWrapper/>
        <CardContainer />
      </div>
    </section>
  );
}
