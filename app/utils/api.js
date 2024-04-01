// api.js
import axios from 'axios';
import { getDataFromStorage } from './storage';

const createAxiosInstance = async () => {
  try {
    const authTokenData = await getDataFromStorage("auth");
    const authToken = authTokenData?.authToken || '';

    const api = axios.create({
      baseURL: process.env.EXPO_PUBLIC_BACKEND_API_URL, // Update this to match your API server's address
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });

    return api;
  } catch (error) {
    console.error('Error setting up Axios instance:', error);
    throw error;
  }
};

export default createAxiosInstance;
