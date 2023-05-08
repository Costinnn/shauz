import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useState } from "react";

import {
  deleteProduct,
  deleteArrayItem,
  addArrayItem,
  updateSize,
  updateValue,
} from "../../redux/products";

import "./Product.scss";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const urlId = useParams().id;

  // STATE for updating DATABASE fields
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newImgPosition, setNewImgPosition] = useState(0);
  const [newCategory, setNewCategory] = useState("");
  const [stockSizes, setStockSizes] = useState({
    xs: 0,
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
  });
  const [newPrice, setNewPrice] = useState(0);
  const [newOldPrice, setNewOldPrice] = useState(0);

  // REDUX STATE import
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.user);
  const product = products.filter((item) => item._id === urlId)[0];

  // COMPONENT UPDATE FUNCTIONS
  const handleStockSizes = (field, e) => {
    setStockSizes((prev) => {
      return { ...prev, [field]: Number(e.target.value) };
    });
  };

  const handleSalePrice = async () => {
    if (product.price < newOldPrice) {
      await handleUpdateValue("sale", true);
      await handleUpdateValue("oldPrice", newOldPrice);
    } else {
      await handleUpdateValue("sale", false);
      await handleUpdateValue("oldPrice", 0);
    }
  };

  //  DATABASE UPDATE FUNCTIONS
  const handleDeleteProduct = async () => {
    const productUrl = import.meta.env.VITE_DELETE_PRODUCT_LOCAL_URL + urlId;

    try {
      const response = await axios.delete(productUrl, {
        headers: { token: `${user.token}` },
      });
      if (response) {
        // HERE is throwing an error if dispatch " product.title" undefined on Product.jsx
        // for safety on component render I used "product && (...)"
        dispatch(deleteProduct(urlId));
        navigate("/user/productlist");
        console.log("Product deleted with success!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteArrayItem = async (field, stringToDelete) => {
    const productUrl = import.meta.env.VITE_DELETE_ARRAYITEM_LOCAL_URL + urlId;

    try {
      const response = await axios.patch(
        productUrl,
        { field, stringToDelete },
        { headers: { token: `${user.token}` } }
      );

      if (response) {
        dispatch(deleteArrayItem({ urlId, field, stringToDelete }));
        console.log("Array item deleted with success!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddArrayItem = async (field, stringToAdd, position = 0) => {
    const productUrl = import.meta.env.VITE_ADD_ARRAYITEM_LOCAL_URL + urlId;

    try {
      const response = await axios.patch(
        productUrl,
        {
          field,
          stringToAdd,
          position,
        },
        { headers: { token: `${user.token}` } }
      );

      if (response) {
        dispatch(addArrayItem({ urlId, field, stringToAdd, position }));
        console.log("Array item added with success!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateValue = async (field, newValue) => {
    const productUrl = import.meta.env.VITE_UPDATE_VALUE_LOCAL_URL + urlId;

    try {
      const response = await axios.patch(
        productUrl,
        { field, newValue },
        { headers: { token: `${user.token}` } }
      );

      if (response) {
        dispatch(updateValue({ urlId, field, newValue }));
        console.log("Value updated with success!");
        setNewDescription("");
        setNewTitle("");
        setNewPrice(0);
        setNewOldPrice(0);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateSize = async (sizeToChange, newValue) => {
    const productUrl = import.meta.env.VITE_UPDATE_SIZE_LOCAL_URL + urlId;

    try {
      const response = await axios.patch(
        productUrl,
        {
          sizeToChange,
          newValue,
        },
        { headers: { token: `${user.token}` } }
      );

      if (response) {
        dispatch(updateSize({ urlId, sizeToChange, newValue }));
        console.log("Stock size updated with success!");
        setStockSizes((prev) => ({ ...prev, [sizeToChange]: 0 }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    product && (
      <main className="section-narrow product-page">
        <h1>{product.title}</h1>
        <span>Product ID: {product._id}</span>
        <div className="photos">
          {product.images.map((photo) => (
            <img src={photo} alt="" key={photo} />
          ))}
        </div>
        <div className="update-title">
          <h3>Title</h3>
          <div className="title-input">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
              name="title"
              id="title"
              placeholder="New title"
            />
            <button
              className="button1"
              onClick={() =>
                newTitle ? handleUpdateValue("title", newTitle) : ""
              }
            >
              Add
            </button>
          </div>
        </div>
        <div className="update-photos">
          <h3>Photos:</h3>
          {product.images.map((item, index) => (
            <div className="photo-item" key={item}>
              <span key={item}>{item}</span>
              <button
                className="button2"
                onClick={() => handleDeleteArrayItem("images", item)}
              >
                Delete
              </button>
            </div>
          ))}

          <div className="photo-input">
            <div>
              <input
                value={newImg}
                onChange={(e) => setNewImg(e.target.value)}
                className="url-input"
                type="url"
                name=""
                placeholder="Image link"
              />
              <input
                value={newImgPosition}
                onChange={(e) => setNewImgPosition(e.target.value)}
                className="position-input"
                type="number"
                placeholder="Position"
                min="0"
                max="6"
              />
            </div>

            <button
              className="button1"
              onClick={() =>
                newImg
                  ? handleAddArrayItem("images", newImg, newImgPosition)
                  : ""
              }
            >
              Add
            </button>
          </div>
        </div>
        <div className="update-desc">
          <h3>Description:</h3>
          <p>{product.desc}</p>
          <div>
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              name="desc"
              id="desc"
              cols="67"
              rows="5"
              placeholder="Description..."
              wrap="hard"
            ></textarea>
            <button
              className="button1"
              onClick={() =>
                newDescription
                  ? handleUpdateValue("desc", newDescription)
                  : console.log("No description!!!")
              }
            >
              Update
            </button>
          </div>
        </div>
        <div className="update-stock">
          <h3>Stock:</h3>
          <div>
            <div className="stock-item">
              <span>XS: {product.stockQ.xs}</span>
              <input
                value={stockSizes.xs}
                onChange={(e) => handleStockSizes("xs", e)}
                type="number"
                name=""
                id=""
                min="0"
              />
              <button
                className="button1"
                onClick={() => handleUpdateSize("xs", stockSizes.xs)}
              >
                Update
              </button>
            </div>
            <div className="stock-item">
              <span>S: {product.stockQ.s}</span>
              <input
                value={stockSizes.s}
                onChange={(e) => handleStockSizes("s", e)}
                type="number"
                name=""
                id=""
                min="0"
              />
              <button
                className="button1"
                onClick={() => handleUpdateSize("s", stockSizes.s)}
              >
                Update
              </button>
            </div>
            <div className="stock-item">
              <span>M: {product.stockQ.m}</span>
              <input
                value={stockSizes.m}
                onChange={(e) => handleStockSizes("m", e)}
                type="number"
                name=""
                id=""
                min="0"
              />
              <button
                className="button1"
                onClick={() => handleUpdateSize("m", stockSizes.m)}
              >
                Update
              </button>
            </div>
            <div className="stock-item">
              <span>L: {product.stockQ.l}</span>
              <input
                value={stockSizes.l}
                onChange={(e) => handleStockSizes("l", e)}
                type="number"
                name=""
                id=""
                min="0"
              />
              <button
                className="button1"
                onClick={() => handleUpdateSize("l", stockSizes.l)}
              >
                Update
              </button>
            </div>
            <div className="stock-item">
              <span>XL: {product.stockQ.xl}</span>
              <input
                value={stockSizes.xl}
                onChange={(e) => handleStockSizes("xl", e)}
                type="number"
                name=""
                id=""
                min="0"
              />
              <button
                className="button1"
                onClick={() => handleUpdateSize("xl", stockSizes.xl)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="update-category">
          <h3>Category:</h3>
          <div>
            {product.category.map((item) => (
              <div className="category-item" key={item}>
                <span>{item}</span>
                <button
                  className="button2"
                  onClick={() => handleDeleteArrayItem("category", item)}
                >
                  Delete
                </button>
              </div>
            ))}
            <div>
              <input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="New category"
              />
              <button
                className="button1"
                onClick={() =>
                  newCategory ? handleAddArrayItem("category", newCategory) : ""
                }
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="update-general">
          <div className="price">
            <h3>Price:</h3>
            <span>{product.price} lei </span>
            <span>
              {product.oldPrice > 0
                ? ` (redus de la ${product.oldPrice} lei)`
                : ""}
            </span>
            <br />
            <input
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              type="number"
              min="0"
            />
            <button
              className="button1"
              onClick={() =>
                newPrice > 0 ? handleUpdateValue("price", newPrice) : ""
              }
            >
              Update
            </button>
          </div>
          <div className="sale">
            <h3>Sale:</h3>
            <span>{product.sale ? "YES" : "NO"}</span>
          </div>
          <div className="oldprice">
            <h3>Old price:</h3>
            <span>
              {product.oldPrice > 0 ? `(${product.oldPrice} lei)` : "No sale"}
            </span>
            <br />
            <input
              value={newOldPrice}
              onChange={(e) => setNewOldPrice(e.target.value)}
              type="number"
              min="0"
            />
            <button
              className="button1"
              onClick={() => (newOldPrice > 0 ? handleSalePrice() : "")}
            >
              Update
            </button>
          </div>
        </div>
        <button className="button4" onClick={handleDeleteProduct}>
          DELETE PRODUCT
        </button>
      </main>
    )
  );
};

export default Product;
