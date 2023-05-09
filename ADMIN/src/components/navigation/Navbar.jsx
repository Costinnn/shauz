import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "../../redux/user";
import { setOrders } from "../../redux/orders";
import { setProducts } from "../../redux/products";

import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser({}));
    dispatch(setProducts([]));
    dispatch(setOrders([]));
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
    </>
  );
};

export default Navbar;
