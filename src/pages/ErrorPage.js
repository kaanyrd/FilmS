import React from "react";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import classes from "./ErrorPage.module.css";
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  console.log(error?.data);

  return (
    <>
      <MainNavigation />
      <main className={classes.errorContent}>
        <h1>Something went wrong!</h1>
        <h1>{error?.data?.title}</h1>
        <h3>{error?.data?.message}</h3>
        {error.status && <h3>(Error Code:{error?.status})</h3>}
        <Link to="/">Home</Link>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
