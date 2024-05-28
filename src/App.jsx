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
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  // const total = course.map((item) => {
  //   const newExercise = item.parts;
  //   const sum = newExercise.map((exercise) => exercise.exercises).reduce((accumulator, newValue) => accumulator + newValue, 0)
  //   console.log('total value', sum);
  //   return sum
  // }) //.reduce((accumulator, newValue) => accumulator + newValue, 0)
// console.log('total', total);
  return (
    <>
      {course.map((newCourse) => {
        const total = newCourse.parts.reduce((acc, part) => acc + part.exercises, 0)
        console.log('total', newCourse.parts);
        return (
          <>
            <Header key={newCourse.id} title={newCourse.name} />
            {newCourse.parts.map((part) => (

              <Course
                key={part.id}
                courseName={part.name}
                exercise={part.exercises} />

            ))}
            <SumExercises sum={total} />
          </>
        );
      })}

      {/* {newCourse.parts.map((part) => (
        ))} */}
    </>
  );
};

export default App;
