import { Route, Routes } from "react-router-dom";

import Login from "./routes/log-reg/Login";
import Register from "./routes/log-reg/Register";
import Navbar from "./components/navigation/Navbar";
import OrderList from "./routes/order-list/OrderList";
import Order from "./routes/order/Order";
import ProductList from "./routes/product-list/ProductList";
import Product from "./routes/product/Product";
import AddProduct from "./routes/add-product/AddProduct";
import NotFound from "./routes/NotFound";

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/products";
import { setOrders } from "./redux/orders";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsResponse = await axios.get(
          import.meta.env.VITE_GET_PRODUCTS,
          { headers: { token: `${user.token}` } }
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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        {user && (
          <Route path="user" element={<Navbar />}>
            <Route index element={<OrderList />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="order/:id" element={<Order />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="addproduct" element={<AddProduct />} />
          </Route>
        )}

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
