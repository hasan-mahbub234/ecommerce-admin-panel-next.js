"use client";
import ActionColumn from "@/components/ActionColumn";
import AddExpert from "@/components/expert/AddExpert";
import UpdateExpert from "@/components/expert/UpdateExpert";
import { deleteExpert } from "@/functions/AllDeleteApis";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import { formatDate } from "@/functions/basicFunc";
import Button from "@/utils/Button";
import DataTable from "@/utils/DataTable";
import Heading from "@/utils/Heading";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Expert() {
  const [experts, setExperts] = useState(null);
  const [expert, setExpert] = useState({
    name: "",
    type: "",
    exp: "",
    technology: [],
    image: "",
  });
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const fetchExpert = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_LOCAL_URL}/experts`);
      if (!response.ok) throw new Error("Network response was not ok");
      const text = await response.text();
      const data = text ? JSON.parse(text) : [];
      setExperts(data);
    } catch (error) {
      console.error("Error fetching Experts:", error);
      setExperts([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteExpert = async (id) => {
    try {
      await deleteExpert(id); // Wait for deletion to complete
      await fetchExpert(); // Then refresh the list
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  useEffect(() => {
    fetchExpert();
  }, []);

  const handleDeleteSelectedRows = async () => {
    try {
      // Loop through the selected rows and delete each one using the uid
      for (const rowIndex of selectedRows) {
        const expertToDelete = experts[rowIndex];
        await handleDeleteExpert(expertToDelete.uid); // Call the delete function for each selected row
      }
      setSelectedRows(new Set()); // Clear selection after deletion
    } catch (error) {
      console.error("Error deleting selected experts:", error);
    }
  };

  const columns = [
    { key: "uid", label: "ID" },
    { key: "name", label: "Name" },
    { key: "type", label: "Type" },
    {
      key: "images",
      label: "Images",
      render: (row) =>
        row.image ? (
          <img
            src={`${row.image}`}
            alt="Expert"
            className="w-[40px] h-[40px] object-cover rounded-md"
          />
        ) : (
          "No Image"
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
            setExpert(row); // Set the selected subcategory data
            setUpdate(true); // Open the update form
          }}
          dltFunc={() => handleDeleteExpert(row.uid)}
        />
      ),
    },
  ];

  const handleAddExpert = async () => {
    if (expert.name) {
      try {
        const formData = new FormData();
        formData.append("name", expert.name);
        formData.append("type", expert.type);
        formData.append("exp", expert.exp);
        formData.append("image", expert.image);
        formData.append("technology", expert.technology);

        const response = await axios.post(
          `${BASE_LOCAL_URL}/experts`,
          formData
        );
        console.log(response);
        if (response.status === 201) {
          setBlog({
            name: "",
            exp: "",
            technology: [],
            type: "",
            image: "",
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
    <div className=" ml-[250px] mt-8 px-10 ">
      {add ? (
        <>
          <AddExpert
            setAdd={setAdd}
            setExpert={setExpert}
            expert={expert}
            handleAdd={handleAddExpert}
          />
        </>
      ) : update ? (
        <>
          <UpdateExpert
            setUpdate={setUpdate}
            expert={expert}
            fetchExpert={fetchExpert} // Changed from fetchBlog to fetchBlogs
          />
        </>
      ) : (
        <>
          <Heading title={"Expert"} />
          <Button
            text={"Add Expert"}
            change={() => {
              setAdd((prev) => !prev);
              setExpert({
                name: "",
                exp: "",
                type: "",
                technology: [],
                image: "",
              });
            }}
          />
          <div className="mt-6">
            {loading ? (
              <p>Loading...</p>
            ) : experts ? (
              <DataTable
                data={experts}
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
