import { useState } from "react";
import Features from "./Features";
import Reviews from "./Reviews";

const Tabs = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div>
      <div className="flex gap-6 border-b ml-16 border-lightGray ">
        <button
          onClick={() => setActiveTab("features")}
          className={`pb-2 font-bold text-black ${
            activeTab === "features"
              ? "border-b-4  border-red  font-bold"
              : "text-black"
          }`}
        >
          Features
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 font-bold text-black ${
            activeTab === "reviews"
              ? "border-b-4 border-red font-bold"
              : "text-black"
          }`}
        >
          Reviews
        </button>
      </div>
      {activeTab === "features" && <Features camper={camper} />}
      {activeTab === "reviews" && <Reviews reviews={camper.reviews || []} />}
    </div>
  );
};

export default Tabs;
