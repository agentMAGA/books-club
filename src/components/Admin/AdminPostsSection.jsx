import { useEffect, useState, useCallback } from "react";
import styles from "../../scss/components/admin/adminSection.module.scss";
import { useTheme } from "../../store/useTheme";
import { useApi } from "../../hooks/useApi";

const AdminPostsSection = () => {
  const { apiCall } = useApi();
  const { theme } = useTheme();

  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [createForm, setCreateForm] = useState({
    title: "",
    description: "",
  });

  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
  });

  const fetchPosts = useCallback(async () => {
    const data = await apiCall("/posts");
    setPosts(data);
  }, [apiCall]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const createPost = async (e) => {
    e.preventDefault();
    if (!createForm.title || !createForm.description) return;

    await apiCall("/posts", {
      method: "POST",
      body: JSON.stringify(createForm),
    });

    setCreateForm({ title: "", description: "" });
    fetchPosts();
  };

  const startEdit = (post) => {
    setEditingId(post.id);
    setEditForm({
      title: post.title,
      description: post.description,
    });
  };

  const saveEdit = async (id) => {
    await apiCall(`/posts/${id}/change`, {
      method: "PUT",
      body: JSON.stringify(editForm),
    });

    setEditingId(null);
    setEditForm({ title: "", description: "" });
    fetchPosts();
  };

  const deletePost = async (id) => {
    if (!window.confirm("Удалить стих?")) return;

    await apiCall(`/posts/${id}/del`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Стихи</h2>

      {/* СОЗДАНИЕ */}
      <form
        className={`${styles.createForm} ${
          theme !== "black" ? styles.cardLight : ""
        }`}
        onSubmit={createPost}
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
          placeholder="Текст"
          rows={5}
          value={createForm.description}
          onChange={(e) =>
            setCreateForm({ ...createForm, description: e.target.value })
          }
        />
        <button className={styles.btn}>Создать</button>
      </form>

      <div className={styles.list}>
        {posts.map((post) => {
          const isEdit = editingId === post.id;

          return (
            <div
              key={post.id}
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
                      rows={4}
                      value={editForm.description}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          description: e.target.value,
                        })
                      }
                    />
                  </>
                ) : (
                  <>
                    <strong>{post.title}</strong>
                    <span className={styles.subtitle}>
                      {post.author.firstName} {post.author.lastName}
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
                      onClick={() => saveEdit(post.id)}
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
                      onClick={() => startEdit(post)}
                    >
                      Редактировать
                    </button>
                    <button
                      type="button"
                      className={`${styles.btn} ${styles.btnDanger}`}
                      onClick={() => deletePost(post.id)}
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

export default AdminPostsSection;
