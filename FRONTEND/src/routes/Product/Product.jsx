import image from "../../assets/products/img1.jpeg";
import image1 from "../../assets/products/img2.jpeg";
import image2 from "../../assets/products/img3.jpeg";
import image3 from "../../assets/products/img4.jpeg";
import wishlist from "../../assets/global/wishlist.png";

import PRODUCTS_DATA from "../../data";

import "./Product.scss";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const urlId = useParams().id;
  const product = PRODUCTS_DATA[Number(urlId) - 1];

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
          <Link>TABEL MARIMI</Link>
        </div>
        <div className="sizes">
          <div className="size-btn">
            <span>XS</span>
          </div>
          <div className="size-btn">
            <span>S</span>
          </div>
          <div className="size-btn">
            <span>M</span>
          </div>
          <div className="size-btn">
            <span>L</span>
          </div>
          <div className="size-btn">
            <span>XL</span>
          </div>
        </div>
        <button className="button2">ADAUGA IN COS</button>
        <div className="description">
          <h3>DESCRIEREA PRODUSULUI</h3>
          <p>{product.desc}</p>
        </div>
      </section>
    </div>
  );
};

export default Product;
