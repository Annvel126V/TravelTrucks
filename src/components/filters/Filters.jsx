import VehicleFilters from "./VehicleFilters.jsx";
import TypeFilter from "./TypeFilter.jsx";
import SearchButton from "../buttons/SearchButton.jsx";
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
import ResetFiltersBtn from "../buttons/ResetFiltersBtn.jsx";

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
        variant="square"
      />
      <TypeFilter />
      <div className="flex justify-between">
        <SearchButton />
        <ResetFiltersBtn />
      </div>
    </aside>
  );
};

export default Filters;
