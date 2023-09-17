/** @format */

import React from "react";
import styles from "./CartItem.module.css";
import produtcImg from "../assets/images/image-product-1.jpg";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const CartItem = (props) => {
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);
  const totalPrice = props.discountPrice * totalQuantity;

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
              <span className={styles.discountPrice}>{`$${props.discountPrice}.00`}</span>{" "}
              <span> x </span>
              <span className={styles.totalQuantity}>{totalQuantity}</span>
              <span className={styles.totalPrice}>{`$${totalPrice}.00`}</span>
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
