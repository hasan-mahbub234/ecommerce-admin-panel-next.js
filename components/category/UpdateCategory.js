import { BASE_LOCAL_URL } from "@/functions/apiService";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import Loader from "@/utils/Loader";
import React, { useState } from "react";

function UpdateCategory({ setUpdate, category, fetchCategories }) {
  const [updatedCategory, setUpdatedCategory] = useState({
    name: category.name,
    image: category.image,
  });
  const [loading, setLoading] = useState(false);

  //console.log(category);

  const handleUpdate = async () => {
    if (!updatedCategory.name) {
      console.error("Name is required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", updatedCategory.name);

      if (updatedCategory.image && updatedCategory.image !== category.image) {
        formData.append("image_file", updatedCategory.image);
      }

      // console.log(formData);

      const response = await fetch(
        `${BASE_LOCAL_URL}/categories/${category.uid}/`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      const result = await response.json();
      console.log("Update Response:", result);

      if (response.ok) {
        fetchCategories(); // Refresh the list after update
        setUpdate(false); // Close the update form
      }
    } catch (error) {
      console.error("Error updating category:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <BackButton change={() => setUpdate(false)} style={"mt-[-18px]"} />
        <Heading title={"Update Category"} />
      </div>
      {/* Update Form */}
      <div className="mt-4">
        <Input
          type="text"
          label="Category Name"
          placeholder="Enter category name"
          value={updatedCategory.name}
          change={(value) =>
            setUpdatedCategory((prev) => ({ ...prev, name: value }))
          }
        />
        <ImageInput
          label="Category Image"
          value={updatedCategory.image}
          change={(value) =>
            setUpdatedCategory((prev) => ({ ...prev, image: value }))
          }
        />
        <Button
          text="Update"
          change={handleUpdate}
          style="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 mt-24"
        />
        {loading && <Loader message="Updating Category..." />}
      </div>
    </>
  );
}

export default UpdateCategory;
