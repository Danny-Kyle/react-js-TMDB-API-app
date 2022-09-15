import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const SearchButton = () => {
  return (
    <button className="z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white dark:bg-gray-800">
      <div className="ml-2 bg-white dark:bg-gray-800">
        <Link to="/search">
          <div className="flex mx-auto gap-x-2">
            <BsSearch />
            <span>Search</span>
          </div>
        </Link>
      </div>
    </button>
  );
};

export default SearchButton;
