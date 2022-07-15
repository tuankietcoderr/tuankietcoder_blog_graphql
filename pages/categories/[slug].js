import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { useRouter } from "next/router";
import { getPostsByCategory } from "../../services/categories";
import { Loading, Posts } from "../../components";
import Head from "next/head";

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
  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_BLOG_NAME} | Danh mục |{" "}
          {
            categories.find((category) => category.slug === router.query.slug)
              ?.name
          }
        </title>
      </Head>
      {data.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  );
};

export default Category;
