import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useTheme } from "../store/useTheme"; // ✅
import apiCall from "../API/apiClient";
import styles from "../scss/pages/registerPage.module.scss";

const RegisterPage = () => {
  const { theme } = useTheme(); // ✅

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    if (formData.password.length < 8) {
      setError("Пароль должен содержать минимум 8 символов");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const data = await apiCall("/auth/registration", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setToken(data.token, data.user);
      navigate("/");
    } catch (err) {
      setError(err.message || "Ошибка регистрации");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={
        theme === "black"
          ? styles.container
          : `${styles.container} ${styles.containerColor}` // ✅
      }
    >
      <header className={styles.header}>
        <NavLink to="/">
          <img src={theme === "black" ? "/img/back.svg" : "/img/backBleack.svg"} alt="back" className={styles.backIcon} />
        </NavLink>
      </header>

      <div className={styles.logo}>
        <NavLink to="/">
          <img
            src={theme === "black" ? "/img/logo.svg" : "/img/logo-bleack.svg"} // ✅
            alt="logo"
          />
        </NavLink>
        <h1 className={styles.logoText}>Arête</h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="Имя"
          value={formData.firstName}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="lastName"
          placeholder="Фамилия"
          value={formData.lastName}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Подтвердите пароль"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={styles.input}
        />

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </form>

      {error && <div className={styles.error}>{error}</div>}

      <NavLink to="/login" className={styles.loginLink}>
        Войти в аккаунт
      </NavLink>
    </div>
  );
};

export default RegisterPage;
