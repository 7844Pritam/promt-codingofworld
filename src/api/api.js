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
export const apiGet = async (endpoint, authRequired = true) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };

    if (authRequired) {
      const { token } = getAuthData();
      if (!token) throw new Error("No authentication token found");

      headers.Authorization = `Bearer ${token}`;
    }

    const res = await api.get(endpoint, { headers });
    return { success: true, data: res.data };
  } catch (err) {
    return handleApiError(err);
  }
};


export const apiPost = async (endpoint, body, authRequired = true) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };

    if (authRequired) {
      const { token } = getAuthData();
      if (!token) throw new Error("No authentication token found");

      headers.Authorization = `Bearer ${token}`;
    }

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
