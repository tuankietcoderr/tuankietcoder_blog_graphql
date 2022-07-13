import React from "react";
import { useContext } from "react";
import { PostContext } from "../../../context/PostContext";
import Posts from "./Posts";

const AllPosts = () => {
  const { data } = useContext(PostContext);
  return (
    <>
      {data.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  );
};

export default AllPosts;
