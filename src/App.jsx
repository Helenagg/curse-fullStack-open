import { useState } from "react";

const Statistics = (props) => (
  <div>
    {props.text}
    {props.value}
  </div>
);

const OpenStatistics = (props) => {
  if (!props.goodValue && !props.neutralValue && !props.badValue) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <Statistics text='Good: ' value={props.goodValue} />
      <Statistics text='Neutral: ' value={props.neutralValue} />
      <Statistics text='Bad: ' value={props.badValue} />
      <Statistics text='Total: ' value={props.total} />
      <Statistics text='Average: ' value={props.average} />
      <Statistics text='Percentage: ' value={props.percentageGood} />
    </div>
  );
};

const App = () => {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);

  const handleGoodClick = () => {
    setGoodValue(goodValue + 1);
  };

  const handleNeutralClick = () => {
    setNeutralValue(neutralValue + 1);
  };

  const handleBadClick = () => {
    setBadValue(badValue + 1);
  };

  const total = goodValue + neutralValue + badValue;

  const weightedTotal = goodValue * 1 + neutralValue * 0 + badValue * -1;
  const average = weightedTotal / total;

  const percentageGood = (goodValue / total) * 100;

  return (
    <div>
      <div>
        <p>Give FeedBack</p>
      </div>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <div>
        <p>Statistics</p>
      </div>
      <OpenStatistics 
        goodValue={goodValue}
        neutralValue={neutralValue}
        badValue={badValue}
        total={total}
        average={average}
        percentageGood={percentageGood}
      />
    </div>
  );
};

export default App;
