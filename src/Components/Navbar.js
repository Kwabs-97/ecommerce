/** @format */

import React from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navItemsContainer}>
        <div className={styles.hamburger}>
          <MenuSharpIcon />
          <h4>sneakers</h4>
        </div>
        <div className={styles.cart}>
          <ShoppingCartOutlinedIcon />
                  <div className={styles.profile}>
                      img
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
