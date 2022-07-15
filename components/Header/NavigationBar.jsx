import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon, X, List } from "react-bootstrap-icons";

const NavigationBar = () => {
  const navItem = [
    { item: "Trang chủ", link: "/" },
    { item: "Danh mục", link: "/categories" },
    { item: "Bài tập", link: "/exercises" },
    { item: "Quizz", link: "/quizz" },
    { item: "Về chúng tôi", link: "about" },
  ];
  const [toggleDark, setToggleDark] = useState(false);
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    const body = document.getElementsByTagName("body")[0];
    if (toggleDark) {
      html.classList.add("dark");
      html.style.colorScheme = "dark";
      body.classList.add("bg-gray-900");
    } else {
      html.classList.remove("dark");
      html.style.colorScheme = "light";
      body.classList.remove("bg-gray-900");
    }
  }, [toggleDark]);

  const [display, setDisplay] = useState("full");
  return (
    <>
      <header className="sticky top-[-1px] z-[9999] bg-white shadow-sm sm:shadow-none my-10 py-2 px-2 dark:bg-gray-900">
        <nav className="flex justify-between">
          <Link href="/" passHref>
            <a className="flex flex-col items-center justify-center">
              {/*! LOGO */}
              {process.env.NEXT_PUBLIC_BLOG_NAME}
            </a>
          </Link>
          <ul className="hidden sm:flex">
            {navItem.map(({ item, link }) => (
              <li key={link}>
                <Link href={link} passHref>
                  <a className="px-5 py-3 hover:opacity-70 font-semibold flex flex-col items-center justify-center">
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={() => setToggleDark(!toggleDark)}
              className="rounded p-1"
            >
              {toggleDark ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="ml-1 mr-1 h-8 w-8 rounded py-1"
              aria-label="Toggle Menu"
              onClick={() => setDisplay(0)}
            >
              <List size={32} />
            </button>
            <div
              className={`fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
                display === 0 ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-5 mt-11 h-8 w-8 rounded dark:text-white"
                  aria-label="Toggle Menu"
                  onClick={() => setDisplay("full")}
                >
                  <X size={40} />
                </button>
              </div>
              <nav className="fixed mt-8 h-full">
                {navItem.map(({ item, link }) => (
                  <Link href={link} key={link} passHref>
                    <div className="px-12 py-4">
                      <a className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100">
                        {item}
                      </a>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
