import Head from "next/head";
import { AllPosts } from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_BLOG_NAME}</title>
        <meta property="og:image" content="/icon-512x512.png" />
        <meta property="image" content="/icon-512x512.png" />
        <meta
          property="og: description"
          content="K Blog được lập ra với mục đích lưu lại những kiến thức lập trình của mình cũng như chia sẻ cho mọi người cùng biết. Ngoài ra, trang còn giúp các bạn có thể trao đổi thêm về lập trình, về máy tính... giúp trao dồi kiến thức không chỉ cho riêng mình mà còn cho cả những đọc giả của trang."
        />
        <meta
          name="description"
          content="K Blog được lập ra với mục đích lưu lại những kiến thức lập trình của mình cũng như chia sẻ cho mọi người cùng biết. Ngoài ra, trang còn giúp các bạn có thể trao đổi thêm về lập trình, về máy tính... giúp trao dồi kiến thức không chỉ cho riêng mình mà còn cho cả những đọc giả của trang."
        />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_BLOG_NAME} />
        <meta property="title" content={process.env.NEXT_PUBLIC_BLOG_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tuankietcoder.vercel.app" />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_BLOG_NAME}
        />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="K Blog" />
        <meta property="og:image:url" content="/icon-512x512.png" />
        <meta property="og:image:secure_url" content="/icon-512x512.png" />
      </Head>
      <AllPosts />
    </>
  );
};

export default Home;
