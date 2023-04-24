import { Route, Routes } from "react-router-dom";

import Login from "./routes/login/Login";
import Navbar from "./components/navigation/Navbar";
import OrderList from "./routes/order-list/OrderList";
import Order from "./routes/order/Order";
import ProductList from "./routes/product-list/ProductList";
import Product from "./routes/product/Product";
import AddProduct from "./routes/add-product/AddProduct";

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/products";
import { setOrders } from "./redux/orders";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsResponse = await axios.get(
          import.meta.env.VITE_GET_PRODUCTS
        );
        const ordersResponse = await axios.get(import.meta.env.VITE_GET_ORDERS);
        dispatch(setProducts({ products: productsResponse.data }));
        dispatch(setOrders({ orders: ordersResponse.data }));
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<OrderList />} />
          <Route path="order/:id" element={<Order />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
