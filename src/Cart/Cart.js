/** @format */

import { productsData } from "../Data/Products";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";

import { uiActions } from "../store/ui-slice";

const Cart = () => {
  const products = productsData[0];
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);
  const totalPrice = products.discountPrice * totalQuantity;

  const dispatch = useDispatch();

  const hideCart = () => {
    dispatch(uiActions.hideCart());
  };

  return (
    <Modal onClose={hideCart}>
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
      <div className={styles.checkout}>
        {totalPrice > 0 && <button>Checkout {`$${totalPrice}`}</button>}

        <Link onClick={hideCart}>Cancel</Link>
      </div>
    </Modal>
  );
};

export default Cart;
