import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../../../redux/campers/slice.js";
import Icon from "../../Icon/Icon";
import { Link } from "react-router-dom";
import CamperFeatures from "./CamperFeatures.jsx";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites) || [];

  const { id, name, gallery, rating, reviews, location, description } = camper;

  const isFavorited = favorites.includes(id);

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <li className="flex flex-wrap w-[1200px] gap-6 rounded-[20px] border border-lightGray p-6 md:w-[888px] md:flex-nowrap shadow-sm">
      <div className="w-[290px] rounded-[10px] overflow-hidden">
        <img
          src={gallery?.[0]?.thumb || "/images/default-camper.jpg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-black">{name}</h3>
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold text-black">{camper.price}</p>
            <button type="button" onClick={handleFavoriteToggle}>
              <Icon
                id="heart"
                w={26}
                h={24}
                className={`transition-colors ${
                  isFavorited ? "fill-red" : "fill-black"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-2">
          <div className="flex items-center">
            <Icon id="star" w={18} h={18} className="mr-1 fill-yellow" />
            <p className="text-base font-medium underline">
              {rating} ({reviews?.length || 0} Reviews)
            </p>
          </div>
          <div className="flex items-center">
            <Icon id="map" w={16} h={15} className="mr-1 fill-black" />
            <p className="text-base font-normal">{location}</p>
          </div>
        </div>

        <p className="mt-4 mb-6 w-full text-base text-gray line-clamp-2">
          {description}
        </p>

        <div className="mb-6">
          <CamperFeatures features={camper} />
        </div>

        <Link
          to={`/catalog/${id}`}
          className="w-[166px] rounded-full bg-red px-8 py-3 text-sm text-white text-center transition-colors hover:bg-darkRed active:bg-darkRed"
        >
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
