import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Films, { loader as filmsLoader } from "./pages/Films";
import AddFilm from "./pages/AddFilm";
import { action as addFilmAction } from "./components/NewForm";
import FilmDetail, {
  loader as filmDetailLoader,
  action as deleteFilmAction,
} from "./pages/FilmDetail";
import EditFilm, { loader as editLoader } from "./pages/EditFilm";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "films",
        children: [
          { index: true, element: <Films />, loader: filmsLoader },
          {
            path: ":filmId",
            element: <FilmDetail />,
            loader: filmDetailLoader,
            action: deleteFilmAction,
          },
          { path: ":filmId/edit", element: <EditFilm />, loader: editLoader },
        ],
      },
      { path: "addfilm", element: <AddFilm />, action: addFilmAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
