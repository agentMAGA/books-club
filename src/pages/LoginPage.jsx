import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import apiCall from "../API/apiClient";
import styles from "../scss/pages/loginPage.module.scss";

const LoginPage = () => {
  const [formData, setFormData] = useState({ 
    username: '',
    password: '' 
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const setToken = useAuthStore(state => state.setToken);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldName = name === 'login' ? 'username' : name;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    if (error) setError('');
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  try {
    const data = await apiCall('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    

    const token = data.token;  // Сервер возвращает token
    const userData = data.user;
    
    console.log('✅ Токен:', token);
    console.log('✅ User:', userData);
    
    setToken(token, userData);
    navigate('/');
  } catch (err) {
    setError(err.message || 'Ошибка входа');
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
        {/* ✅ ИЗМЕНЕНИЕ 4: name="login" для UX, но данные идут как username */}
        <input 
          name="login" 
          type="text" 
          placeholder="Логин"
          value={formData.username}  // UI показывает username
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
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>

      {error && <div className={styles.error}>{error}</div>}
      <NavLink to="/registration" className={styles.registerLink}>
        Зарегистрироваться
      </NavLink>
    </div>
  );
};

export default LoginPage;
