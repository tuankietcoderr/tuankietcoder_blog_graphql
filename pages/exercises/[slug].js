import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import React, { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Loading } from "../../components";
import { ExerciseContext } from "../../context/ExerciseContext";
import { getExerciseBySlug } from "../../services/exercises";
import { highlightCode } from "../../utils/highlight-code";
import { imageAlt } from "../../utils/image-alt";

const ExerciseDetail = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { exercises } = useContext(ExerciseContext);
  useEffect(() => {
    if (router.isReady) {
      if (
        exercises &&
        exercises.find((exercise) => exercise.slug === router.query.slug)
      ) {
        getExerciseBySlug(router.query.slug).then((res) => setData(res));
      } else router.push("/404");
    }
    setTimeout(() => {
      imageAlt();
      highlightCode();
      Prism.highlightAll();
    }, navigator.connection.rtt * 10 + 1000);
  }, [router.isReady, router.query.slug]);
  if (!data) return <Loading />;
  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_BLOG_NAME} | Bài tập | {data?.title}
        </title>
        <meta property="og:image" content={data.featuredImage} />
        <meta property="image" content={data.featuredImage} />
        <meta property="og:description" content={data.excerpt} />
        <meta property="description" content={data.excerpt} />
        <meta property="og:title" content={data.title} />
        <meta property="title" content={data.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://tuankietcoder.vercel.app/exercises/${data.slug}`}
        />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_BLOG_NAME}
        />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:locale:alternate" content="en_US" />
      </Head>
      <div className="text-justify">
        <div className="prose  dark:text-white/[0.8] md:prose-lg lg:prose-xl dark:prose-headings:text-white mx-auto w-full">
          <div className="relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black z-1 rounded-md" />
            <h2 className="text-xl font-extrabold absolute bottom-0 left-0 right-0 my-8 flex flex-col justify-center items-center z-2 text-white">
              {data.title}
            </h2>
            <cite className="absolute top-2 right-2 text-sm rounded-md bg-black text-white p-2">
              {moment(data.createdAt).format("hh:mm A MMMM Do, YYYY")}
            </cite>
            <img
              src={data.featuredImage}
              className="w-full rounded-md z-3"
              alt={data.title}
              loading="lazy"
            />
          </div>
          {/* <p className="text-xs flex flex-wrap">
            Danh mục:{" "}
            {data.categories.map((category) => (
              <Link href={`/categories/${category.slug}`} key={category.id}>
                <a className="dark:text-green-200 text-sky-400 px-2 border-r last:border-none">
                  {category.name}
                </a>
              </Link>
            ))}
          </p> */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {data.description}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default ExerciseDetail;
