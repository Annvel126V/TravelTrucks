import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  equipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    toggleEquipment(state, action) {
      const item = action.payload;
      if (state.equipment.includes(item)) {
        state.equipment = state.equipment.filter((eq) => eq !== item);
      } else {
        state.equipment.push(item);
      }
    },
    toggleTransmission(state) {
      state.transmission =
        state.transmission === "automatic" ? "" : "automatic";
    },
    resetFilters: () => initialState,
  },
});

export const {
  setLocation,
  setForm,
  toggleEquipment,
  toggleTransmission,
  resetFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
