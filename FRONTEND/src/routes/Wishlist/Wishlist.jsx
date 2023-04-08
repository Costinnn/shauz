
import { Link } from "react-router-dom";

import PRODUCTS_DATA from "../../data";
import WishProduct from "../../components/wishlist/WishProduct";
import Trending from "../../components/homepage/Trending";

import "./Wishlist.scss";

const Wishlist = () => {
  return (
    <main className="section-narrow wish-page">
      <h1>FAVORITE</h1>
      <div className="wish-products">
        {PRODUCTS_DATA.map((product) => (
          <WishProduct key={product.id} product={product} />
        ))}
      </div>

      <Link to="/category" className="button3">
        CONTINUA CUMPARATURILE
      </Link>

      <Trending />
    </main>
  );
};

export default Wishlist;
