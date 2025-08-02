import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://9738dfd3-5cba-44d7-b45b-cc4a1bcd846c-dev.e1-us-east-azure.choreoapis.dev/djangoreact/backend/v1.0";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;