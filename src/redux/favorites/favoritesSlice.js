import { createSlice } from "@reduxjs/toolkit";

const savedFavorites = (
  JSON.parse(localStorage.getItem("favorites")) || []
).map(String);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: savedFavorites,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = String(action.payload);
      if (state.items.includes(carId)) {
        state.items = state.items.filter((id) => id !== carId);
      } else {
        state.items.push(carId);
      }

      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    clearFavorites: (state) => {
      state.items = [];
      localStorage.removeItem("favorites");
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
