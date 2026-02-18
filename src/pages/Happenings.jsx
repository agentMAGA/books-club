import { useEffect, useState, useMemo, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import styles from "../scss/pages/happenings.module.scss";
import { useTheme } from "../store/useTheme";
import { useApi } from "../hooks/useApi";

const Happenings = () => {
  const { theme } = useTheme();
  const { apiCall } = useApi();

  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const data = await apiCall("/events");
      setEvents(data);
    } catch (err) {
      setError(err.message || "Ошибка загрузки мероприятий");
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  // 🔎 Live фильтрация
  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return events;

    const lower = searchQuery.toLowerCase();

    return events.filter((event) =>
      event.title.toLowerCase().includes(lower) ||
      event.description.toLowerCase().includes(lower)
    );
  }, [events, searchQuery]);

  return (
    <div className={styles.container}>
      <Header />

      <h1 className={styles.titleEvents}>Мероприятия</h1>

      {/* 🔎 Поиск */}
      <Search value={searchQuery} onChange={setSearchQuery} />

      {loading && <p style={{ textAlign: "center" }}>Загрузка...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {!loading && filteredEvents.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Ничего не найдено
        </p>
      )}

      <div
        className={
          theme === "black"
            ? styles.visualBackdrop
            : `${styles.visualBackdrop} ${styles.visualBackdropColor}`
        }
      >
        {filteredEvents.map((event) => {
          const date = new Date(event.plannedAt);

          return (
            <div
              key={event.id}
              className={
                theme === "black"
                  ? styles.subtextOfTheEvent
                  : `${styles.subtextOfTheEvent} ${styles.subtextOfColor}`
              }
            >
              <div className={styles.suvent}>
                <article>
                  <p>
                    <strong className={styles.monstratStyls400}>
                      {event.title}
                    </strong>
                  </p>
                  <p className={styles.monstratStyls300}>
                    {event.description}
                  </p>
                </article>

                <article className={styles.timeRangeDate}>
                  <p className={styles.monstratStyls300}>
                    {date.toLocaleDateString()}{" "}
                    {date.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                  {/* <div className={styles.usersIcon}>
                    <img src="img/usersIcons.svg" alt="usersIcons" />
                    <span className={styles.numberUsers}>
                      {event.participants.length}
                    </span>
                  </div> */}
                </article>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Happenings;
