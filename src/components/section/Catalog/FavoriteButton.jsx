import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/campers/slice";

const FavoriteButton = ({ camperId }) => {
  const dispatch = useDispatch;
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.includes(camperId);

  const handleToggle = () => {
    dispatch(toggleFavorite(camperId));
  };

  return (
    <button
      onClick={handleToggle}
      className={`px-3 py-1 rounded-lg border ${
        isFavorite ? "bg-red-500 text-white" : "bg-gray text-gray-700"
      }`}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? "❤️ In Favorites" : "🤍 Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
