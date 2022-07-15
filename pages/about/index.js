import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_BLOG_NAME} | Về{" "}
          {process.env.NEXT_PUBLIC_BLOG_NAME}
        </title>
      </Head>
      <div>About</div>
    </>
  );
};

export default About;
