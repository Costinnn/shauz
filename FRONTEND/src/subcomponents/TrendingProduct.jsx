import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWishProduct, deleteWishProduct } from "../redux/wishlist";

import cart from "../assets/global/cart.png";
import wishlistImg from "../assets/global/wishlist.png";
import wishlistAddedImg from "../assets/global/wishlist-added.png";

import { useEffect, useState } from "react";

import "./TrendingProduct.scss";

const TrendingProduct = ({ product }) => {
  const [added, setAdded] = useState(false);

  const { wishProducts } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleAddWishlist = () => {
    if (!added) {
      dispatch(addWishProduct({ ...product, cartSize: "m", cartQ: 1 }));
    } else {
      dispatch(deleteWishProduct({ productId: product._id, cartSize: "m" }));
      setAdded(false);
    }
  };

  useEffect(() => {
    wishProducts.map((wishProduct) => {
      if (wishProduct._id === product._id) {
        setAdded(true);
      }
    });
  }, [wishProducts]);

  return (
    <div className="product">
      <Link to={`/product/${product._id}`}>
        <img src={product.images[0]} alt={product.title} />
      </Link>
      <div className="info">
        <div className="text">
          <h3>{product.title}</h3>
          <p className={`${product.sale ? "sale-price" : ""}`}>
            <span className={`${product.sale ? "is-sale" : "no-sale"}`}>
              {product.oldPrice} lei
            </span>
            {product.price} lei
          </p>
        </div>
        <div className="icons">
          <Link to={`/product/${product._id}`}>
            <img src={cart} alt="" />
          </Link>
          <img
            src={added ? wishlistAddedImg : wishlistImg}
            alt=""
            onClick={handleAddWishlist}
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
