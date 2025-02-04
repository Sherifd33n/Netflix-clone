import React from "react";
import Layout from "../Layout/Layout";
import logo from "../../src/assets/netflix-logo.png";
import { Input } from "../Components/UsedInput";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full gap-3 flex-colo p-8 sm:p-12 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src={logo} alt="logo" className="w-full h-16 object-contain" />
          <Input
            label="Email"
            placeholder="Netflix@gmail.com"
            type="email"
            bg={true}
          />
          <Input
            label="Password"
            placeholder="********"
            type="password"
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex mt-4 flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign In
          </Link>
          <p className="text-center text-border">
            Don't have an account?
            <Link
              to="/register"
              className="text-dryGray
             font-semibold ml-2"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
