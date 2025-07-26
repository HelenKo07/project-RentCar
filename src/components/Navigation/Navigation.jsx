import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import LogoUrl from "../../assets/icon/Logo.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={clsx(css.header, isScrolled && css.scrolled)}>
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
