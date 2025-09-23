import React from "react";
import styles from "../scss/pages/liveSessions.module.scss";
import Search from "../components/Search";

const LiveSessions = () => {
    return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Газета</h1>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.cards}>
        </div>
      </div>
    </>
    );
};

export default LiveSessions;