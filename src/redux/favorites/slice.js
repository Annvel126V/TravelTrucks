import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const index = state.indexOf(camperId);

      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(camperId);
      }

      localStorage.setItem("favorites", JSON.stringify(state));
    },
    clearFavorites: () => {
      localStorage.removeItem("favorites");
      return [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
