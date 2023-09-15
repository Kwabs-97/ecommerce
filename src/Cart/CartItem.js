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
          <div className={styles.img}>
            <img src={produtcImg} alt="productIMG" />
          </div>
          <div>
            <div>
              <span>{props.name}</span>
            </div>
            <div>
              <span>price</span> x<span>quantity</span>
              <span>totalPrice</span>
            </div>
          </div>
          <div>
            <RiDeleteBin5Line />
          </div>
        </main>
        <div className={styles.checkout}>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
