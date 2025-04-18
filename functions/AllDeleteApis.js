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

export const deleteBlog = async (id) => {
  try {
    //const response1 = await apiService(`blogs/${id}`, "DELETE");
    const response = await axios.delete(`${BASE_LOCAL_URL}/blogs/${id}/`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(`Error deleting blog ${id}:`, error);
    throw error;
    t;
  }
};

export const deleteExpert = async (id) => {
  try {
    //  const response = await apiService(`experts/${id}`, "DELETE");
    const response = await axios.delete(`${BASE_LOCAL_URL}experts/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(`Error deleting Expert ${id}:`, error);
    throw error; // Re-throw to let calling code handle it
  }
};
