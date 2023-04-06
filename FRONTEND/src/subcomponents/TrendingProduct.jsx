import { Link } from "react-router-dom";

import cart from "../assets/global/cart.png";
import wishlist from "../assets/global/wishlist.png";
import wishlistAdded from "../assets/global/wishlist-added.png";

import "./TrendingProduct.scss";

const TrendingProduct = ({ product }) => {
  return (
    <div className="product">
      <Link>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="info">
        <div className="text">
          <h3>{product.title}</h3>
          <p>{product.price} lei</p>
        </div>
        <div className="icons">
          <img src={cart} alt="" />
          <img src={wishlist} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
