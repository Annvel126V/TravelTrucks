import LocationSearch from "../components/section/Catalog/LocationSearch.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations.js";
import CamperCard from "../components/section/Catalog/CamperCard.jsx";
import { selectCampers, selectLoading } from "../redux/campers/selectors.js";
import Header from "../components/section/Header/Header.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers({}));
  }, [dispatch]);

  return (
    <div className="p-4">
      <Header />
      <LocationSearch />
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

export default CatalogPage;
