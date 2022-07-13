import moment from "moment";
import Link from "next/link";

const Posts = ({ post }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div
          key={post.id}
          className="xl:grid md:grid xl:grid-cols-4 md:grid-cols-4 gap-4 xl:items-baseline xl:space-y-0 border-t"
        >
          <div>
            <div className="opacity-70 my-4">
              {moment(post.createdAt).format("MMMM Do, YYYY")}
            </div>
            <div className="opacity-70 my-4">
              {moment(post.createdAt).format("hh:mm A")}
            </div>
          </div>
          <div className="xl:col-span-3 md:col-span-3 h-auto relative">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white my-4">
              {post.title}
            </h2>
            <p>{post.excerpt}</p>
            <div className="flex gap-x-2 flex-wrap mt-2">
              Danh mục:{" "}
              {post.categories.map((category) => (
                <Link href={`/categories/${category.slug}`} key={category.id}>
                  <a className="text-sky-300 dark:text-green-200 hover:text-sky-500 dark:hover:text-green-500">
                    {category.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="flex flex-row-reverse justify-between my-2">
              <Link href={`/posts/${post.slug}`}>
                <a>
                  <button className="bg-sky-500 text-white text-bold px-6 py-2 rounded-md lg:hover:bg-sky-700 transition-all lg:hover:scale-105">
                    Đọc thêm
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
