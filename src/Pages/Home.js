/** @format */

import React, { useEffect, useState } from "react";
import styles from "../Styles/Home.module.css";
import Carousel from "../Components/Carousel";
import ProductItem from "../Components/ProductItem";

import { productsData } from "../Data/Products";

const Home = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <Carousel />
          <section className={styles.subImg}></section>
        </div>

        {productsData.map((product) => (
          <ProductItem
            name={product.name}
            key={product.id}
            price={product.price}
            discount={product.discount}
            discountPrice={product.discountPrice}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
