import React,  {useState, useEffect} from 'react';
import MovieItems from "./components/MovieItems";
import axios from "../../axios";

const PopularMovie = ({pageNo, fetchURL}) => {
  const [movies, setMovies] = useState([]) 
  const get = fetchURL + `&page=${pageNo}`

  useEffect(() =>{
    async function fetchData (){
      const request = await axios.get(get)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [get])


  return (
    <section className="bg-sky-300 dark:bg-gray-900 text-black dark:text-white">
      Popular Movies
    <div className={`bg-sky-300 dark:bg-gray-900 p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
      {(movies ?? []).map((item) => {
        return <MovieItems key={item.id} item={item}/>;
      })}
    </div>
  </section>
  )
}

export default PopularMovie