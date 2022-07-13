import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getExerciseBySlug } from "../../services/exercises";

const ExerciseDetail = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      getExerciseBySlug(router.query.slug).then((res) => setData(res));
    }
  }, []);
  if (!data) return <div>Loading...</div>;
  return <div>ExerciseDetail</div>;
};

export default ExerciseDetail;
