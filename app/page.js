"use client";
import { SocialMedia } from "@/constants/AllConstants";
import DataTable from "@/utils/DataTable";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import SelectInput from "@/utils/SelectInput";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Kidos");
  const [slug, setSlug] = useState("kidos-online-shop");
  // Social Media States
  const [socialData, setSocialData] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState("");
  const [link, setLink] = useState("");

  // Handle Adding Social Media
  const handleAddSocialMedia = () => {
    if (!selectedMedia || !link) return;

    const mediaExists = socialData.some(
      (item) => item.name === selectedMedia.name
    );
    if (!mediaExists) {
      const newMedia = SocialMedia.find(
        (item) => item.name === selectedMedia.name
      );
      if (newMedia) {
        setSocialData([
          ...socialData,
          { media: newMedia.icon(), name: newMedia.name, link },
        ]);
      }
    }

    // Reset Fields
    setSelectedMedia("");
    setLink("");
  };

  // Social Media Table Columns
  const socialColumns = [
    {
      key: "media",
      label: "Media",
      render: (row) => (
        <div className="flex items-center">
          {row.media}{" "}
          {/* This is already an icon function, so we call it directly */}
          <span className="ml-2">{row.name}</span>
        </div>
      ),
    },
    { key: "link", label: "Link" },
  ];
  return (
    <div className="ml-[250px] mt-8 px-10">
      <Heading title={"Website Settings"} />
      <div className="flex flex-row items-center w-full">
        <Input
          label={"Name"}
          placeholder={"website"}
          value={name}
          change={setName}
          type={"text"}
        />
        <Input
          label={"Slug"}
          placeholder={"website"}
          value={slug}
          change={setSlug}
          type={"text"}
        />
      </div>
      <div className="flex flex-row items-center w-full">
        <ImageInput label={"Logo"} />
        <ImageInput label={"Favicon"} />
      </div>
      <div>
        <p className="font-poppins font-[500] text-[16px] my-2">Social Media</p>
        {/* Social Media Add Form */}
        <div className="flex flex-row items-center mb-4">
          <SelectInput
            // label="Select Social Media"
            placeholder="Select Social Media"
            value={selectedMedia}
            change={setSelectedMedia}
            dropdownOptions={SocialMedia}
            renderOption={(option) => (
              <div className="flex items-center">
                {option.icon()}
                <span className="text-gray-700">{option.name}</span>
              </div>
            )}
          />
          {/* <select
            value={selectedMedia}
            onChange={(e) => setSelectedMedia(e.target.value)}
            className="border-[2px] border-gray-400 rounded-[3px] h-[40px] px-3 placeholder:text-gray-300 text-gray-600 font-lato text-[14px] w-[500px] bg-white mr-2"
          >
            <option value="" className=" my-2">
              <p className="font-lato text-[14px]">Select Social Media</p>
            </option>
            {SocialMedia.map((item) => (
              <option
                key={item.name}
                value={item.name}
                className=" my-2 flex flex-row items-center"
              >
                {item.icon()}
                <p className="font-lato text-[14px]">{item.name}</p>
              </option>
            ))}
          </select> */}
          <Input
            placeholder={"Enter link"}
            value={link}
            change={setLink}
            type={"text"}
          />
          {/* <input
            type="text"
            placeholder="Enter link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border-[2px] border-gray-400 rounded-[3px] py-2 px-3 placeholder:text-gray-300 text-gray-600 font-lato text-[14px] w-[500px] mr-2"
          /> */}

          <button
            onClick={handleAddSocialMedia}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        {/* Render DataTable for Social Media */}
        <DataTable data={socialData} columns={socialColumns} />
      </div>
    </div>
  );
}
