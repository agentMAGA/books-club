import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import styles from "../scss/components/burgerMenu.module.scss";

const BurgerMenu = ({ closeMenu }) => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate('/login');
  };

  return (
    <aside className={styles.burgerMenu} role="dialog" aria-modal="true">
      <button
        className={styles.closeButton}
        onClick={closeMenu}
        aria-label="Закрыть меню"
      >
        <img src="img/closeMenu.svg" alt="" />
      </button>

      {/* ✅ ДИНАМИЧЕСКИЙ ПРОФИЛЬ */}
      {isAuthenticated ? (
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <img 
              className={styles.avatarImg} 
              src="img/avatar.jpg" 
              alt={`${user?.firstName || ''} ${user?.lastName || ''}`} 
            />
          </div>
          <div className={styles.name}>
            {user?.firstName || user?.username || 'Пользователь'}
          </div>
        </div>
      ) : (
        <div className={styles.profile}>
          <div className={styles.name}>Гость</div>
        </div>
      )}

      <nav className={styles.menu}>
        {/* ✅ ОСНОВНЫЕ ССЫЛКИ — всегда видны */}
        <NavLink
          to="/"
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

        <NavLink
          to="/rating"
          className={({ isActive }) =>
            isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
          }
          onClick={closeMenu}
        >
          Рейтинг
        </NavLink>

        {/* ✅ КОНДИЦИОННАЯ НАВИГАЦИЯ */}
        {isAuthenticated ? (
          <>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
              }
              onClick={closeMenu}
            >
              Настройки
            </NavLink>

            <button
              className={`${styles.menuItem} ${styles.logout}`}
              onClick={handleLogout}
            >
              Выйти
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
              }
              onClick={closeMenu}
            >
              Войти
            </NavLink>

            <NavLink
              to="/registration"
              className={({ isActive }) =>
                isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
              }
              onClick={closeMenu}
            >
              Регистрация
            </NavLink>
          </>
        )}

        {/* ✅ АДМИНКА — только для авторизованных */}
        {isAuthenticated && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
            onClick={closeMenu}
          >
            Админка
          </NavLink>
        )}
      </nav>
    </aside>
  );
};

export default BurgerMenu;
