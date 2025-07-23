import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import LogoUrl from "../../assets/Logo.svg";

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/" className={css.link}>
              <img className={css.logoUrl} src={LogoUrl} alt="logo" />
            </NavLink>
          </li>
        </ul>

        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${css.link} ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `${css.link} ${isActive ? "active" : ""}`
              }
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
