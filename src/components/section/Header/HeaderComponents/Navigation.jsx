import { NavLink } from "react-router-dom";
import clsx from "clsx";

import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.activeLink);
};

const Navigation = () => {
  return (
    <nav className="flex  gap-8">
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
