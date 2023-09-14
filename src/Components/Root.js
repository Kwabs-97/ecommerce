/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
