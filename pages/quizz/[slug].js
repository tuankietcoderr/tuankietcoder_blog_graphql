import Head from "next/head";
import { useState, useEffect } from "react";

const Quizz = () => {
  const [quizz, setQuizz] = useState([]);
  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_BLOG_NAME} | Quizz | {quizz?.title}
        </title>
      </Head>
    </>
  );
};

export default Quizz;
