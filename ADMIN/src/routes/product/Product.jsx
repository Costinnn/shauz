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
        <h3>Stock</h3>
      </div>
    </main>
  );
};

export default Product;
