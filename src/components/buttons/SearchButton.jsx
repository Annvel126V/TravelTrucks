import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";

const SearchButton = () => {
  const dispatch = useDispatch();
  const { location, equipment, type } = useSelector((state) => state.filters);

  const handleSearch = () => {
    const filters = {
      location: location.trim(),
      equipment: equipment.join(","),
      type,
    };

    dispatch(fetchCampers(filters));
  };

  return (
    <button
      onClick={handleSearch}
      className="w-[166px] rounded-[200px] bg-red hover:bg-darkRed text-white py-3  font-semibold text-lg transition"
    >
      Search
    </button>
  );
};

export default SearchButton;
