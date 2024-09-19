import React from "react";
import SideBar from "./SideBar";
import Uploader from "../../Components/Uploader";
import { Input } from "../../Components/UsedInput";

const Profile = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl  font-bold ">Profile</h2>
        <Uploader />
        <Input label="FullName" placeholder="John Doe" type="text" bg={true} />

        <Input
          label="Email"
          placeholder="neflix@gmail.com"
          type="email"
          bg={true}
        />

        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className="bg-subMain  font-medium transitions hover:bg-main border border-subMain text-white py-2 px-6 w-full sm:w-auto rounded">
            Delete Account
          </button>
          <button className="bg-main  font-medium transitions hover:bg-subMain border border-subMain text-white py-2 px-6 w-full sm:w-auto rounded">
            Update Profile
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Profile;
