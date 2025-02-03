import { configureStore } from "@reduxjs/toolkit";
import campersReduser from "./campers/slice.js";
import filtersReduser from "./filters/slice.js";

const store = configureStore({
  reducer: {
    campers: campersReduser,
    filters: filtersReduser,
  },
});

export default store;
