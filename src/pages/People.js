import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Trending from "../component/peoplecomponents/Trending";
import requests from "../requests";

const People = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Trending fetchURL={requests.fetchTrendingPerson} />
      <Footer />
    </div>
  );
};

export default People;
