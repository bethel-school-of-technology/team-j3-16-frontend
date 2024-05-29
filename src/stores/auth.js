// pinia store
import { defineStore } from 'pinia';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/user', // 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    async register(userData) {
      try {
        const response = await axiosInstance.post('/register', userData);
        this.user = response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    async login(credentials) {
      try {
        const response = await axiosInstance.post('/login', credentials);
        const { token, existingUser } = response.data;
        localStorage.setItem('token', token); //token in local storage
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        this.user = existingUser;
        this.token = token;
      } catch (error) {
        throw error.response.data;
      }
    },
    logout() {
      localStorage.removeItem('token');
      delete axiosInstance.defaults.headers.common['Authorization'];
      this.user = null;
      this.token = '';
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    user: (state) => state.user,
  },
});
