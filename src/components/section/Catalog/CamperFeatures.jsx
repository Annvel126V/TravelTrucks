import Icon from "../../Icon/Icon";

const CamperFeatures = ({ camper }) => {
  return (
    <div className="flex  gap-2 mt-2">
      {camper.AC && (
        <span className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded">
          <Icon id="wind" w={20} h={20} />
          AC
        </span>
      )}
      {camper.kitchen && (
        <span className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded">
          {" "}
          <Icon id="cup-hot" w={20} h={20} />
          Kitchen
        </span>
      )}
      {camper.transmission === "automatic" && (
        <span className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded">
          <Icon id="diagram" w={20} h={20} />
          Automatic
        </span>
      )}
      {camper.engine === "petrol" && (
        <span className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded">
          <Icon id="hugeicons_gas-stove" w={20} h={20} />
          Petrol
        </span>
      )}
    </div>
  );
};

export default CamperFeatures;
