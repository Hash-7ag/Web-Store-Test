import React from "react";
import styles from "./Header.module.css";
import clsx from "clsx";
import { FaShoppingBasket } from "react-icons/fa";

function Header() {
   return (
      <div className={clsx(styles.header, "flex-row")}>
         <div className={clsx(styles.logo, "flex-row")}>
            <img src="../src/assets/img/logo.png" alt="logo" />
            <p>Live Life</p>
         </div>

         <div className={clsx(styles.navbar_div, "flex-row",)}>
            <input type="search" name="" id="" />
            <FaShoppingBasket />
            <div>
            </div>
         </div>
      </div>
   );
}

export default Header;
