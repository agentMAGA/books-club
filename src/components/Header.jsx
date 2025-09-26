import React, { useState } from "react";
import styles from "../scss/components/header.module.scss";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <img className={styles.headerIcon} src="img/logo.svg" alt="icon" />
        <h2 className={styles.title}>Arête</h2>
        <img
          className={styles.burgerMenu}
          src="img/burger-menu.svg"
          alt="menu"
          onClick={toggleMenu}
        />
      </header>

      {menuOpen && <BurgerMenu closeMenu={closeMenu} />}
    </>
  );
};

export default Header;
