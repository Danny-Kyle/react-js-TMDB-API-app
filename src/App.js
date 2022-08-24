import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tvshows from "./pages/TvShows";
import People from "./pages/People";
import SingleMoviePage from "./pages/SingleMoviePage";
import Downloads from "./pages/Downloads";
import More from "./pages/More";
import ScrollToTop from "./ScrollToTop";
import SearchPage from "./pages/SearchPage";

// const API_KEY = "e62cd896cfb8f1b08039122890ce89a6";
// const baseURL = "https://api.themoviedb.org/3/";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} bg-white`}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/movie"
            element={<Movies darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/tv"
            element={<Tvshows darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/people"
            element={<People darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/more"
            element={<More darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/downloads"
            element={
              <Downloads darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          />
          <Route
            path="/search"
            element={<SearchPage darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/movie/:slug"
            element={
              <SingleMoviePage darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
