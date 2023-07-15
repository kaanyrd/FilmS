import React from "react";
// import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  // const error = useRouteError();

  // console.log(error);

  return (
    <>
      <MainNavigation />
      {/* <h1>{error.message}</h1> */}
      <h1>There is an error!</h1>
    </>
  );
}

export default ErrorPage;
