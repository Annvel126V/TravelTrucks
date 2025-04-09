const TabsHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-6 border-b border-lightGray">
      <div className="flex gap-6">
        <button
          onClick={() => setActiveTab("features")}
          className={`pb-2 text-custom text-black ${
            activeTab === "features"
              ? "border-b-4  border-red  font-bold"
              : "text-black"
          }`}
        >
          Features
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 text-custom text-black ${
            activeTab === "reviews"
              ? "border-b-4 border-red font-bold"
              : "text-black"
          }`}
        >
          Reviews
        </button>
      </div>
    </div>
  );
};

export default TabsHeader;
