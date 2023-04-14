import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import CartProduct from "../../components/cart/CartProduct";
import Trending from "../../components/homepage/Trending";

import "./Cart.scss";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);
  // console.log(products);

  return (
    <main className="section-narrow cart-page">
      <h1>SUMAR COMANDA</h1>
      <div className="cart-products">
        {products.map((product) => (
          <CartProduct key={product._id + product.size} product={product} />
        ))}
      </div>
      <div className="total">
        <p>TOTAL</p>
        <p>{total} lei</p>
      </div>
      <div className="buttons">
        <Link to="/" className="button3">
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
