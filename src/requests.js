export const API_KEY = "e62cd896cfb8f1b08039122890ce89a6";

const requests = {
    fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
    fetchTrendingTv: `/trending/tv/week?api_key=${API_KEY}`,
    fetchTrendingPerson: `/trending/person/week?api_key=${API_KEY}`,
    fetchLatestMovie: `/movie/latest?api_key=${API_KEY}`,
    fetchLatestTV: `/tv/latest/?api_key=${API_KEY}`,
    fetchPopularMovies: `/movie/popular/?api_key=${API_KEY}`,
    fetchPopularTV: `/tv/popular/?api_key=${API_KEY}`,
    fetchTopRatedMovies: `/movie/top_rated/?api_key=${API_KEY}`,
    fetchTopRatedTV: `/tv/top_rated/?api_key=${API_KEY}`,
    fetchUpcomingMovie: `/movie/upcoming/?api_key=${API_KEY}`,
    fetchTvAiringToday: `/tv/airing_today/?api_key=${API_KEY}`,
    fetchNowPlayingMovie: `/movie/now_playing/?api_key=${API_KEY}`,
    fetchTvOnTheAir: `/tv/on_the_air/?api_key=${API_KEY}`,
    fetchDocumentaryMovie: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
    fetchMovieDetails: `/movie/movie_id/?api_key=${API_KEY}`,
    fetchTvDetails: `/tv/tv_id/?api_key=${API_KEY}`
}

export default requests;