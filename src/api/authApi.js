import api from './api';

export const loginUser = (username,email, password) =>
  api.post('/login', {username, email, password });

export const registerUser = (data) =>
  api.post('/auth/signup', data);

export const getUserProfile = () =>
  api.get('/user/profile');

export const updateUserProfile = (data) =>
  api.put('/user/profile', data);

export const deleteAccount = () =>
  api.delete('/user/delete');
