import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios;

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL, { params: filters });

      console.log("🚀 API Full Response:", response.data);

      if (!response.data || !Array.isArray(response.data.items)) {
        console.error("❌ API response is not an array:", response.data);
        return rejectWithValue("Invalid API response");
      }

      return response.data.items.map((camper) => ({
        ...camper,
        image: camper.gallery?.[0]?.thumb || "/images/default-camper.jpg", // ✅ Бере `gallery[0].thumb`, якщо є
        price: camper.price ? `€${Number(camper.price).toFixed(2)}` : "N/A", // ✅ Формат ціни
      }));
    } catch (error) {
      console.error("❌ Error fetching campers:", error);
      return rejectWithValue(error.message);
    }
  }
);
export const loadMoreCampers = createAsyncThunk(
  "campers/loadMoreCampers",
  async (_, { getState }) => {
    const state = getState();
    const response = await axios.get(BASE_URL, {
      params: { page: state.campers.page + 1 },
    });
    return response.data.items;
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
