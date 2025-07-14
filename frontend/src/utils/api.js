import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

export const predictImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('file', imageFile);
  
  try {
    const response = await api.post('/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Prediction failed');
  }
};

export const getClasses = async () => {
  try {
    const response = await api.get('/classes');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch classes');
  }
};