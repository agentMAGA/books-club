import { useState } from "react";
import { NavLink , Link} from "react-router-dom";
import styles from "../scss/components/header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {setMenuOpen(!menuOpen)};

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.headerIcon}>
          <img src="img/logo.svg" alt="icon" />
          <img src="img/logo-text.svg" alt="logo-text" />
        </NavLink>
        <img src="img/logo-text.svg" alt="logo-text" />
        <img
          className={styles.burgerMenu}
          src="img/burger-menu.svg"
          alt="menu"
          onClick={openMenu}
        />
      </header>

    </>
  );
};

export default Header;