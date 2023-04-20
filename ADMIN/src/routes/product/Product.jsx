import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Product.scss";

const Product = () => {
  const urlId = useParams().id;
  const { products } = useSelector((state) => state.products);
  const product = products.filter((item) => item._id === urlId)[0];
  return (
    <main className="section-narrow product-page">
      <h1>{product.title}</h1>
      <span>Product ID: {product._id}</span>
      <div className="photos">
        {product.images.map((photo) => (
          <img src={photo} alt="" key={photo} />
        ))}
      </div>
      <div className="update-photos">
        <h3>Photos:</h3>
        {product.images.map((item, index) => (
          <div className="photo-item" key={item}>
            <span key={item}>{item}</span>
            <button className="button2">Delete</button>
          </div>
        ))}
        <div className="photo-input">
          <div>
            <input
              className="url-input"
              type="url"
              name=""
              placeholder="Image link"
            />
            <input
              className="position-input"
              type="number"
              placeholder="Position"
              min="0"
              max="6"
            />
          </div>

          <button className="button1">Add</button>
        </div>
      </div>
      <div className="update-desc">
        <h3>Description:</h3>
        <p>{product.desc}</p>
        <div>
          <textarea
            name="desc"
            id="desc"
            cols="67"
            rows="5"
            placeholder="Description..."
            wrap="hard"
          ></textarea>
          <button className="button1">Update</button>
        </div>
      </div>
      <div className="update-stock">
        <h3>Stock:</h3>
        <div>
          <div className="stock-item">
            <span>XS: {product.stockQ.xs}</span>
            <input type="number" name="" id="" min="0" />
            <button className="button1">Update</button>
          </div>
          <div className="stock-item">
            <span>S: {product.stockQ.s}</span>
            <input type="number" name="" id="" min="0" />
            <button className="button1">Update</button>
          </div>
          <div className="stock-item">
            <span>M: {product.stockQ.m}</span>
            <input type="number" name="" id="" min="0" />
            <button className="button1">Update</button>
          </div>
          <div className="stock-item">
            <span>L: {product.stockQ.l}</span>
            <input type="number" name="" id="" min="0" />
            <button className="button1">Update</button>
          </div>
          <div className="stock-item">
            <span>XL: {product.stockQ.xl}</span>
            <input type="number" name="" id="" min="0" />
            <button className="button1">Update</button>
          </div>
        </div>
      </div>
      <div className="update-category">
        <h3>Category:</h3>
        <div>
          {product.category.map((item) => (
            <div className="category-item" key={item}>
              <span>{item}</span>
              <button className="button2">Delete</button>
            </div>
          ))}
          <div>
            <input type="text" name="" id="" placeholder="New category" />
            <button className="button1">Add</button>
          </div>
        </div>
      </div>
      <div className="update-general">
        <div className="price">
          <h3>Price:</h3>
          <span>{product.price} lei </span>
          <span>
            {product.oldPrice ? ` (redus de la ${product.oldPrice} lei)` : ""}
          </span>
        </div>
        <div className="sale">
          <h3>Sale:</h3>
          <span>{product.sale ? "YES" : "NO"}</span>
        </div>
      </div>
      <button className="button4">DELETE PRODUCT</button>
    </main>
  );
};

export default Product;
