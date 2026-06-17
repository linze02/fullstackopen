const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercise}
    </p>
  );
};

const Content = ({ content }) => {
  return (
    <>
      <Part part={content.part1} />
      <Part part={content.part2} />
      <Part part={content.part3} />
    </>
  );
};

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;

  const contentPart1 = { name: part1, exercise: exercise1 };
  const contentPart2 = { name: part2, exercise: exercise2 };
  const contentPart3 = { name: part3, exercise: exercise3 };

  const content = {
    part1: contentPart1,
    part2: contentPart2,
    part3: contentPart3,
  };
  console.log("content:", content);

  const total = exercise1 + exercise2 + exercise3;
  console.log("total:", total);

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={total} />
    </div>
  );
};

export default App;
