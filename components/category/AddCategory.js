import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import React from "react";

function AddCategory({ setAdd, setcategory, category, handleAdd }) {
  return (
    <>
      <div className="flex flex-row items-center">
        <BackButton
          change={() => setAdd((prev) => !prev)}
          style={"mt-[-18px]"}
        />
        <Heading title={"Add A Category"} />
      </div>
      {/* Form */}
      <div className="">
        <Input
          type={"text"}
          label={"Category name"}
          placeholder={"Enter Category name"}
          value={category.name}
          change={(value) => setcategory((prev) => ({ ...prev, name: value }))}
        />
        <ImageInput
          label={"Category Image"}
          value={category.image}
          change={(value) => setcategory((prev) => ({ ...prev, image: value }))}
        />
        <Button
          text={"Add"}
          change={handleAdd}
          style="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 mt-24"
        />
      </div>
    </>
  );
}

export default AddCategory;
