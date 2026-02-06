import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import CreatePostForm from "../components/CreatePostForm";
import styles from "../scss/pages/newspaper.module.scss";
import stylesPoem from "../scss/components/poemCard.module.scss";
import { useTheme } from "../store/useTheme";
import { useApi } from "../hooks/useApi";

const Newspaper = () => {
  const { theme } = useTheme();
  const { apiCall } = useApi();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await apiCall("/posts");
      setPosts(data);
    } catch (err) {
      setError(err.message || "Ошибка загрузки стихов");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Header />

      <div
        className={
          theme === "black"
            ? styles.container
            : `${styles.container} ${styles.containerColor}`
        }
      >
        <h1 className={styles.title}>Газета</h1>

        <Search />

        {/* ФОРМА СОЗДАНИЯ */}
        

        {loading && <p style={{ textAlign: "center" }}>Загрузка...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div
          className={styles.cards}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className={
                theme === "black"
                  ? stylesPoem.card
                  : `${stylesPoem.card} ${stylesPoem.cardColor}`
              }
            >
              <div className={stylesPoem.cardHeader}>
                <span className={stylesPoem.cardType}>Стих</span>
                <span className={stylesPoem.cardAuthor}>
                  {post.author.firstName} {post.author.lastName}
                </span>
              </div>

              <div className={stylesPoem.cardBody}>
                <div className={stylesPoem.titleLine}>{post.title}</div>
                <pre className={stylesPoem.cardContent}>
                  {post.description}
                </pre>
              </div>

              <div className={stylesPoem.cardFooter}>
                <span className={stylesPoem.date}>
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Newspaper;
