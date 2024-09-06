import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Movie Title</h1>
        <p className="text-xl mb-4">This is a short description of the movie.</p>
        <button className="playbutton">Play</button>
        <button className="watchlist">Watch List</button>
      </div>
    </div>
  );
};

export default Hero;
