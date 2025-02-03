import { useDispatch, useSelector } from "react-redux";
import { loadMoreCampers } from "../../../redux/campers/operations";

const Pagination = () => {
  const dispatch = useDispatch();
  const hasMore = useSelector((state) => state.campers.hasMore);

  return (
    hasMore && (
      <button
        onClick={() => dispatch(loadMoreCampers())}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
      >
        Load More
      </button>
    )
  );
};

export default Pagination;
