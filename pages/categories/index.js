import Link from "next/link";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import Head from "next/head";

const Categories = () => {
  const { categories } = useContext(PostContext);
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_BLOG_NAME} | Danh mục</title>
      </Head>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link href={`/categories/${category.slug}`} key={category.id}>
            <a className="bg-sky-300 p-2 rounded-sm sm:hover:bg-sky-400 dark:bg-green-200 dark:text-green-500 dark:sm:hover:bg-green-500 dark:sm:hover:text-green-200">
              {category.name}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
