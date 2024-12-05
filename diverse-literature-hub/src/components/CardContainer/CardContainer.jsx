import Card from "../Card/Card.jsx";
import Controls from "../Controls/Controls.jsx";

const CardContainer = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card">card1</div>
        <div className="card">card2</div>
        <div className="card">card3</div>
        <div className="card">card4</div>
        <div className="card">card5</div>
        <Card />
      </div>
      <Controls />
    </div>
  );
};

export default CardContainer;
