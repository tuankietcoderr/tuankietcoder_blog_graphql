import React from "react";
import { useContext } from "react";
import { PostContext } from "../../../context/PostContext";
import Posts from "./Posts";

const AllPosts = () => {
  const { posts } = useContext(PostContext);
  return (
    <>
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  );
};

export default AllPosts;
