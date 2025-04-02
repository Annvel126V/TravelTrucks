import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../../redux/filters/slice.js";
import Icon from "../icons/Icon.jsx";

const vehicleTypes = [
  { key: "panelTruck", icon: "bi_grid-1x22x", label: "Van" },
  { key: "fullyIntegrated", icon: "bi_grid", label: "Fully Integrated" },
  { key: "alcove", icon: "bi_grid-3x3-gap", label: "Alcove" },
];

const TypeFilter = () => {
  const dispatch = useDispatch();
  const selectedType = useSelector((state) => state.filters.form);

  const selectType = (typeValue) => {
    dispatch(setForm(selectedType === typeValue ? "" : typeValue));
  };

  return (
    <div className="mb-10">
      <h3 className="text-custom mb-6 text-black ">Vehicle type</h3>
      <hr className="my-6 h-px w-[360px] border-lightGray" />
      <div className="flex  gap-3">
        {vehicleTypes.map(({ key, icon, label }) => (
          <button
            key={key}
            onClick={() => selectType(key)}
            className={`border rounded-lg w-[112px] h-[96px] flex flex-col items-center justify-center gap-2 transition text-base font-medium ${
              selectedType === key
                ? "border-red bg-white text-black"
                : "border-lightGray text-black"
            }`}
          >
            <Icon id={icon} w={32} h={32} className="fill-black" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
