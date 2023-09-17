/** @format */

import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

import avatar from "../assets/images/image-avatar.png";

import { NavLink } from "react-router-dom";

import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  const [istoggled, setIsToggled] = useState(false);
  const dispatch = useDispatch();

  const showcart = useSelector((state) => state.uiReducer.cartIsVisible);

  const cartToggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  const toggleHandler = () => {
    setIsToggled(!istoggled);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navItemsContainer}>
        <div className={styles.hamburger}>
          {!istoggled && <AiOutlineMenu onClick={toggleHandler} className={styles.hamburger} />}

          <h1>sneakers</h1>
        </div>

        <div className={styles.navPC}>
          <NavLink>Collections</NavLink>
          <NavLink>Men</NavLink>
          <NavLink>Women</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartIcon}>
            <AiOutlineShoppingCart className={styles.cartIcon} onClick={cartToggleHandler} />
            <small>3</small>
          </div>

          <div className={styles.profile}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>

      {istoggled && (
        <div className={styles.dropdown}>
          <div className={styles.sidebarBackground}></div>
          <div className={styles.sidebarItems}>
            <AiOutlineClose onClick={toggleHandler} />
            <div className={styles.sidebar}>
              <div className={styles.sidebarLinks}>
                <NavLink>Collections</NavLink>
                <NavLink>Men</NavLink>
                <NavLink>Women</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
