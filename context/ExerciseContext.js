import { createContext, useState, useEffect } from "react";
import { Loading } from "../components";
import { getExercises } from "../services/exercises";

export const ExerciseContext = createContext();

export const ExerciseContextProvider = ({ children }) => {
  const [exercises, setExercises] = useState(null);
  useEffect(() => {
    getExercises().then((res) => setExercises(res));
  }, []);

  const value = { exercises };

  if (!exercises) return <Loading />;
  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
};
