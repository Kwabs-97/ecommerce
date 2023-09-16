/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../Styles/Home.module.css";
import Carousel from "../Components/Carousel";
import ProductItem from "../Components/ProductItem";

import { productsData } from "../Data/Products";
import Cart from "../Cart/Cart";

const Home = (props) => {
  const [counter, setCounter] = useState(0);

  const showcart = useSelector((state) => state.uiReducer.cartIsVisible);

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        {showcart && <Cart />}

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
