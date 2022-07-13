import Head from "next/head";
import { AllPosts } from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>tuankietcoder's Blog</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <AllPosts />
    </>
  );
};

export default Home;
