import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWishProduct } from "../redux/wishlist";

import cart from "../assets/global/cart.png";
import wishlist from "../assets/global/wishlist.png";
import wishlistAdded from "../assets/global/wishlist-added.png";

import "./TrendingProduct.scss";

const TrendingProduct = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddWishlist = () => {
    dispatch(addWishProduct({ ...product, size: "m", quantity: 1 }));
  };

  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="info">
        <div className="text">
          <h3>{product.title}</h3>
          <p>{product.price} lei</p>
        </div>
        <div className="icons">
          <Link to={`/product/${product.id}`}>
            <img src={cart} alt="" />
          </Link>
          <img src={wishlist} alt="" onClick={handleAddWishlist} />
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
