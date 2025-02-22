import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, loadMoreCampers } from "./operations.js";

const initialState = {
  items: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 1,
  hasMore: true,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
    },
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.totalPages = 1;
      state.hasMore = true;
      state.loading = false;
      state.error = null;
    },
    clearSelectedCamper: (state) => {
      state.selectedCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        console.log("Redux updated with campers:", action.payload);
        state.loading = false;
        state.items = action.payload || [];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadMoreCampers.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.items];
        state.page += 1;
        state.hasMore = state.page < action.payload.totalPages;
      });
  },
});

export const {
  toggleFavorite,
  resetCampers,
  clearSelectedCamper,
  addFavorite,
  removeFavorite,
} = campersSlice.actions;
export const selectFavorites = (state) => state.campers.favorites;
export default campersSlice.reducer;
