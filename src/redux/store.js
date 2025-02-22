import { configureStore } from "@reduxjs/toolkit";
import campersReduser from "./campers/slice.js";
import filtersReduser from "./filters/slice.js";
import favoritesReduser from "./favorites/slice.js";

const store = configureStore({
  reducer: {
    campers: campersReduser,
    filters: filtersReduser,
    favorites: favoritesReduser,
  },
});

export default store;
