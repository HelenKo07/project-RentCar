import css from './Filters.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from '../redux/filters/selectors';
import { setFilter, resetFilters } from '../redux/filters/filtersSlice.js';

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleChange = (e) => {
    dispatch(setFilter({ name: e.target.name, value: e.target.value }));
  };

  return (
    <>
    <input
      name="make"
      value={filters.make}
      onChange={handleChange}
      placeholder="Марка авто"
    />
    <div>
    <button className={css.resetButton} onClick={() => dispatch(resetFilters())}>
        Reset filters
      </button>
    </div>
    </>
  );
};
   