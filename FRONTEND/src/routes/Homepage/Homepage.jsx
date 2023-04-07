import Category from "../../components/homepage/Category";
import Header from "../../components/homepage/Header";
import Trending from "../../components/homepage/Trending";
import Products from "../../components/homepage/Products";
import Banner from "../../components/homepage/Banner";
import CustomersGallery from "../../components/homepage/CustomersGallery";

const Homepage = () => {
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
