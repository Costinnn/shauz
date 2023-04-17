import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWishProduct, deleteWishProduct } from "../redux/wishlist";

import wishlistImg from "../assets/global/wishlist.png";
import wishlistAddedImg from "../assets/global/wishlist-added.png";

import { useEffect, useState } from "react";

import "./Product.scss";

const Product = ({ product }) => {
  const [added, setAdded] = useState(false);

  const { wishProducts } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleAddWishlist = () => {
    if (!added) {
      dispatch(addWishProduct({ ...product, size: "m", quantity: 1 }));
    } else {
      dispatch(deleteWishProduct({ productId: product._id, size: "m" }));
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
      <img
        className="wishlist"
        src={added ? wishlistAddedImg : wishlistImg}
        alt="wishlist"
        onClick={handleAddWishlist}
      />
      <Link to={`/product/${product._id}`}>
        <img src={product.images[0]} alt={product.title} />
        <h3>{product.title}</h3>
        <p className={`${product.sale ? "sale-price" : ""}`}>
          <span className={`${product.sale ? "is-sale" : "no-sale"}`}>
            {product.oldPrice} lei
          </span>
          {product.price} lei
        </p>
      </Link>
    </div>
  );
};

export default Product;
