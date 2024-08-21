import React from "react";
import Banner from "./home/Banner";
import HomeCategory from "./home/HomeCategory";
import CategoryShowCase from "./home/CategoryShowCase";
import Register from "./home/Register";
import LocationSprade from "./home/LocationSprade";
import AboutUs from "./home/AboutUs";
import AppSection from "./home/AppSection";
import Sponsor from "./home/Sponsor";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LocationSprade />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </div>
  );
};

export default Home;
