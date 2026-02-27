import { useEffect, useState, useCallback, useRef } from "react";
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
  const editTitleRef = useRef(null);

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

  useEffect(() => {
    if (editingId && editTitleRef.current) {
      editTitleRef.current.focus();
    }
  }, [editingId]);

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ title: "", description: "", plannedAt: "" });
  };

  const saveEdit = async (id) => {
    await apiCall(`/events/${id}/change`, {
      method: "PUT",
      body: JSON.stringify(editForm),
    });

    cancelEdit();
    fetchEvents();
  };

  const handleEditKeyDown = (e, id) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      saveEdit(id);
    }

    if (e.key === "Escape") {
      e.preventDefault();
      cancelEdit();
    }
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
          const isEditChanged =
            editForm.title !== event.title ||
            editForm.description !== event.description ||
            editForm.plannedAt !== event.plannedAt.slice(0, 16);
          const canSave = Boolean(editForm.title && editForm.plannedAt && isEditChanged);

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
                      ref={editTitleRef}
                      className={styles.input}
                      value={editForm.title}
                      onKeyDown={(e) => handleEditKeyDown(e, event.id)}
                      onChange={(e) =>
                        setEditForm({ ...editForm, title: e.target.value })
                      }
                    />
                    <textarea
                      className={styles.textarea}
                      rows={8}
                      value={editForm.description}
                      onKeyDown={(e) => handleEditKeyDown(e, event.id)}
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
                      onKeyDown={(e) => handleEditKeyDown(e, event.id)}
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
                      disabled={!canSave}
                      onClick={() => saveEdit(event.id)}
                    >
                      Сохранить
                    </button>
                    <button
                      type="button"
                      className={styles.btn}
                      onClick={cancelEdit}
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
