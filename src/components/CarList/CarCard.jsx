import { Link } from "react-router-dom";
import css from "./CarCard.module.css";
import FavoriteButton from "../Button/FavoriteButton/FavoriteButton.jsx";

export default function CarCard({ car }) {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
  } = car;

  const location = address.split(",").slice(1, 3).join(" • ");

  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img src={img} alt={`${make} ${model}`} />
        <FavoriteButton carId={car.id} />
      </div>
      <div className={css.info}>
        <div className={css.title}>
          <span>
            {make} {model}, {year}
          </span>
          <span>{rentalPrice}</span>
        </div>

        <p className={css.description}>
          {location} • {rentalCompany} • {type} • ID: {id}
        </p>

        <Link to={`/catalog/${id}`}>
          <button className={css.readMoreBtn}>Read more</button>
        </Link>
      </div>
    </div>
  );
}
