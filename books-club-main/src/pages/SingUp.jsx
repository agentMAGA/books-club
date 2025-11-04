import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../scss/pages/singUp.module.scss";

export default function SingUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0..4

  const [formData, setFormData] = useState({
    // Шаг 1
    fullName: "",
    birthDate: "",
    city: "",
    // Шаг 2
    email: "",
    phone: "",
    telegram: "",
    instagram: "",
    // Шаг 3
    workplace: "",
    position: "",
    course: "",
    class: "",
    // Шаг 4
    nationality: "",
    skills: "",
    interests: "",
    // Шаг 5
    favoriteMedia: "",
    favoriteGenres: "",
  });

  const titles = [
    "Основная информация",
    "Контакты для связи",
    "Род деятельности",
    "О себе",
    "Интересы и медиа",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateStep = (currentStep) => {
    switch (currentStep) {
      case 0:
        return formData.fullName.trim() !== "" && formData.birthDate !== "";
      case 1:
        return formData.email.trim() !== "" && formData.phone.trim() !== "";
      case 2:
        return formData.workplace.trim() !== "";
      case 3:
        return formData.nationality.trim() !== "";
      case 4:
        return true; // Последний шаг не обязателен
      default:
        return true;
    }
  };

  const next = () => {
    if (validateStep(step)) {
      if (step < 4) {
        setStep((s) => s + 1);
      } else {
        handleSubmit();
      }
    } else {
      alert("Пожалуйста, заполните все обязательные поля");
    }
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    // Здесь можно добавить отправку на сервер
    console.log("Данные регистрации:", formData);

    // Показываем сообщение об успехе
    alert("Регистрация успешно завершена! Добро пожаловать в Books Club!");

    // Перенаправляем на главную страницу
    navigate("/");
  };

  return (
    <div className={styles.container}>
      {/* Верхняя панель с системной кнопкой назад */}
      <header className={styles.header}>
        {step === 0 ? (
          <NavLink to="/login" className={styles.backBtn}>
            <img src="img/back.svg" alt="Назад" />
          </NavLink>
        ) : (
          <button type="button" className={styles.backBtn} onClick={back} aria-label="Назад">
            <img src="img/back.svg" alt="Назад" />
          </button>
        )}
      </header>

      {/* Прокручиваемая область контента */}
      <div className={styles.contentScroll}>
        <div className={styles.logo}>
          <NavLink to="/"><img src="img/logo.svg" alt="Logo" /></NavLink>
          <h1 className={styles.title}>
            Анкета <br />
            <span>для регистрации</span>
          </h1>
        </div>

        {/* Степпер */}
        <div className={styles.progress}>
          <span className={styles.progressTitle}>{titles[step]}</span>
          <div className={styles.progressBar}>
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`${styles.progressStep} ${i <= step ? styles.active : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Шаги (только поля, без кнопок) */}
        <div className={styles.steps}>
          {/* Шаг 1 */}
          <form 
            className={`${styles.form} ${step === 0 ? styles.isActive : ""}`}
            onSubmit={(e) => { e.preventDefault(); next(); }}
          >
            <input
              type="text"
              placeholder="ФИО *"
              className={styles.input}
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Дата рождения *"
              className={styles.input}
              value={formData.birthDate}
              onChange={(e) => handleInputChange("birthDate", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Город проживания"
              className={styles.input}
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
          </form>

          {/* Шаг 2 */}
          <form
            className={`${styles.form} ${step === 1 ? styles.isActive : ""}`}
            onSubmit={(e) => { e.preventDefault(); next(); }}
          >
            <input
              type="email"
              placeholder="E-mail *"
              className={styles.input}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Телефон (WhatsApp) *"
              className={styles.input}
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Telegram"
              className={styles.input}
              value={formData.telegram}
              onChange={(e) => handleInputChange("telegram", e.target.value)}
            />
            <input
              type="text"
              placeholder="Instagram (при наличии)"
              className={styles.input}
              value={formData.instagram}
              onChange={(e) => handleInputChange("instagram", e.target.value)}
            />
          </form>

          {/* Шаг 3 */}
          <form
            className={`${styles.form} ${step === 2 ? styles.isActive : ""}`}
            onSubmit={(e) => { e.preventDefault(); next(); }}
          >
            <input
              type="text"
              placeholder="Место работы / Учебное заведение *"
              className={styles.input}
              value={formData.workplace}
              onChange={(e) => handleInputChange("workplace", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Должность / Специальность"
              className={styles.input}
              value={formData.position}
              onChange={(e) => handleInputChange("position", e.target.value)}
            />
            <input
              type="text"
              placeholder="Курс и форма обучения (если студент)"
              className={styles.input}
              value={formData.course}
              onChange={(e) => handleInputChange("course", e.target.value)}
            />
            <input
              type="text"
              placeholder="Класс (если школа)"
              className={styles.input}
              value={formData.class}
              onChange={(e) => handleInputChange("class", e.target.value)}
            />
          </form>

          {/* Шаг 4 — О себе */}
          <form
            className={`${styles.form} ${step === 3 ? styles.isActive : ""}`}
            onSubmit={(e) => { e.preventDefault(); next(); }}
          >
            <input
              type="text"
              placeholder="Национальность *"
              className={styles.input}
              value={formData.nationality}
              onChange={(e) => handleInputChange("nationality", e.target.value)}
              required
            />
            <textarea
              placeholder="Ключевые навыки и сильные стороны (без скромности)"
              className={styles.textarea}
              rows={3}
              value={formData.skills}
              onChange={(e) => handleInputChange("skills", e.target.value)}
            />
            <textarea
              placeholder="Интересы и увлечения"
              className={styles.textarea}
              rows={3}
              value={formData.interests}
              onChange={(e) => handleInputChange("interests", e.target.value)}
            />
          </form>

          {/* Шаг 5 — Интересы/медиа */}
          <form
            className={`${styles.form} ${step === 4 ? styles.isActive : ""}`}
            onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}
          >
            <textarea
              placeholder="Любимые книги, фильмы, сериалы (можно кратко пояснить выбор)"
              className={styles.textarea}
              rows={3}
              value={formData.favoriteMedia}
              onChange={(e) => handleInputChange("favoriteMedia", e.target.value)}
            />
            <textarea
              placeholder="Любимые жанры и почему именно они"
              className={styles.textarea}
              rows={3}
              value={formData.favoriteGenres}
              onChange={(e) => handleInputChange("favoriteGenres", e.target.value)}
            />
          </form>
        </div>
      </div>

      {/* Футер с кнопками — всегда у нижнего края, всегда вертикально */}
      <div className={styles.footerActions}>
        <button
          type="button"
          className={styles.submitButton}
          onClick={next}
        >
          {step === 4 ? "Зарегистрироваться" : "Далее"}
        </button>

        <button
          type="button"
          className={styles.secondaryButton}
          onClick={back}
          disabled={step === 0}
        >
          Назад
        </button>
      </div>
    </div>
  );
}