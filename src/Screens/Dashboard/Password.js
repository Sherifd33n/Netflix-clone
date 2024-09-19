import React from "react";
import SideBar from "./SideBar";
import { Input } from "../../Components/UsedInput";

const Password = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl  font-bold ">Change Password</h2>

        <Input
          label="Previous Password"
          placeholder="********"
          type="password"
          bg={true}
        />

        <Input
          label="New Password"
          placeholder="********"
          type="password"
          bg={true}
        />
        <Input
          label="Confirm Password"
          placeholder="********"
          type="password"
          bg={true}
        />

        <div className="flex  justify-end item-center my-4">
          <button className="bg-main  font-medium transitions hover:bg-subMain border border-subMain text-white py-2 px-6 w-full sm:w-auto rounded">
            Change Password
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Password;
