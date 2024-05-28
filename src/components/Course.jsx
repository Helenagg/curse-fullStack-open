const Course = ({ courseName, exercise }) => (
  <p>
    {courseName} {exercise}
  </p>
);

export default Course;

export const Header = ({ title }) => <h1>{title}</h1>;

export const SumExercises = ({ sum }) => {
  return (
    <div>
      <p>Total exercises: {sum}</p>
    </div>
  );
};
