/** @format */

import React, { useState } from "react";
import styles from "./CartItem.module.css";
import produtcImg from "../assets/images/image-product-1.jpg";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartItem = (props) => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);

  const totalPrice = props.discountPrice * totalQuantity;

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

  return (
    <div>
      <div className={styles.cartContainer}>
        <header>
          <span>Cart</span>
        </header>

        <div className={styles.mainContainer}>
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
          <div className={styles.counter}>
            <button onClick={removeItemFromCartHandler}>-</button>
            <span>{totalQuantity}</span>
            <button onClick={addToCartHandler}>+</button>
          </div>
          <div className={styles.checkout}>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
