import axios from 'axios';

const API_URL = 'http://localhost:5002/api/Auth/';

export const register = (userData) => axios.post(`${API_URL}register`, userData);

export const login = (userData) =>
  axios.post(`${API_URL}login`, userData).then((response) => {
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  });

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => !!getToken();
