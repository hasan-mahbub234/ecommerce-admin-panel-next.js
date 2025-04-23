import { BASE_LOCAL_URL } from "@/functions/apiService";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import SelectInput from "@/utils/SelectInput";
import TagInput from "@/utils/TagInput";
import TextArea from "@/utils/TextArea";
import VideoInput from "@/utils/VideoInput";
import axios from "axios";
import React, { useEffect, useState } from "react";

function AddProduct({ setAdd, setProduct, product, handleAdd }) {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
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
  //console.log(product.category_id, product.category);

  return (
    <div className="px-2 sm:px-4 pb-10">
      <div className="flex items-center mb-4">
        <BackButton
          change={() => setAdd((prev) => !prev)}
          className="mt-[-18px] mr-2"
        />
        <Heading title="Add A Product" />
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        {/* name & Brand*/}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Product Name"
            placeholder="Enter name"
            value={product.name}
            change={(value) => setProduct((prev) => ({ ...prev, name: value }))}
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
            required={true}
          />
          <Input
            type="text"
            label="Brand"
            placeholder="Enter brand"
            value={product.brand}
            change={(value) =>
              setProduct((prev) => ({ ...prev, brand: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
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
              setProduct((prev) => ({
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
        {/* price & discount */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Price"
            placeholder="Enter price"
            value={product.price}
            change={(value) =>
              setProduct((prev) => ({ ...prev, price: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
            required={true}
          />
          <Input
            type="text"
            label="Discount"
            placeholder="Enter discount"
            value={product.discount}
            change={(value) =>
              setProduct((prev) => ({ ...prev, discount: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>
        {/* quantity & age */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Product Quantity"
            placeholder="Enter quantity"
            value={product.quantity}
            change={(value) =>
              setProduct((prev) => ({ ...prev, quantity: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
            required={true}
          />
          <Input
            type="text"
            label="Age"
            placeholder="Enter age"
            value={product.age}
            change={(value) => setProduct((prev) => ({ ...prev, age: value }))}
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>

        {/* Description */}
        <TextArea
          label="Product description"
          placeholder="Enter description"
          value={product.description}
          change={(value) =>
            setProduct((prev) => ({ ...prev, description: value }))
          }
          className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          rows={5}
          required={true}
        />
        {/* Primary image */}
        <ImageInput
          label={"Product Primary Image"}
          value={product.primary_image}
          change={(value) =>
            setProduct((prev) => ({ ...prev, primary_image: value }))
          }
          required={true}
        />
        {/* Image Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {(product.images.length > 0 ? product.images : [""]).map(
            (img, index) => (
              <ImageInput
                key={index}
                label={
                  index === 0 ? "Extra Image 1" : `Extra Image ${index + 1}`
                }
                value={img}
                change={(value) => {
                  let newImages = [...product.images];
                  if (newImages.length === 0) {
                    newImages.push(value);
                  } else {
                    newImages[index] = value;
                  }
                  if (
                    value &&
                    index === newImages.length - 1 &&
                    !newImages.includes("")
                  ) {
                    newImages.push("");
                  }
                  setProduct((prev) => ({ ...prev, images: newImages }));
                }}
                className="w-full max-w-full text-xs sm:text-sm"
              />
            )
          )}
        </div>

        <VideoInput
          label="Add Product Video"
          value={product.video_file}
          change={(file) =>
            setProduct((prev) => ({ ...prev, video_file: file }))
          }
          remove={() => setProduct((prev) => ({ ...prev, video_file: "" }))}
          required={false}
        />
      </div>
      {/* Add Button */}
      <Button
        text="Add Product"
        change={handleAdd}
        style="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 mt-24"
      />
    </div>
  );
}

export default AddProduct;
