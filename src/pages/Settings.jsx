import { useEffect, useState } from "react";
import styles from "../scss/pages/settings.module.scss";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useTheme } from "../store/useTheme";
import { useApi } from "../hooks/useApi";
import { useAuthStore } from "../store/authStore";
import Header from "../components/Header";

const Settings = () => {
  const { theme } = useTheme();
  const { apiCall } = useApi();

  const user = useAuthStore((s) => s.user);
  const token = useAuthStore((s) => s.token);
  const setToken = useAuthStore((s) => s.setToken);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [saving, setSaving] = useState(false);

  const [initialUser, setInitialUser] = useState(null);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");

      // 🔥 сохраняем «оригинал»
      setInitialUser({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
      });
    }
  }, [user]);

  const isDirty =
    initialUser &&
    (firstName !== initialUser.firstName || lastName !== initialUser.lastName);

  const saveProfile = async () => {
    console.log("saveProfile called");

    if (!user) {
      console.log("NO USER");
      return;
    }

    if (saving) {
      console.log("ALREADY SAVING");
      return;
    }

    try {
      setSaving(true);

      console.log("REQUEST DATA", {
        url: `/users/${user.id}/change`,
        body: { firstName, lastName },
        token,
      });

      await apiCall(`/users/${user.id}/change`, {
        method: "PUT",
        body: JSON.stringify({ firstName, lastName }),
      });

      setToken(token, {
        ...user,
        firstName,
        lastName,
      });

      // 🔥 считаем изменения сохранёнными
      setInitialUser({
        firstName,
        lastName,
      });
    } catch (err) {
      console.error("SAVE ERROR", err);
      alert(err.message || "Ошибка запроса");
    } finally {
      setSaving(false);
    }
  };

  return (
<>
<Header></Header>
  <div
    className={
      theme === "black"
        ? styles.main
        : `${styles.main} ${styles.mainColor}`
    }
  >
    <div className={styles.page}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <Link to="/" className={styles.back}>
          <img
            src={theme === "black" ? "img/back.svg" : "img/backBleack.svg"}
            alt="back"
          />
        </Link>

        <h1 className={styles.pageTitle}>Настройки</h1>
      </div>

      {/* AVATAR */}
      <div className={styles.avatar}>
        <img className={styles.avatarImg} src="img/avatar.jpg" alt="avatar" />
        <img
          className={styles.editAvatar}
          src="img/edit-avatar.svg"
          alt="edit"
        />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Основная информация</h2>

          <input
            className={styles.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Имя"
          />

          <input
            className={styles.input}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Фамилия"
          />
        </section>

        {isDirty && (
          <button
            className={styles.saveBtn}
            onClick={saveProfile}
            disabled={saving}
          >
            {saving ? "Сохранение..." : "Сохранить изменения"}
          </button>
        )}
      </div>
    </div>
  </div>

  <Footer />
</>

  );
};

export default Settings;
