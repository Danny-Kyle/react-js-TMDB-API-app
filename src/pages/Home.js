import React from "react";
import Navbar from "../component/Navbar";
import moviesvg from "../images/denise-jans-Lq6rcifGjOU-unsplash.jpg";
import tvsvg from "../images/freestocks-11SgH7U6TmI-unsplash.jpg";
import peoplevg from "../images/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import Footer from "../component/Footer";
import Homecomponents from "../component/homecomponents/components/Homecomponents";

const Home = ({darkMode, setDarkMode }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="">
        <div className="capitalize">
          <div className="bg-lightbg dark:bg-darkbg text-white py-[2.10rem] px-4">
            <h3 className="text-bold">
              the entertainment world at your disposal
            </h3>
            <p>
              discover millions of movies, tv shows, documentaries, and people
            </p>

            <div className="py-8 px-4 md:flex">
              <Homecomponents label="movies" src={moviesvg} link="/movie" />
              <Homecomponents label="tv shows" src={tvsvg} link="/tv"/>
              <Homecomponents label="people" src={peoplevg} link="/people"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
