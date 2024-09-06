import React from "react";

const MovieRow = ({ title, movies }) => {
  return (
    <div className="text-white my-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie, index) => (
          <img
            key={index}
            src={movie.poster}
            alt={movie.title}
            className="w-40 h-60 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
