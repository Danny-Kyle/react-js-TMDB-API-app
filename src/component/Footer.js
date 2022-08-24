import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center justify-between px-6 py-4 bg-sky-600 dark:bg-yellow-600 sm:flex-row">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
        >
          The Entertainment Database
        </Link>

        <p className="py-2 text-gray-800 dark:text-white sm:py-0">
          All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
