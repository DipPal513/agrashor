// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-base-url.com/api', // Replace with your base URL
  withCredentials:true
});

export default axiosInstance;
