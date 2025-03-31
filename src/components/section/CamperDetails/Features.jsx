import CamperFeatures from "../Catalog/CamperFeatures";
import BookingForm from "../../BookingForm/BookingForm";
import FeaturesDetalis from "./FeaturesDetalis";

const Features = ({ camper }) => {
  return (
    <div className="flex  bg-white flex-col lg:flex-row  gap-20 p-6 lg:p-12  rounded-2xl">
      <div className="flex w-[631px] h-[588px] bg-darkWhite rounded-xl p-6 justify-between flex-col gap-10  lg:w-[631px]">
        <CamperFeatures features={camper} />

        <FeaturesDetalis camper={camper} />
      </div>

      <div className="w-full ml-10 lg:w-[40%]">
        <BookingForm camper={camper} />
      </div>
    </div>
  );
};

export default Features;
