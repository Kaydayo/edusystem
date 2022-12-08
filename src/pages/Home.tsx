import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Carousel from "../layouts/Home/Carousel";
import Companys from "../layouts/Home/Companys";
import FeaturedPrograms from "../layouts/Home/FeaturedPrograms";
import Footer from "../layouts/Home/Footer";
import Hero from "../layouts/Home/Hero";
import Label from "../layouts/Home/Label";
import Review from "../layouts/Home/Review";
import BrowseTemplates from "../layouts/Templates/BrowseTemplates";

const Home = ({ userToken }: { userToken: string | null }) => {
  const navigate = useNavigate();
  const authenticateUser = async (token: string) => {
    const config = {
      headers: {
        "Cache-control": "no-cache",
      },
    };
    const { data } = await axios.post(
      "/users/find-me",
      {
        token,
      },
      config
    );
    const { payload } = data;
    localStorage.setItem("userDetails", JSON.stringify(data.payload));
    localStorage.setItem("userToken", data.payload.accessToken);
    if (payload.user.isEmployee) {
      navigate("/employeeDashboard/courses");
    } else if (payload.user.isAdmin && payload.user.regCompany) {
      navigate("/dashboard/company/profile/bio");
    } else {
      navigate("/company-onboarding");
    }
  };

  useEffect(() => {
    if (userToken) {
      authenticateUser(userToken);
    }
    localStorage.clear();
  }, [userToken]);

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
