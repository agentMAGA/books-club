import React from "react";
import styles from "../scss/pages/singUp.module.scss";

const SingUp = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src="img/back.svg" alt="back" />
        </header>

        <div className={styles.logo}>
          <img src="/img/logo.svg" alt="Logo" />
          <h1 className={styles.title}>
            Анкета <br />
            <span>для регистрации</span>
          </h1>
        </div>

        <div className={styles.progress}>
          <span className={styles.progressTitle}>Основная информация</span>
          <div className={styles.progressBar}>
            <div className={styles.progressStep + " " + styles.active}></div>
            <div className={styles.progressStep}></div>
            <div className={styles.progressStep}></div>
            <div className={styles.progressStep}></div>
            <div className={styles.progressStep}></div>
            <div className={styles.progressStep}></div>
          </div>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="ФИО" className={styles.input} />
          <input
            type="date"
            placeholder="Дата рождения"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Город проживания"
            className={styles.input}
          />

          <button type="submit" className={styles.submitButton}>
            Далее
          </button>
        </form>
      </div>
    </>
  );
};

export default SingUp;
