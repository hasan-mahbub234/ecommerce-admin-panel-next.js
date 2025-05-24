"use client";
import ActionColumn from "@/components/ActionColumn";
import AddProduct from "@/components/Products/AddProduct";
import UpdateProduct from "@/components/Products/UpdateProduct";
import { useAuth } from "@/context/AuthContext";
import { deleteProduct } from "@/functions/AllDeleteApis";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import { formatDate } from "@/functions/basicFunc";
import Button from "@/utils/Button";
import DataTable from "@/utils/DataTable";
import Heading from "@/utils/Heading";
import Loader from "@/utils/Loader";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Products() {
  const { token } = useAuth();
  const [Products, setProducts] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    description: "",
    price: "",
    category: "",
    category_id: "",
    brand: "",
    age: "",
    size: "",
    weight: "",
    color: "",
    tags: "",
    discount: "0",
    primary_image: null,
    images: [],
    video_file: null,
    best_selling: false,
  });
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addloading, setAddLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_LOCAL_URL}/products`);
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setProducts([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const result = await deleteProduct(id); // Wait for deletion to complete
      if (result.status === 204) {
        fetchProducts();
      }
      // Then refresh the list
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle row deletion
  const handleDeleteSelectedRows = async () => {
    if (token) {
      try {
        for (const rowIndex of selectedRows) {
          const productToDelete = Products[rowIndex];
          await handleDeleteProduct(productToDelete.uid, token);
        }
        setSelectedRows(new Set());
      } catch (error) {
        console.error("Error deleting selected products:", error);
      }
    }
  };

  const columns = [
    { key: "uid", label: "ID" },
    { key: "name", label: "Name" },
    { key: "quantity", label: "Quantity" },
    { key: "price", label: "Price" },
    { key: "category", label: "Category" },
    {
      key: "primary_image",
      label: "Primary Image",
      render: (row) => (
        <div className="flex flex-row items-center flex-wrap">
          <img
            src={`${row.primary_image}`}
            alt="blog"
            className="w-[40px] h-[40px] object-cover rounded-md mx-1 my-1"
          />
        </div>
      ),
    },
    {
      key: "video_file",
      label: "Video",
      render: (row) => (
        <div className="flex flex-row items-center flex-wrap">
          {row.video ? (
            <video
              src={`${row.video}`}
              className="w-[100px] h-[50px] object-cover"
            />
          ) : (
            "No Video"
          )}
        </div>
      ),
    },
    { key: "brand", label: "Brand" },
    {
      key: "images",
      label: "Images",
      render: (row) => (
        <div className="grid grid-cols-2 gap-2 items-center">
          {row.images
            ? row.images.map((item, index) => (
                <img
                  src={`${item.image_url}`}
                  key={index}
                  alt="blog"
                  className="w-[20px] h-[20px] object-cover rounded-md mx-1 my-1"
                />
              ))
            : "No Image"}
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
              setProduct({ ...row, video_file: row.video }); // Set the selected subcategory data
              setUpdate(true); // Open the update form
            }}
            dltFunc={() => handleDeleteProduct(row.uid)}
          />
        </div>
      ),
    },
  ];

  const handleAddProduct = async () => {
    if (
      product.name !== "" &&
      product.price !== "" &&
      product.description !== "" &&
      product.quantity !== "" &&
      product.primary_image &&
      product.category_id !== "" &&
      product.category !== ""
    ) {
      setAddLoading(true);
      const cleanedImages = product.images.filter((img) => img !== "");
      const cleanedProduct = { ...product, images: cleanedImages };
      console.log(cleanedProduct.video_file);
      if (token) {
        try {
          const formData = new FormData();
          formData.append("name", cleanedProduct.name);
          formData.append("quantity", cleanedProduct.quantity);
          formData.append("description", cleanedProduct.description);
          formData.append("price", cleanedProduct.price);
          formData.append("category", cleanedProduct.category);
          formData.append("category_id", cleanedProduct.category_id);
          formData.append("primary_image", cleanedProduct.primary_image);
          formData.append("brand", cleanedProduct.brand);
          formData.append("age", cleanedProduct.age);
          formData.append("discount", cleanedProduct.discount);
          formData.append("size", cleanedProduct.size);
          formData.append("weight", cleanedProduct.weight);
          formData.append("color", cleanedProduct.color);
          formData.append("tags", cleanedProduct.tags);
          formData.append("best_selling", cleanedProduct.best_selling);

          if (cleanedProduct.video_file !== "" && cleanedProduct.video_file) {
            formData.append("video_file", cleanedProduct.video_file);
          }
          cleanedProduct.images
            .filter((img) => img instanceof File)
            .forEach((file, index) => {
              formData.append("images", file);
            });

          console.log(formData);

          const response = await axios.post(
            `${BASE_LOCAL_URL}/products`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response);
          if (response.status === 201) {
            setProduct({
              name: "",
              quantity: "",
              description: "",
              price: "",
              category_name: "",
              category_id: "",
              brand: "",
              age: "",
              discount: "",
              size: [],
              weight: [],
              color: [],
              tags: [],
              primary_image: null,
              images: [],
              video_file: null,
              best_selling: false,
            });
            setAdd(false);
            fetchProducts();
          }
        } catch (error) {
          console.error("Error adding blog:", error);
        } finally {
          setAddLoading(false);
        }
      }
    } else {
      //console.error("Required fields are missing");
      window.alert("Required fields are missing");
    }
  };

  return (
    <div className="lg:ml-[250px] mt-8 px-4 sm:px-6 lg:px-10">
      {add ? (
        <div className="w-full max-w-4xl mx-auto">
          <AddProduct
            setAdd={setAdd}
            setProduct={setProduct}
            product={product}
            handleAdd={handleAddProduct}
          />
          {addloading && <Loader message="Adding product..." />}
        </div>
      ) : update ? (
        <div className="w-full max-w-4xl mx-auto">
          <UpdateProduct
            setUpdate={setUpdate}
            product={product}
            fetchProducts={fetchProducts}
          />
        </div>
      ) : (
        <>
          <Heading title={"Products"} />
          <Button
            text={"Add Product"}
            change={() => {
              setAdd((prev) => !prev);
              setProduct({
                name: "",
                quantity: "",
                description: "",
                price: "",
                category_name: "",
                category_id: "",
                brand: "",
                age: "",
                discount: "",
                size: [],
                weight: [],
                color: [],
                tags: [],
                primary_image: null,
                images: [],
                video_file: null,
                best_selling: false,
              });
            }}
            className="w-full sm:w-auto"
          />

          <div className="mt-6 overflow-x-auto">
            {loading ? (
              <p>Loading...</p>
            ) : Products ? (
              <DataTable
                data={Products}
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
