"use client";
import ActionColumn from "@/components/ActionColumn";
import AddCategory from "@/components/category/AddCategory";
import UpdateCategory from "@/components/category/UpdateCategory";
import { deleteCategory } from "@/functions/AllDeleteApis";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import Button from "@/utils/Button";
import DataTable from "@/utils/DataTable";
import Heading from "@/utils/Heading";
import Loader from "@/utils/Loader";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState(null);
  const [category, setcategory] = useState({
    name: "",
    image: null,
  });
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addloading, setAddLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_LOCAL_URL}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      const result = await deleteCategory(id, token);
      if (result.status === 204) {
        fetchCategories();
      }
    } catch (error) {
      console.error("Error deleting Category:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const columns = [
    { key: "uid", label: "ID" },
    { key: "name", label: "Name" },
    {
      key: "image",
      label: "Image",
      render: (row) =>
        row.image ? (
          <img
            src={`${row.image}`}
            alt="category"
            className="w-[40px] h-[40px] object-cover rounded-md"
          />
        ) : (
          "No Image"
        ),
    },
    { key: "created_at", label: "Created at" },
    { key: "updated_at", label: "Updated at" },
    {
      key: "action",
      label: "Action",
      render: (row) => (
        <ActionColumn
          editFunc={() => {
            setcategory(row); // Set the selected category data
            setUpdate(true);
          }}
          dltFunc={() => handleDeleteCategory(row.uid, token)}
        />
      ),
    },
  ];

  const handleDeleteSelectedRows = async () => {
    try {
      // Loop through the selected rows and delete each one using the uid
      for (const rowIndex of selectedRows) {
        const subcategoryToDelete = categories[rowIndex];
        await handleDeleteCategory(subcategoryToDelete.uid); // Call the delete function for each selected row
      }
      setSelectedRows(new Set()); // Clear selection after deletion
    } catch (error) {
      console.error("Error deleting selected Categories:", error);
    }
  };

  const handleAddCategory = async () => {
    if (category.name !== "" && category.image) {
      // console.log(category);
      try {
        setAddLoading(true);
        const formData = new FormData();
        formData.append("name", category.name);
        formData.append("image_file", category.image);
        console.log(formData);
        const response = await axios.post(
          `${BASE_LOCAL_URL}/categories`,
          formData
        );
        console.log(response);
        if (response.status === 201) {
          setcategory({
            name: "",
            image: null,
          });
          setAdd(false);
          fetchCategories();
        }
      } catch (error) {
        console.error("Error adding Category:", error);
      } finally {
        setAddLoading(false);
      }
    } else {
      console.error("Image or name is missing");
      window.alert("Image or name is missing");
    }
  };

  return (
    <div className="ml-[250px] mt-8 px-10">
      {add ? (
        <>
          <AddCategory
            setAdd={setAdd}
            category={category}
            setcategory={setcategory}
            handleAdd={handleAddCategory}
          />
          {addloading && <Loader message="Adding Category..." />}
        </>
      ) : update ? (
        <>
          <UpdateCategory
            setUpdate={setUpdate}
            category={category}
            fetchCategories={fetchCategories}
          />
        </>
      ) : (
        <>
          <Heading title={"Categories"} />
          <Button
            text={"Add Category"}
            change={() => {
              setAdd((prev) => !prev);
              setcategory({
                name: "",
                image: null,
              });
            }}
          />
          <div className="mt-6 overflow-x-auto">
            {loading ? (
              <p>Loading...</p>
            ) : categories ? (
              <DataTable
                data={categories}
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
