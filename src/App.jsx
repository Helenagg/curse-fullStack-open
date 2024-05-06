import { useState } from 'react';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Display = (props) => <div>{props.text}</div>

const Results = ({ text, result }) => <div>{text}{result}</div>

const App = () => {
  const [goodValue, setGoodValue] = useState(0)
  const [neutralValue, setNeutralValue] = useState(0)
  const [badValue, setBadValue] = useState(0)

  const handleGoodClick = () => {
    setGoodValue(goodValue + 1)
  }

  const handleNeutralClick = () => {
    setNeutralValue(neutralValue + 1)
  }

  const handleBadClick = () => {
    setBadValue(badValue + 1)
  }

  const total = goodValue + neutralValue + badValue

  const weightedTotal = (goodValue * 1) + (neutralValue * 0) + (badValue * -1);
  const average = weightedTotal / total;

  const percentageGood = (goodValue / total) * 100 

  return (
    <div>
      <Display text={'Give feedback'} />
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Display text={'Statistics'} />
      <Results text='Good: ' result={goodValue} />
      <Results text='Neutral: ' result={neutralValue} />
      <Results text='Bad: ' result={badValue} />
      <Results text='Total: ' result={total} />
      <Results text='Average: ' result={average} />
      <Results text='Positive: ' result={percentageGood + '%' } />
    </div>
  )
};

export default App;
