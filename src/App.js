import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Films, { loader as filmsLoader } from "./pages/Films";
import AddFilm from "./pages/AddFilm";
import { action as addFilmAction } from "./components/NewForm";
import FilmDetail, { loader as filmDetailLoader } from "./pages/FilmDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "films", element: <Films />, loader: filmsLoader },
      {
        path: "films/:filmId",
        element: <FilmDetail />,
        loader: filmDetailLoader,
      },
      { path: "addfilm", element: <AddFilm />, action: addFilmAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
