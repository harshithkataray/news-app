import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { ThemeContext } from "../context/Theme";
import { Link } from "react-router-dom";
import axios from "axios";

function NavBar({ setSearchResults }) {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSearch = async (e) => {
    const search = e.target.value.trim();
    console.log(search);
    if (!search) {
      setSearchResults([]); // clear results if input is empty
      return;
    }

    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&from=2025-06-24&sortBy=popularity&apiKey=5cbc7ac68d284fbeb0d9b253f6cc100d`
      );
      setSearchResults(res.data.articles);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const links = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className="fixed w-full bg-white dark:bg-blue-900 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <div className="px-3 md:text-2xl text-lg font-bold dark:text-gray-200 text-blue-700 cursor-pointer">
            NewsApp
          </div>
        </Link>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              to={`/${link}`}
              key={link}
              className="text-gray-700 capitalize dark:text-gray-200"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="relative bg-gray-200 p-2 rounded-lg">
            <input
              onChange={handleSearch}
              type="search"
              placeholder="Search..."
              className="pl-8 pr-3 py-1 bg-transparent outline-none text-sm w-40"
            />
          </div>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button className="md:hidden">
            <HiMenu size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
