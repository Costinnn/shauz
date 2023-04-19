import { Link, Outlet } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="section-narrow navbar">
        <ul className="nav-menu">
          <li>
            <Link to="/productlist">Product list</Link>
          </li>
          <li>
            <Link to="/addproduct">Add product</Link>
          </li>
          <li>
            <Link to="/">Order list</Link>
          </li>
          <li>Logout</li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
