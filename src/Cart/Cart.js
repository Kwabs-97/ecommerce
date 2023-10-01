/** @format */

import { productsData } from "../Data/Products";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
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
 
    </Modal>
  );
};

export default Cart;
