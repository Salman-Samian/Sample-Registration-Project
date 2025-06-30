import axios from "axios";
import { RegistrationData } from "./validation";

// Create axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// API endpoints
export const apiEndpoints = {
  register: "/register",
  currencies: "/currencies",
  regions: "/regions",
};

// API service functions
export const apiService = {
  // Register user
  register: async (data: RegistrationData) => {
    const response = await api.post(apiEndpoints.register, data);
    return response.data;
  },

  // Get currencies
  getCurrencies: async () => {
    const response = await api.get(apiEndpoints.currencies);
    return response.data;
  },

  // Get regions
  getRegions: async () => {
    const response = await api.get(apiEndpoints.regions);
    return response.data;
  },
};

export default api;
