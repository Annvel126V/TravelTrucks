import { Link } from "react-router-dom";
// import clsx from "clsx";
import Logo from "./Logo";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(isActive);
// };

const Navigation = () => {
  return (
    <div>
      <span>
        <Logo />
      </span>
      <nav className="text-black flex items-center hover:text-red active:text-red justify-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </nav>
    </div>
  );
};

export default Navigation;
