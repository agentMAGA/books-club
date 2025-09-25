import React from "react";
import styles from "../scss/components/search.module.scss";

const Search = () => {
  return (
    <>
      <input type="text" className={styles.searchInput} placeholder="Поиск" />
      <button className={styles.searchButton}>
        <img src="img/search-icon.svg" alt="search" />
      </button>
    </>
  );
};

export default Search;
