import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setOrders } from "../redux/orders";
import { setProducts } from "../redux/products";

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsResponse = await axios.get(
          import.meta.env.VITE_GET_PRODUCTS
        );

        const ordersResponse = await axios.get(
          import.meta.env.VITE_GET_ORDERS,
          { headers: { token: `${user.token}` } }
        );

        dispatch(setProducts({ products: productsResponse.data }));
        dispatch(setOrders({ orders: ordersResponse.data }));
      } catch (err) {
        console.log(err);
      }
    };
    if (user.isAuthorized) {
      getProducts();
    }
  }, [user]);
  // console.log(user.isAuthorized);

  if (user.isAuthorized) {
    return <Outlet />;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRoute;
