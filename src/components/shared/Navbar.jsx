import { navbarLinks } from "@/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import appleIcon from "../../assets/icons/appleIcon.png";
import searchIcon from "../../assets/icons/search.png";
import cartIcon from "../../assets/icons/cart.png";
import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/close.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const hiddenMenuHandler=()=>{
    setShowMenu(false)
  }
  const showMenuHandler=()=>{
    setShowMenu(true)
  }

  return (
    <div className="relative">
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-between py-3 w-900">
          <img src={appleIcon} width={15} />
          {navbarLinks.map((link) => (
            <Link
              key={link.label}
              className="hidden md:block font-normal text-xs"
              to={link.route}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3">
            <img src={searchIcon} width={20} />
            <img src={cartIcon} width={20} />
            <img
              onClick={() => showMenuHandler()}
              className="block md:hidden"
              src={menuIcon}
              width={20}
            />
          </div>
        </div>
      </div>
      <div
        className={`mobileMenu ${
          showMenu ? "visibleMenu flex md:hidden" : "hiddenMenu"
        }`}
      >
        <img src={closeIcon} width={20} className="self-end mx-5 my-4" onClick={() => hiddenMenuHandler()}/>
        <div className="flex flex-col gap-3 ml-4 pb-3 overflow-auto border-none">
          {navbarLinks.map((link) => (
            <Link className="text-2xl font-medium ml-4" onClick={()=>hiddenMenuHandler()} key={link.label} to={link.route}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
