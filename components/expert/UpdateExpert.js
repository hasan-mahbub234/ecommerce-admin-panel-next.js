import React, { useState } from "react";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import { BASE_LOCAL_URL } from "@/functions/apiService";

export default function UpdateExpert({ setUpdate, expert, fetchExpert }) {
  const [updateExpert, setUpdateExpert] = useState({
    name: expert.name,
    type: expert.type,
    exp: expert.exp,
    technology: expert.technology,
    image: expert.image,
  });

  const handleUpdate = async () => {
    if (!updateExpert.name) {
      console.error("name is required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", updateExpert.name);
      formData.append("type", updateExpert.type);
      formData.append("exp", updateExpert.exp);
      formData.append("technology", updateExpert.technology);
      formData.append("image", updateExpert.image);

      if (updateExpert.image && updateExpert.image !== updateExpert.image) {
        formData.append("image", updateExpert.image);
      }

      const response = await fetch(`${BASE_LOCAL_URL}/experts/${expert.uid}/`, {
        method: "PATCH",
        body: formData,
      });

      const text = await response.text();
      const result = text ? JSON.parse(text) : {};

      if (response.ok) {
        fetchExpert();
        setUpdate(false);
      } else {
        console.error("Update failed:", result);
      }
    } catch (error) {
      console.error("Error updating Expert:", error);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <BackButton change={() => setUpdate(false)} style={"mt-[-18px]"} />
        <Heading title={"Update Expert"} />
      </div>
      <div className="mt-4 space-y-4">
        <Input
          type="text"
          label="Expert Name"
          placeholder="Enter Your Name"
          value={updateExpert.name}
          change={(value) =>
            setUpdateExpert((prev) => ({ ...prev, name: value }))
          }
        />
        <Input
          type="text"
          label="Type"
          placeholder="Enter Your Type"
          value={updateExpert.type}
          change={(value) =>
            setUpdateExpert((prev) => ({ ...prev, type: value }))
          }
        />
        <Input
          type="text"
          label="Technology"
          placeholder="Enter Your Expertise Technology"
          value={updateExpert.technology}
          change={(value) =>
            setUpdateExpert((prev) => ({ ...prev, technology: value }))
          }
        />
        <ImageInput
          label="Expert Image"
          value={updateExpert.image}
          change={(value) =>
            setUpdateExpert((prev) => ({ ...prev, image: value }))
          }
        />
        <Button text="Update" change={handleUpdate} />
      </div>
    </>
  );
}
