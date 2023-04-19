import { useSelector } from "react-redux";

import "./ProductList.scss";
import ProductItem from "../../components/product-list/ProductItem";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <main className="section-narrow product-list">
      <h1>Lista produse</h1>
      {products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </main>
  );
};

export default ProductList;
