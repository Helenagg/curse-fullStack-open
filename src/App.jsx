import { useState } from 'react';

const Square = ({ value, onSquareClick }) => {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
};

const App = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente juagador: " + (xIsNext ? "X" : "O")
  }

  return (
    <>
    <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default App;

// import { useState } from 'react';

// const Display = ({ counter }) => <div>{counter}</div>;

// const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>;

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   console.log('rendering with counter value', counter);

//   const increaseByOne = () => {
//     console.log('increasing, value before', counter);
//     setCounter(counter + 1);
//   };

//   const decreaseByOne = () => {
//     console.log('decreasing, value before', counter);
//     setCounter(counter - 1);
//   };

//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter);
//     setCounter(0);
//   };
//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onSmash={increaseByOne} text='plus' />
//       <Button onSmash={decreaseByOne} text='minus' />
//       <Button onSmash={setToZero} text='reset' />
//     </div>
//   );
// };

// export default App;
