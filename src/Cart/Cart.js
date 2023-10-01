/** @format */

import { productsData } from "../Data/Products";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = productsData[0];
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);
  const totalPrice = products.discountPrice * totalQuantity;

  return (
    <Modal>
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

        <Link onClick={cartToggleHandler}>Cancel</Link>
      </div>
    </Modal>
  );
};

export default Cart;
