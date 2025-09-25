import React from "react";
import styles from "../scss/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Arête</span>
      <img src="img/header-footer-icon.svg" alt="icon" />
    </footer>
  );
};

export default Footer;
