import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic API methods
export const apiGet = async (endpoint) => {
  try {
    const res = await api.get(endpoint);
    return { success: true, data: res.data };
  } catch (err) {
    return handleApiError(err);
  }
};

export const apiPost = async (endpoint, body) => {
  try {
    const res = await api.post(endpoint, body);
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

// Common error handler
const handleApiError = (err) => {
  const message =
    err.response?.data?.message ||
    err.message ||
    "Something went wrong. Please try again.";
  return { success: false, data: { message } };
};
