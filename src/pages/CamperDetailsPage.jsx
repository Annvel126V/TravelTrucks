import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../redux/campers/operations.js";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.selectedCamper);
  const loading = useSelector((state) => state.campers.loading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (loading || !camper) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={camper.image} alt={camper.name} className="w-full rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{camper.name}</h1>
      <p className="text-gray-500">{camper.description}</p>
      <h2 className="text-2xl font-bold mt-4">Specifications</h2>
      <ul>
        {Object.entries(camper).map(([key, value]) =>
          typeof value === "boolean" ? (
            <li key={key}>
              {key}: {value ? "✔️ Yes" : "❌ No"}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default CamperDetailsPage;
