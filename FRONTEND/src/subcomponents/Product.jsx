import { Link } from "react-router-dom";

import wishlist from "../assets/global/wishlist.png";

import "./Product.scss";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img className="wishlist" src={wishlist} alt="wishlist" />
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.price} lei</p>
      </Link>
    </div>
  );
};

export default Product;
