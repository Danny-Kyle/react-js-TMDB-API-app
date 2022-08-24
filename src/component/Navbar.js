import React, { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [toggledropdown, setToggleDropdown] = useState(false);
  console.log(toggledropdown)
  return (
    <div>
      <nav className="bg-sky-600 shadow dark:bg-yellow-600">
        <div className="container px-6 py-4 mx:auto space-x-4 flex justify-evenly lg:justify-between lg:items-center">
          <div className="lg:flex lg:items-center">
            <div className="flex space-x-5 items-center justify-between">
              <div>
                <Link
                  className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  to="/"
                >
                  The Entertainment Database
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  onClick={()=> setToggleDropdown(!toggledropdown)}
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={`flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center ${toggledropdown ? 'flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center':'hidden'}`}>
              <Link
                to="/movie"
                className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                movies
              </Link>
              <Link
                to="/tv"
                className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                tv shows
              </Link>
              <Link
                to="/people"
                className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                people
              </Link>
              <Link
                to="/downloads"
                className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                downloads
              </Link>
              <Link
                to="/more"
                className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                more
              </Link>
            </div>
          </div>
          <div>
            <button
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
