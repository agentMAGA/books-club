import { useEffect, useState, useCallback } from "react";
import styles from "../../scss/components/admin/adminSection.module.scss";
import { useTheme } from "../../store/useTheme";
import { useApi } from "../../hooks/useApi";

const AdminEventsSection = () => {
  const { apiCall } = useApi();
  const { theme } = useTheme();

  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [createForm, setCreateForm] = useState({
    title: "",
    description: "",
    plannedAt: "",
  });

  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    plannedAt: "",
  });

  const fetchEvents = useCallback(async () => {
    const data = await apiCall("/events");
    setEvents(data);
  }, [apiCall]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const createEvent = async (e) => {
    e.preventDefault();
    if (!createForm.title || !createForm.plannedAt) return;

    await apiCall("/events", {
      method: "POST",
      body: JSON.stringify(createForm),
    });

    setCreateForm({ title: "", description: "", plannedAt: "" });
    fetchEvents();
  };

  const startEdit = (event) => {
    setEditingId(event.id);
    setEditForm({
      title: event.title,
      description: event.description,
      plannedAt: event.plannedAt.slice(0, 16),
    });
  };

  const saveEdit = async (id) => {
    await apiCall(`/events/${id}/change`, {
      method: "PUT",
      body: JSON.stringify(editForm),
    });

    setEditingId(null);
    setEditForm({ title: "", description: "", plannedAt: "" });
    fetchEvents();
  };

  const deleteEvent = async (id) => {
    if (!window.confirm("Удалить мероприятие?")) return;

    await apiCall(`/events/${id}/del`, { method: "DELETE" });
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Мероприятия</h2>

      {/* СОЗДАНИЕ */}
      <form
        className={`${styles.createForm} ${
          theme !== "black" ? styles.cardLight : ""
        }`}
        onSubmit={createEvent}
      >
        <input
          className={styles.input}
          placeholder="Название"
          value={createForm.title}
          onChange={(e) =>
            setCreateForm({ ...createForm, title: e.target.value })
          }
        />
        <textarea
          className={styles.textarea}
          placeholder="Описание"
          value={createForm.description}
          onChange={(e) =>
            setCreateForm({ ...createForm, description: e.target.value })
          }
        />
        <input
          className={styles.input}
          type="datetime-local"
          value={createForm.plannedAt}
          onChange={(e) =>
            setCreateForm({ ...createForm, plannedAt: e.target.value })
          }
        />
        <button className={styles.btn}>Создать</button>
      </form>

      <div className={styles.list}>
        {events.map((event) => {
          const isEdit = editingId === event.id;

          return (
            <div
              key={event.id}
              className={`${styles.card} ${
                theme !== "black" ? styles.cardLight : ""
              }`}
            >
              <div className={styles.info}>
                {isEdit ? (
                  <>
                    <input
                      className={styles.input}
                      value={editForm.title}
                      onChange={(e) =>
                        setEditForm({ ...editForm, title: e.target.value })
                      }
                    />
                    <textarea
                      className={styles.textarea}
                      value={editForm.description}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          description: e.target.value,
                        })
                      }
                    />
                    <input
                      className={styles.input}
                      type="datetime-local"
                      value={editForm.plannedAt}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          plannedAt: e.target.value,
                        })
                      }
                    />
                  </>
                ) : (
                  <>
                    <strong>{event.title}</strong>
                    <span className={styles.subtitle}>
                      {new Date(event.plannedAt).toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              <div className={styles.actions}>
                {isEdit ? (
                  <>
                    <button
                      type="button"
                      className={styles.btn}
                      onClick={() => saveEdit(event.id)}
                    >
                      Сохранить
                    </button>
                    <button
                      type="button"
                      className={styles.btn}
                      onClick={() => setEditingId(null)}
                    >
                      Отмена
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={styles.btn}
                      onClick={() => startEdit(event)}
                    >
                      Редактировать
                    </button>
                    <button
                      type="button"
                      className={`${styles.btn} ${styles.btnDanger}`}
                      onClick={() => deleteEvent(event.id)}
                    >
                      Удалить
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdminEventsSection;
