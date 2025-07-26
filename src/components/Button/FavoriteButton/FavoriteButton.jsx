import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/favorites/favoritesSlice.js";
import css from "./FavoriteButton.module.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { selectFavorites } from "../../../redux/favorites/selectors.js";

const FavoriteButton = ({ carId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(String(carId))

  const handleClick = () => {
    dispatch(toggleFavorite(carId));
  };

  return (
    <button
      className={`${css.heartBtn} ${isFavorite ? css.active : ""}`}
      onClick={handleClick}
      aria-label="Add to favorites"
    >
      {isFavorite ? (
        <IoHeart fill="#3470ff" stroke="#3470ff" />
      ) : (
        <IoIosHeartEmpty fill="#ffff" stroke="#3470ff" />
      )}
    </button>
  );
};

export default FavoriteButton;
