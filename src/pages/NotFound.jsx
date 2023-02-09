import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

import Sitemap from "../parts/Sitemap";
import ErrorMessage from "../parts/ErrorMessage";

const NotFound = () => {
  return (
    <>
      <Header theme="black" />
      <ErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
};

export default NotFound;
