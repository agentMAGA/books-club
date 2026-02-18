import styles from "../../scss/components/a/adminHeader.module.scss";
import { useTheme } from "../../store/useTheme";

const AdminHeader = ({ activeTab, setActiveTab }) => {
  const { theme } = useTheme();

  return (
    <nav
      className={`${styles.header} ${
        theme !== "black" ? styles.headerLight : ""
      }`}
    >
      <ul className={styles.tabs}>
        <li
          className={`${styles.tab} ${
            activeTab === "posts" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("posts")}
        >
          Стихи
        </li>

        <li
          className={`${styles.tab} ${
            activeTab === "events" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("events")}
        >
          Мероприятия
        </li>

        <li
          className={`${styles.tab} ${
            activeTab === "users" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("users")}
        >
          Пользователи
        </li>
      </ul>
    </nav>
  );
};

export default AdminHeader;
