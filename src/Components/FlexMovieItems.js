import React from "react";
import { FaRegCalendarAlt, FaClock } from "react-icons/fa";

function FlexMovieItems({ movie }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-sm text-white font-medium">{movie.category}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaRegCalendarAlt className="text-subMain w-3 h-3" />
        <span className="text-sm text-white font-medium">{movie.year}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="text-subMain w-3 h-3" />
        <span className="text-sm text-white font-medium">{movie.time}</span>
      </div>
    </>
  );
}

export default FlexMovieItems;
