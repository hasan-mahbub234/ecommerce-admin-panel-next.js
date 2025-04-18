import apiService from "./apiService";

// Example: GET request
export const getSubcategories = async () => {
  return await apiService("sub_category", "GET");
};

export const getBlogs = async () => {
  return await apiService("blogs", "GET");
};

export const getExpert = async () => {
  return await apiService("experts", "GET");
};
