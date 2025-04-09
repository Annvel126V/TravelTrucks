import CamperFeatures from "../Catalog/CamperFeatures";
import BookingForm from "../../forms/BookingForm";
import FeaturesDetalis from "./FeaturesDetalis";

const Features = ({ camper }) => {
  return (
    <div className="bg-white py-6 lg:py-12">
      <div className=" px-6 lg:px-20 flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="flex h-[588px] bg-darkWhite rounded-xl p-6 justify-between flex-col gap-10 w-full lg:max-w-[631px]">
          <CamperFeatures features={camper} />
          <FeaturesDetalis camper={camper} />
        </div>

        <div className="w-full lg:w-[40%]">
          <BookingForm camper={camper} />
        </div>
      </div>
    </div>
  );
};

export default Features;
