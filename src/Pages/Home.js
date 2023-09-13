/** @format */

import React from "react";
import styles from "../Styles/Home.module.css";
import mainItem from "../assets/images/image-product-1.jpg";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.img}>
            <img src={mainItem} alt="mainItemImg" />
            <div className={styles.iconsContainer}>
              <button className={styles.icon}>
                <GrFormPrevious />
              </button>
              <button className={styles.icon}>
                <GrFormNext />
              </button>
            </div>
          </div>
          <section className={styles.subImg}></section>
        </div>
        <aside className={styles.description}>
          <h4>Sneaker Company</h4>
          <h1>
            Fall Limited <br /> Edition
          </h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable
            rubber outer sole, they'll withstand everything the weather has to offer.
          </p>

          <div className={styles.priceContainer}>
            <div>
              <h1>$125</h1>
              <h5>50%</h5>
            </div>
            <h3>$250.00</h3>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Home;
