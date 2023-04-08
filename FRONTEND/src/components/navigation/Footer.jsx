import { Link } from "react-router-dom";

import anpc1 from "../../assets/global/anpc1.webp";
import anpc2 from "../../assets/global/anpc2.webp";
import fbk from "../../assets/global/facebook.png";
import insta from "../../assets/global/instagram.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="general">
        <Link to="/contact">CONTACT</Link>
        <Link to="/general/shipping">LIVRARE</Link>
        <Link to="/general/return">RETUR</Link>
        <Link to="/sizes">TABEL MARIMI</Link>
        <Link to="/general/care">CUM SA INTRETII PRODUSUL?</Link>
      </div>

      <div className="legal">
        <Link to="/general/policy">POLITICA DE CONFIDENTIALITATE</Link>
        <Link to="/general/terms">TERMENI SI CONDITII</Link>
        <div>
          <a href="https://anpc.ro/ce-este-sal/">
            <img src={anpc1} alt="" />
          </a>
          <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
            <img src={anpc2} alt="" />
          </a>
        </div>
      </div>
      <div className="social">
        <a href="http://">
          <img src={insta} alt="instagram" />
        </a>
        <a href="http://">
          <img src={fbk} alt="facebook" />
        </a>
      </div>
      <p>SHAUZ CLOTING 2023&copy; ALL RIGHTS RESERVED</p>
      {/* <p>
        MADE BY
        <a href="http://www.webits.ro" target="_blank">
          WEBITS
        </a>
      </p> */}
    </footer>
  );
};

export default Footer;
