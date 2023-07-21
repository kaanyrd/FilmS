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
        <div className={classes.errorInformation}>
          <h1>SOMETHING WENT WRONG</h1>
          <h2>{error?.data?.title}</h2>
          <h3>{error?.data?.message}</h3>
          {error.status && <h3>(Error Code:{error?.status})</h3>}
          <li>
            <Link to="/" className={classes.link}>
              Go To Home
            </Link>
          </li>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
