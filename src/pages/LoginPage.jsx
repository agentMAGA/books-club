import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../scss/pages/loginPage.module.scss";

const LoginPage = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <NavLink to= "/">
      <img src="img/logo.svg" alt="logo" />
      </NavLink>
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

    <NavLink to="/singup" className={styles.registerLink}>
      Зарегистрироваться
    </NavLink>
  </div>
);

export default LoginPage;
