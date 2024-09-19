import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInput";

function CategoryModal({ modalOpen, setModalOpen, category }) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-hidden h-full border border-border bg-main text-white  rounded-2xl">
        <h2 className="text-3xl font-bold">{category ? "Update" : "Create"}</h2>

        <Input
          label="Category Name"
          placeholder={category ? category.title : "Actions"}
          type="text"
          bg={false}
        />
        <button
          onClick={() => setModalOpen(false)}
          className="w-full flex flex-rows gap-4 py-4  transitions rounded bg-subMain border-2 text-lg text-white hover:bg-dry"
        >
          {category ? "Update" : "Add"}
        </button>
      </div>
    </MainModal>
  );
}

export default CategoryModal;
