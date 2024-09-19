import React from "react";
import {} from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { RiMovie2Fill, RiGridFill, RiLockPasswordLine } from "react-icons/ri";
import { FaListAlt, FaUsers, FaHeart } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import Layout from "../../Layout/Layout";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  const SideLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: RiGridFill,
    },
    {
      name: "Movies List",
      link: "/movieslist",
      icon: FaListAlt,
    },

    {
      name: "Add Movie",
      link: "/addmovie",
      icon: RiMovie2Fill,
    },
    {
      name: "Categories",
      link: "/categories",
      icon: HiViewGridAdd,
    },
    {
      name: "Users",
      link: "/users",
      icon: FaUsers,
    },
    {
      name: "Update Profile",
      link: "/profile",
      icon: FiSettings,
    },
    {
      name: "Favorite Movies",
      link: "/favorite",
      icon: FaHeart,
    },
    {
      name: "Change Password",
      link: "/password",
      icon: RiLockPasswordLine,
    },
  ];

  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0  mb-5">
            {SideLinks.map((link, index) => (
              <NavLink to={link.link} key={index} className={Hover}>
                <link.icon /> <p>{link.name}</p>
              </NavLink>
            ))}
          </div>
          <div className="col-span-6 rounded-md p-5 bg-dry border border-gray-800">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SideBar;
