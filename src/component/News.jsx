import React from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import { useEffect } from "react";
export const News = ({ country, category, artical, setArtical }) => {
  const fetchAllNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5cbc7ac68d284fbeb0d9b253f6cc100d`
      );

      setArtical(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllNews();
  }, [category]);
  return (
    <div className=" bg-gray-400  dark:bg-gray-800 dark py-24 px-4 md:px-0">
      <div className=" max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-4 gap-7">
        {artical.map((artical, index) => {
          return <NewsCard key={index} artical={artical} />;
        })}
      </div>
    </div>
  );
};
