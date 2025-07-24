import { createSlice } from "@reduxjs/toolkit";

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: savedFavorites,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      const index = state.items.indexOf(carId);

      if (index === -1) {
        state.items.push(carId);
      } else {
        state.items.splice(index, 1);
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
