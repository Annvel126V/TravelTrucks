import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filters/slice";
import { resetCampers } from "../../redux/campers/slice";

const ResetFiltersBtn = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(resetCampers());
  };
  return (
    <button
      onClick={handleReset}
      className="w-[166px] rounded-[200px]  border border-lightGray bg-white hover:bg-darkWhite text-black py-3  font-semibold text-lg transition"
    >
      Reset
    </button>
  );
};

export default ResetFiltersBtn;
