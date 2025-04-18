import React, { useState } from "react";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import TagInput from "@/utils/TagInput"; // Changed from Input to TagInput
import TextArea from "@/utils/TextArea";
import { BASE_LOCAL_URL } from "@/functions/apiService";

function UpdateBlog({ setUpdate, blog, fetchBlogs }) {
  const [updatedBlog, setUpdatedBlog] = useState({
    title: blog.title,
    slug: blog.slug,
    summary: blog.summary,
    content: blog.content,
    keywords: Array.isArray(blog.keywords)
      ? blog.keywords
      : blog.keywords.split(","), // Ensure keywords is an array
    author: blog.author,
    images: blog.images || [""], // Ensure images is an array with at least one empty string
  });

  const handleUpdate = async () => {
    if (!updatedBlog.title) {
      console.error("Title is required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", updatedBlog.title);
      formData.append("slug", updatedBlog.slug);
      formData.append("summary", updatedBlog.summary);
      formData.append("content", updatedBlog.content);
      formData.append("keywords", updatedBlog.keywords.join(",")); // Join array into string
      formData.append("author", updatedBlog.author);

      // Handle images
      updatedBlog.images.forEach((file, index) => {
        if (file && typeof file !== "string") {
          // Only append if it's a new file
          formData.append(`images_files`, file);
        }
      });

      const response = await fetch(`${BASE_LOCAL_URL}/blogs/${blog.uid}/`, {
        method: "PATCH",
        body: formData,
      });

      const text = await response.text();
      const result = text ? JSON.parse(text) : {};

      if (response.ok) {
        fetchBlogs();
        setUpdate(false);
      } else {
        console.error("Update failed:", result);
      }
    } catch (error) {
      console.error("Error updating Blog:", error);
    }
  };

  return (
    <div className="px-2 sm:px-4">
      <div className="flex items-center mb-4">
        <BackButton
          change={() => setUpdate(false)}
          className="mt-[-18px] mr-2"
        />
        <Heading title="Update Blog" />
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        {/* Title and Slug */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Blog title"
            placeholder="Enter blog title"
            value={updatedBlog.title}
            change={(value) =>
              setUpdatedBlog((prev) => ({ ...prev, title: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
          <Input
            type="text"
            label="Blog slug"
            placeholder="Enter blog slug"
            value={updatedBlog.slug}
            change={(value) =>
              setUpdatedBlog((prev) => ({ ...prev, slug: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>

        {/* Author and Keywords */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Author"
            placeholder="Enter author name"
            value={updatedBlog.author}
            change={(value) =>
              setUpdatedBlog((prev) => ({ ...prev, author: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
          <TagInput
            type="text"
            label="Blog Keywords"
            placeholder="Enter keywords"
            value={updatedBlog.keywords}
            change={(value) =>
              setUpdatedBlog((prev) => ({ ...prev, keywords: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>

        {/* Blog Content */}
        <TextArea
          label="Blog content"
          placeholder="Enter blog content"
          value={updatedBlog.content}
          change={(value) =>
            setUpdatedBlog((prev) => ({ ...prev, content: value }))
          }
          className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          rows={5}
        />

        {/* Blog Summary */}
        <TextArea
          label="Blog Summary"
          placeholder="Enter blog summary"
          value={updatedBlog.summary}
          change={(value) =>
            setUpdatedBlog((prev) => ({ ...prev, summary: value }))
          }
          className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          rows={2}
        />

        {/* Image Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {updatedBlog.images.map((img, index) => (
            <ImageInput
              key={index}
              label={index === 0 ? "Blog Image 1" : `Blog Image ${index + 1}`}
              value={img}
              change={(value) => {
                let newImages = [...updatedBlog.images];
                newImages[index] = value;

                // Add a new empty field if this is the last image and it's being filled
                if (value && index === newImages.length - 1) {
                  newImages.push("");
                }

                // Remove empty fields except the last one if they exist in the middle
                newImages = newImages.filter((img, i) => {
                  if (i === newImages.length - 1) return true;
                  return img !== "";
                });

                setUpdatedBlog((prev) => ({ ...prev, images: newImages }));
              }}
              className="w-full max-w-full text-xs sm:text-sm"
            />
          ))}
        </div>

        {/* Update Button */}
        <Button
          text="Update Blog"
          change={handleUpdate}
          className="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm"
        />
      </div>
    </div>
  );
}

export default UpdateBlog;
