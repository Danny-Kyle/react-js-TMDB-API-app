import React from "react";

const MovieModal = ({ visible, item, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) {
    return null;
  }

  return (
    visible && (
      <div
        id="container"
        onClose={handleOnClose}
        className="fixed inset-0 bg-opacity-30 backdrop-blur-lg flex justify-center items-center"
      >
        <div className=" overflow-y-auto text:gray-900 dark:text-gray-100 w-[30vw] p-2 rounded-lg flex lg:block absolute px-6 py-3 mx-5 mt-4 bg-white border max-h-[45vw] dark:bg-gray-800 dark:border-transparent">
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt=""
              className="md:object-scale-down md:w-full md:h-96"
            />
          </div>
          <div className="text-xs px-6 py-3">{item.original_title}</div>
          <div>
            <ul className="text-left">
              <li>
                <strong>Release Date: </strong>
                {item.release_date}
              </li>
              <li>
                <strong>Movie Popularity: </strong>
                {item.popularity}
              </li>
              <li>
                <strong>Movie Overview: </strong>
                {item.overview}
              </li>
              <li>
                <strong>Vote Average: </strong>
                {item.vote_average}
              </li>
              <li>
                <strong>Vote Count: </strong>
                {item.vote_count}
              </li>
            </ul>
          </div>
        </div>
        <div
          className="absolute right-0 top-0 p-5 text-white hover:bg-red-600"
          onClick={onClose}
        >
          X
        </div>
      </div>
    )
  );
};

export default MovieModal;
