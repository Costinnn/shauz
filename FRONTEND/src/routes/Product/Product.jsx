import image1 from "../../assets/products/img2.jpeg";
import image2 from "../../assets/products/img3.jpeg";
import image3 from "../../assets/products/img4.jpeg";
import wishlist from "../../assets/global/wishlist.png";

import PRODUCTS_DATA from "../../data";

import "./Product.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addProduct } from "../../redux/cart";

const Product = () => {
  const urlId = useParams().id;
  const product = PRODUCTS_DATA[Number(urlId) - 1];
  const [error, setError] = useState(false);

  const [size, setSize] = useState(null);
  const {} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCartProduct = () => {
    if (size) {
      dispatch(addProduct({ ...product, size, quantity: 1 }));
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="section-narrow product-page">
      <section className="photos">
        <div className="photo-list">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <img className="wishlist" src={wishlist} alt="wishlist" />
        <img className="photo" src={product.image} alt="shauz" />
      </section>
      <section className="options">
        <h2>{product.title}</h2>
        <p>{product.price} lei</p>
        <div className="size-header">
          <p>MARIMI</p>
          <Link to="/sizes">TABEL MARIMI</Link>
        </div>
        <div className="sizes">
          <div
            className={`size-btn ${size === "xs" ? "selected" : ""}`}
            onClick={() => setSize("xs")}
          >
            <span>XS</span>
          </div>
          <div
            className={`size-btn ${size === "s" ? "selected" : ""}`}
            onClick={() => setSize("s")}
          >
            <span>S</span>
          </div>
          <div
            className={`size-btn ${size === "m" ? "selected" : ""}`}
            onClick={() => setSize("m")}
          >
            <span>M</span>
          </div>
          <div
            className={`size-btn ${size === "l" ? "selected" : ""}`}
            onClick={() => setSize("l")}
          >
            <span>L</span>
          </div>
          <div
            className={`size-btn ${size === "xl" ? "selected" : ""}`}
            onClick={() => setSize("xl")}
          >
            <span>XL</span>
          </div>
        </div>
        <button className="button2" onClick={addCartProduct}>
          ADAUGA IN COS
        </button>
        {error && <p className="error">Selectati o marime!</p>}

        <div className="description">
          <h3>DESCRIEREA PRODUSULUI</h3>
          <p>{product.desc}</p>
        </div>
      </section>
    </div>
  );
};

export default Product;
