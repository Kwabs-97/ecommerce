/** @format */

import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import avatar from "../assets/images/image-avatar.png";

import { NavLink } from "react-router-dom";

import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  const [istoggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!istoggled);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navItemsContainer}>
        <div className={styles.hamburger}>
          {!istoggled && <AiOutlineMenu onClick={toggleHandler} />}

          <h1>sneakers</h1>
        </div>
        <div className={styles.cart}>
          <ShoppingCartOutlinedIcon />

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
