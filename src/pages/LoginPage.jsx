import React from "react";
import styles from "../scss/pages/loginPage.module.scss";

const LoginPage = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img src="img/logo.svg" alt="logo" />
      <h1 className={styles.logoText}>Arête</h1>
    </div>

    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Логин" />
      <input className={styles.input} type="password" placeholder="Пароль" />

      <a href="#" className={styles.forgotLink}>
        Забыли пароль?
      </a>

      <button type="submit" className={styles.submitButton}>
        Войти
      </button>
    </form>

    <a href="#" className={styles.registerLink}>
      Зарегистрироваться
    </a>
  </div>
);

export default LoginPage;
