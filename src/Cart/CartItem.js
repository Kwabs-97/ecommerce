/** @format */

import React from "react";
import styles from "./CartItem.module.css";
import produtcImg from "../assets/images/image-product-1.jpg";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartItem = (props) => {
  return (
    <div>
      <div className={styles.cartContainer}>
        <header>
          <span>Cart</span>
        </header>
        <main>
          <img src={produtcImg} alt="productIMG" />

          <div className={styles.productDetails}>
            <div>
              <span>{props.name}</span>
            </div>
            <div className={styles.price}>
              <span>{`$${props.price}.00`}</span> x <span>quantity</span>
              <span>totalPrice</span>
            </div>
          </div>
          <div>
            <RiDeleteBin5Line className={styles.cartIcon} />
          </div>
        </main>
        <div className={styles.checkout}>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
