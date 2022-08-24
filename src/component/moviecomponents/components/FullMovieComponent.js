import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import avatar from "../../../images/avatar.png";

const imgsrc = "http://image.tmdb.org/t/p/w500/";
const API_KEY = "e62cd896cfb8f1b08039122890ce89a6";

const FullMovieComponent = ({ slug, item }) => {
  const [clips, setClips] = useState([]);
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const cast = await axios.get(
      `https://api.themoviedb.org/3/movie/${slug}/credits?api_key=${API_KEY}`
    );
    setCast(cast.data.cast);
    console.log(cast.data.cast);
    return cast;
  }

  async function fetchImages() {
    const images = await axios.get(
      `https://api.themoviedb.org/3/movie/${slug}/videos?api_key=${API_KEY}`
    );
    setClips(images.data.results);
    return images;
  }

  useEffect(() => {
    fetchCast();
    fetchImages();
  });
  return (
    <div className="bg-white dark:text-white text-black dark:bg-gray-900">
      <div className="relative inline-block text:gray-900 dark:text-gray-100 w-full dark:border-transparent text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl">
        <img
          src={`${imgsrc}${item.backdrop_path}`}
          alt=""
          className="md:h-[700px] opacity-40 blur-sm w-full"
        />
        <div className="md:ml-[50px] flex items-center md:justify-center flex-row absolute md:scale-125 md:left-10 lg:bottom-28 md:bottom-36 bottom-1">
          <img
            src={`${imgsrc}${item.poster_path}`}
            alt=""
            className="rounded-2xl ml-4 max-w-[min(400px, 90%)] sm:max-w-[50%] lg:h-96 md:h-56 h-36"
          />
          <div className="text-lg md:ml-10">
            <div className="font-bold">{item.title}</div>
            <div>"{item.tagline}"</div>
            <div className="flex flex-col gap-x-3">
              <div>{item.release_date}</div>
              <div className="flex gap-x-2">
                {item.genres?.map((genre) => {
                  return (
                    <div
                      key={genre.id}
                      className="border-2 rounded-full px-2 bg-gray-900 text-white border-red-400"
                    >
                      {genre.name}
                    </div>
                  );
                })}
              </div>
              <div>
                {parseInt(item.runtime / 60)} : {item.runtime % 60} hours
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="p-8 lg:w-2/3">
          <ul className="text-sm">
            <li className="py-4">
              <strong>Status: </strong>
              {item.status}
            </li>
            <li className="py-4">
              <strong>Popularity: </strong>
              {parseInt(item.popularity)}
            </li>
            <li className="py-4">
              <strong>Overview: </strong>
              {item.overview}
            </li>
            <li className="py-4">
              <strong>Vote Average: </strong>
              {parseInt(item.vote_average)}/10
            </li>
            <li className="py-4">
              <strong>Vote Count: </strong>
              {item.vote_count}
            </li>
            <li className="py-4">
              <strong>Budget: </strong>
              {item.budget > 0 ? item.budget : "-"}
            </li>
            <li className="py-4">
              <strong>Revenue: </strong>
              {item.revenue > 0 ? item.revenue : "-"}
            </li>
            <li className="py-4">
              <strong>Production Companies:</strong>
              {item.production_companies?.map((companies) => {
                return (
                  <div key={companies.id} className="py-4">
                    <img
                      src={companies.logo_path ?`${imgsrc}${companies.logo_path}`: ""}
                      alt=""
                      className="h-12 "
                    />
                    <div>{companies.name}</div>
                    <div>{companies.origin_country}</div>
                  </div>
                );
              })}
            </li>
            <li className="py-4">
              <strong>Production Countries:</strong>
              {item.production_countries?.map((countries) => {
                return <div key={countries.iso__3166_1}>{countries.name}</div>;
              })}
            </li>
            <li className="py-4 capitalize">
              <strong>Original Language: </strong>
              {item.original_language}
            </li>
            <li className="py-4">
              <strong>Spoken Languages: </strong>
              {item.spoken_languages?.map((languages) => {
                return (
                  <div key={languages.iso_639_1}>{languages.english_name}</div>
                );
              })}
            </li>
            <div className="flex flex-col">
              {item.homepage ? (
                <a href={item.homepage} className="py-2 hover:text-blue-300">
                  Visit Movie Homepage
                </a>
              ) : (
                ""
              )}
              {item.imdb_id ? (
                <a
                  href={`https://imdb.com/title/${item.imdb_id}`}
                  className="hover:text-blue-300"
                >
                  Visit IMDB Profle
                </a>
              ) : (
                ""
              )}
            </div>
          </ul>
        </div>
        <div className=" py-8">
          <ul className="text-lg gap-y-4">
            <li>
              <strong>Movie Clips and Trailers: </strong>
              <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3 text-xs">
                {clips?.map((clip) => {
                  return (
                    <div key={clip.id} className="py-4 px-4">
                      <div
                        className="mx-auto cursor-pointer bg-gray-300 dark:bg-teal-900 px-2 py-4"
                        onClick={() => {
                          window.open(
                            `https://youtube.com/watch?v=${clip.key}`
                          );
                        }}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg`}
                          className=""
                          alt=""
                        />
                        {clip.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
            <li>
              <strong>Movie Cast: </strong>
              <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3 text-xs">
                {cast?.map((cast) => {
                  return (
                    <div key={cast.id} className="px-4">
                      <div className="mx-auto bg-gray-300 dark:bg-teal-900 px-4 py-4">
                        <img
                          src={
                            cast.profile_path
                              ? `${imgsrc}${cast.profile_path}`
                              : avatar
                          }
                          alt=""
                          className="md:h-32 h-20"
                        />
                        {cast.name} as: {cast.character}
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FullMovieComponent;
