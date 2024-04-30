// import { useState } from 'react';

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
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part} exercises={props.exercises} />
      {/* <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} /> */}
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{' '}
        {props.exercises1 + props.exercises2 + props.exercises3}
        {/* {props.result} */}
      </p>
    </>
  );
};

const App = () => {
  // const course = 'Half Stack application development';
  // const part1 = 'Fundamentals of React';
  // const exercises1 = 10;
  // const part2 = 'Using props to pass data';
  // const exercises2 = 7;
  // const part3 = 'State of a component';
  // const exercises3 = 14;
  const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      {parts.map((item) => (
        <>
          <Content
            part={item.name}
            exercises={item.exercises} />
        </>
      ))}
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  );
};

export default App;
