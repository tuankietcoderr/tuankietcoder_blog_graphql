import Link from "next/link";
import { useState, useEffect } from "react";
import { getSimilarPosts } from "../../../services/posts";
import moment from "moment";

const RelatedPosts = ({ slug, categories }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getSimilarPosts(categories, slug).then((res) => setData(res));
  }, [slug]);
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <h3 className="font-bold text-xl">Bài viết liên quan</h3>
      <div className="rounded-md shadow-md p-3">
        {data.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.id} passHref>
            <a>
              <div className="border-b sm:hover:opacity-70" title={post.title}>
                <h1 className="font-bold text-lg">{post.title}</h1>
                <cite className="opacity-70 text-[0.7rem]">
                  {moment(post.createdAt).fromNow()}
                </cite>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RelatedPosts;
