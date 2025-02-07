export const BASE_LOCAL_URL = 'http://127.0.0.1:8000/api/v1';

const apiService = async (endpoint, method = 'GET', body = null, headers = {}) => {
  try {
    const response = await fetch(`${BASE_LOCAL_URL}/${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default apiService;
