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
    keywords: "",
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
      const response = await axios.get(`${BASE_LOCAL_URL}/blogs`);
      console.log(response);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      const result = await deleteBlog(id); // Wait for deletion to complete
      if (result.status === 204) {
        fetchBlogs();
      }
      // Then refresh the list
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
        <div className="flex flex-row items-center flex-wrap">
          {row.images
            ? row.images.map((item, index) => (
                <img
                  src={`${item.image_url}`}
                  key={index}
                  alt="blog"
                  className="w-[40px] h-[40px] object-cover rounded-md mx-1 my-1"
                />
              ))
            : "No Image"}
        </div>
      ),
    },
    {
      key: "created_at",
      label: "Created at",
      render: (row) => (
        <p className="whitespace-nowrap">{formatDate(row.created_at)}</p>
      ),
    },
    {
      key: "updated_at",
      label: "Updated at",
      render: (row) => (
        <p className="whitespace-nowrap">{formatDate(row.updated_at)}</p>
      ),
    },
    {
      key: "action",
      label: "Action",
      render: (row) => (
        <div className="flex flex-col space-y-1">
          <ActionColumn
            editFunc={() => {
              setBlog(row); // Set the selected subcategory data
              setUpdate(true); // Open the update form
            }}
            dltFunc={() => handleDeleteBlog(row.uid)}
          />
        </div>
      ),
    },
  ];

  const mobileColumns = [
    {
      key: "main_info",
      label: "Blog Information",
      render: (row) => (
        <div className="flex flex-col">
          <div className="font-semibold">{row.title}</div>
          <div className="text-sm text-gray-600">By: {row.author}</div>
          <div className="flex flex-wrap mt-1">
            {row.images?.map((item, index) => (
              <img
                src={`${item.image_url}`}
                key={index}
                alt="Blog"
                className="w-[30px] h-[30px] object-cover rounded-md mr-1 mb-1"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "dates_action",
      label: "Details",
      render: (row) => (
        <div className="flex flex-col">
          <div className="text-sm">
            <span className="font-medium">Created:</span>{" "}
            {formatDate(row.created_at)}
          </div>
          <div className="text-sm">
            <span className="font-medium">Updated:</span>{" "}
            {formatDate(row.updated_at)}
          </div>
          <div className="mt-2">
            <ActionColumn
              editFunc={() => {
                setBlog(row);
                setUpdate(true);
              }}
              dltFunc={() => handleDeleteBlog(row.uid)}
              compact
            />
          </div>
        </div>
      ),
    },
  ];

  const handleAddBlog = async () => {
    if (blog.title) {
      const cleanedImages = blog.images.filter((img) => img !== "");
      const cleanedBlog = { ...blog, images: cleanedImages };
      console.log(cleanedBlog.images);
      try {
        const formData = new FormData();
        formData.append("title", cleanedBlog.title);
        formData.append("slug", cleanedBlog.slug);
        formData.append("summary", cleanedBlog.summary);
        formData.append("content", cleanedBlog.content);
        formData.append("author", cleanedBlog.author);
        formData.append("keywords", cleanedBlog.keywords);
        cleanedBlog.images
          .filter((img) => img instanceof File)
          .forEach((file, index) => {
            formData.append("images_files", file);
          });

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
          setAdd(false);
          fetchBlogs();
        }
      } catch (error) {
        console.error("Error adding blog:", error);
      }
    } else {
      console.error("Image or name is missing");
    }
  };

  return (
    <div className="lg:ml-[250px] mt-8 px-4 sm:px-6 lg:px-10">
      {add ? (
        <div className="w-full max-w-4xl mx-auto">
          <AddBlog
            setAdd={setAdd}
            setBlog={setBlog}
            blog={blog}
            handleAdd={handleAddBlog}
          />
        </div>
      ) : update ? (
        <div className="w-full max-w-4xl mx-auto">
          <UpdateBlog
            setUpdate={setUpdate}
            blog={blog}
            fetchBlogs={fetchBlogs}
          />
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
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
              className="w-full sm:w-auto"
            />
          </div>

          <div className="mt-6 overflow-x-auto">
            {loading ? (
              <p>Loading...</p>
            ) : blogs ? (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden sm:block">
                  <DataTable
                    data={blogs}
                    columns={columns}
                    handleDeleteSelectedRows={handleDeleteSelectedRows}
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                    showRowQuantity
                    showPagination
                    showSelectRow
                    responsive
                  />
                </div>

                {/* Mobile Table */}
                <div className="sm:hidden">
                  <DataTable
                    data={blogs}
                    columns={mobileColumns}
                    handleDeleteSelectedRows={handleDeleteSelectedRows}
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                    showRowQuantity
                    showPagination
                    showSelectRow
                    responsive
                    compact
                  />
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
