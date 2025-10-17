import React, { useState } from "react";
import styles from "../scss/components/header.module.scss";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Link to = "/"><img className={styles.headerIcon} src="img/logo.svg" alt="icon" /></Link>
        <Link to = "/"><img className={styles.title} src="img/logo-text.svg" alt="logo-text" /></Link>
        <img
          className={styles.burgerMenu}
          src="img/burger-menu.svg"
          alt="menu"
          onClick={openMenu}
        />
      </header>

      {menuOpen && <BurgerMenu closeMenu={closeMenu} />}
    </>
  );
};

export default Header;
