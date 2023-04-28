import { useSelector } from "react-redux";

import TrendingProduct from "../../subcomponents/TrendingProduct";

import "./Trending.scss";

const Trending = () => {
  const { dbProductsList } = useSelector((state) => state.dbProducts);

  return (
    <section className="section-narrow trending">
      <h2>CELE MAI CAUTATE</h2>
      <div className="frame">
        <div className="frame-content">
          {dbProductsList.map((product) => (
            <TrendingProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
