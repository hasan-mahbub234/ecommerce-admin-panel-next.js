import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import TagInput from "@/utils/TagInput";
import TextArea from "@/utils/TextArea";
import React from "react";

export default function AddExpert({ setAdd, setExpert, expert, handleAdd }) {
  return (
    <>
      <div className="flex flex-row items-center">
        <BackButton
          change={() => setAdd((prev) => !prev)}
          style={"mt-[-18px]"}
        />
        <Heading title={"Add A Expert"} />
      </div>
      {/* Form */}
      <div className="">
        <div className="flex flex-row items-center w-full">
          <Input
            style={"mr-3"}
            type={"text"}
            label={"Expert Name"}
            placeholder={"Enter Your Name"}
            value={expert.name}
            change={(value) => setExpert((prev) => ({ ...prev, name: value }))}
          />
          <Input
            type={"text"}
            label={"Expert Exp"}
            placeholder={"Enter Your Exp"}
            value={expert.exp}
            change={(value) => setExpert((prev) => ({ ...prev, exp: value }))}
          />
        </div>
        <div className="flex flex-row items-start w-full">
          <div className="mr-3">
            <Input
              type={"text"}
              label={"Type"}
              placeholder={"Enter Your Type"}
              value={expert.type}
              change={(value) =>
                setExpert((prev) => ({ ...prev, type: value }))
              }
            />
            <TagInput
              type={"text"}
              label={"Technology"}
              placeholder={"Enter Yourt Expertise Technology"}
              value={expert.technology}
              change={(value) => {
                // console.log("Tags being saved as:", value); // <- Should log ["tag1", "tag2"]
                setExpert((prev) => ({ ...prev, technology: value }));
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 my-4">
          <ImageInput
            label={"Expert Image"}
            value={expert.image}
            change={(value) => setExpert((prev) => ({ ...prev, image: value }))}
          />
        </div>
      </div>

      <Button
        text={"Add"}
        change={handleAdd}
        style="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 mt-24"
      />
    </>
  );
}
