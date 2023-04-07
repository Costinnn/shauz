import { Link } from "react-router-dom";

import PRODUCTS_DATA from "../../data";
import CartProduct from "../../components/cart/CartProduct";
import Trending from "../../components/homepage/Trending";

import "./Cart.scss";

const Cart = () => {
  return (
    <main className="section-narrow cart-page">
      <h1>SUMAR COMANDA</h1>
      <div className="cart-products">
        {PRODUCTS_DATA.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
      <div className="total">
        <p>TOTAL</p>
        <p>150 lei</p>
      </div>
      <div className="buttons">
        <Link to="/category" className="button3">
          CONTINUA CUMPARATURILE
        </Link>
        <Link to="/checkout" className="button2">
          FINALIZEAZA COMANDA
        </Link>
      </div>
      <Trending />
    </main>
  );
};

export default Cart;
