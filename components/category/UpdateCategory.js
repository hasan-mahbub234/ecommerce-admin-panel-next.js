import BackButton from "@/utils/BackButton";
import Heading from "@/utils/Heading";
import React from "react";

function UpdateCategory({ setUpdate }) {
  return (
    <>
      <div className="flex flex-row items-center">
        <BackButton change={() => setUpdate(false)} style={"mt-[-18px]"} />
        <Heading title={"Update Category"} />
      </div>
    </>
  );
}

export default UpdateCategory;
