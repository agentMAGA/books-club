import React from "react";
import PoemCard from "../components/PoemCard";
import styles from "../scss/pages/newspaper.module.scss";
import Search from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Newspaper = () => {
  return (
    <>
        <Header />

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

      <Footer />
    </>
  );
};

export default Newspaper;
