import Homepage from "./routes/Homepage/Homepage";
import Category from "./routes/Category/Category";
import Cart from "./routes/Cart/Cart";
import Wishlist from "./routes/Wishlist/Wishlist";
import Checkout from "./routes/Checkout/Checkout";
import Product from "./routes/Product/Product";
import NavFooter from "./routes/NavFooter/NavFooter";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavFooter />}>
          <Route index element={<Homepage />} />
          <Route path="category" element={<Category />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
