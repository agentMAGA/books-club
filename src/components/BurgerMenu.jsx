import React from "react";
import styles from "../scss/components/burgerMenu.module.scss";

const BurgerMenu = ({ closeMenu }) => {
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.closeButton} onClick={closeMenu}>
        <img src="img/closeMenu.svg" alt="close" />
      </div>

      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img className={styles.avatarImg} src="img/avatar.jpg" alt="avatar" />
        </div>
        <div className={styles.name}>Иван Иванов</div>
      </div>

      <nav className={styles.menu}>
        <li className={styles.menuItem + " " + styles.active}>Главная</li>
        <li className={styles.menuItem}>Мероприятия</li>
        <li className={styles.menuItem}>Статьи</li>
        <li className={styles.menuItem}>Рейтинг</li>
        <li className={styles.menuItem}>Настройки</li>
        <li className={styles.menuItem + " " + styles.exit}>
          Выйти <span className={styles.exitIcon}>⎋</span>
        </li>
      </nav>
    </div>
  );
};

export default BurgerMenu;
