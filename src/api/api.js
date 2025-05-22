import axios from "axios";
import { handleApiError } from "../utils/apiErrorHandler"; 
import { getAuthData } from '../utils/localStorate';  

// For Vite
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic API methods
export const apiGet = async (endpoint) => {
  try {
    const { token } = getAuthData();
    if (!token) {
      throw new Error("No authentication token found");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const res = await api.get(endpoint, { headers });
    return { success: true, data: res.data };
  } catch (err) {
    return handleApiError(err);
  }
};


export const apiPost = async (endpoint, body) => {
  try {
    const { token } = getAuthData();
    if (!token) {
      throw new Error('No authentication token found');
    }
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', 
    };

    const res = await api.post(endpoint, body, { headers });
    return { success: true, data: res.data };
  } catch (err) {
    return handleApiError(err);
  }
};


export const apiPut = async (endpoint, body) => {
  try {
    const res = await api.put(endpoint, body);
    return { success: true, data: res.data };
  } catch (err) {
    return handleApiError(err);
  }
};

export const apiDelete = async (endpoint) => {
  try {
    const res = await api.delete(endpoint);
    return { success: true, data: res.data };
  } catch (err) {
    return handleApiError(err);
  }
};

export const apiPatch = async (endpoint, body) => {
  try {
    const res = await api.patch(endpoint, body);
    return { success: true, data: res.data };
  } catch (err) {
    return handleApiError(err);
  }
};
