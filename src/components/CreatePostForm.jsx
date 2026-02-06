import { useState } from "react";
import { useApi } from "../hooks/useApi";
import styles from "../scss/components/createPostForm.module.scss";


const CreatePostForm = ({ onSuccess }) => {
  const { apiCall } = useApi();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      await apiCall("/posts", {
        method: "POST",
        body: JSON.stringify({ title, description }),
      });

      setTitle("");
      setDescription("");
      onSuccess(); // 🔄 обновить список
    } catch (err) {
      setError(err.message || "Ошибка создания");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <h3 className={styles.title}>Новый стих</h3>

      <input
      className={styles.input}
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
      className={styles.textarea}
        placeholder="Текст стиха"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={10}
        required
      />

      {error && <p className={styles.error} style={{ color: "red" }}>{error}</p>}

      <button className={styles.button} disabled={loading}>
        {loading ? "Публикация..." : "Опубликовать"}
      </button>
    </form>
  );
};

export default CreatePostForm;
