import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import checkoutCart from "../../assets/global/checkout-cart.png";

import "./Checkout.scss";
import { useState } from "react";

const Checkout = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const { products, total } = useSelector((state) => state.cart);

  const handleOrderOpen = () => {
    if (isOrderOpen) {
      setIsOrderOpen(false);
    } else {
      setIsOrderOpen(true);
    }
  };

  return (
    <main className="section-narrow checkout">
      <h1>CHECKOUT</h1>
      <div className="show-hide-btn" onClick={handleOrderOpen}>
        <div>
          <img src={checkoutCart} alt="" />
          <p>Detalii comanda</p>
        </div>
        <span>{total + 20} lei</span>
      </div>
      <div className={`order-summary ${isOrderOpen ? "is-open" : ""}`}>
        <div className="products-container">
          {products.map((product, index) => (
            <div className="product" key={product.id + index}>
              <div className="product-info">
                <img src={product.image} alt="shauz" />
                <div>
                  <h5 className="product-title">{product.title}</h5>
                  <span className="product-quantity">
                    {product.quantity} / {product.size}
                  </span>
                </div>
              </div>
              <span className="product-price">{product.price} lei</span>
            </div>
          ))}
        </div>
        <div className="order-info">
          <span>Subtotal</span>
          <span>{total} lei</span>
        </div>
        <div className="order-info">
          <span>Livrare</span>
          <span>20 lei</span>
        </div>
        <div className="order-total">
          <span>TOTAL</span>
          <span>{total + 20} lei</span>
        </div>
      </div>
      <form>
        <span>Contact</span>

        <input type="text" required placeholder="Nume-Prenume*" />

        <div className="input-box">
          <input type="text" required placeholder="Telefon*" />
          <input type="email" required placeholder="E-mail*" />
        </div>
        <span>Adresa livrare</span>
        <input type="text" required placeholder="Judet*" />
        <div className="input-box dif-size">
          <input type="text" required placeholder="Localitate*" />
          <input type="text" placeholder="Cod postal" />
        </div>
        <div className="input-box dif-size">
          <input type="text" required placeholder="Strada*" />
          <input type="text" required placeholder="Nr.*" />
        </div>
        <textarea
          name="message"
          id="message"
          wrap="hard"
          cols="35"
          rows="3"
          placeholder="Informatii suplimentare..."
        ></textarea>

        <button className="button2">TRIMITE COMANDA</button>
      </form>
      <Link to="/cart" className="button3">
        INAPOI LA COS
      </Link>
    </main>
  );
};

export default Checkout;
