import React from "react";
import PoemCard from "../components/PoemCard";
import styles from "../scss/pages/newspaper.module.scss";
import Search from "../components/Search";

const Newspaper = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Газета</h1>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.cards}>
        <PoemCard />
        <PoemCard />
      </div>
    </div>
  );
};

export default Newspaper;
