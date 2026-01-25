import styles from "../scss/components/search.module.scss";
import { useTheme } from "../store/useTheme";

const Search = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === 'black' ? styles.search : `${styles.search } ${styles.searchColor}`}>
      <input type="text" className={styles.searchInput} placeholder="Поиск" />
      <button className={styles.searchButton}>
        <img src={theme === 'black' ? "img/search-Icon.svg" : "img/search-bleack.svg"} alt="search" />
      </button>
    </div>
  );
};

export default Search;