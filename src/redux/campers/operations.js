import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import buildQueryParams from "../../utils/buildQueryParams";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { filters, campers } = getState();

      const params = buildQueryParams(filters, campers.page);

      const response = await axios.get(BASE_URL, { params });

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

      const params = buildQueryParams(filters, nextPage);

      const response = await axios.get(BASE_URL, { params });

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

      const camper = response.data;

      return {
        ...camper,
        price: camper.price ? Number(camper.price).toFixed(2) : "N/A",
        reviews: (camper.reviews || []).map((review) => {
          let name = "Anonymous";

          if (typeof review.reviewer === "string") {
            name = review.reviewer.trim();
          } else if (
            typeof review.reviewer === "object" &&
            typeof review.reviewer.name === "string"
          ) {
            name = review.reviewer.name.trim();
          } else if (typeof review.reviewer_name === "string") {
            name = review.reviewer_name.trim();
          }

          return {
            ...review,
            reviewerName: name,
            rating: Number(review.rating) || 0,
          };
        }),
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching camper details"
      );
    }
  }
);

export const bookCamper = createAsyncThunk(
  "campers/bookCamper",
  async ({ camperId, bookingData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/${camperId}/bookings`,
        bookingData
      );
      return { ...data, camperId };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Booking failed");
    }
  }
);
