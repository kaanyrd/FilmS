import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Films from "./pages/Films";
import NewFilm from "./pages/NewFilm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "films", element: <Films /> },
      { path: "newfilm", element: <NewFilm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
