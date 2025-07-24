import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12, filters = {} }, thunkAPI) => {
    try {
      const params = { page, limit, ...filters };
      const response = await axios.get(`${BASE_URL}/cars`, { params });
      return response.data.cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch car by ID:", error);
    throw error;
  }
};

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
