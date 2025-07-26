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
      <div className={css.asideBar}>
        <Filters />
        </div>
        {isLoading ? (
        <Loader />
      ) : items.length === 0 ? (
        <p className={css.textNothing}>Nothing found matching your request</p>
      ) : (
        <div className={css.catalog}>
          {items.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
        {hasMore && (
          <button className={css.buttonLoad} onClick={() => dispatch(incrementPage())}>Load more</button>
        )}
    </div>
    </>
  );
};
