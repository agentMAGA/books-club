import React from "react";
import styles from "../scss/components/header.module.scss";

const Header = () => {
    return (
      <header>
        <img className={styles.headerIcon} src="img/header-footer-icon.svg" alt="icon" />
        <h2>Arete</h2>
        <img className={styles.burgerMenu} src="img/burger-menu.svg" alt="menu"/>
      </header>
    );
};

export default Header;