import Icon from "../Icon/Icon";

const VehicleFilters = ({
  transmission,
  equipment = [],
  onToggleTransmission,
  onToggleEquipment,
}) => {
  const equipmentOptions = [
    { key: "AC", icon: "wind", label: "AC" },
    { key: "gas", icon: "hugeicons_gas-stove", label: "Gas" },
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
  ];

  return (
    <>
      <h3 className="mb-2 mt-4 block text-custom text-black">
        Vehicle Equipment
      </h3>
      <hr className="my-6 h-px w-[360px] border-lightGray" />
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onToggleTransmission}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${
            transmission === "automatic" ? "border-red" : "border-lightGray"
          } text-black`}
        >
          <Icon id="diagram" w={32} h={32} className="fill-black" />
          Automatic
        </button>

        {equipmentOptions.map(({ key, icon, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onToggleEquipment(key)}
            className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${
              equipment.includes(key) ? "border-red" : "border-lightGray"
            } text-black`}
          >
            <Icon id={icon} w={32} h={32} className="fill-black" />
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default VehicleFilters;
