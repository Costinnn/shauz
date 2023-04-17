import PRODUCTS_DATA from "../../data";

import rightArrow from "../../assets/global/right-arrow.png";
import leftArrow from "../../assets/global/left-arrow.png";

import "./CustomersGallery.scss";
import { useState } from "react";

const CustomersGallery = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const handleTranslate = (arrow) => {
    // value 33.33 is number of --100/(number of img/2)--
    // value 66 is a value less than 33.33 multipled
    if (arrow === "right" && translateValue < 66) {
      setTranslateValue((prev) => prev + 33.33);
    } else if (arrow === "left" && translateValue > 0) {
      setTranslateValue((prev) => prev - 33.33);
    }
  };
  return (
    <section className="section-narrow customer-gallery">
      <h2>TINUTE DE PE INSTAGRAM</h2>
      <p>Da-ne tag cu @_shauz_ si #shauzfit ca sa apari si tu</p>
      <div className="frame">
        <div
          className="frame-content"
          style={{ transform: `translate(${-translateValue}%)` }}
        >
          {PRODUCTS_DATA.map((product) => (
            <img src={product.image} alt={product.title} key={product.id} />
          ))}
        </div>
        <img
          className="left-arrow"
          style={{
            backgroundColor: translateValue > 0 ? "#fbfefd" : "#2d3031",
          }}
          src={leftArrow}
          alt="arrow"
          onClick={() => handleTranslate("left")}
        />
        <img
          className="right-arrow"
          style={{
            backgroundColor: translateValue > 66 ? "#2d3031" : "#fbfefd",
          }}
          src={rightArrow}
          alt="arrow"
          onClick={() => handleTranslate("right")}
        />
      </div>
    </section>
  );
};

export default CustomersGallery;
