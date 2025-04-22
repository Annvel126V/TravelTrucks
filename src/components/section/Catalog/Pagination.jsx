import { useDispatch, useSelector } from "react-redux";
import { loadMoreCampers } from "../../../redux/campers/operations";

const Pagination = () => {
  const dispatch = useDispatch();
  const hasMore = useSelector((state) => state.campers.hasMore);
  const isLoading = useSelector((state) => state.campers.isLoading);
  return (
    hasMore && (
      <button
        onClick={() => dispatch(loadMoreCampers())}
        disabled={isLoading}
        className=" w-[145px] h-[56px] bg-white border border-lightGray text-black rounded-[200px] hover:border-darkRed disabled:opacity-50"
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    )
  );
};

export default Pagination;
