import React from "react";
import Title from "../Title";
import { FaFolderOpen } from "react-icons/fa";
import { Movies } from "../../Data/MovieData";
import Movie from "../Movie";

function PopularMovies() {
  return (
    <div className="my-16">
      <Title title="Popular Movies" Icon={FaFolderOpen} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {Movies.slice(0, 8).map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
