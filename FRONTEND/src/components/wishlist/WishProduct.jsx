import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteWishProduct, changeSizeWishProduct } from "../../redux/wishlist";
import { addProduct } from "../../redux/cart";

import "./WishProduct.scss";
import { useState } from "react";

const WishProduct = ({ product }) => {
  const [size, setSize] = useState(product.size);
  const dispatch = useDispatch();

  const handleAddProductToCart = () => {
    dispatch(addProduct({ ...product, size: size, quantity: 1 }));
  };

  const handleDeleteProduct = () => {
    dispatch(deleteWishProduct({ productId: product._id, size: product.size }));
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    const oldSize = size;
    const productId = product._id;
    // setSize(e.target.value);
    dispatch(changeSizeWishProduct({ productId, newSize, oldSize }));
  };

  return (
    <div className="wish-product">
      <Link to={`/product/${product._id}`}>
        <img src={product.images[0]} alt={product.title} />
      </Link>

      <div className="info">
        <h3>{product.title}</h3>
        <p className={`price ${product.sale ? "sale-price" : ""}`}>
          <span className={`${product.sale ? "is-sale" : "no-sale"}`}>
            {product.oldPrice} lei
          </span>
          {product.price} lei
        </p>
        <form>
          <div>
            <label>Marime:</label>
            <select
              name="size"
              id="size"
              value={size}
              onChange={handleSizeChange}
            >
              <option value="xs" disabled={product.stockQ.xs <= 0}>
                XS
              </option>
              <option value="s" disabled={product.stockQ.s <= 0}>
                S
              </option>
              <option value="m" disabled={product.stockQ.m <= 0}>
                M
              </option>
              <option value="l" disabled={product.stockQ.l <= 0}>
                L
              </option>
              <option value="xl" disabled={product.stockQ.xl <= 0}>
                XL
              </option>
            </select>
          </div>
        </form>
        <p className="desc">{product.desc.slice(0, 80)}...</p>
        <div className="actions">
          <p className="remove" onClick={handleDeleteProduct}>
            ELIMINA
          </p>
          <p className="add" onClick={handleAddProductToCart}>
            ADAUGA IN COS
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishProduct;
