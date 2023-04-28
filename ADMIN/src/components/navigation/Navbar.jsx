import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "../../redux/user";

import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser({ isAuthorized: false }));
    navigate("/");
  };

  return (
    <>
      <nav className="section-narrow navbar">
        <ul className="nav-menu">
          <li>
            <Link to="productlist">Product list</Link>
          </li>
          <li>
            <Link to="addproduct">Add product</Link>
          </li>
          <li>
            <Link to="">Order list</Link>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
