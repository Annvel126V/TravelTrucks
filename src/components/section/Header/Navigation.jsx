import { Link } from "react-router-dom";
// import clsx from "clsx";
import Logo from "./Logo";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(isActive);
// };

const Navigation = () => {
  return (
    <div className="">
      <span>
        <Logo />
      </span>
      <nav className=" flex items-center  justify-center gap-4">
        <Link
          className="text-black text-2xl hover:text-red-600 active:text-red-600"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-black text-2xl hover:text-red-600 active:text-red-600"
          to="/catalog"
        >
          Catalog
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
