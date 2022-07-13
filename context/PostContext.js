import { createContext, useState, useEffect } from "react";
import { getCategories } from "../services/categories";
import { getPosts } from "../services/posts";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    getPosts().then((res) => setData(res));
    getCategories().then((res) => setCategories(res));
  }, []);

  const value = { data, categories };

  if (!data || !categories) return <div>Loading...</div>;
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
