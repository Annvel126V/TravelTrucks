import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../redux/campers/operations.js";
import CamperInfo from "../components/section/CamperDetails/CamperInfo.jsx";
import Header from "../components/section/Header/Header.jsx";
import Tabs from "../components/section/CamperDetails/Tabs.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import PageContainer from "../components/layout/PageContainer.jsx";
import ScrollUppBtn from "../components/buttons/ScrollUppBtn.jsx";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.currentCamper);
  const loading = useSelector((state) => state.campers.loading);
  const error = useSelector((state) => state.campers.error);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    dispatch(fetchCamperById(id));

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch, id]);

  if (loading || !showContent) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }
  if (!camper) {
    return <p>Camper not found</p>;
  }

  return (
    <>
      <Header />
      <PageContainer>
        <CamperInfo camper={camper} />
        <Tabs camper={camper} />
      </PageContainer>
      <ScrollUppBtn />
    </>
  );
};

export default CamperDetailsPage;
