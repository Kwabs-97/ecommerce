/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

      <div className={styles.addToCart}>
        <button onClick={addToCartHandler}>
          <ShoppingCartOutlinedIcon className={styles.cartIcon} /> <span>Add to cart </span>
        </button>
      </div>
    </aside>
  );
};

export default ProductItem;
