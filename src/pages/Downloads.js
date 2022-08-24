import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Downloads = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="h-screen flex flex-col bg-gray-300 gap-y-4 dark:bg-gray-700 items-center justify-center text-3xl font-bold text-black dark:text-white ">
        <div className="text-red-600">
          For your Movie & Tv Shows Downloads, you can visit the following
          sites:
        </div>
        <a href="https://www.netflix.com/">Netflix</a>
        <a href="http://www.disneyplus.com/">Disney Plus</a>
        <a href="http://www.primevideo.com/">Amazon Prime</a>
        <a href="http://www.hbomax.com/">HBO Max</a>
        <a href="http://www.hulu.com/">Hulu</a>
        <a href="https://www.tfpdl.se">TFPDL</a>
        <a href="https://www.thepiratebay.org/">The Pirate Bay</a>
        <a href="https://o2tvseries.com/">O2 Tv Series</a>
        <a href="https://www.todaytvseries2.com/">Today TV Series </a>
        <a href = "https://ww2.putlocker.fan/">Put Locker</a>
        <a href="https://showrss.info/">Show RSS</a>
      </div>
      <Footer />
    </div>
  );
};

export default Downloads;
