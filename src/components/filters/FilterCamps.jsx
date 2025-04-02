import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import CamperCard from "../section/Catalog/CamperCard.jsx";
import { selectCampers, selectLoading } from "../../redux/campers/selectors.js";

const FilterCamps = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers({}));
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Catalog</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campers.length > 0 ? (
            campers.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))
          ) : (
            <p>No campers found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterCamps;
