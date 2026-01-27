import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import apiCall from "../API/apiClient";
import styles from "../scss/pages/registerPage.module.scss";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ 
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const setToken = useAuthStore(state => state.setToken);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldName = name;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    if (error) setError('');
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // 1. Проверка совпадения паролей
  if (formData.password !== formData.confirmPassword) {
    setError('Пароли не совпадают');
    return;
  }

  // 2. Проверка длины пароля ← ДОБАВИТЬ
  if (formData.password.length < 8) {
    setError('Пароль должен содержать минимум 8 символов');
    return;
  }

    setIsLoading(true);
    setError('');

    try {
      const data = await apiCall('/auth/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        })
      });

      const token = data.token;  // Сервер возвращает token после регистрации
      const userData = data.user;
      
      console.log('✅ Регистрация успешна! Токен:', token);
      console.log('✅ User:', userData);
      
      setToken(token, userData);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Ошибка регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
        <header className={styles.header}>
          <NavLink to="/">
          <img src="img/back.svg" alt="back" />
          </NavLink>
        </header>

      <div className={styles.logo}>
        <NavLink to="/">
          <img src="img/logo.svg" alt="logo" />
        </NavLink>
        <h1 className={styles.logoText}>Arête</h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          name="firstName" 
          type="text" 
          placeholder="Имя"
          value={formData.username}
          onChange={handleChange}
          disabled={isLoading}
          className={styles.input}
          required
        />

        <input 
          name="lastName" 
          type="text" 
          placeholder="Фамилия"
          value={formData.username}
          onChange={handleChange}
          disabled={isLoading}
          className={styles.input}
          required
        />
        
        <input 
          name="email" 
          type="email" 
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className={styles.input}
          required
        />
        
        <input 
          name="password" 
          type="password" 
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          disabled={isLoading}
          className={styles.input}
          required
        />
        
        <input 
          name="confirmPassword" 
          type="password" 
          placeholder="Подтвердите пароль"
          value={formData.confirmPassword}
          onChange={handleChange}
          disabled={isLoading}
          className={styles.input}
          required
        />
        
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
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
