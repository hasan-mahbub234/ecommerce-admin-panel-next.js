import React, { useState } from "react";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import { BASE_LOCAL_URL } from "@/functions/apiService";

function UpdateSubcategory({ setUpdate, subcategory, fetchSubcategories }) {
  const [updatedSubcategory, setUpdatedSubcategory] = useState({
    name: subcategory.name,
    image: subcategory.image,
  });

  const handleUpdate = async () => {
    if (!updatedSubcategory.name) {
      console.error("Name is required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", updatedSubcategory.name);

      if (
        updatedSubcategory.image &&
        updatedSubcategory.image !== subcategory.image
      ) {
        formData.append("image_file", updatedSubcategory.image);
      }

      console.log(formData);

      const response = await fetch(
        `${BASE_LOCAL_URL}/sub_category/${subcategory.uid}/`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      const result = await response.json();
      console.log("Update Response:", result);

      if (response.ok) {
        fetchSubcategories(); // Refresh the list after update
        setUpdate(false); // Close the update form
      }
    } catch (error) {
      console.error("Error updating subcategory:", error);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <BackButton change={() => setUpdate(false)} style={"mt-[-18px]"} />
        <Heading title={"Update Subcategory"} />
      </div>
      {/* Update Form */}
      <div className="mt-4">
        <Input
          type="text"
          label="Subcategory Name"
          placeholder="Enter subcategory name"
          value={updatedSubcategory.name}
          change={(value) =>
            setUpdatedSubcategory((prev) => ({ ...prev, name: value }))
          }
        />
        <ImageInput
          label="Subcategory Image"
          value={updatedSubcategory.image}
          change={(value) =>
            setUpdatedSubcategory((prev) => ({ ...prev, image: value }))
          }
        />
        <Button text="Update" change={handleUpdate} />
      </div>
    </>
  );
}

export default UpdateSubcategory;
