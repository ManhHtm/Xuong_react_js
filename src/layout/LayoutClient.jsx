import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

const LayoutClient = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutClient;
