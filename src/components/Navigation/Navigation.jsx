import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { clsx } from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
<NavLink to="/contacts" className={makeLinkClass}>
        Contacts
      </NavLink>
      )}
      
    </nav>
  );
}
