import { Link } from 'react-router-dom';
import css from './CarCard.module.css';
import FavoriteButton from '../Button/FavoriteButton/FavoriteButton.jsx';

export default function CarCard ({ car }) {
  return (
    <div className={css.card}>
      <img src={car.img} alt={`${car.make} ${car.model}`} />

      <div className={css.info}>
        <Link to={`/catalog/${car.id}`} className={css.titleLink}>
          <h3 className={css.title}>{car.make} {car.model}</h3>
        </Link>

        <p>{car.rentalPrice}</p>
      </div>
     <FavoriteButton carId={car.id} />

    </div>
  );
};

