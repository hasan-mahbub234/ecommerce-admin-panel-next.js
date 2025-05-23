import { BASE_LOCAL_URL } from "@/functions/apiService";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import SelectInput from "@/utils/SelectInput";
import TagInput from "@/utils/TagInput";
import TextArea from "@/utils/TextArea";
import axios from "axios";
import React, { useEffect, useState } from "react";

function AddDigital({ setAdd, setDigital, digital, handleAdd }) {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [packageItem, setPackageItem] = useState({
    duration: "",
    price: "",
  });
  const [packageError, setPackageError] = useState("");

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
  }, []);

  const durationOptions = ["1 month", "3 months", "6 months", "1 year"];
  // console.log(digital);

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
    setDigital((prev) => ({
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
    setDigital((prev) => ({
      ...prev,
      package: prev.package.filter((_, i) => i !== index),
    }));
  };

  // console.log(digital.best_selling);

  return (
    <div className="px-2 sm:px-4 pb-10">
      <div className="flex items-center mb-4">
        <BackButton
          change={() => setAdd((prev) => !prev)}
          className="mt-[-18px] mr-2"
        />
        <Heading title="Add A Digital" />
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        {/* name*/}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Digital Name"
            placeholder="Enter name"
            value={digital.name}
            change={(value) => setDigital((prev) => ({ ...prev, name: value }))}
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
            required={true}
          />
        </div>
        {/* Category */}
        <div className="space-y-3 sm:space-y-4">
          <SelectInput
            label="Select A Category"
            placeholder="Select Category"
            value={selectedCat}
            required={true}
            change={(value) => {
              setSelectedCat(value);
              setDigital((prev) => ({
                ...prev,
                category: value.name,
                category_id: value.uid,
              }));
            }}
            dropdownOptions={categories}
            style={"mr-3"}
            renderOption={(option) => (
              <div className="flex flex-row items-center">
                <img src={option.image} className="w-[15px] h-[15px] mr-3" />
                <span className="text-gray-700">{option.name}</span>
              </div>
            )}
          />
        </div>

        {/* Package Section */}
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
            {digital.package.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">Added Packages:</h4>
                <ul className="space-y-2">
                  {digital.package.map((item, index) => (
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

        {/* price & discount */}
        <div className="space-y-3 sm:space-y-4">
          {/* <Input
            type="text"
            label="Price"
            placeholder="Enter price"
            value={digital.price}
            change={(value) =>
              setDigital((prev) => ({ ...prev, price: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
            required={true}
          /> */}
          <Input
            type="text"
            label="Discount"
            placeholder="Enter discount"
            value={digital.discount}
            change={(value) =>
              setDigital((prev) => ({ ...prev, discount: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>
        {/* duration & account_type */}
        <div className="space-y-3 sm:space-y-4">
          {/* <Input
            type="text"
            label="Digital Duration"
            placeholder="Enter duration"
            value={digital.duration}
            change={(value) =>
              setDigital((prev) => ({ ...prev, duration: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          /> */}
          <Input
            type="text"
            label="Account_type"
            placeholder="Enter account_type"
            value={digital.account_type}
            change={(value) =>
              setDigital((prev) => ({ ...prev, account_type: value }))
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
            value={digital.tags}
            change={(value) => setDigital((prev) => ({ ...prev, tags: value }))}
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>
        {/* Description */}
        <TextArea
          label="digital description"
          placeholder="Enter description"
          value={digital.description}
          change={(value) =>
            setDigital((prev) => ({ ...prev, description: value }))
          }
          className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          rows={5}
          required={true}
        />
        {/* Primary image */}
        <ImageInput
          label={"digital Primary Image"}
          value={digital.primary_image}
          change={(value) =>
            setDigital((prev) => ({ ...prev, primary_image: value }))
          }
          required={true}
        />
      </div>
      {/* Add Button */}
      <Button
        text="Add digital"
        change={handleAdd}
        style="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 mt-24"
      />
    </div>
  );
}

export default AddDigital;
