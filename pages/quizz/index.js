import Head from "next/head";
import React from "react";

const QuizzPage = () => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_BLOG_NAME} | Quizz</title>
      </Head>
    </>
  );
};

export default QuizzPage;
