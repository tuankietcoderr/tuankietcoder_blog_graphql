import { useContext } from "react";
import { ExerciseContext } from "../../context/ExerciseContext";

const Exercises = () => {
  const { data } = useContext(ExerciseContext);
  console.log(data);
  return <div>Exercises</div>;
};

export default Exercises;
