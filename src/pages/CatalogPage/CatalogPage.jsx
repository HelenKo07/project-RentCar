import { useDispatch, useSelector } from 'react-redux';
import { incrementPage, resetCars } from '../../redux/cars/carsSlice.js';
import { fetchCars } from '../../redux/cars/operations.js';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader.jsx';
import Filters from '../../Filters/Filters.jsx'; 
import css from './CatalogPage.module.css'; 
import CarCard from '../../components/CarList/CarCard.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';

export default function CatalogPage () {
  const dispatch = useDispatch();
  const { items, isLoading, page, hasMore } = useSelector(state => state.cars);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, filters }));
  }, [dispatch, filters]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCars({ page, filters }));
    }
  }, [dispatch, page, filters]);

  return (
    <>
    <Navigation />
    <div className={css.wrapper}>
      <aside className={css.sidebar}>
        <Filters />
      </aside>

      <main className={css.catalog}>
        <div>
        {items.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
        </div>
        {isLoading && <Loader />}
        {hasMore && (
          <button onClick={() => dispatch(incrementPage())}>Read more</button>
        )}
      </main>
    </div>
    </>
  );
};
