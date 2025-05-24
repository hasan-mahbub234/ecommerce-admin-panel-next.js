import { useAuth } from "@/context/AuthContext";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import BackButton from "@/utils/BackButton";
import Button from "@/utils/Button";
import Heading from "@/utils/Heading";
import Input from "@/utils/Input";
import Loader from "@/utils/Loader";
import axios from "axios";
import React, { useState } from "react";

function UpdateOrder({ setUpdate, order, fetchOrder }) {
  const { token } = useAuth();
  const [updatedOrder, setUpdatedOrder] = useState({
    status: order.status,
  });
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (token) {
      try {
        setLoading(true);
        const formData = new FormData();
        // formData.append("status", updatedOrder.status);
        //console.log(formData);

        const response = await axios.patch(
          `${BASE_LOCAL_URL}/orders/orders/${order.uid}/`,
          { status: updatedOrder.status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        //const result = await response.json();
        // console.log("Update Response:", result);

        if (response.status === 200) {
          fetchOrder(); // Refresh the list after update
          setUpdate(false); // Close the update form
        }
      } catch (error) {
        console.error("Error updating category:", error);
      } finally {
        setLoading(false);
      }
    } else {
      window.alert("Please Login!");
    }
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <BackButton change={() => setUpdate(false)} style={"mt-[-18px]"} />
        <Heading title={"Update Order Status"} />
      </div>
      {/* Update Form */}
      <div className="mt-4">
        <Input
          type="text"
          label="Order Status"
          placeholder="Enter Order Status"
          value={updatedOrder.status}
          change={(value) =>
            setUpdatedOrder((prev) => ({ ...prev, status: value }))
          }
        />

        <Button
          text="Update"
          change={handleUpdate}
          style="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 mt-24"
        />
        {loading && <Loader message="Updating Order..." />}
      </div>
    </>
  );
}

export default UpdateOrder;
