import { Link } from "react-router-dom";

import "./ProductItem.scss";

const ProductItem = ({ product }) => {
  const productSizes = Object.keys(product.stockQ);
  let productQ = 0;
  productSizes.forEach((size) => {
    productQ += Number(product.stockQ[size]);
    return productQ;
  });

  return (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} />
      <div className="info">
        <h3>{product.title}</h3>
        <span>ID: {product._id}</span>
        <div className="prices">
          <span>Price: </span>
          <span>{product.price} lei</span>
          {product.sale ? <span> from: {product.oldPrice}lei</span> : ""}
        </div>

        <div className="category">
          <span>Category:</span>
          {product.category.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="sizes">
          <span>Sizes on stock: </span>
          {productSizes.map((size) => (
            <span className="size-value" key={size}>
              {size}={product.stockQ[size]}
            </span>
          ))}
          <span>Total: {productQ} pieces</span>
        </div>
      </div>
      <div className="actions">
        <Link to={`/product/${product._id}`}>SEE PRODUCT</Link>
      </div>
    </div>
  );
};

export default ProductItem;
