/** @format */
import React from "react";
import { createContext, useState } from "react";

import { productsData } from "../Data/Products";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < productsData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((previousState) => ({ ...previousState, [itemId]: previousState[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((previousState) => ({ ...previousState, [itemId]: previousState[itemId] - 1 }));
  };

    console.log(cartItems)
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
