import styles from "../scss/components/search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.searchInput} placeholder="Поиск" />
      <button className={styles.searchButton}>
        <img src="img/search-Icon.svg" alt="search" />
      </button>
    </div>
  );
};

export default Search;