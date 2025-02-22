import { useSelector } from "react-redux";

const CampersList = () => {
  const {
    items: campers,
    isLoading,
    error,
  } = useSelector((state) => state.campers);

  if (isLoading) return <p>Loading campers...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!campers.length) return <p>No campers found for selected filters.</p>;

  return (
    <div>
      {campers.map((camper) => (
        <div key={camper.id}>
          <h3>{camper.name}</h3>
          <img src={camper.image} alt={camper.name} />
          <p>{camper.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CampersList;
