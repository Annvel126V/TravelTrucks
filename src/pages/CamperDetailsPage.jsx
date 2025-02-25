import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../redux/campers/operations.js";
import CamperInfo from "../components/section/CamperDetails/CamperInfo.jsx";
import Header from "../components/section/Header/Header.jsx";
import Tabs from "../components/section/CamperDetails/Tabs.jsx";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.currentCamper);
  const loading = useSelector((state) => state.campers.loading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (!camper) return <p>Camper not found</p>;

  return (
    <>
      <Header />
      <div className="">
        <CamperInfo camper={camper} />
      </div>
      <Tabs camper={camper} />
    </>
  );
};

export default CamperDetailsPage;
