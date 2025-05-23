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

function UpdateProduct({ setUpdate, product, fetchProducts }) {
  const token = localStorage.getItem("token");
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    quantity: product.quantity,
    description: product.description,
    price: product.price,
    category: product.category,
    category_id: product.category_id,
    brand: product.brand,
    age: product.age,
    discount: product.discount,
    size: product.size,
    weight: product.weight,
    color: product.color,
    tags: product.tags,
    primary_image: product.primary_image,
    images: product.images,
    video_file: product.video_file,
    best_selling: product.best_selling,
  });
  const [loading, setLoading] = useState(false);
  const [selectedCat, setSelectedCat] = useState(product.category);
  const [categories, setCategories] = useState([]);

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
    console.log(product);
  }, []);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const cleanedImages = updatedProduct.images.filter((img) => img !== "");
      const cleanedProduct = { ...updatedProduct, images: cleanedImages };
      const formData = new FormData();
      // console.log(cleanedProduct.video_file);

      // Basic fields
      formData.append("name", cleanedProduct.name);
      formData.append("quantity", cleanedProduct.quantity);
      formData.append("description", cleanedProduct.description);
      formData.append("price", cleanedProduct.price);
      formData.append("category", cleanedProduct.category);
      formData.append("category_id", cleanedProduct.category_id);
      formData.append("brand", cleanedProduct.brand);
      formData.append("age", cleanedProduct.age);
      formData.append("discount", cleanedProduct.discount);
      formData.append("size", cleanedProduct.size.join(","));
      formData.append("weight", cleanedProduct.weight.join(","));
      formData.append("color", cleanedProduct.color.join(","));
      formData.append("tags", cleanedProduct.tags.join(","));
      formData.append("best_selling", cleanedProduct.best_selling);
      if (cleanedProduct.video_file !== "" && cleanedProduct.video_file) {
        formData.append("video_file", cleanedProduct.video_file);
      }

      // ✅ Append primary_image only if it's a File
      if (cleanedProduct.primary_image instanceof File) {
        formData.append("primary_image", cleanedProduct.primary_image);
      }

      // ✅ Separate images: keep only new File objects
      const newImageFiles = cleanedProduct.images.filter(
        (img) => img instanceof File
      );

      // Append new images if any
      newImageFiles.forEach((file) => {
        formData.append("images", file);
      });
      //formData.append("images", newImageFiles);
      //  console.log(formData);

      const response = await fetch(
        `${BASE_LOCAL_URL}/products/${product.uid}/`,
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
        fetchProducts();
      } else {
        console.error("Update failed:", result);
      }
    } catch (error) {
      console.error("Error updating Product:", error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(updatedProduct.video_file);

  return (
    <div className="px-2 sm:px-4 pb-10">
      <div className="flex items-center mb-4">
        <BackButton
          change={() => setUpdate(false)}
          className="mt-[-18px] mr-2"
        />
        <Heading title="Update Blog" />
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        {/* name & Brand*/}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Product Name"
            placeholder="Enter name"
            value={updatedProduct.name}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, name: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
            required={true}
          />
          <Input
            type="text"
            label="Brand"
            placeholder="Enter brand"
            value={updatedProduct.brand}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, brand: value }))
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
              setUpdatedProduct((prev) => ({
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
        {/* price & discount */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Price"
            placeholder="Enter price"
            value={updatedProduct.price}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, price: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
            required={true}
          />
          <Input
            type="text"
            label="Discount"
            placeholder="Enter discount"
            value={updatedProduct.discount}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, discount: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>
        {/* size & weight & color */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Product Size"
            placeholder="Enter size"
            value={updatedProduct.size}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, size: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
          <Input
            type="text"
            label="Weight"
            placeholder="Enter weight"
            value={updatedProduct.weight}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, weight: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />

          <Input
            type="text"
            label="Color"
            placeholder="Enter color"
            value={updatedProduct.color}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, color: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>
        {/* color & age */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Color"
            placeholder="Enter color"
            value={product.color}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, color: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
          <Input
            type="text"
            label="Tags"
            placeholder="Enter tags"
            value={product.tags}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, tags: value }))
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
            value={updatedProduct.quantity}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, quantity: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
            required={true}
          />
          <Input
            type="text"
            label="Age"
            placeholder="Enter age"
            value={updatedProduct.age}
            change={(value) =>
              setUpdatedProduct((prev) => ({ ...prev, age: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>

        {/* Description */}
        <TextArea
          label="Product description"
          placeholder="Enter description"
          value={updatedProduct.description}
          change={(value) =>
            setUpdatedProduct((prev) => ({ ...prev, description: value }))
          }
          className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          rows={5}
          required={true}
        />
        {/* Primary image */}
        <ImageInput
          label={"Product Primary Image"}
          value={updatedProduct.primary_image}
          change={(value) =>
            setUpdatedProduct((prev) => ({ ...prev, primary_image: value }))
          }
          required={true}
          remove={() =>
            setUpdatedProduct((prev) => ({ ...prev, primary_image: null }))
          }
        />
        {/* Image Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-5">
          {(updatedProduct.images?.length > 0
            ? updatedProduct.images
            : [""]
          ).map((img, index) => (
            <ImageInput
              key={index}
              label={index === 0 ? "Extra Image 1" : `Extra Image ${index + 1}`}
              value={img.image_url ? img.image_url : img}
              change={(value) => {
                let newImages =
                  updatedProduct.images?.length > 0
                    ? [...updatedProduct.images]
                    : [""];
                newImages[index] = value;

                // Add empty input if all are filled
                if (
                  value &&
                  index === newImages.length - 1 &&
                  !newImages.includes("")
                ) {
                  newImages.push("");
                }

                setUpdatedProduct((prev) => ({ ...prev, images: newImages }));
              }}
              remove={() => {
                let newImages = [...updatedProduct.images];
                newImages.splice(index, 1);
                if (newImages.length === 0 || !newImages.includes("")) {
                  newImages.push("");
                }
                setUpdatedProduct((prev) => ({ ...prev, images: newImages }));
              }}
              className="w-full max-w-full text-xs sm:text-sm"
            />
          ))}
        </div>
        {/* video */}
        <VideoInput
          label="Upload Product Video"
          value={updatedProduct.video_file}
          change={(file) =>
            setUpdatedProduct((prev) => ({ ...prev, video_file: file }))
          }
          remove={() =>
            setUpdatedProduct((prev) => ({ ...prev, video_file: "" }))
          }
          required={false}
        />
      </div>
      {/* Best selling */}
      <div className="space-y-3 sm:space-y-4 mt-20">
        <label className="text-[17px] font-semibold">
          <input
            type="checkbox"
            checked={updatedProduct.best_selling}
            onChange={(e) =>
              setUpdatedProduct((prev) => ({
                ...prev,
                best_selling: e.target.checked,
              }))
            }
            className="mr-3 cursor-pointer"
          />
          Best Selling
        </label>
      </div>
      {/* Update Button */}
      <Button
        text="Update Product"
        change={handleUpdate}
        style="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 mt-24"
      />
      {loading && <Loader message="Updating product..." />}
    </div>
  );
}

export default UpdateProduct;
