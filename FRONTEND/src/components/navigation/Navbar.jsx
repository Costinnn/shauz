import Navlist from "./NavList";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/global/logo.png";
import cart from "../../assets/global/cart.png";
import wishlist from "../../assets/global/wishlist.png";

import "./Navbar.scss";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="navigation">
        <svg
          onClick={handleMenu}
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z"
          />
        </svg>
        <Link to="/">
          <img className="logo" src={logo} alt="imglogo" />
        </Link>
        <div className="cawi-box">
          <Link to="/wishlist" className="wishlist cawi">
            <img src={wishlist} alt="" />
            <span>0</span>
          </Link>
          <Link to="/cart" className="cart cawi">
            <img src={cart} alt="" />
            <span>{quantity}</span>
          </Link>
        </div>

        <Navlist handleMenu={handleMenu} showNav={menuOpen ? "shownav" : ""} />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
