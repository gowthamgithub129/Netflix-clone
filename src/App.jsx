import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";

const App = () => {
  const movies = [
    { title: "Movie 1", poster: "https://source.unsplash.com/random/300x400?sig=1" },
    { title: "Movie 2", poster: "https://source.unsplash.com/random/200x300?sig=2" },
    { title: "Movie 3", poster: "https://source.unsplash.com/random/200x300?sig=3" },
    { title: "Movie 4", poster: "https://source.unsplash.com/random/200x300?sig=4" },
    { title: "Movie 5", poster: "https://source.unsplash.com/random/200x300?sig=4" },
    { title: "Movie 6", poster: "https://source.unsplash.com/random/200x300?sig=4" },
    { title: "Movie 7", poster: "https://source.unsplash.com/random/200x300?sig=4" },
    { title: "Movie 8", poster: "https://source.unsplash.com/random/200x300?sig=4" },
    { title: "Movie 9", poster: "https://source.unsplash.com/random/200x300?sig=4" },
    { title: "Movie 10", poster: "https://source.unsplash.com/random/200x300?sig=4" },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <div className="px-8">
        <MovieRow title="Trending Now" movies={movies} />
        <MovieRow title="New Releases" movies={movies} />
        <MovieRow title="Top Rated" movies={movies} />
        <MovieRow title="Popular on Netflix" movies={movies} />
        <MovieRow title="Telugu Movies" movies={movies} />
        <MovieRow title="Tamil Movies" movies={movies} />
        <MovieRow title="Adventure and Thrillers" movies={movies} />
        <MovieRow title="Comedy/sci-fi/Action" movies={movies} />
      </div>
    </div>
  );
};

export default App;
