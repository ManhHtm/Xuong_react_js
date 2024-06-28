import React from "react";
import HeaderAdmin from "../components/HeaderAdmin";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutAdmin;
