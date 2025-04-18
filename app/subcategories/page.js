"use client";
import ActionColumn from "@/components/ActionColumn";
import AddSubcategory from "@/components/subcategory/AddSubcategory";
import UpdateSubcategory from "@/components/subcategory/UpdateSubcategory";
import { deleteSubcategory } from "@/functions/AllDeleteApis";
import { getSubcategories } from "@/functions/AllGetApis";
import { createSubCategory } from "@/functions/AllPostApis";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import ActionButton from "@/utils/ActionButton";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import DataTable from "@/utils/DataTable";
import Heading from "@/utils/Heading";
import { useEffect, useState } from "react";

export default function SubCategories() {
  const [subCategories, setSubCategories] = useState(null);
  const [subcategory, setSubcategory] = useState({
    name: "",
    image: null,
  });
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const fetchSubcategories = async () => {
    setLoading(true);
    try {
      const data = await getSubcategories();
      setSubCategories(data || []);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubcategory = async (id) => {
    try {
      await deleteSubcategory(id);
      fetchSubcategories();
    } catch (error) {
      console.error("Error deleting subcategory:", error);
    }
  };

  useEffect(() => {
    fetchSubcategories();
  }, []);

  // Handle row deletion
  const handleDeleteSelectedRows = async () => {
    try {
      // Loop through the selected rows and delete each one using the uid
      for (const rowIndex of selectedRows) {
        const subcategoryToDelete = subCategories[rowIndex];
        await handleDeleteSubcategory(subcategoryToDelete.uid); // Call the delete function for each selected row
      }
      setSelectedRows(new Set()); // Clear selection after deletion
    } catch (error) {
      console.error("Error deleting selected subcategories:", error);
    }
  };

  const columns = [
    { key: "uid", label: "ID" },
    { key: "name", label: "Name" },
    {
      key: "image",
      label: "Image",
      render: (row) =>
        row.image ? (
          <img
            src={`http://127.0.0.1:8000/${row.image}`}
            alt="Subcategory"
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
            setSubcategory(row); // Set the selected subcategory data
            setUpdate(true); // Open the update form
          }}
          dltFunc={() => handleDeleteSubcategory(row.uid)}
        />
      ),
    },
  ];

  const handleAddSubcategory = async () => {
    if (subcategory.name) {
      try {
        const formData = new FormData();
        formData.append("name", subcategory.name);
        formData.append("image_file", subcategory.image);
        console.log("Form Data", formData);

        const response = await fetch(`${BASE_LOCAL_URL}/sub_category/`, {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        console.log("API Response:", result);

        if (response.ok) {
          setSubCategories([...subCategories, result]);
          setSubcategory({
            name: "",
            image: null,
          });
          setAdd(false);
          fetchSubcategories();
        }
      } catch (error) {
        console.error("Error adding subcategory:", error);
      }
    } else {
      console.error("Image or name is missing");
    }
  };

  return (
    <div className="ml-[250px] mt-8 px-10">
      {add ? (
        <>
          <AddSubcategory
            setAdd={setAdd}
            setSubcategory={setSubcategory}
            subcategory={subcategory}
            handleAdd={handleAddSubcategory}
          />
        </>
      ) : update ? (
        <>
          <UpdateSubcategory
            setUpdate={setUpdate}
            subcategory={subcategory}
            fetchSubcategories={fetchSubcategories}
          />
        </>
      ) : (
        <>
          <Heading title={"Sub Categories"} />
          <Button
            text={"Add Subcategory"}
            change={() => {
              setAdd((prev) => !prev);
              setSubcategory({
                name: "",
                image: null,
              });
            }}
          />
          <div className="mt-6">
            {loading ? (
              <p>Loading...</p>
            ) : subCategories ? (
              <DataTable
                data={subCategories}
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
