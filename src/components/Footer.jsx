import styles from "../scss/components/footer.module.scss";
import { useTheme } from "../store/useTheme";

const Footer = () => {
  const {theme} = useTheme();
  return (
    <footer className={theme === 'black' ? styles.footer : `${styles.footer} ${styles.footerColor}`}>
      <img src={ theme === 'black' ? "img/logo-text.svg" : "img/logo-text-bleack.svg" } alt="logo-text" />
      <img src={ theme === 'black' ? "img/logo.svg" : "img/logo-bleack.svg" } alt="icon"/>
    </footer>
  );
};

export default Footer;
