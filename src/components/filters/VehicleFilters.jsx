import Icon from "../Icon/Icon";

const VehicleFilters = ({
  transmission,
  equipment = [],
  onToggleTransmission,
  onToggleEquipment,
  variant = "square",
}) => {
  const equipmentOptions = [
    { key: "AC", icon: "wind", label: "AC" },
    { key: "kitchen", icon: "cup-hot", label: "Kitchen" },
    { key: "TV", icon: "tv", label: "TV" },
    { key: "bathroom", icon: "ph_shower", label: "Bathroom" },
    { key: "water", icon: "ion_water-outline", label: "Water" },
    { key: "radio", icon: "ui-radios", label: "Radio" },
    {
      key: "refrigerator",
      icon: "solar_fridge-outline",
      label: "Refrigerator",
    },
    { key: "microwave", icon: "lucide_microwave", label: "Microwave" },
    { key: "gas", icon: "hugeicons_gas-stove", label: "Disel" },
  ];
  const isSquare = variant === "square";

  const baseButton = isSquare
    ? "w-[112px] h-[95px] border text-sm flex flex-col items-center justify-center gap-2 rounded-lg transition-all font-medium"
    : "px-4 py-2 h-[48px] rounded-full text-sm font-medium flex items-center gap-2 border transition";

  const getButtonStyle = (isActive) =>
    `${baseButton} ${
      isActive
        ? "bg-white border-red text-black"
        : isSquare
        ? "bg-white border-lightGray text-black"
        : "bg-[#F2F4F7] border-transparent text-black"
    }`;

  const getIconStyle = (isActive) => (isActive ? "fill-black" : "fill-black");

  const wrapperStyle = isSquare
    ? "grid grid-cols-3 gap-4 max-w-[400px]"
    : "flex flex-wrap w-full max-w-[400px] gap-3";

  const limitedOptions = equipmentOptions.slice(0, 4);

  return (
    <div className="mb-8 ">
      <div className={wrapperStyle}>
        <button
          type="button"
          onClick={onToggleTransmission}
          className={getButtonStyle(transmission === "automatic")}
        >
          <Icon
            id="diagram"
            w={isSquare ? 32 : 32}
            h={isSquare ? 28 : 28}
            className={getIconStyle(transmission === "automatic")}
          />
          Automatic
        </button>

        {/* Equipment */}
        {limitedOptions.map(({ key, icon, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onToggleEquipment(key)}
            className={getButtonStyle(equipment.includes(key))}
          >
            <Icon
              id={icon}
              w={isSquare ? 32 : 32}
              h={isSquare ? 28 : 28}
              className={getIconStyle(equipment.includes(key))}
            />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleFilters;
