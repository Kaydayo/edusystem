import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Carousel from "../layouts/Home/Carousel";
import Companys from "../layouts/Home/Companys";
import FeaturedPrograms from "../layouts/Home/FeaturedPrograms";
import Footer from "../layouts/Home/Footer";
import Hero from "../layouts/Home/Hero";
import Label from "../layouts/Home/Label";
import Review from "../layouts/Home/Review";
import BrowseTemplates from "../layouts/Templates/BrowseTemplates";

const Home = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="homepage">
      <Nav />
      <Hero />
      <FeaturedPrograms />
      <BrowseTemplates />
      <Carousel />
      <Label />
      <Review />
      <Companys />
      <Footer />
    </div>
  );
};

export default Home;
