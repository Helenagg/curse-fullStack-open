const Header = ({ title }) => <h1>{title}</h1>;

const Course = ({ courseName, exercise }) => (
  <>
    <p>
      {courseName} {exercise}
    </p>
  </>
);

export const SumExercises = ({ sum }) => {
  return (
    <div>
      <p>Total exercises: {sum}</p>
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };


  const sum = course.parts.map((part) => part.exercises).reduce((accumulator, newValue) => accumulator + newValue, 0)
  console.log('sum', sum);

  return (
    <>
      <Header title={course.name} />
      {course.parts.map((part) => (
        <Course
          key={part.id}
          courseName={part.name}
          exercise={part.exercises}
        />
      ))}

      <SumExercises sum={sum} />
    </>
  );
};

export default App;
