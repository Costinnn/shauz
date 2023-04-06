import Product from "../../subcomponents/Product";

import PRODUCTS_DATA from "../../data";

import "./Products.scss";

const Products = () => {
  return (
    <section className="section-narrow products">
      {PRODUCTS_DATA.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
