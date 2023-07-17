import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import classes from "./Root.module.css";

function Root() {
  return (
    <div className={classes.app}>
      <div>
        <MainNavigation />
      </div>
      <main className={classes.content}>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Root;
