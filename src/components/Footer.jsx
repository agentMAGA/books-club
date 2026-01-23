import styles from "../scss/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logoText} src="img/logo-text.svg" alt="logo-text" />
      <img src="img/logo.svg" alt="icon"/>
    </footer>
  );
};

export default Footer;
