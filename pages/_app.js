import { NavigationBar } from "../components";
import { ExerciseContextProvider } from "../context/ExerciseContext";
import { PostContextProvider } from "../context/PostContext";
import "../styles/globals.css";

//! Syntax highlighter

import Prism from "prismjs";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-go";
import "prismjs/components/prism-php";
import "prismjs/components/prism-java";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PostContextProvider>
        <ExerciseContextProvider>
          <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-[10%] min-h-screen">
            <NavigationBar />
            <Component {...pageProps} />
          </main>
        </ExerciseContextProvider>
      </PostContextProvider>
    </>
  );
}

export default MyApp;
