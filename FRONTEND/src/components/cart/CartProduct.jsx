import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSize, changeQuantity, deleteProduct } from "../../redux/cart";

import "./CartProduct.scss";
import { useEffect, useState } from "react";

const CartProduct = ({ product }) => {
  const [size, setSize] = useState(product.cartSize);
  const [quantity, setQuantity] = useState(product.cartQ);

  const dispatch = useDispatch();

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    const oldSize = size;
    const productQ = quantity;
    const productId = product._id;
    // setSize(e.target.value);
    dispatch(changeSize({ productId, productQ, newSize, oldSize }));
  };

  const handleQuantityChange = (e) => {
    const productId = product._id;
    const productSize = size;
    const productQ = e.target.value;
    setQuantity(e.target.value);
    dispatch(changeQuantity({ productId, productSize, productQ }));
  };

  const handleDelete = () => {
    const productId = product._id;
    const productSize = size;
    dispatch(deleteProduct({ productId, productSize }));
  };

  useEffect(() => {
    setQuantity(product.cartQ);
  }, [product.cartQ]);

  // console.log(product);
  return (
    <div className="cart-product">
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

          <div>
            <label>Cantitate:</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={product.stockQ[size]}
            />
          </div>
        </form>
        <p className="remove" onClick={handleDelete}>
          ELIMINA
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
