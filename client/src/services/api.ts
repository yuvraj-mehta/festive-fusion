import axios from "axios";
import {
  Festival,
  FestivalFilters,
  PlannedVisit,
  CreatePlannedVisitDto,
} from "../types";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const plannedVisitsApi = {
  create: async (visitData: CreatePlannedVisitDto) => {
    const response = await api.post("/planned-visits", visitData);
    return response.data;
  },

  update: async (visitId: number, updates: Partial<PlannedVisit>) => {
    const response = await api.put(`/planned-visits/${visitId}`, updates);
    return response.data;
  },

  delete: async (visitId: number) => {
    const response = await api.delete(`/planned-visits/${visitId}`);
    return response.data;
  },

  getUserVisits: async () => {
    const response = await api.get("/planned-visits/user");
    return response.data;
  },
};

export const festivalsApi = {
  getAll: async () => {
    const response = await api.get("/festivals");
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get(`/festivals/${id}`);
    return response.data;
  },

  getHiddenGems: async () => {
    const response = await api.get("/festivals/hidden-gems");
    return response.data;
  },

  getUpcoming: async () => {
    const response = await api.get("/festivals/upcoming");
    return response.data;
  },
};

export default api;
