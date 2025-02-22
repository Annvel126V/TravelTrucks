import VehicleFilters from "./VehicleFilters";
import TypeFilter from "./TypeFilter";
import SearchButton from "../section/Catalog/SearchButton.jsx";
import LocationSearch from "../section/Catalog/LocationSearch.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleEquipment,
  toggleTransmission,
} from "../../redux/filters/slice.js";
import { resetCampers } from "../../redux/campers/slice.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import { useEffect } from "react";

const Filters = () => {
  const dispatch = useDispatch();
  const { transmission, equipment, location, form } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(resetCampers()); // Скинути старі результати
    dispatch(fetchCampers()); // Завантажити нові з урахуванням фільтрів
  }, [transmission, equipment, location, form, dispatch]);

  return (
    <aside className="">
      <LocationSearch />
      <label className="text-darkGray mb-8">Filters</label>
      <VehicleFilters
        transmission={transmission}
        equipment={equipment}
        onToggleTransmission={() => dispatch(toggleTransmission())}
        onToggleEquipment={(item) => dispatch(toggleEquipment(item))}
      />
      <TypeFilter />
      <SearchButton />
    </aside>
  );
};

export default Filters;
