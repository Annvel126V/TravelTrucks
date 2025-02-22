import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios;

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { filters, campers } = getState();
      const response = await axios.get(BASE_URL, {
        params: {
          page: campers.page,
          limit: 4,
          location: filters.location,
          form: filters.form,
          transmission: filters.transmission,
          equipment: filters.equipment.join(",") || undefined,
        },
      });

      if (!response.data || !Array.isArray(response.data.items)) {
        console.error("API response is not an array:", response.data);
        return rejectWithValue("Invalid API response");
      }

      return response.data.items.map((camper) => ({
        ...camper,
        image: camper.gallery?.[0]?.thumb || "/images/default-camper.jpg",
        price: camper.price ? `€${Number(camper.price).toFixed(2)}` : "N/A",
      }));
    } catch (error) {
      console.error("Error fetching campers:", error);
      return rejectWithValue(error.message);
    }
  }
);
export const loadMoreCampers = createAsyncThunk(
  "campers/loadMoreCampers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { campers, filters } = getState();
      const nextPage = campers.page + 1;

      const response = await axios.get(BASE_URL, {
        params: {
          page: nextPage,
          limit: 4,
          location: filters.location,
          form: filters.form,
          transmission: filters.transmission,
          equipment: filters.equipment.join(",") || undefined,
        },
      });

      return {
        items: response.data.items,
        totalPages: response.data.totalPages,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching camper details"
      );
    }
  }
);
