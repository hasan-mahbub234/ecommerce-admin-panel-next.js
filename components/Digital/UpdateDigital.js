import React, { useEffect, useState } from "react";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import TagInput from "@/utils/TagInput"; // Changed from Input to TagInput
import TextArea from "@/utils/TextArea";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import SelectInput from "@/utils/SelectInput";
import axios from "axios";
import VideoInput from "@/utils/VideoInput";
import Loader from "@/utils/Loader";
import { useAuth } from "@/context/AuthContext";

function UpdateDigital({ setUpdate, digital, fetchDigital }) {
  const { token } = useAuth();
  const [updatedDigital, setUpdatedDigital] = useState({
    name: digital.name,
    description: digital.description,
    package: digital.package || [],
    category: digital.category,
    category_id: digital.category_id,
    discount: digital.discount,
    account_type: digital.account_type,
    tags: digital.tags,
    primary_image: digital.primary_image,
  });
  const [loading, setLoading] = useState(false);
  const [selectedCat, setSelectedCat] = useState(digital.category);
  const [categories, setCategories] = useState([]);
  const [packageItem, setPackageItem] = useState({
    duration: "",
    price: "",
  });
  const [packageError, setPackageError] = useState("");

  const durationOptions = ["1 month", "3 months", "6 months", "1 year"];

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_LOCAL_URL}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
    console.log(digital);
  }, []);

  const handleAddPackage = () => {
    if (!packageItem.duration || !packageItem.price) {
      setPackageError("Both duration and price are required");
      return;
    }

    if (isNaN(packageItem.price)) {
      setPackageError("Price must be a number");
      return;
    }

    setPackageError("");
    setUpdatedDigital((prev) => ({
      ...prev,
      package: [
        ...prev.package,
        {
          duration: packageItem.duration,
          price: parseFloat(packageItem.price),
        },
      ],
    }));
    setPackageItem({ duration: "", price: "" });
  };

  const removePackageItem = (index) => {
    setUpdatedDigital((prev) => ({
      ...prev,
      package: prev.package.filter((_, i) => i !== index),
    }));
  };

  const handleUpdate = async () => {
    if (token) {
      setLoading(true);
      try {
        const formData = new FormData();
        // console.log(cleanedDigital.video_file);

        // Basic fields
        formData.append("name", updatedDigital.name);
        formData.append("description", updatedDigital.description);
        formData.append("category", updatedDigital.category);
        formData.append("category_id", updatedDigital.category_id);
        formData.append("discount", updatedDigital.discount);
        formData.append("package", JSON.stringify(updatedDigital.package));
        formData.append("account_type", updatedDigital.account_type);
        formData.append("tags", updatedDigital.tags);

        // ✅ Append primary_image only if it's a File
        if (updatedDigital.primary_image instanceof File) {
          formData.append("primary_image", updatedDigital.primary_image);
        }

        const response = await fetch(
          `${BASE_LOCAL_URL}/digital/${digital.uid}/`,
          {
            method: "PATCH",
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const text = await response.text();
        const result = text ? JSON.parse(text) : {};

        if (response.ok) {
          setUpdate(false);
          fetchDigital();
        } else {
          console.error("Update failed:", result);
        }
      } catch (error) {
        console.error("Error updating Digital:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // console.log(updatedDigital.video_file);

  return (
    <div className="px-2 sm:px-4 pb-10">
      <div className="flex items-center mb-4">
        <BackButton
          change={() => setUpdate(false)}
          className="mt-[-18px] mr-2"
        />
        <Heading title="Update Digital Product" />
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        {/* name*/}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Digital Name"
            placeholder="Enter name"
            value={updatedDigital.name}
            change={(value) =>
              setUpdatedDigital((prev) => ({ ...prev, name: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
            required={true}
          />
        </div>

        <div className="space-y-3 sm:space-y-4">
          <SelectInput
            label="Select A Category"
            placeholder="Select Category"
            value={selectedCat}
            required={true}
            change={(value) => {
              setSelectedCat(value);
              setUpdatedDigital((prev) => ({
                ...prev,
                category: value.name,
                category_id: value.uid,
              }));
            }}
            dropdownOptions={categories}
            style={"mr-3"}
            renderOption={(option) => (
              <div className="flex flex-row items-center">
                <img
                  src={
                    option.image.image_url
                      ? option.image.image_url
                      : option.image
                  }
                  className="w-[15px] h-[15px] mr-3"
                />
                <span className="text-gray-700">{option.name}</span>
              </div>
            )}
          />
        </div>
        {/* Add this Package Section to your form */}
        <div className="space-y-3 sm:space-y-4">
          <div className="border border-gray-200 shadow-lg p-4 rounded-lg w-[500px]">
            <h3 className="font-medium mb-3">Package Options</h3>

            <div className="flex flex-row gap-3 mb-3">
              <SelectInput
                label="Duration"
                placeholder="Select duration"
                value={packageItem.duration}
                change={(value) =>
                  setPackageItem((prev) => ({ ...prev, duration: value }))
                }
                dropdownOptions={durationOptions}
                renderOption={(option) => (
                  <div className="flex flex-row items-center">
                    <span className="text-gray-700">{option}</span>
                  </div>
                )}
                inputstyle={{ width: 230 }}
              />

              <Input
                type="text"
                label="Price"
                placeholder="Enter price"
                value={packageItem.price}
                change={(value) =>
                  setPackageItem((prev) => ({ ...prev, price: value }))
                }
                inputstyle={{ width: 230 }}
              />
            </div>
            <button
              onClick={handleAddPackage}
              className="mt-6 w-[120px] text-[12px] bg-cyan-700 text-white px-4 py-[6px] rounded-[3px] font-lato font-semibold hover:bg-cyan-800 flex flex-row items-center tracking-[0.4px]"
            >
              Add package
            </button>

            {packageError && (
              <p className="text-red-500 text-sm">{packageError}</p>
            )}

            {/* Display added packages */}
            {updatedDigital.package && updatedDigital.package.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">Current Packages:</h4>
                <ul className="space-y-2">
                  {updatedDigital.package.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-50 p-2 rounded"
                    >
                      <span>
                        {item.duration} - ${item.price}
                      </span>
                      <button
                        onClick={() => removePackageItem(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* discount */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Discount"
            placeholder="Enter discount"
            value={updatedDigital.discount}
            change={(value) =>
              setUpdatedDigital((prev) => ({ ...prev, discount: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>
        {/*account_type & color */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="account_type"
            placeholder="Enter account_type"
            value={updatedDigital.account_type}
            change={(value) =>
              setUpdatedDigital((prev) => ({ ...prev, account_type: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>
        {/* color & age */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Tags"
            placeholder="Enter tags"
            value={updatedDigital.tags}
            change={(value) =>
              setUpdatedDigital((prev) => ({ ...prev, tags: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>

        {/* Description */}
        <TextArea
          label="Digital description"
          placeholder="Enter description"
          value={updatedDigital.description}
          change={(value) =>
            setUpdatedDigital((prev) => ({ ...prev, description: value }))
          }
          className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          rows={5}
          required={true}
        />
        {/* Primary image */}
        <ImageInput
          label={"Digital Primary Image"}
          value={updatedDigital.primary_image}
          change={(value) =>
            setUpdatedDigital((prev) => ({ ...prev, primary_image: value }))
          }
          required={true}
          remove={() =>
            setUpdatedDigital((prev) => ({ ...prev, primary_image: null }))
          }
        />
      </div>
      {/* Update Button */}
      <Button
        text="Update Digital"
        change={handleUpdate}
        style="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 mt-24"
      />
      {loading && <Loader message="Updating Digital..." />}
    </div>
  );
}

export default UpdateDigital;
