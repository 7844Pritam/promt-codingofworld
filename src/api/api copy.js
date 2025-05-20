import { RequestModel } from '../modals/requestModel';
import { ResponseModel } from '../modals/ResponseModel';
import axiosInstance from './axiosInstance';


const api = {
  get: async (url, request = new RequestModel()) => {
    try {
      const res = await axiosInstance.get(url, {
        params: request.params,
        headers: request.headers,
      });
      return new ResponseModel({ success: true, message: 'Success', data: res.data });
    } catch (error) {
      return new ResponseModel({ success: false, message: error.message });
    }
  },

  post: async (url, request = new RequestModel()) => {
    try {
      const res = await axiosInstance.post(url, request.data, {
        headers: request.headers,
      });
      return new ResponseModel({ success: true, message: 'Success', data: res.data });
    } catch (error) {
      return new ResponseModel({ success: false, message: error.message });
    }
  },

  put: async (url, request = new RequestModel()) => {
    try {
      const res = await axiosInstance.put(url, request.data, {
        headers: request.headers,
      });
      return new ResponseModel({ success: true, message: 'Success', data: res.data });
    } catch (error) {
      return new ResponseModel({ success: false, message: error.message });
    }
  },

  patch: async (url, request = new RequestModel()) => {
    try {
      const res = await axiosInstance.patch(url, request.data, {
        headers: request.headers,
      });
      return new ResponseModel({ success: true, message: 'Success', data: res.data });
    } catch (error) {
      return new ResponseModel({ success: false, message: error.message });
    }
  },

  delete: async (url, request = new RequestModel()) => {
    try {
      const res = await axiosInstance.delete(url, {
        headers: request.headers,
      });
      return new ResponseModel({ success: true, message: 'Deleted', data: res.data });
    } catch (error) {
      return new ResponseModel({ success: false, message: error.message });
    }
  },
};

export default api;
