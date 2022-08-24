import React from "react";
import { Link } from "react-router-dom";

const Homecomponents = ({ label, src,link }) => {
  return (
    <div className="max-w-xs my-8 cursor-pointer capitalize mx-auto hover:scale-110 duration-150 ease-in-out transition overflow-hidden rounded-lg shadow-lg text-white dark:text-black dark:bg-pink-200 bg-gray-900 p-2">
      <Link to={link}>
        <div className="">
          <img src={src} alt="" className="w-96 h-56 object-cover" />
        </div>
        <div className="py-5 text-center">
          <h1 className="block text-xs font-semibold">{label}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Homecomponents;
