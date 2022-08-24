import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import axios from "../axios";
import FullMovieComponent from "../component/moviecomponents/components/FullMovieComponent";
import Navbar from "../component/Navbar";

const SingleMoviePage = ({darkMode, setDarkMode}) => {
  const API_KEY = "e62cd896cfb8f1b08039122890ce89a6";
  const { slug } = useParams();
  const [moviedeets, setMovieDeets] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      const request = await axios.get(`/movie/${slug}?api_key=${API_KEY}`)
      setMovieDeets(request.data);
      console.log(request.data);
      return request;
    }
    fetchMovieData();
  }, [slug]);


  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <FullMovieComponent slug={slug} item={moviedeets}/>
      <Footer />
    </div>
  );
};

export default SingleMoviePage;
