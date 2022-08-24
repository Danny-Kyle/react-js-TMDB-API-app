import React from "react";
import { Link } from "react-router-dom";

const baseURL = `http://image.tmdb.org/t/p/w500/`;

const MovieItems = ({ item }) => {
  return (
    <div className="bg-transparent text-black dark:text-white">
      <div className="mx-auto w-56 h-72 overflow-hidden bg-teal-600 rounded-lg shadow-lg ">
        <Link to={`/movie/${item.id}`}>
          <div className="py-4 items-center">
            <img
              src={`${baseURL}${item.poster_path}`}
              alt=""
              className="border-4 mx-auto hover:scale-110 duration-150 ease-in-out transition rounded-2xl border-rose-600 w-[80%] h-56"
            />
          </div>
          <div className="text-center">
            <h1 className="block text-xs font-semibold">{item.title}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieItems;
