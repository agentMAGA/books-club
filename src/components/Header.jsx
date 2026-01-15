import { useState } from "react";
import { NavLink , Link} from "react-router-dom";
import styles from "../scss/components/header.module.scss";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {setMenuOpen(!menuOpen)};
  const closeMenu = () => {setMenuOpen(false)};

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.headerIcon}>
          <img src="img/logo.svg" alt="icon" />
          <img src="img/logo-text.svg" alt="logo-text" />
        </NavLink>

        <img className={styles.burgerMenu} src="img/burger-menu.svg" alt="menu" onClick={openMenu} />
        {menuOpen && <BurgerMenu closeMenu={closeMenu} />}

        <nav className={styles.desktopMenu}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>ГЛАВНАЯ</NavLink>
        <NavLink to="/happenings" className={({ isActive }) => (isActive ? styles.active : "")}>МЕРОПРИЯТИЯ</NavLink>
        <NavLink to="/newspaper" className={({ isActive }) => (isActive ? styles.active : "")}>ГАЗЕТА</NavLink>
        <NavLink to="/rating" className={({ isActive }) => (isActive ? styles.active : "")}>РЕЙТИНГ</NavLink>
      </nav>
      <Link to={'login'}>
        <button className={styles.loginButton}>ВОЙТИ</button>
      </Link>
      </header>

    </>
  );
};

export default Header;