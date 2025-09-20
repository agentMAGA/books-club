import React from "react";
import styles from "../scss/search.module.scss";

const Search = () => {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Поиск"></input>
      <button>🔍</button>
    </div>
  );
};

export default Search;
