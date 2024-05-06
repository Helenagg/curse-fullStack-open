import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsTable = ({ data }) => {
  return (
    <table>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.text}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

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
      <StatisticsTable
        data={[
          { text: "Good: ", value: props.goodValue },
          { text: "Neutral: ", value: props.neutralValue },
          { text: "Bad: ", value: props.badValue },
          { text: "Total: ", value: props.total },
          { text: "Average: ", value: props.average },
          { text: "Percentage: ", value: props.percentageGood },
        ]}
      />
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
