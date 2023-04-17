import Homepage from "./routes/Homepage/Homepage";
import Category from "./routes/Category/Category";
import Cart from "./routes/Cart/Cart";
import Wishlist from "./routes/Wishlist/Wishlist";
import Checkout from "./routes/Checkout/Checkout";
import Sale from "./routes/Category/Sale";
import Product from "./routes/Product/Product";
import General from "./routes/General/General";
import Sizes from "./routes/General/Sizes";
import Contact from "./routes/Contact/Contact";
import Notfound from "./routes/Notfound";
import NavFooter from "./routes/NavFooter/NavFooter";

import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/dbProducts";

import "./App.css";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://shzwebapi.onrender.com/api/products/getproducts"
          // "http://localhost:5000/api/products/getproducts"
        );
        dispatch(setProducts({ dbProducts: response.data }));
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavFooter />}>
          <Route index element={<Homepage />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="sale" element={<Sale />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="general/:id" element={<General />} />
          <Route path="sizes" element={<Sizes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
