import { createContext, useState, useEffect } from "react";
import { Loading } from "../components";
import { getExercises } from "../services/exercises";

export const ExerciseContext = createContext();

export const ExerciseContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getExercises().then((res) => setData(res));
  }, []);

  const value = { data };

  if (!data) return <Loading />;
  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
};
