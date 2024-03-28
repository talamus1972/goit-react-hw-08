import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { clsx } from "clsx";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AuthNav() {
  return (
    <nav className={css.nav}>
      <NavLink to="/login" className={makeLinkClass}>
        Log in
      </NavLink>
      <NavLink to="/register" className={makeLinkClass}>
        Register
      </NavLink>
    </nav>
  );
}
