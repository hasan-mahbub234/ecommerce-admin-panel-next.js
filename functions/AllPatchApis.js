import apiService from './apiService';


const updateUser = async (userId, updatedData) => {
    try {
      const updatedUser = await apiService(`users/${userId}`, 'PATCH', updatedData);
      console.log(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

