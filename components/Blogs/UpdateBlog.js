import React, { useState } from "react";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import ImageInput from "@/utils/ImageInput";
import Input from "@/utils/Input";
import { BASE_LOCAL_URL } from "@/functions/apiService";

function UpdateBlog({ setUpdate, blog, fetchBlogs }) {
  const [updatedBlog, setUpdatedBlog] = useState({
    title: blog.title,
    slug: blog.slug,
    summary: blog.summary,
    content: blog.content,
    keywords: blog.keywords,
    author: blog.author,
    images: blog.images,
  });

  const handleUpdate = async () => {
    if (!updatedBlog.title) {
      console.error("title is required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", updatedBlog.title);
      formData.append("slug", updatedBlog.slug);
      formData.append("summary", updatedBlog.summary);
      formData.append("content", updatedBlog.content);
      formData.append("keywords", updatedBlog.keywords);
      formData.append("author", updatedBlog.author);

      if (updatedBlog.images && updatedBlog.images !== blog.images) {
        if (Array.isArray(updatedBlog.images)) {
          updatedBlog.images.forEach((file) => {
            formData.append("images_files", file);
          });
        } else {
          formData.append("images_files", updatedBlog.images);
        }
      }

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
    <>
      <div className="flex flex-row items-center">
        <BackButton change={() => setUpdate(false)} style={"mt-[-18px]"} />
        <Heading title={"Update Blog"} />
      </div>
      <div className="mt-4 space-y-4">
        <Input
          type="text"
          label="Blog title"
          placeholder="Enter Blog title"
          value={updatedBlog.title}
          change={(value) =>
            setUpdatedBlog((prev) => ({ ...prev, title: value }))
          }
        />
        <Input
          type="text"
          label="Slug"
          placeholder="Enter Blog slug"
          value={updatedBlog.slug}
          change={(value) =>
            setUpdatedBlog((prev) => ({ ...prev, slug: value }))
          }
        />
        <Input
          type="text"
          label="Summary"
          placeholder="Enter Blog summary"
          value={updatedBlog.summary}
          change={(value) =>
            setUpdatedBlog((prev) => ({ ...prev, summary: value }))
          }
        />
        <Input
          type="textarea"
          label="Content"
          placeholder="Enter Blog content"
          value={updatedBlog.content}
          change={(value) =>
            setUpdatedBlog((prev) => ({ ...prev, content: value }))
          }
        />
        <Input
          type="text"
          label="Keywords"
          placeholder="Enter Blog keywords (comma separated)"
          value={updatedBlog.keywords}
          change={(value) =>
            setUpdatedBlog((prev) => ({ ...prev, keywords: value }))
          }
        />
        <Input
          type="text"
          label="Author"
          placeholder="Enter Blog author"
          value={updatedBlog.author}
          change={(value) =>
            setUpdatedBlog((prev) => ({ ...prev, author: value }))
          }
        />
        <ImageInput
          label="Blog Image"
          value={updatedBlog.images}
          change={(value) =>
            setUpdatedBlog((prev) => ({ ...prev, images: value }))
          }
        />
        <Button text="Update" change={handleUpdate} />
      </div>
    </>
  );
}

export default UpdateBlog;
