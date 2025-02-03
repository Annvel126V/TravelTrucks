import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/campers/slice";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  return (
    <div className="border rounded-lg p-4 shadow-md flex gap-4">
      <img
        src={camper.image}
        alt={camper.name}
        className="w-36 h-36 object-cover rounded-lg"
        onError={(e) => (e.target.src = "/images/default-camper.jpg")}
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold">{camper.name}</h3>
        <p className="text-gray-500">{camper.description}</p>
        <div className="mt-auto flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">{camper.location}</p>
            <p className="text-lg font-semibold">{camper.price}</p>
          </div>
          <button
            className={`p-2 rounded-full ${
              isFavorite ? "bg-red-500 text-white" : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => dispatch(toggleFavorite(camper.id))}
          >
            <Heart />
          </button>
        </div>
        <Link to={`/catalog/${camper.id}`} className="text-blue-500 mt-2">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
