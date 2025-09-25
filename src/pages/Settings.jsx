import React from "react";
import styles from "../scss/pages/settings.module.scss";
import Footer from "../components/Footer";

const Settings = () => {
  return (
    <>
      <div className={styles.main}>
        <header className={styles.header}>
          <img src="img/back.svg" alt="back" />
        </header>
        <div className={styles.title}>
          <h3>Настройки</h3>
        </div>

        {/* Блок с аватаром */}
        <div className={styles.avatar}>
          <img className={styles.avatarImg} src="img/avatar.jpg" alt="avatar" />

          <img
            className={styles.editAvatar}
            src="img/edit-avatar.svg"
            alt="edit"
          />
        </div>

        
        {/* Блок с формой */}

        <form className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles.title}>Основная информация</h2>
            <input className={styles.input} type="text" placeholder="ФИО" />
            <input
              className={styles.input}
              type="date"
              placeholder="Дата рождения"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Город проживания"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.title}>Контакты для связи</h2>
            <input className={styles.input} type="email" placeholder="E-mail" />
            <input
              className={styles.input}
              type="tel"
              placeholder="Телефон (WhatsApp)"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Telegram"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Instagram (при наличии)"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.title}>Род деятельности</h2>
            <input
              className={styles.input}
              type="text"
              placeholder="Место работы / Учебное заведение"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Должность / Специальность"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Курс и форма обучения (если студент)"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Класс (если школа)"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.title}>О себе</h2>
            <input
              className={styles.input}
              type="text"
              placeholder="Национальность"
            />
            <textarea
              className={styles.textarea}
              placeholder="Ключевые навыки и сильные стороны (без скромности)"
            />
            <textarea
              className={styles.textarea}
              placeholder="Интересы и увлечения"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.title}>О себе</h2>
            <textarea
              className={styles.textarea}
              placeholder="Любимые книги, фильмы, сериалы (можно кратко пояснить выбор)"
            />
            <textarea
              className={styles.textarea}
              placeholder="Любимые жанры и почему именно они"
            />
          </section>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Settings;
