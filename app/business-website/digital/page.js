"use client";
import ActionColumn from "@/components/ActionColumn";
import AddDigital from "@/components/Digital/AddDigital";
import UpdateDigital from "@/components/Digital/UpdateDigital";
import { useAuth } from "@/context/AuthContext";
import { deleteDigital } from "@/functions/AllDeleteApis";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import { formatDate } from "@/functions/basicFunc";
import Button from "@/utils/Button";
import DataTable from "@/utils/DataTable";
import Heading from "@/utils/Heading";
import Loader from "@/utils/Loader";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Digital() {
  const { token } = useAuth();
  const [Digital, setDigitals] = useState(null);
  const [digital, setDigital] = useState({
    name: "",
    category: "",
    category_id: "",
    package: [],
    account_type: "",
    tags: "",
    discount: "0",
    primary_image: null,
  });
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addloading, setAddLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const fetchDigital = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_LOCAL_URL}/digital`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      setDigitals(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setDigitals([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDigital = async (id) => {
    if (token) {
      try {
        const result = await deleteDigital(id, token); // Wait for deletion to complete
        if (result.status === 204) {
          fetchDigital();
        }
        // Then refresh the list
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };
  useEffect(() => {
    fetchDigital();
  }, []);

  // Handle row deletion
  const handleDeleteSelectedRows = async () => {
    try {
      for (const rowIndex of selectedRows) {
        const digitalToDelete = Digital[rowIndex];
        await handleDeleteDigital(digitalToDelete.uid);
      }
      setSelectedRows(new Set());
    } catch (error) {
      console.error("Error deleting selected Digital:", error);
    }
  };

  const columns = [
    { key: "uid", label: "ID" },
    { key: "name", label: "Name" },
    {
      key: "package",
      label: "Packages",
      render: (row) => (
        <div className="flex flex-col">
          {row.package.length > 0 ? (
            row.package.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center border-b border-b-[#acacad] py-3 justify-between text-[10px] font-semibold"
              >
                <p className="text-gray-700">{item.duration}</p>
                <p className="text-cyan-600">{item.price}</p>
              </div>
            ))
          ) : (
            <p>No packages </p>
          )}
        </div>
      ),
    },
    { key: "account_type", label: "Account type" },
    {
      key: "tags",
      label: "Tags",
      render: (row) => (
        <span>{Array.isArray(row.tags) ? row.tags.join(", ") : row.tags}</span>
      ),
    },
    {
      key: "primary_image",
      label: "Primary Image",
      render: (row) => (
        <div className="flex flex-row items-center justify-center flex-wrap">
          <img
            src={`${row.primary_image}`}
            alt="blog"
            className="w-[40px] h-[40px] object-cover rounded-md mx-1 my-1"
          />
        </div>
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
              setDigital(row); // Set the selected subcategory data
              setUpdate(true); // Open the update form
            }}
            dltFunc={() => handleDeleteDigital(row.uid)}
          />
        </div>
      ),
    },
  ];

  const handleAddDigital = async () => {
    if (
      digital.name !== "" &&
      digital.description !== "" &&
      digital.quantity !== "" &&
      digital.primary_image &&
      digital.category_id !== "" &&
      digital.category !== ""
    ) {
      setAddLoading(true);
      const cleanedDigital = { ...digital };
      try {
        const formData = new FormData();
        formData.append("name", cleanedDigital.name);
        formData.append("description", cleanedDigital.description);
        formData.append("category", cleanedDigital.category);
        formData.append("category_id", cleanedDigital.category_id);
        formData.append("primary_image", cleanedDigital.primary_image);
        formData.append("package", JSON.stringify(cleanedDigital.package));
        formData.append("account_type", cleanedDigital.account_type);
        formData.append("tags", cleanedDigital.tags);

        const response = await axios.post(
          `${BASE_LOCAL_URL}/digital`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response.status === 201) {
          setDigital({
            name: "",
            description: "",
            package: [],
            category_name: "",
            category_id: "",
            discount: "",
            account_type: [],
            tags: [],
            primary_image: null,
          });
          setAdd(false);
          fetchDigital();
        }
      } catch (error) {
        console.error("Error adding blog:", error);
      } finally {
        setAddLoading(false);
      }
    } else {
      //console.error("Required fields are missing");
      window.alert("Required fields are missing");
    }
  };

  //console.log(digital);

  return (
    <div className="lg:ml-[250px] mt-8 px-4 sm:px-6 lg:px-10">
      {add ? (
        <div className="w-full max-w-4xl mx-auto">
          <AddDigital
            setAdd={setAdd}
            setDigital={setDigital}
            digital={digital}
            handleAdd={handleAddDigital}
          />
          {addloading && <Loader message="Adding digital..." />}
        </div>
      ) : update ? (
        <div className="w-full max-w-4xl mx-auto">
          <UpdateDigital
            setUpdate={setUpdate}
            digital={digital}
            fetchDigital={fetchDigital}
          />
        </div>
      ) : (
        <>
          <Heading title={"Digital Products"} />
          <Button
            text={"Add Digital"}
            change={() => {
              setAdd((prev) => !prev);
              setDigital({
                name: "",
                description: "",
                category_name: "",
                category_id: "",
                discount: "",
                package: [],
                account_type: [],
                tags: [],
                primary_image: null,
              });
            }}
            className="w-full sm:w-auto"
          />

          <div className="mt-6 overflow-x-auto">
            {loading ? (
              <p>Loading...</p>
            ) : Digital ? (
              <DataTable
                data={Digital}
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
