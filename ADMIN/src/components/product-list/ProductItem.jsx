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
          <span>Pret: </span>
          <span>{product.price} lei</span>
          {product.sale ? <span>redus de la: {product.oldPrice}lei</span> : ""}
        </div>

        <div className="category">
          <span>Categorie:</span>
          {product.category.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="sizes">
          <span>Marimi disponibile: </span>
          {productSizes.map((size) => (
            <span className="size-value" key={size}>
              {size}={product.stockQ[size]}
            </span>
          ))}
          <span>Total: {productQ} buc.</span>
        </div>
      </div>
      <div className="actions">
        <Link to={`/product/${product._id}`}>VEZI ARTICOL</Link>
      </div>
    </div>
  );
};

export default ProductItem;
