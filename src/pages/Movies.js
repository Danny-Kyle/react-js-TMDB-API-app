import React, { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Popular from "../component/moviecomponents/PopularMovies";
import requests from "../requests";
import TopRatedMovies from "../component/moviecomponents/TopRatedMovies";
import LatestMovie from "../component/moviecomponents/LatestMovie";
import UpcomingMovies from "../component/moviecomponents/UpcomingMovies";
import NowPlayingMovies from "../component/moviecomponents/NowPlayingMovies";
import Documentaries from "../component/moviecomponents/Documentaries";
import SearchButton from "../component/moviecomponents/components/SearchButton";
import { UseGlobalContext } from "../context";

const Movies = ({ darkMode, setDarkMode }) => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState("top_rated");
  const {pageNo, setPageNo} = UseGlobalContext();
  const previous = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };
  const next = () => {
    if (pageNo < 20) {
      setPageNo(pageNo + 1);
    }
  };
  console.log(pageNo);
  return (
    <div className="bg-sky-300 min-h-full dark:bg-gray-900">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="py-2 flex gap-x-6 justify-center items-center">
        <SearchButton />
        <div className="flex justify-center">
          <div className="relative inline-block">
            <button
              className={`z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none`}
              onClick={() => setVisible(!visible)}
            >
              Categories :
            </button>
            <div
              className={`cursor-pointer absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800 ${
                visible === false ? "hidden" : ""
              }`}
            >
              <p
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setCategory("top_rated")}
              >
                Top Rated
              </p>
              <p
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setCategory("popular")}
              >
                Popular
              </p>
              <p
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setCategory("upcoming")}
              >
                Upcoming
              </p>
              <p
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setCategory("now_playing")}
              >
                Now Playing
              </p>
              <p
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setCategory("documentaries")}
              >
                Documentaries
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <LatestMovie fetchURL={requests.fetchLatestMovie} />
        {category === "popular" ? (
          <Popular fetchURL={requests.fetchPopularMovies} pageNo={pageNo} />
        ) : category === "top_rated" ? (
          <TopRatedMovies
            fetchURL={requests.fetchTopRatedMovies}
            pageNo={pageNo}
          />
        ) : category === "upcoming" ? (
          <UpcomingMovies
            fetchURL={requests.fetchUpcomingMovie}
            pageNo={pageNo}
          />
        ) : category === "now_playing" ? (
          <NowPlayingMovies
            fetchURL={requests.fetchNowPlayingMovie}
            pageNo={pageNo}
          />
        ) : category === "documentaries" ? (
          <Documentaries
            fetchURL={requests.fetchDocumentaryMovie}
            pageNo={pageNo}
          />
        ) : (
          ""
        )}
      </div>
      <div className="mx-auto pb-10 justify-center items-center flex w-[250px] mt-5">
        <button
          className="bg-white dark:text-black rounded-full px-4 mr-2 hover:border-black border-2 hover:font-bold"
          onClick={previous}
        >
          Previous
        </button>
        <h1 className="text-black dark:text-white">{pageNo}</h1>
        <button
          className="bg-white dark:text-black rounded-full px-4 ml-2 hover:border-black border-2 hover:font-bold"
          onClick={next}
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
