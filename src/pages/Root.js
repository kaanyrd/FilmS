import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <MainNavigation />
      <hr />
      <Outlet />
    </>
  );
}

export default Root;
