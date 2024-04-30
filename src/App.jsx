// import { useState } from 'react';

import { useState } from 'react';

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// };

// export default App;

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onSmash, text}) => <button onClick={onSmash}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0);

  return (
    <>
      <Display counter={counter} />
      <Button onSmash={increaseByOne} text='plus' />
      <Button onSmash={decreaseByOne} text='minus' />
      <Button onSmash={setToZero} text='zero' />
    </>
  );
};

export default App;
