import TypeFilter from "./TypeFilter.jsx";
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
import VehicleTitle from "../section/Catalog/VehicleTitle.jsx";

const Filters = () => {
  const dispatch = useDispatch();
  const { transmission, equipment, location, form } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(fetchCampers());
  }, [transmission, equipment, location, form, dispatch]);

  return (
    <aside className="">
      <LocationSearch />
      <label className="text-darkGray mb-8">Filters</label>
      <VehicleTitle />
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
