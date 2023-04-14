import Category from "../../components/homepage/Category";
import Header from "../../components/homepage/Header";
import Trending from "../../components/homepage/Trending";
import Products from "../../components/homepage/Products";
import Banner from "../../components/homepage/Banner";
import CustomersGallery from "../../components/homepage/CustomersGallery";

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/dbProducts";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/getproducts"
        );
        dispatch(setProducts({ dbProducts: response.data }));
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <main className="homepage">
      <Header />
      <Trending />
      <Category />
      <Products />
      <Banner />
      <CustomersGallery />
    </main>
  );
};

export default Homepage;
