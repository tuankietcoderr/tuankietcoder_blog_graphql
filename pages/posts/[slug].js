import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "../../services/posts";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { highlightCode } from "../../utils/highlight-code";
import moment from "moment";
import { RelatedPosts } from "../../components";
import { imageAlt } from "../../utils/image-alt";

const PostDetail = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      getPostBySlug(router.query.slug)
        .then((res) => setData(res))
        .then(() => {
          imageAlt();
        });
    }
    setTimeout(() => {
      highlightCode();
      Prism.highlightAll();
    }, navigator.connection.rtt * 10 + 1000);
  }, [router.isReady, router.query.slug]);
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <div className="xl:grid xl:grid-cols-3 text-justify gap-4">
        <div className="prose dark:text-white md:prose-lg lg:prose-xl col-span-2 dark:prose-headings:text-white mx-auto w-full">
          <div className="relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black z-1 rounded-md" />
            <h1 className="text-3xl font-extrabold absolute bottom-0 left-0 right-0 my-8 flex flex-col justify-center items-center z-2 text-white">
              {data.title}
            </h1>
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
