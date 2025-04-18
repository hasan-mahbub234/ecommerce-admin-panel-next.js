"use client";
import AddCategory from "@/components/category/AddCategory";
import UpdateCategory from "@/components/category/UpdateCategory";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import { useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const [category, setcategory] = useState({
    name: "",
    image: null,
    sub_category: [],
  });
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());

  return (
    <div className="ml-[250px] mt-8 px-10">
      {add ? (
        <>
          <AddCategory setAdd={setAdd} />
        </>
      ) : update ? (
        <>
          <UpdateCategory setUpdate={setUpdate} />
        </>
      ) : (
        <>
          <Heading title={"Categories"} />
          <Button
            text={"Add Category"}
            change={() => {
              setAdd((prev) => !prev);
              setcategory({
                name: "",
                image: null,
                sub_category: [],
              });
            }}
          />
        </>
      )}
    </div>
  );
}
