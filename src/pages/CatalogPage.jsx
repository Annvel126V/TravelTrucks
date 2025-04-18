import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations.js";
import CamperCard from "../components/section/Catalog/CamperCard.jsx";
import Header from "../components/section/Header/Header.jsx";
import Filters from "../components/filters/Filters.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Pagination from "../components/section/Catalog/Pagination.jsx";
import ScrollUppBtn from "../components/buttons/ScrollUppBtn.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const loading = useSelector((state) => state.campers.loading);
  const error = useSelector((state) => state.campers.error);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCampers({}));
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className=" flex  p-16 gap-16 justify-center">
        <Filters />

        <main>
          {(loading || isPageLoading) && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {!loading && !error && (
            <>
              <ul className="flex flex-col gap-8">
                {campers.length > 0 ? (
                  campers.map((camper) => (
                    <CamperCard key={camper.id} camper={camper} />
                  ))
                ) : (
                  <p className="text-center text-gray-500">No campers found.</p>
                )}
              </ul>
              <div className="flex mt-10 justify-center">
                <Pagination />
              </div>
            </>
          )}
        </main>
      </div>
      <ScrollUppBtn />
    </div>
  );
};

export default CatalogPage;
