import Head from "next/head";
import { AllPosts } from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_BLOG_NAME}</title>
        <meta property="og: image" content="/icon-512x512.png" />
        <meta
          property="og: description"
          content="K Blog được lập ra với mục đích lưu lại những kiến thức lập trình của mình cũng như chia sẻ cho mọi người cùng biết. Ngoài ra, trang còn giúp các bạn có thể trao đổi thêm về lập trình, về máy tính... giúp trao dồi kiến thức không chỉ cho riêng mình mà còn cho cả những đọc giả của trang."
        />
      </Head>
      <AllPosts />
    </>
  );
};

export default Home;
