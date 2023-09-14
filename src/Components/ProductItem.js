/** @format */

import React, { useEffect, useState } from "react";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "../Styles/ProductItem.module.css";

const ProductItem = (props) => {

  const [counter, setCounter] = useState(0);
  function decrementCounter() {
    setCounter((prevCounter) => prevCounter > 0 && prevCounter - 1);
  }

  function incrementCounter() {
    setCounter((nextCounter) => (nextCounter += 1));
  }

  console.log(props);
  return (
    <aside className={styles.description}>
      <h4>Sneaker Company</h4>
      <h1>{props.name}</h1>
      <p>{props.description}</p>

      <div className={styles.priceContainer}>
        <div className={styles.price}>
          <h1>{`$${props.discountPrice}.00`}</h1>
          <h4>{`${props.discount}%`}</h4>
        </div>
        <h5>{`$${props.price}`}</h5>
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
  );
};

export default ProductItem;
