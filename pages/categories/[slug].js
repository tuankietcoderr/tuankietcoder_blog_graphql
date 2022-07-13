import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { useRouter } from "next/router";
import { getPostsByCategory } from "../../services/categories";
import { Loading, Posts } from "../../components";

const Category = () => {
  const { categories } = useContext(PostContext);
  const [data, setData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      if (categories) {
        if (
          categories.find((category) => category.slug === router.query.slug)
        ) {
          setData(getPostsByCategory(categories, router.query.slug));
        } else {
          router.push("/404");
        }
      }
    }
  }, [router.isReady, router.query.slug]);
  if (!data) return <Loading />;
  console.log(data);
  return (
    <>
      {data.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  );
};

export default Category;
