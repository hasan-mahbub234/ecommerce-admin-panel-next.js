import apiService from "./apiService";

export const createSubCategory = async (data) => {
  try {
    const result = await apiService("sub_category", "POST", data);
    return result;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const createBlog = async (data) => {
  try {
    const result = await apiService("blogs", "POST", data);
    return result;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const createExpert = async (data) => {
  try {
    const result = await apiService("experts", "POST", data);
    return result;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
