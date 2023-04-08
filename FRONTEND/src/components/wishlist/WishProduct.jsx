import { Link } from "react-router-dom";
import "./WishProduct.scss";

const WishProduct = ({ product }) => {
  return (
    <div className="wish-product">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>

      <div className="info">
        <h3>{product.title}</h3>
        <p className="price">{product.price} lei</p>
        <form>
          <div>
            <label>Marime:</label>
            <select name="size" id="size">
              <option value="xs">XS</option>
              <option value="xs">S</option>
              <option value="xs">M</option>
              <option value="xs">L</option>
              <option value="xs">XL</option>
            </select>
          </div>
        </form>
        <p className="desc">{product.desc.slice(0, 80)}...</p>
        <div className="actions">
          <p className="remove">ELIMINA</p>
          <p className="add">ADAUGA IN COS</p>
        </div>
      </div>
    </div>
  );
};

export default WishProduct;
