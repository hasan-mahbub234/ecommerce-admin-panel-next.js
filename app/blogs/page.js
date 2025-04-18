"use client";
import ActionColumn from "@/components/ActionColumn";
import AddBlog from "@/components/Blogs/AddBlog";
import UpdateBlog from "@/components/Blogs/UpdateBlog";
import { deleteBlog } from "@/functions/AllDeleteApis";
import { getBlogs } from "@/functions/AllGetApis";
import { createBlog } from "@/functions/AllPostApis";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import { formatDate } from "@/functions/basicFunc";
import ActionButton from "@/utils/ActionButton";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import DataTable from "@/utils/DataTable";
import Heading from "@/utils/Heading";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState(null);
  const [blog, setBlog] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    keywords: [],
    author: "",
    images: [],
  });
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_LOCAL_URL}/blogs`);
      if (!response.ok) throw new Error("Network response was not ok");
      const text = await response.text();
      const data = text ? JSON.parse(text) : [];
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await deleteBlog(id); // Wait for deletion to complete
      await fetchBlogs(); // Then refresh the list
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle row deletion
  const handleDeleteSelectedRows = async () => {
    try {
      // Loop through the selected rows and delete each one using the uid
      for (const rowIndex of selectedRows) {
        const blogToDelete = blogs[rowIndex];
        await handleDeleteBlog(blogToDelete.uid); // Call the delete function for each selected row
      }
      setSelectedRows(new Set()); // Clear selection after deletion
    } catch (error) {
      console.error("Error deleting selected blogs:", error);
    }
  };

  const columns = [
    { key: "uid", label: "ID" },
    { key: "title", label: "Title" },
    { key: "author", label: "Author" },
    {
      key: "images",
      label: "Images",
      render: (row) => (
        <div className="flex flex-row items-center">
          {row.images
            ? row.images.map((item, index) => (
                <img
                  src={`${item.image_url}`}
                  key={index}
                  alt="Subcategory"
                  className="w-[40px] h-[40px] object-cover rounded-md mx-1"
                />
              ))
            : "No Image"}
        </div>
      ),
    },
    {
      key: "created_at",
      label: "Created at",
      render: (row) => <p>{formatDate(row.created_at)}</p>,
    },
    {
      key: "updated_at",
      label: "Updated at",
      render: (row) => <p>{formatDate(row.updated_at)}</p>,
    },
    {
      key: "action",
      label: "Action",
      render: (row) => (
        <ActionColumn
          editFunc={() => {
            setBlog(row); // Set the selected subcategory data
            setUpdate(true); // Open the update form
          }}
          dltFunc={() => handleDeleteBlog(row.uid)}
        />
      ),
    },
  ];
  //console.log(blog.images);

  const handleAddBlog = async () => {
    if (blog.title) {
      const cleanedImages = blog.images.filter((img) => img !== "");
      const cleanedBlog = { ...blog, images: cleanedImages };
      // console.log(cleanedBlog);
      try {
        const formData = new FormData();
        formData.append("title", cleanedBlog.title);
        formData.append("slug", cleanedBlog.slug);
        formData.append("summary", cleanedBlog.summary);
        formData.append("content", cleanedBlog.content);
        formData.append("author", cleanedBlog.author);
        formData.append("keywords", cleanedBlog.keywords);
        // formData.append("images_files", cleanedBlog.images);
        cleanedBlog.images
          .filter((img) => img instanceof File)
          .forEach((file, index) => {
            formData.append("images_files", file); // or `images[${index}]` depending on API
          });
        //console.log("Form Data", formData);

        const response = await axios.post(`${BASE_LOCAL_URL}/blogs`, formData);
        console.log(response);
        if (response.status === 201) {
          setBlog({
            title: "",
            slug: "",
            summary: "",
            content: "",
            keywords: [],
            author: "",
            images: [],
          });
        }
      } catch (error) {
        console.error("Error adding blog:", error);
      }
    } else {
      console.error("Image or name is missing");
    }
  };

  return (
    <div className="ml-[250px] mt-8 px-10">
      {add ? (
        <>
          <AddBlog
            setAdd={setAdd}
            setBlog={setBlog}
            blog={blog}
            handleAdd={handleAddBlog}
          />
        </>
      ) : update ? (
        <>
          <UpdateBlog
            setUpdate={setUpdate}
            blog={blog}
            fetchBlogs={fetchBlogs} // Changed from fetchBlog to fetchBlogs
          />
        </>
      ) : (
        <>
          <Heading title={"Blogs"} />
          <Button
            text={"Add Blog"}
            change={() => {
              setAdd((prev) => !prev);
              setBlog({
                title: "",
                slug: "",
                summary: "",
                content: "",
                keywords: [],
                author: "",
                images: [],
              });
            }}
          />
          <div className="mt-6">
            {loading ? (
              <p>Loading...</p>
            ) : blogs ? (
              <DataTable
                data={blogs}
                columns={columns}
                handleDeleteSelectedRows={handleDeleteSelectedRows}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
                showRowQuantity
                showPagination
                showSelectRow
              />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
