import React from "react";
import styles from "../scss/components/burgerMenu.module.scss";
import { Link } from "react-router";

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
        <Link to = "/" className={styles.menuItem + " " + styles.active}>Главная</Link>
        <Link to = "/happenings" className={styles.menuItem}>Мероприятия</Link>
        <Link to = "/Newspaper" className={styles.menuItem}>Статьи</Link> {/*Газета*/}
        <li className={styles.menuItem}>Рейтинг</li>
        <Link to = "/settings" className={styles.menuItem}>Настройки</Link>
        <li className={styles.menuItem + " " + styles.exit}>
          Выйти <span className={styles.exitIcon}>⎋</span>
        </li>
      </nav>
    </div>
  );
};

export default BurgerMenu;
