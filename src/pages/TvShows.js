import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const TvShows = ({ darkMode, setDarkMode }) => {
  const [time, setTime] = useState(12);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
      if (time === 0) {
        navigate("/", { replace: true });
      }
    }, 1000);
  });
  return (
    <div>
      <Navbar  darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="bg-gray-700 h-screen flex flex-col gap-3 items-center justify-center text-8xl font-bold">
      <div className="text-red-600 ">Coming Soon</div>
      <div className="text-4xl">Nothing to see over here yet!!!!!!!!!</div>
      <div className="text-4xl">Be Sure to enjoy the rest of The Entertainment Database</div>
      <div className="text-4xl">Redirecting to home page in {time} seconds</div>
    </div>
      <Footer />
    </div>
  );
};

export default TvShows;
