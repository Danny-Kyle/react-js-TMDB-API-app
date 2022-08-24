import React, { useState, useEffect } from "react";
import axios from "../../axios";

const LatestMovie = ({ fetchURL }) => {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setLatest(request.data);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  return (
    <section className="bg-sky-300 capitalize dark:bg-gray-900 text-black dark:text-white">
      latest movie
      <div className="bg-sky-300 dark:bg-gray-900 p-8">
        <div className="bg-transparent">
          <div
            className="cursor-not-allowed w-56 mx-auto overflow-hidden rounded-lg shadow-lg text-white dark:text-black dark:bg-pink-200 bg-gray-900 p-2"
            link=""
          >
            <div className="">
              <div className="py-5 text-center">
                <h1 className="block text-xs underline-offset-1 font-semibold">{latest.title}</h1>
                <h1 className="text-xs">{`"${latest.tagline}"`}</h1>
              </div>
              <div className="w-full object-cover">status: {latest.status}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestMovie;
