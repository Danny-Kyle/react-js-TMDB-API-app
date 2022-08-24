import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Persons from "./components/Persons";

const Trending = ({ fetchURL }) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setPerson(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div>
      <div className="bg-sky-300 dark:bg-gray-900 text-black dark:text-white p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(person ?? []).map((person) => {
          return <Persons key={person.id} person={person}/>;
        })}
      </div>
    </div>
  );
};

export default Trending;
