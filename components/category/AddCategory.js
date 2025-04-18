import BackButton from "@/utils/BackButton";
import Heading from "@/utils/Heading";
import React from "react";

function AddCategory({ setAdd }) {
  return (
    <>
      <div className="flex flex-row items-center">
        <BackButton
          change={() => setAdd((prev) => !prev)}
          style={"mt-[-18px]"}
        />
        <Heading title={"Add A Category"} />
      </div>
    </>
  );
}

export default AddCategory;
