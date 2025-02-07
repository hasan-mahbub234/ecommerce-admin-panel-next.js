import apiService from "./apiService";

export const deleteSubcategory = async (id) => {
  try {
    await apiService(`sub_category/${id}`, "DELETE");
    console.log(`Sub category ${id} deleted`);
  } catch (error) {
    console.error(error);
  }
};
