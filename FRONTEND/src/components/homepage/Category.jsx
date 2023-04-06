import React from "react";
import { Link } from "react-router-dom";

import man from "../../assets/homepage/man2.jpg";
import woman from "../../assets/homepage/woman.jpg";
import kid from "../../assets/homepage/kid.jpg";

import "./Category.scss";

const Category = () => {
  return (
    <section className="section-narrow category">
      <Link to='category/men'>
        <img src={man} alt="" />
        <div className="bg-filter"></div>
        <h3>BARBATI</h3>
      </Link>
      <Link to='category/women'>
        <img src={woman} alt="" />
        <div className="bg-filter"></div>
        <h3>FEMEI</h3>
      </Link>
      <Link to='category/kids'>
        <img src={kid} alt="" />
        <div className="bg-filter"></div>
        <h3>COPII</h3>
      </Link>
    </section>
  );
};

export default Category;
