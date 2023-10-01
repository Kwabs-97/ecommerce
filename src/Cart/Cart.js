/** @format */

import { productsData } from "../Data/Products";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);
  const totalPrice = props.discountPrice * totalQuantity;
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
        <button>Checkout {`$${totalPrice}`}</button>
      </div>
    </Modal>
  );
};

export default Cart;
