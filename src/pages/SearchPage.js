import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import axios from "../axios";
import { API_KEY } from "../requests";
import Navbar from "../component/Navbar";
import MovieItems from "../component/moviecomponents/components/MovieItems";

const SearchPage = ({ darkMode, setDarkMode }) => {
  const [text, setText] = useState("");
  const [seer, setSeer] = useState([]);
  const movieSearch = `/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${text}`;

  async function fetchSearchResults() {
    const results = await axios.get(movieSearch);
    console.log(results.data.results);
    setSeer(results.data.results);
    return results;
  }

  useEffect(() => {
    if (text !== "") {
      fetchSearchResults();
    } else {
    }
  }, [text]);

  const onChange = (q) => {
    setText(q);
  };
  return (
    <section className="bg-sky-300 dark:bg-gray-900">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="">
        <div className="">
          <form className="relative mx-auto mt-4 lg:mt-10 lg:mx-3">
            <input
              type="text"
              value={text}
              onChange={(e) => onChange(e.target.value)}
              autoFocus
              className="py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-700 dark:focus:border-gray-300 rounded-xl w-full lg:w-3/5 lg:border-transparent dark:text-gray-700 focus:outline-none focus:border-gray-600"
              placeholder="Search"
            />
          </form>
        </div>
        <div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {seer.length > 0 ?  (seer ?? "").map((search) => {
                return (
                  <div>
                    <MovieItems item={search} key={search.id} />
                  </div>
                );
              }) : "Your Movie Results will show up here..........."}
            </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SearchPage;
