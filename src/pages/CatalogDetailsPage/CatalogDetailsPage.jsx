import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../../redux/cars/operations.js';
import Loader from '../../components/Loader/Loader';
import Navigation from '../../components/Navigation/Navigation.jsx';

export default function CarDetailsPage () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCar: car, isLoading } = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (!car) return <p>Авто не знайдено</p>;

  return (
    <div>
        <Navigation />
      <h2>{car.brand} {car.model}</h2>
      <img src={car.img} alt={car.brand} style={{ width: '400px' }} />
      <p>Year: {car.year}</p>
      <p>Price: {car.rentalPrice}</p>
    </div>
  );
};

