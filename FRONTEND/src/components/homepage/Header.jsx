import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <section className="section-wide header">
      <div className="content">
        <h1>"SHAUZ YOUTH COLLECTION" ESTE DISPONIBILA</h1>
        <Link className="button1" to="category/men">
          COLECTIA YOUTH
        </Link>
      </div>
    </section>
  );
};

export default Header;
