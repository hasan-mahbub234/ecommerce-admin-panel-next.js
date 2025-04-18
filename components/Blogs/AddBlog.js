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
    <>
      <div className="flex flex-row items-center">
        <BackButton
          change={() => setAdd((prev) => !prev)}
          style={"mt-[-18px]"}
        />
        <Heading title={"Add A Blog"} />
      </div>
      {/* Form */}
      <div className="">
        <div className="flex flex-row items-center w-full">
          <Input
            style={"mr-3"}
            type={"text"}
            label={"Blog title"}
            placeholder={"Enter blog title"}
            value={blog.title}
            change={(value) => setBlog((prev) => ({ ...prev, title: value }))}
          />
          <Input
            type={"text"}
            label={"Blog slug"}
            placeholder={"Enter blog slug"}
            value={blog.slug}
            change={(value) => setBlog((prev) => ({ ...prev, slug: value }))}
          />
        </div>
        <div className="flex flex-row items-start w-full">
          <div className="mr-3">
            <Input
              type={"text"}
              label={"Author"}
              placeholder={"Enter author name"}
              value={blog.author}
              change={(value) =>
                setBlog((prev) => ({ ...prev, author: value }))
              }
            />
            <TagInput
              type={"text"}
              label={"Blog Keywords"}
              placeholder={"Enter keywords"}
              value={blog.keywords}
              change={(value) => {
                // console.log("Tags being saved as:", value); // <- Should log ["tag1", "tag2"]
                setBlog((prev) => ({ ...prev, keywords: value }));
              }}
            />
          </div>

          <TextArea
            type={"text"}
            label={"Blog content"}
            placeholder={"Enter blog content"}
            value={blog.content}
            change={(value) => setBlog((prev) => ({ ...prev, content: value }))}
          />
        </div>
        <TextArea
          type={"text"}
          label={"Blog Summary"}
          placeholder={"Enter blog summary"}
          value={blog.summary}
          inputstyle={{ width: "84%" }}
          change={(value) => setBlog((prev) => ({ ...prev, summary: value }))}
        />
        <div className="flex flex-wrap gap-4 my-4">
          {(blog.images.length > 0 ? blog.images : [""]).map((img, index) => (
            <ImageInput
              key={index}
              label={index === 0 ? "Blog Image 1" : `Blog Image ${index + 1}`}
              value={img}
              change={(value) => {
                let newImages = [...blog.images];

                // Update or insert
                if (newImages.length === 0) {
                  newImages.push(value);
                } else {
                  newImages[index] = value;
                }

                // Only push placeholder if value is non-empty AND not already at end
                const shouldAddEmpty =
                  value &&
                  index === newImages.length - 1 &&
                  !newImages.includes("");

                if (shouldAddEmpty) {
                  newImages.push(""); // show next field
                }

                setBlog((prev) => ({ ...prev, images: newImages }));
              }}
            />
          ))}
        </div>

        <Button text={"Add"} change={handleAdd} />
      </div>
    </>
  );
}

export default AddBlog;
