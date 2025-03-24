import VehicleFilters from "../../filters/VehicleFilters";
import BookingForm from "../../BookingForm/BookingForm";
import { useState } from "react";
import FeaturesDetalis from "../../FeaturesDetalis";

const Features = ({ camper }) => {
  const [transmission, setTransmission] = useState(null);
  const [setEquipment] = useState([]);

  const onToggleTransmission = () => {
    setTransmission(transmission === "automatic" ? null : "automatic");
  };

  const onToggleEquipment = (key) => {
    setEquipment((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols- p-16 gap-10 ">
      <VehicleFilters />
      <FeaturesDetalis />
      <div className="">
        <BookingForm camper={camper} />
      </div>
    </div>
  );
};

export default Features;
