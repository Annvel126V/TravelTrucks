import { useSelector } from "react-redux";
import { selectCamperById } from "../redux/campers/selectors";
const FeaturesDetalis = () => {
  const camper = useSelector(selectCamperById);
  return (
    <section>
      <h2>Vehicle details</h2>
      <ul>
        <li>
          <span>Form</span>
          <span>{camper.form}</span>
        </li>
        <li>
          <span>Length</span>
          <span>{camper.length}</span>
        </li>
        <li>
          <span>Width</span>
          <span>{camper.width}</span>
        </li>
        <li>
          <span>Height</span>
          <span>{camper.height}</span>
        </li>
        <li>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </li>
        <li>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </section>
  );
};

export default FeaturesDetalis;
