import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import WishProduct from "../../components/wishlist/WishProduct";
import Trending from "../../components/homepage/Trending";

import "./Wishlist.scss";

const Wishlist = () => {
  const { wishProducts } = useSelector((state) => state.wishlist);

  return (
    <main className="section-narrow wish-page">
      <h1>FAVORITE</h1>
      <div className="wish-products">
        {wishProducts.map((product) => (
          <WishProduct key={product.id + product.size} product={product} />
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
