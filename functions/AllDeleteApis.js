import axios from "axios";
import apiService, { BASE_LOCAL_URL } from "./apiService";

export const deleteSubcategory = async (id) => {
  try {
    await apiService(`sub_category/${id}`, "DELETE");
    console.log(`Sub category ${id} deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteBlog = async (id, token) => {
  try {
    const response = await axios.delete(`${BASE_LOCAL_URL}/blogs/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(`Error deleting blog ${id}:`, error);
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${BASE_LOCAL_URL}/categories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(`Error deleting Category ${id}:`, error);
    throw error;
  }
};
export const deleteProduct = async (id, token) => {
  try {
    const response = await axios.delete(`${BASE_LOCAL_URL}/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(`Error deleting Product ${id}:`, error);
    throw error;
  }
};

export const deleteExpert = async (id, token) => {
  try {
    //  const response = await apiService(`experts/${id}`, "DELETE");
    const response = await axios.delete(`${BASE_LOCAL_URL}/experts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(`Error deleting Expert ${id}:`, error);
    throw error; // Re-throw to let calling code handle it
  }
};

export const deleteDigital = async (id, token) => {
  try {
    //  const response = await apiService(`experts/${id}`, "DELETE");
    const response = await axios.delete(`${BASE_LOCAL_URL}/digital/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(`Error deleting Digital product ${id}:`, error);
    throw error; // Re-throw to let calling code handle it
  }
};
