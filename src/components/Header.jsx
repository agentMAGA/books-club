import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styles from "../scss/components/header.module.scss";
import BurgerMenu from "./BurgerMenu";
import { useTheme } from "../store/useTheme";
import { useAuthStore } from "../store/authStore";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const isAdmin = user?.roles?.some(r => r.name === "ROLE_RED");

  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {menuOpen && <BurgerMenu closeMenu={closeMenu} />}

      <header className={styles.header}>
        {/* LOGO */}
        <NavLink to="/" className={styles.headerIcon}>
          <img
            src={theme === "black" ? "img/logo.svg" : "img/logo-bleack.svg"}
            alt="logo"
          />
          <img
            src={
              theme === "black"
                ? "img/logo-text.svg"
                : "img/logo-text-bleack.svg"
            }
            alt="logo-text"
          />
        </NavLink>

        {/* BURGER */}
        <img
          className={styles.burgerMenu}
          src={
            theme === "black"
              ? "img/burger-menu.svg"
              : "img/burger-menu-bleack.jpg"
          }
          alt="menu"
          onClick={openMenu}
        />

        {/* NAVIGATION (ТОЛЬКО ССЫЛКИ) */}
        <nav
          className={
            theme === "black"
              ? styles.desktopMenu
              : `${styles.desktopMenu} ${styles.desktopMenuColor}`
          }
        >
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
            ГЛАВНАЯ
          </NavLink>

          <NavLink to="/happenings" className={({ isActive }) => (isActive ? styles.active : "")}>
            МЕРОПРИЯТИЯ
          </NavLink>

          <NavLink to="/newspaper" className={({ isActive }) => (isActive ? styles.active : "")}>
            ГАЗЕТА
          </NavLink>

          <NavLink to="/rating" className={({ isActive }) => (isActive ? styles.active : "")}>
            РЕЙТИНГ
          </NavLink>

          {isAuthenticated && (
            <NavLink to="/settings" className={({ isActive }) => (isActive ? styles.active : "")}>
              НАСТРОЙКИ
            </NavLink>
          )}

          {isAdmin && (
            <NavLink to="/admin" className={({ isActive }) => (isActive ? styles.active : "")}>
              АДМИН
            </NavLink>
          )}
        </nav>

        {/* ACTIONS (ПРАВАЯ ЧАСТЬ) */}
        <div className={styles.actions}>
          {/* ТЕМА */}
          <div
            className={
              theme === "black"
                ? `${styles.divChick} ${styles.divcolor}`
                : styles.divChick
            }
            onClick={toggleTheme}
          >
            <img
              src={theme === "black" ? "img/logo-bleack.svg" : "img/logo.svg"}
              alt="theme"
            />
          </div>

          {/* AUTH */}
          {isAuthenticated ? (
  <>
    <span className={styles.userName}>
      {user?.firstName}
    </span>

    {/* 🔧 ВРЕМЕННАЯ КНОПКА АДМИНКИ */}
    <Link to="/admin" className={styles.adminTemp}>
      АДМИН
    </Link>

    <span className={styles.logoutLink} onClick={handleLogout}>
      ВЫЙТИ
    </span>
  </>
          ) : (
            <Link
              to="/login"
              className={
                theme === "black"
                  ? styles.loginButton
                  : `${styles.loginButton} ${styles.loginButtonColor}`
              }
            >
              ВОЙТИ
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
