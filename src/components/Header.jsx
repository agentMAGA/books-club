import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/">
        <img className={styles.headerIcon} src="img/logo.svg" alt="icon" />
        </NavLink>
        <h2 className={styles.title}>Arête</h2>
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
