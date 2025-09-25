import React from "react";
import styles from "../scss/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Arête</span>
      <img src="img/logo.svg" alt="icon"/>
    </footer>
  );
};

export default Footer;
