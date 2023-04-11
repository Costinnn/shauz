import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSize, changeQuantity, deleteProduct } from "../../redux/cart";

import "./CartProduct.scss";
import { useEffect, useState } from "react";

const CartProduct = ({ product }) => {
  const [size, setSize] = useState(product.size);
  const [quantity, setQuantity] = useState(product.quantity);

  const dispatch = useDispatch();

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    const oldSize = size;
    const productQ = quantity;
    const productId = product.id;
    // setSize(e.target.value);
    dispatch(changeSize({ productId, productQ, newSize, oldSize }));
  };

  const handleQuantityChange = (e) => {
    const productId = product.id;
    const productSize = size;
    const productQ = e.target.value;
    setQuantity(e.target.value);
    dispatch(changeQuantity({ productId, productSize, productQ }));
  };

  const handleDelete = () => {
    const productId = product.id;
    const productSize = size;
    dispatch(deleteProduct({ productId, productSize }));
  };

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  // console.log(product);
  return (
    <div className="cart-product">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>

      <div className="info">
        <h3>{product.title}</h3>
        <p className="price">{product.price} lei</p>
        <form>
          <div>
            <label>Marime:</label>
            <select
              name="size"
              id="size"
              value={size}
              onChange={handleSizeChange}
            >
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
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
              max="5"
            />
          </div>
        </form>
        <p className="remove" onClick={handleDelete}>
          ELIMINA
        </p>
        {/* <p>
          {product.quantity} - {quantity}
        </p> */}
      </div>
    </div>
  );
};

export default CartProduct;
