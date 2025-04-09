import { useState } from "react";
import Features from "./Features";
import Reviews from "./Reviews";
import TabsHeader from "./TabsHeader";
import PageContainer from "../../layout/PageContainer";

const Tabs = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="w-full">
      <PageContainer>
        <TabsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      </PageContainer>

      {activeTab === "features" && <Features camper={camper} />}
      {activeTab === "reviews" && <Reviews reviews={camper.reviews || []} />}
    </div>
  );
};

export default Tabs;
