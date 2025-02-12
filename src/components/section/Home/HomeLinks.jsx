import { Link } from "react-router-dom";
const HomeLinks = () => {
  return (
    <div>
      <Link
        to="/catalog"
        className="py-4 px-12 bg-red  text-base transition-colors cursor-pointer text-white rounded-[30px] hover:bg-darkRed active:bg-darkRed"
      >
        View Now
      </Link>
    </div>
  );
};

export default HomeLinks;
