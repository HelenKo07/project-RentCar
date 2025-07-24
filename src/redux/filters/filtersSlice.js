import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  make: "",
  price: "",
  fuelType: "",
  mileage: "",
  location: "",
  transmission: "",
  type: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
