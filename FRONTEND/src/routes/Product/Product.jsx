import image1 from "../../assets/products/img2.jpeg";
import image2 from "../../assets/products/img3.jpeg";
import image3 from "../../assets/products/img4.jpeg";
import wishlist from "../../assets/global/wishlist.png";

// import PRODUCTS_DATA from "../../data";

import "./Product.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addProduct } from "../../redux/cart";

const Product = () => {
  const urlId = useParams().id;
  const { dbProductsList } = useSelector((state) => state.dbProducts);
  const dispatch = useDispatch();

  const product = dbProductsList.filter((prd) => prd._id === urlId)[0];
  const [displayImg, setDisplayImg] = useState(product.images[0]);

  const [size, setSize] = useState(null);

  const addCartProduct = () => {
    if (size) {
      dispatch(addProduct({ ...product, size, quantity: 1 }));
    }
  };

  return (
    <div className="section-narrow product-page">
      <section className="photos">
        <div className="photo-list">
          <img
            src={product.images[0]}
            alt=""
            onClick={() => {
              setDisplayImg(product.images[0]);
            }}
          />
          <img
            src={product.images[1]}
            alt=""
            onClick={() => {
              setDisplayImg(product.images[1]);
            }}
          />
          <img
            src={product.images[2]}
            alt=""
            onClick={() => {
              setDisplayImg(product.images[2]);
            }}
          />
        </div>
        <img className="wishlist" src={wishlist} alt="wishlist" />
        <img className="photo" src={displayImg} alt="shauz" />
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
        <button className="button2" disabled={!size} onClick={addCartProduct}>
          {!size ? "SELECTATI O MARIME" : "ADAUGA IN COS"}
        </button>

        <div className="description">
          <h3>DESCRIEREA PRODUSULUI</h3>
          <p>{product.desc}</p>
        </div>
      </section>
    </div>
  );
};

export default Product;
