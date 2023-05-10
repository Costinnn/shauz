import { Link } from "react-router-dom";

import anpc1 from "../../assets/global/anpc1.webp";
import anpc2 from "../../assets/global/anpc2.webp";
import fbk from "../../assets/global/facebook.png";
import insta from "../../assets/global/instagram.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="section-wide footer">
      <div className="content box1">
        <div className="general">
          <Link to="/contact">CONTACT</Link>
          <Link to="/general/shipping">LIVRARE</Link>
          <Link to="/general/return">RETUR</Link>
          <Link to="/sizes">TABEL MARIMI</Link>
          <Link to="/general/care">INGRIJIRE PRODUSE</Link>
        </div>
        <div className="legal">
          <Link to="/general/policy">POLITICA DE CONFIDENTIALITATE</Link>
          <Link to="/general/terms">TERMENI SI CONDITII</Link>
        </div>
      </div>
      <div className="content box2">
        <div className="legal-links">
          <a href="https://anpc.ro/ce-este-sal/">
            <img src={anpc1} alt="" />
          </a>
          <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
            <img src={anpc2} alt="" />
          </a>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/_shauz_/?hl=enfa" target="_blank">
            <img src={insta} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/Shauzclo/" target="_blank">
            <img src={fbk} alt="facebook" />
          </a>
        </div>

        <p>SHAUZ CLOTHING 2023&copy; ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
