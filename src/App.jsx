const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Course = ({ courseName, exercise }) => {
  return (
    <>
      <p>
        {courseName} {exercise}
      </p>
    </>
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
    ],
  };

  return (
    <>
      <Header title={course.name} />
      {course.parts.map((part) => (
        <Course courseName={part.name} exercise={part.exercises} />
      ))}
    </>
  );
};

export default App;
