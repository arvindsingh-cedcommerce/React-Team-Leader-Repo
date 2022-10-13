import React from "react";
import "./Home.css";
import Filter from "./Filter";
import Nav from "./Nav";
import Product from "./Product";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <Filter />
        <Product />
      </div>
      <Footer />
    </>
  );
};

export default Home;
