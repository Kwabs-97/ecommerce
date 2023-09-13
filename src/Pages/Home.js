/** @format */

import React from "react";
import styles from "../Styles/Home.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.img}></div>
          <section className={styles.subImg}></section>
        </div>
        <aside className={styles.description}></aside>
      </div>
    </main>
  );
};

export default Home;
