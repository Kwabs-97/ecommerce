/** @format */

import React, { useEffect, useState } from "react";
import styles from "../Styles/Home.module.css";
import mainItem from "../assets/images/image-product-1.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Carousel from "../Components/Carousel";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  const price = 250.0;
  const discount = 50;

  useEffect(() => {
    setDiscountPrice(price - (price * discount) / 100);
    console.log(discountPrice);
  });

  function decrementCounter() {
    setCounter((prevCounter) => prevCounter > 0 && prevCounter - 1);
  }

  function incrementCounter() {
    setCounter((nextCounter) => (nextCounter += 1));
  }
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <Carousel />
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
            <div className={styles.price}>
              <h1>{`$${discountPrice}.00`}</h1>
              <h4>{`${discount}%`}</h4>
            </div>
            <h5>{`$ ${price}`}</h5>
          </div>

          <section className={styles.counterContainer}>
            <div className={styles.counter}>
              <button onClick={decrementCounter}>-</button>
              <span>{counter}</span>
              <button onClick={incrementCounter}>+</button>
            </div>
            <div className={styles.addToCart}>
              <button>
                <ShoppingCartOutlinedIcon className={styles.cartIcon} /> <span>Add to cart</span>
              </button>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default Home;
