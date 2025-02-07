import apiService from './apiService';

// Example: GET request
export const getSubcategories = async () => {
  return await apiService('sub_category', 'GET');
};


