import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterBrand,
  setFilterPrice,
  setFilterMileage,
  resetFilters,
} from "../redux/filters/filtersSlice.js";
import { selectFilters } from "../redux/filters/selectors.js";
import { getBrands } from "../services/brandsApi.js";
import { resetCars } from "../redux/cars/carsSlice.js";
import { fetchCars } from "../redux/cars/operations.js";
import css from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const cars = useSelector((state) => state.cars.items) || [];

  const [brands, setBrands] = useState([]);

  const priceOptions = [
    ...new Set(
      cars
        .filter((car) => car.rentalPrice !== undefined)
        .map((car) => car.rentalPrice)
    ),
  ].sort((a, b) => a - b);

  useEffect(() => {
    async function loadBrands() {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (error) {
        console.error("Failed to load brands:", error);
      }
    }
    loadBrands();
  }, []);

  const handleSearch = () => {
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, limit: 12, filters }));
  };

  return (
    <div className={css.filtersWrapper}>
      <label htmlFor="brand-select" className={css.label}>
        Car brand
        <select
          className={css.select}
          id="brand-select"
          name="brand"
          value={filters.brand}
          onChange={(e) => dispatch(setFilterBrand(e.target.value))}
        >
          <option value="">Choose a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="price-select" className={css.label}>
        Price/ 1 hour
        <select
          className={css.select}
          id="price-select"
          name="price"
          value={filters.price || ""}
          onChange={(e) => dispatch(setFilterPrice(Number(e.target.value)))}
        >
          <option value="" className={css.option}>
            Choose a price
          </option>
          {priceOptions.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </label>

      <label className={css.label}>
        Car mileage / km
        <div className={css.mileageInputs}>
          <input
            className={css.inputLeft}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="From"
            value={filters.mileage.minMileage || ""}
            onChange={(e) =>
              dispatch(setFilterMileage({ minMileage: e.target.value }))
            }
          />
          <input
            className={css.inputRight}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="To"
            value={filters.mileage.maxMileage || ""}
            onChange={(e) =>
              dispatch(setFilterMileage({ maxMileage: e.target.value }))
            }
          />
        </div>
      </label>

      <button className={css.buttonSearch} onClick={handleSearch}>
        Search
      </button>
      <button
        className={css.resetButton}
        onClick={() => dispatch(resetFilters())}
      >
        Reset
      </button>
    </div>
  );
}
