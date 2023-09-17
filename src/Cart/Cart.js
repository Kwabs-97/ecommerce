/** @format */

import React from "react";
import { productsData } from "../Data/Products";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cartCont}>
      {productsData.map((product) => (
        <CartItem
          key={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          discountPrice={product.discountPrice}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default Cart;
