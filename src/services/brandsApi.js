import axios from "axios";

export const getBrands = async () => {
  const res = await axios.get("https://car-rental-api.goit.global/brands");
  return res.data;
};
