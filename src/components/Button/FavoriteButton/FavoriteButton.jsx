import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from '../../../redux/favorites/favoritesSlice.js';
import css from "./FavoriteButton.module.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { selectFavorites } from "../../../redux/favorites/selectors.js";

const FavoriteButton = ({ carId }) => {
  const dispatch = useDispatch();
const isFavorite = useSelector(selectFavorites);

  const handleClick = () => {
    dispatch(toggleFavorite(carId));
  };

  return (
    <button
      className={css.iconButton}
      onClick={handleClick}
    >
      {isFavorite ? <IoIosHeartEmpty /> : <IoHeart />}
    </button>
  );
};

export default FavoriteButton;
