import apiService from './apiService';


export const createSubCategory = async (data) => {
  try {
    const result = await apiService('sub_category', 'POST', data);
    return result; 
  } catch (error) {
    console.error("API Error:", error);
    throw error; 
  }
};

