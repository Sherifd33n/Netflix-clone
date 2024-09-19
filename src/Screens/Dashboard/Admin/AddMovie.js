import React from "react";
import { Input } from "../../../Components/UsedInput";
import SideBar from "../SideBar";
import Uploader from "../../../Components/Uploader";
import { Message, Select } from "../../../Components/UsedInputs";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UserData } from "../../../Data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";

const AddMovie = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl  font-bold ">Create Movie</h2>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder="Game Of Thrones"
            type="text"
            bg={true}
          />

          <Input label="Hours" placeholder="2 hr" type="text" bg={true} />
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="English"
            type="text"
            bg={true}
          />

          <Input
            label="Year Of Release"
            placeholder="2020"
            type="number"
            bg={true}
          />
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/movies/22.jpg"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image with title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/movies/17.jpg"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>

        <Message
          label="Movie Description"
          placeholder="Describe the movie you want..."
        />

        <div className="text-sm w-full">
          <Select label="Movie Category" options={CategoriesData} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-border font-semibold text-sm">
            Movie Video
          </label>
          <Uploader />
        </div>

        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button className="w-full py-3 bg-main border border-subMain border-dashed text-white rounded">
            Add Cast
          </button>
          <div className="grid  lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {UserData.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text rounded flex flex-colo bg-main border border-border"
              >
                <img
                  src={`/images/${user.image ? user.image : "user.png"}`}
                  alt=""
                  className="w-full h-24 object-cover rounded mb-4"
                />
                <p>{user.name}</p>
                <div className="flex flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 flex flex-colo bg-dry border border-border text-subMain rounded">
                    <MdDelete />
                  </button>
                  <button className="w-6 h-6 flex flex-colo bg-dry border border-border text-green-600  rounded">
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-subMain  w-full flex flex-rows gap-6 font-medium transitions hover:bg-dry border border-subMain text-white py-3 rounded">
          <ImUpload /> Publish Movie
        </button>
      </div>
    </SideBar>
  );
};

export default AddMovie;
