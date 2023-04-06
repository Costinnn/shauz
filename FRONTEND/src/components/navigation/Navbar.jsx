import Navlist from "./NavList";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import logo from '../../assets/global/logo.png'

import "./Navbar.scss";

const Navbar = () => {
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
        <Link to="/">
          <img className="logo" src={logo} alt="imglogo" />
        </Link>

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
        <Navlist handleMenu={handleMenu} showNav={menuOpen ? "shownav" : ""} />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
