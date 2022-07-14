import { useContext } from "react";
import { ExerciseContext } from "../../context/ExerciseContext";
import { Exercises } from "../../components";

const AllExercises = () => {
  const { exercises } = useContext(ExerciseContext);
  return (
    <>
      {exercises.map((exercise) => (
        <Exercises key={exercise.id} exercise={exercise} />
      ))}
    </>
  );
};

export default AllExercises;
