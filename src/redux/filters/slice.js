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
      if (state.equipment.includes(action.payload)) {
        state.equipment = state.equipment.filter((eq) => eq !== action.payload);
      } else {
        state.equipment.push(action.payload);
      }
    },
  },
});

export const { setLocation, setForm, toggleEquipment } = filtersSlice.actions;
export default filtersSlice.reducer;
