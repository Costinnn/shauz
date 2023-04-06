import PRODUCTS_DATA from "../../data";
import TrendingProduct from "../../subcomponents/TrendingProduct";

import "./Trending.scss";

const Trending = () => {
  return (
    <section className="section-narrow trending">
      <h2>CELE MAI CAUTATE</h2>
      <div className="frame">
        <div className="frame-content">
          {PRODUCTS_DATA.map((product) => (
            <TrendingProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
