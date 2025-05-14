import axios from "axios";
import { Festival, FestivalFilters } from "../types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const festivalService = {
  // Get all festivals with optional filters
  getFestivals: async (filters?: FestivalFilters): Promise<Festival[]> => {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      });
    }
    const response = await api.get(`/festivals?${params.toString()}`);
    return response.data;
  },

  // Get a single festival by ID
  getFestivalById: async (id: string): Promise<Festival> => {
    const response = await api.get(`/festivals/${id}`);
    return response.data;
  },

  // Get hidden gems
  getHiddenGems: async (): Promise<Festival[]> => {
    const response = await api.get("/festivals/hidden-gems");
    return response.data;
  },

  // Get upcoming festivals
  getUpcomingFestivals: async (): Promise<Festival[]> => {
    const response = await api.get("/festivals/upcoming");
    return response.data;
  },

  // Create a new festival
  createFestival: async (
    festival: Omit<Festival, "_id">
  ): Promise<Festival> => {
    const response = await api.post("/festivals", festival);
    return response.data;
  },

  // Update a festival
  updateFestival: async (
    id: string,
    festival: Partial<Festival>
  ): Promise<Festival> => {
    const response = await api.put(`/festivals/${id}`, festival);
    return response.data;
  },

  // Delete a festival
  deleteFestival: async (id: string): Promise<void> => {
    await api.delete(`/festivals/${id}`);
  },
};
