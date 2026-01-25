import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../scss/components/header.module.scss";
import BurgerMenu from "./BurgerMenu";
import { useTheme } from "../store/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => { setMenuOpen(!menuOpen) };
  const closeMenu = () => { setMenuOpen(false) };

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.headerIcon}>
          <img src={theme === 'black' ? "img/logo.svg" : "img/logo-bleack.svg"} alt="icon" />
          <img src={theme === 'black' ? "img/logo-text.svg" : "img/logo-text-bleack.svg"} alt="logo-text" />
        </NavLink>

        <img className={styles.burgerMenu}
          src={theme === 'black' ? "img/burger-menu.svg" : "public/img/burger-menu-bleack.svg"}
          alt="menu" onClick={openMenu} />
        {menuOpen && <BurgerMenu closeMenu={closeMenu} />}

        <nav className={theme === 'black' ? styles.desktopMenu : `${styles.desktopMenu} ${styles.desktopMenuColor}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>ГЛАВНАЯ</NavLink>
          <NavLink to="/happenings" className={({ isActive }) => (isActive ? styles.active : "")}>МЕРОПРИЯТИЯ</NavLink>
          <NavLink to="/newspaper" className={({ isActive }) => (isActive ? styles.active : "")}>ГАЗЕТА</NavLink>
          <NavLink to="/rating" className={({ isActive }) => (isActive ? styles.active : "")}>РЕЙТИНГ</NavLink>
        </nav>
          <button className={theme === 'black' ? styles.loginButton : `${styles.loginButton} ${styles.loginButtonColor}`}>
            <div 
            className={theme === 'black' ? `${styles.divChick} ${styles.divcolor}` : styles.divChick}
            onClick={() => toggleTheme()} >
              <img src={theme === 'black' ? "img/logo-bleack.svg" : "img/logo.svg"} alt="icon" />
            </div>
            <Link to={'login'}>
              ВОЙТИ
            </Link>
          </button>
        
      </header>

    </>
  );
};

export default Header;