import { useSelector } from "react-redux";

import Product from "../../subcomponents/Product";
// import PRODUCTS_DATA from "../../data";

import "./Products.scss";

const Products = () => {
  const { dbProductsList } = useSelector((state) => state.dbProducts);
  return (
    <section className="section-narrow products">
      {dbProductsList.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </section>
  );
};

export default Products;
