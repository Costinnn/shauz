import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWishProduct } from "../redux/wishlist";

import wishlist from "../assets/global/wishlist.png";

import "./Product.scss";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddWishlist = () => {
    dispatch(addWishProduct({ ...product, size: "m", quantity: 1 }));
  };

  return (
    <div className="product">
      <img
        className="wishlist"
        src={wishlist}
        alt="wishlist"
        onClick={handleAddWishlist}
      />
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.price} lei</p>
      </Link>
    </div>
  );
};

export default Product;
