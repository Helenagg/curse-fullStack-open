// import { useState } from 'react';

import { useState } from "react";

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
const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log('he clicado');
  }
  
  return (
    <>
    <div>{counter}</div>
    <button onClick={() => setCounter(counter + 1)}>plus</button>
    <button onClick={() => setCounter(0)}>zero</button>
    </>
  )
}

export default App;

