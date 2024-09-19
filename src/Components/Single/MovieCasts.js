import React from "react";
import { FaUser } from "react-icons/fa";
import Title from "../Title";

import { UserData } from "../../Data/MovieData";

const MovieCasts = () => {
  return (
    <div className="my-12">
      <Title title="Casts" Icon={FaUser} />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {UserData.slice(0, 10).map((user) => (
          <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800">
            <img
              src={`/images/movies/${user.image}`}
              alt={user.name}
              className="w-full h-64 object-cover rounded mb-2 "
            />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCasts;
