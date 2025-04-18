import apiService from "./apiService";

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
    const response = await apiService(`blogs/${id}`, "DELETE");

    // Handle empty responses (common for DELETE requests)
    if (response.status === 204) {
      // No Content
      return { success: true };
    }

    // Handle JSON responses
    try {
      const data = await response.json();
      return data;
    } catch (jsonError) {
      // Response wasn't JSON - return success if status is 2xx
      if (response.ok) {
        return { success: true };
      }
      throw new Error("Delete failed");
    }
  } catch (error) {
    console.error(`Error deleting blog ${id}:`, error);
    throw error; // Re-throw to let calling code handle it
  }
};

export const deleteExpert = async (id) => {
  try {
    const response = await apiService(`experts/${id}`, "DELETE");

    // Handle empty responses (common for DELETE requests)
    if (response.status === 204) {
      // No Content
      return { success: true };
    }

    // Handle JSON responses
    try {
      const data = await response.json();
      return data;
    } catch (jsonError) {
      // Response wasn't JSON - return success if status is 2xx
      if (response.ok) {
        return { success: true };
      }
      throw new Error("Delete failed");
    }
  } catch (error) {
    console.error(`Error deleting Expert ${id}:`, error);
    throw error; // Re-throw to let calling code handle it
  }
};
