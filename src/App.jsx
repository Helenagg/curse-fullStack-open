import { useState } from 'react';

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Display = (props) => <div>{props.value}</div>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState([])
  const [value, setValue] = useState(10)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const setToValue = (newValue) => {
    console.log('value now', newValue)  // imprime el nuevo valor en la consola
    setValue(newValue)
  }
  return (
    // <div>
    //   {left}
    //   <Button handleClick={handleLeftClick} text={'left'} />
    //   <Button handleClick={handleRightClick} text={'right'} />
    //   {right}
    //   <History allClicks={allClicks} />
    //   <p>total: {total}</p>
    // </div>
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text='thousand' />
      <Button handleClick={() => setToValue(0)} text='reset' />
      <Button handleClick={() => setToValue(value + 1)} text='increment' />
    </div>
  )
};

export default App;
