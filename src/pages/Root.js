import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

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
