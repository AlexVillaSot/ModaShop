import React from "react";
import "../Home/Home.scss";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Nuevos" />
      <Categories />
      <FeaturedProducts type="Nuestros Mejores" />
      <Contact />
    </div>
  );
};

export default Home;
