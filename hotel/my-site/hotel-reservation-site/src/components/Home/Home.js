import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import SectionTitle from "../SectionTitle/SectionTitle";
import Rooms from "../Rooms/Rooms";


// import Space from '../Space/Space';
// import SearchPanel from '../SearchPanel/SearchPanel';
const Home = () => {
  return (
    <div className="container-custom white-bg">
      <TopMenu />
      <Header />
      <Slider />
      <AboutUs />
      <Rooms/>
      <Footer />
    </div>
  );
};

export default Home;
