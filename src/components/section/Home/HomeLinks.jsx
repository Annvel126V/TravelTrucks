import { Link } from "react-router-dom";
const HomeLinks = () => {
  return (
    <div>
      <Link
        to="/catalog"
        className="px-16 py-5 bg-red-600  text-white rounded-[30px]"
      >
        View Now
      </Link>
    </div>
  );
};

export default HomeLinks;
