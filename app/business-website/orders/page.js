"use client";
import ActionColumn from "@/components/ActionColumn";
import UpdateOrder from "@/components/orders/UpdateOrder";
import { useAuth } from "@/context/AuthContext";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import { formatDate } from "@/functions/basicFunc";
import DataTable from "@/utils/DataTable";
import Heading from "@/utils/Heading";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Orders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState(null);
  const [order, setOrder] = useState({
    status: "",
  });
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const fetchOrder = async () => {
    if (token) {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_LOCAL_URL}/orders/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const columns = [
    { key: "uid", label: "ID" },
    { key: "user_name", label: "User" },
    { key: "total_amount", label: "Total Amount" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <p
          className={`whitespace-nowrap capitalize ${
            row.status.toLowerCase() === "canceled"
              ? "text-red-600"
              : row.status.toLowerCase() === "delivered"
              ? "text-green-400"
              : "text-sky-400"
          }`}
        >
          {row.status}
        </p>
      ),
    },
    { key: "shipping_address", label: "Shipping Address" },
    { key: "phone_number", label: "Phone number" },
    {
      key: "products",
      label: "Products",
      render: (row) =>
        row.products?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row items-center justify-between py-3 ${
              index !== row.products.length - 1
                ? "border-b border-b-[#acacad]"
                : ""
            }`}
          >
            <img
              src={item.primary_image}
              className="w-[20px] h-[20px] rounded-[3px] mr-2"
            />
            <p className="w-[100px] text-[9px] text-gray-500">{item.name}</p>
            <p className=" w-[30px] ml-20">{item.quantity}</p>
          </div>
        )),
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
        <ActionColumn
          editFunc={() => {
            setOrder(row); // Set the selected category data
            setUpdate(true);
          }}
          // dltFunc={() => handleDeleteCategory(row.uid, token)}
        />
      ),
    },
  ];

  return (
    <div className="ml-[250px] mt-8 px-10">
      {update ? (
        <>
          <UpdateOrder
            setUpdate={setUpdate}
            order={order}
            fetchOrder={fetchOrder}
          />
        </>
      ) : (
        <>
          <Heading title={"Orders"} />
          <div className="mt-6 overflow-x-auto">
            {loading ? (
              <p>Loading...</p>
            ) : orders ? (
              <DataTable
                data={orders}
                columns={columns}
                // handleDeleteSelectedRows={handleDeleteSelectedRows}
                //selectedRows={selectedRows}
                //setSelectedRows={setSelectedRows}
                showRowQuantity
                showPagination
                // showSelectRow
              />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
