import { Link } from "react-router-dom";
import css from "./CarCard.module.css";
import FavoriteButton from "../Button/FavoriteButton/FavoriteButton.jsx";

export default function CarCard({ car }) {
  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
  } = car;

  const location = address
    .split(",")
    .slice(1, 3)
    .map((part) => part.trim());

  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img src={img} alt={`${brand} ${model}`} />
        <FavoriteButton carId={car.id} />
      </div>
      <div className={css.info}>
        <div className={css.title}>
          <span>
            {brand} <span className={css.model}>{model}</span>, {year}
          </span>
          <span>${rentalPrice}</span>
        </div>

        <p className={css.description}>
          {location.join(" | ")} | {rentalCompany} | {type} |{" "}
          {car.mileage.toLocaleString()} km
        </p>

        <Link to={`/catalog/${id}`}>
          <button className={css.readMoreBtn}>Read more</button>
        </Link>
      </div>
    </div>
  );
}
