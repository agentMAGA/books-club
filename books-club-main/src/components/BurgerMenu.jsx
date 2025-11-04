import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../scss/components/burgerMenu.module.scss";
import { Link } from "react-router";

const BurgerMenu = ({ closeMenu }) => (
  <aside className={styles.burgerMenu} role="dialog" aria-modal="true">
    <button
      className={styles.closeButton}
      onClick={closeMenu}
      aria-label="Закрыть меню"
    >
      <img src="img/closeMenu.svg" alt="" />
    </button>

    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img className={styles.avatarImg} src="img/avatar.jpg" alt="avatar" />
      </div>
      <div className={styles.name}>Иван Иванов</div>
    </div>

    <nav className={styles.menu}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
        onClick={closeMenu}
      >
        Главная
      </NavLink>

      <NavLink
        to="/newspaper"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
        onClick={closeMenu}
      >
        Газета
      </NavLink>

      <NavLink
        to="/happenings"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
        onClick={closeMenu}
      >
        Мероприятия
      </NavLink>

      {/* <NavLink
        to="/rating"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
        onClick={closeMenu}
      >
        Рейтинг
      </NavLink> */}

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
        onClick={closeMenu}
      >
        Настройки
      </NavLink>

      {/* <NavLink
        to="/singup"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.exit} ${styles.active}`
            : `${styles.menuItem} ${styles.exit}`
        }
        onClick={closeMenu}
      >
        Выйти <span className={styles.exitIcon}>⎋</span>
      </NavLink> */}

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
        onClick={closeMenu}
      >
        Login
      </NavLink>

      <NavLink
        to="/singup"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
        onClick={closeMenu}
      >
        Singup
      </NavLink>
    </nav>
  </aside>
);

export default BurgerMenu;
