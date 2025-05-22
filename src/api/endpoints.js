// src/api/endpoints.js

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

const endpoints = {
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
    logout: `${API_BASE_URL}/auth/logout`,
    me: `${API_BASE_URL}/auth/me`,
  },

  products: {
    all: `${API_BASE_URL}/products`,
    byId: (id) => `${API_BASE_URL}/products/${id}`,
    search: `${API_BASE_URL}/products/search`,
    categories: `${API_BASE_URL}/products/categories`,
  },

  cart: {
    get: `${API_BASE_URL}/cart`,
    addItem: `${API_BASE_URL}/cart/add`,
    removeItem: (itemId) => `${API_BASE_URL}/cart/remove/${itemId}`,
    clear: `${API_BASE_URL}/cart/clear`,
  },

  orders: {
    placeOrder: `${API_BASE_URL}/orders`,
    getUserOrders: `${API_BASE_URL}/orders/user`,
    orderById: (orderId) => `${API_BASE_URL}/orders/${orderId}`,
  },

  user: {
    profile: `${API_BASE_URL}/user/profile`,
    updateProfile: `${API_BASE_URL}/user/profile/update`,
    orderHistory: `${API_BASE_URL}/user/orders`,
  },

  payment: {
    createIntent: `${API_BASE_URL}/payment/create-intent`,
    confirm: `${API_BASE_URL}/payment/confirm`,
  },
};

export default endpoints;
