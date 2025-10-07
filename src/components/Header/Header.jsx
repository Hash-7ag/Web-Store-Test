import React from "react";
import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import styles from "./Header.module.css";
import clsx from "clsx";

function Header() {

   const [showFirst, setShowFirst] = useState(true);

   return (
      <div className={clsx(styles.header, "flex-row font-hand")}>
         <div className={clsx(styles.logo, "flex-row user-select-none")}>
            <img src="../src/assets/img/logo.png" alt="logo" />
            <p className="text-base">Live Life</p>
         </div>

         <div className={clsx(styles.navbar_div, "flex-row")}>
            <input className="text-base font-hand" type="search" name="" id="" />
            <div className="flex-row gap">
               <FaShoppingBasket className="pointer text-base" />
               <FaLightbulb className={clsx("pointer text-dark", showFirst ? "hidden" : "block")} onClick={()=>setShowFirst(true)}/>
               <FaRegLightbulb className={clsx("pointer text-base", showFirst ? "block" : "hidden")} onClick={()=>setShowFirst(false)}/>
            </div>
         </div>
      </div>
   );
}

export default Header;
