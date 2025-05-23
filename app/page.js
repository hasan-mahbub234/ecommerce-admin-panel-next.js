"use client";
import { SocialMedia } from "@/constants/AllConstants";
import { useAuth } from "@/context/AuthContext";
import Button from "@/utils/Button";
import DataTable from "@/utils/DataTable";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import SelectInput from "@/utils/SelectInput";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { user } = useAuth();
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
    <>
      {!user ? (
        <div className="ml-[250px] mt-20 px-10 flex flex-col items-center justify-center h-[80vh]">
          <p className="text-[30px] font-bold text-cyan-800 font-poppins">
            Welcome to admin panel!
          </p>
          <p>
            Please{" "}
            <Link href="/signin" className="text-cyan-500 border-b">
              Signin
            </Link>{" "}
            or{" "}
            <Link href="/login" className="text-cyan-500 border-b">
              Login
            </Link>{" "}
            to start work.
          </p>
        </div>
      ) : (
        <div className="ml-[250px] mt-8 px-10">
          <Heading title={"Admin Panel Settings"} />
          <div className="flex flex-row items-center w-full">
            <Input
              style={"mr-3"}
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
            <p className="font-poppins font-[500] text-[16px] my-2">
              Social Media
            </p>
            {/* Social Media Add Form */}
            <div className="flex flex-row items-center justify-start mb-4">
              <SelectInput
                // label="Select Social Media"
                placeholder="Select Social Media"
                value={selectedMedia}
                change={setSelectedMedia}
                dropdownOptions={SocialMedia}
                style={"mr-3"}
                renderOption={(option) => (
                  <div className="flex items-center">
                    {option.icon()}
                    <span className="text-gray-700">{option.name}</span>
                  </div>
                )}
              />
              <Input
                placeholder={"Enter link"}
                value={link}
                change={setLink}
                type={"text"}
                style={"mr-3"}
              />
              <Button change={handleAddSocialMedia} text={"Add"} />
            </div>

            {/* Render DataTable for Social Media */}
            <DataTable data={socialData} columns={socialColumns} />
          </div>
        </div>
      )}
    </>
  );
}
