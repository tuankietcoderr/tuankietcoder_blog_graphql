import { createContext, useState, useEffect } from "react";
import { Loading } from "../components";
import { getCategories } from "../services/categories";
import { getPosts } from "../services/posts";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    getPosts().then((res) => setPosts(res));
    getCategories().then((res) => setCategories(res));
  }, []);

  const value = { posts, categories };

  if (!posts || !categories) return <Loading />;
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
