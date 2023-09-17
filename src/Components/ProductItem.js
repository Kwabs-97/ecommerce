/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "../Styles/ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        name: props.name,
        description: props.description,
        price: props.price,
      })
    );
  };

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  const [counter, setCounter] = useState(0);
  function decrementCounter() {
    setCounter((prevCounter) => prevCounter > 0 && prevCounter - 1);
  }

  function incrementCounter() {
    setCounter((nextCounter) => (nextCounter += 1));
  }

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
          <button onClick={() => {
            decrementCounter();
            removeItemFromCartHandler()
          }}>-</button>
          <span>{counter}</span>
          <button
            onClick={() => {
              incrementCounter();
              addToCartHandler();
            }}
          >
            +
          </button>
        </div>
        <div className={styles.addToCart}>
          <button onClick={addToCartHandler}>
            <ShoppingCartOutlinedIcon className={styles.cartIcon} /> <span>Add to cart</span>
          </button>
        </div>
      </section>
    </aside>
  );
};

export default ProductItem;
