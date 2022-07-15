import { useContext } from "react";
import { ExerciseContext } from "../../context/ExerciseContext";
import { Exercises } from "../../components";
import Head from "next/head";

const AllExercises = () => {
  const { exercises } = useContext(ExerciseContext);
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_BLOG_NAME} | Bài tập</title>
      </Head>
      {exercises.map((exercise) => (
        <Exercises key={exercise.id} exercise={exercise} />
      ))}
    </>
  );
};

export default AllExercises;
