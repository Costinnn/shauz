import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addNewProduct } from "../../redux/products";

import axios from "axios";

import "./AddProduct.scss";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // STATE for updating DATABASE fields
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [price, setPrice] = useState(0);
  const [atSale, setAtSale] = useState(false);
  const [oldPrice, setOldPrice] = useState(0);
  const [stock, setStock] = useState({ xs: 0, s: 0, m: 0, l: 0, xl: 0 });
  const [image, setImage] = useState("");
  const [imageList, setImageList] = useState([]);

  // COMPONENT UPDATE FUNCTIONS
  const handleCategoryList = () => {
    if (category) {
      setCategoryList((prev) => [...prev, category]);
      setCategory("");
    }
  };
  const handleStock = (size, value) => {
    setStock((prev) => ({ ...prev, [size]: value }));
  };

  const handleImageList = () => {
    if (image) {
      setImageList((prev) => [...prev, image]);
      setImage("");
    }
  };

  //  DATABASE ADD FUNCTION
  const addProductToDb = async (newProduct) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_POST_LOCAL_URL,
        newProduct,
        { headers: { token: `${user.token}` } }
      );
      if (response) {
        console.log("Product added with success!");
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (price > oldPrice) {
      setOldPrice(0);
      setAtSale(false);
    }

    const newProduct = {
      title,
      desc,
      images: imageList,
      stockQ: stock,
      category: categoryList,
      price: Number(price),
      oldPrice: Number(oldPrice),
      sale: atSale,
    };

    const dbProduct = await addProductToDb(newProduct);
    dispatch(addNewProduct(dbProduct));

    setTitle("");
    setDesc("");
    setCategory("");
    setCategoryList([]);
    setPrice("");
    setAtSale(false);
    setOldPrice("");
    setStock({ xs: 0, s: 0, m: 0, l: 0, xl: 0 });
    setImage("");
    setImageList([]);
  };

  return (
    <main className="section-narrow addproduct">
      <h1>Add new product</h1>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label htmlFor="title">Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
            required
          />
        </div>

        <div className="desc">
          <label htmlFor="desc">Description:</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            name="desc"
            id="desc"
            cols="60"
            rows="5"
            required
          />
        </div>

        <div className="category">
          <label htmlFor="category">Category:</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="category"
            id="category"
          />
          <span className="button1" onClick={handleCategoryList}>
            Add
          </span>
          <br />
          <span>{categoryList && categoryList.map((item) => `${item}, `)}</span>
        </div>

        <div className="price">
          <label htmlFor="price">Price:</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            name="price"
            id="price"
            required
          />
        </div>

        <div className="sale">
          <label htmlFor="sale">Sale:</label>
          <input
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            type="number"
            name="sale"
            id="sale"
            placeholder="Old price"
          />
          <input
            checked={atSale}
            onChange={() => setAtSale(!atSale)}
            type="checkbox"
            name="yes"
            id="yes"
            value="true"
          />
          <label htmlFor="yes">Yes</label>
          <input
            checked={!atSale}
            onChange={() => setAtSale(!atSale)}
            type="checkbox"
            name="no"
            id="no"
            value="false"
          />
          <label htmlFor="no">No</label>
        </div>

        <div className="stock">
          <label htmlFor="stock">Stock:</label>

          <span>XS</span>
          <input
            value={stock.xs}
            onChange={(e) => handleStock("xs", e.target.value)}
            type="number"
            name="stock"
            id="stock"
            min="0"
            required
          />

          <span>S</span>
          <input
            value={stock.s}
            onChange={(e) => handleStock("s", e.target.value)}
            type="number"
            name="stock"
            id="stock"
            min="0"
            required
          />

          <span>M</span>
          <input
            value={stock.m}
            onChange={(e) => handleStock("m", e.target.value)}
            type="number"
            name="stock"
            id="stock"
            min="0"
            required
          />

          <span>L</span>
          <input
            value={stock.l}
            onChange={(e) => handleStock("l", e.target.value)}
            type="number"
            name="stock"
            id="stock"
            min="0"
            required
          />

          <span>XL</span>
          <input
            value={stock.xl}
            onChange={(e) => handleStock("xl", e.target.value)}
            type="number"
            name="stock"
            id="stock"
            min="0"
            required
          />
        </div>

        <div className="images">
          <label htmlFor="img">Images:</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            name="img"
            id="img"
            placeholder="Image link"
          />
          <span className="button1" onClick={handleImageList}>
            Add
          </span>

          <div className="img-added">
            {imageList && imageList.map((img) => <span key={img}>{img}</span>)}
          </div>
        </div>
        <button className="button3">ADD PRODUCT</button>
      </form>
    </main>
  );
};

export default AddProduct;
