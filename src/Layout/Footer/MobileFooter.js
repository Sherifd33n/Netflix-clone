import React from "react";
import { NavLink } from "react-router-dom";
import { BsCollectionPlay } from "react-icons/bs";
import { FiHeart, FiUserCheck, FiPhone } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";

function MobileFooter() {
  const active = "text-main";
  const inActive =
    "transitions text-2xl flex flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3";

  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;
  return (
    <>
      <div className="flex flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full"></div>

      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn flex w-full p-1">
          <NavLink to="/movies" className={Hover}>
            <BsCollectionPlay />
          </NavLink>

          <NavLink to="/favorite" className={Hover}>
            <div className="relative">
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-2 -right-2">
                4
              </div>
              <FiHeart />
            </div>
          </NavLink>
          <NavLink to="/" className={Hover}>
            <HiOutlineHome />
          </NavLink>
          <NavLink to="/login" className={Hover}>
            <FiUserCheck />
          </NavLink>

          <NavLink to="/contact-us" className={Hover}>
            <FiPhone />
          </NavLink>
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
