import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import TagInput from "@/utils/TagInput";
import TextArea from "@/utils/TextArea";
import React from "react";

function AddBlog({ setAdd, setBlog, blog, handleAdd }) {
  return (
    <div className="px-2 sm:px-4">
      <div className="flex items-center mb-4">
        <BackButton
          change={() => setAdd((prev) => !prev)}
          className="mt-[-18px] mr-2"
        />
        <Heading title="Add A Blog" />
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        {/* Title and Slug */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Blog title"
            placeholder="Enter blog title"
            value={blog.title}
            change={(value) => setBlog((prev) => ({ ...prev, title: value }))}
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
          <Input
            type="text"
            label="Blog slug"
            placeholder="Enter blog slug"
            value={blog.slug}
            change={(value) => setBlog((prev) => ({ ...prev, slug: value }))}
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>

        {/* Author and Keywords */}
        <div className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            label="Author"
            placeholder="Enter author name"
            value={blog.author}
            change={(value) => setBlog((prev) => ({ ...prev, author: value }))}
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
          <Input
            type="text"
            label="Blog Keywords"
            placeholder="Enter keywords"
            value={blog.keywords}
            change={(value) =>
              setBlog((prev) => ({ ...prev, keywords: value }))
            }
            className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          />
        </div>

        {/* Blog Content */}
        <TextArea
          label="Blog content"
          placeholder="Enter blog content"
          value={blog.content}
          change={(value) => setBlog((prev) => ({ ...prev, content: value }))}
          className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          rows={5}
        />

        {/* Blog Summary */}
        <TextArea
          label="Blog Summary"
          placeholder="Enter blog summary"
          value={blog.summary}
          change={(value) => setBlog((prev) => ({ ...prev, summary: value }))}
          className="w-full max-w-full text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3"
          rows={2}
        />

        {/* Image Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {(blog.images.length > 0 ? blog.images : [""]).map((img, index) => (
            <ImageInput
              key={index}
              label={index === 0 ? "Blog Image 1" : `Blog Image ${index + 1}`}
              value={img}
              change={(value) => {
                let newImages = [...blog.images];
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
                setBlog((prev) => ({ ...prev, images: newImages }));
              }}
              className="w-full max-w-full text-xs sm:text-sm"
            />
          ))}
        </div>

        {/* Add Button */}
        <Button
          text="Add Blog"
          change={handleAdd}
          style="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 mt-24"
        />
      </div>
    </div>
  );
}

export default AddBlog;
