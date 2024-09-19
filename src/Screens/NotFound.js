import React from "react";
import error from "../../src/assets/icon-error.svg";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="flex-colo w-full min-h-screen gap-6 text-white bg-main lg:py-20 py-10 px-6">
      <img src={error} alt="not found" className="w-full h-72 object-contain" />
      <h1 className="lg:text-4xl font-bold">Page Not Found</h1>
      <Link
        to="/"
        className="bg-subMain text-white font-medium px-4 rounded-md flex flex-rows gap-4 py-3 hover:text-main transitions"
      >
        <BiHomeAlt2 /> Back Home
      </Link>
    </div>
  );
};

export default NotFound;
