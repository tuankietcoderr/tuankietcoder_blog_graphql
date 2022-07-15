import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import React, { useEffect, useState, useContext } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Loading, RelatedPosts } from "../../components";
import { getPostBySlug } from "../../services/posts";
import { highlightCode } from "../../utils/highlight-code";
import { imageAlt } from "../../utils/image-alt";
import { PostContext } from "../../context/PostContext";
import Head from "next/head";

const PostDetail = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { posts } = useContext(PostContext);
  useEffect(() => {
    if (router.isReady) {
      if (posts && posts.find((post) => post.slug === router.query.slug)) {
        getPostBySlug(router.query.slug).then((res) => setData(res));
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
          {process.env.NEXT_PUBLIC_BLOG_NAME} | Bài viết | {data.title}
        </title>
        <meta property="og: image" content={data.featuredImage} />
        <meta property="og: description" content={data.excerpt} />
      </Head>
      <div className="xl:grid xl:grid-cols-3 text-justify gap-4">
        <div className="prose  dark:text-white/[0.8] md:prose-lg lg:prose-xl col-span-2 dark:prose-headings:text-white mx-auto w-full">
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
          <p className="text-xs flex flex-wrap">
            Danh mục:{" "}
            {data.categories.map((category) => (
              <Link href={`/categories/${category.slug}`} key={category.id}>
                <a className="dark:text-green-200 text-sky-400 px-2 border-r last:border-none">
                  {category.name}
                </a>
              </Link>
            ))}
          </p>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {data.description}
          </ReactMarkdown>
        </div>
        <div className="col-span-1">
          <RelatedPosts
            slug={data.slug}
            categories={data.categories.map((category) => category.slug)}
          />
        </div>
      </div>
    </>
  );
};

export default PostDetail;
