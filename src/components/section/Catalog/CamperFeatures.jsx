import Icon from "../../Icon/Icon";

const CamperFeatures = ({ features }) => {
  const featureList = [
    { key: "AC", label: "AC", icon: "wind" },
    { key: "kitchen", label: "Kitchen", icon: "cup-hot" },
    { key: "TV", label: "TV", icon: "tv" },
    { key: "bathroom", label: "Bathroom", icon: "ph_shower" },
    { key: "water", label: "Water", icon: "ion_water-outline" },
    { key: "radio", label: "Radio", icon: "ui-radios" },
    {
      key: "refrigerator",
      label: "Refrigerator",
      icon: "solar_fridge-outline",
    },
    { key: "microwave", label: "Microwave", icon: "lucide_microwave" },
    { key: "gas", label: "Gas", icon: "hugeicons_gas-stove" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {/* Transmission */}
      {features?.transmission === "automatic" && (
        <span className="flex items-center gap-2 bg-silver px-4 py-2 rounded-full text-sm text-black">
          <Icon id="diagram" w={20} h={20} className="fill-black" />
          Automatic
        </span>
      )}

      {/* Engine type */}
      {features?.engine === "petrol" && (
        <span className="flex items-center gap-2 bg-silver px-4 py-2 rounded-full text-sm text-black">
          <Icon id="hugeicons_gas-stove" w={20} h={20} className="fill-black" />
          Petrol
        </span>
      )}

      {/* Equipment */}
      {featureList.map(({ key, label, icon }) =>
        features?.[key] ? (
          <span
            key={key}
            className="flex items-center gap-2 bg-silver px-4 py-2 rounded-full text-sm text-black"
          >
            <Icon id={icon} w={20} h={20} className="fill-black" />
            {label}
          </span>
        ) : null
      )}
    </div>
  );
};

export default CamperFeatures;
