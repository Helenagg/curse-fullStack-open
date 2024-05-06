import { useState } from "react";



// const Display = (props) => <div>{props.text}</div>;

// const Results = ({ text, result }) => <div>{text}{result}</div>

// const Statistics = ({ good, neutral, bad }) => {

//   const total = good + neutral + bad;

//   const weightedTotal = good * 1 + neutral * 0 + bad * -1;
//   const average = weightedTotal / total;

//   const percentageGood = (good / total) * 100;

//   return (
//     <div>
//       <Results text='Good: ' result={good} />
//       <Results text='Neutral: ' result={neutral} />
//       <Results text='Bad: ' result={bad} />
//       <Results text='Total: ' result={total} />
//       <Results text='Average: ' result={average ? average : 0} />
//       <Results text='Positive: ' result={percentageGood ? percentageGood + "%" : 0} />
//     </div>
//   );
// };

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = (props) => (
  <div>
    {props.text}
    {props.value}
  </div>
);

const Statistics = (props) => {
  if (!props.goodValue && !props.neutralValue && !props.badValue) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <StatisticsLine text='Good: ' value={props.goodValue} />
      <StatisticsLine text='Neutral: ' value={props.neutralValue} />
      <StatisticsLine text='Bad: ' value={props.badValue} />
      <StatisticsLine text='Total: ' value={props.total} />
      <StatisticsLine text='Average: ' value={props.average} />
      <StatisticsLine text='Percentage: ' value={props.percentageGood} />
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
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <div>
        <p>Statistics</p>
      </div>
      <Statistics 
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
