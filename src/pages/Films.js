import React from "react";
import FilmList from "../components/FilmList";
import { useLoaderData } from "react-router-dom";
import classes from "./Films.module.css";

function Films() {
  const data = useLoaderData();
  const filmsArray = Object.values(data);

  return (
    <div className={classes.films}>
      <FilmList films={filmsArray} />
    </div>
  );
}

export default Films;

export async function loader() {
  const response = await fetch(
    `https://films-3c1db-default-rtdb.firebaseio.com/films.json`
  );
  if (!response.ok) {
    // FIXME
    // throw json({ message: "Films can not fetched!", status: 500 });
  } else {
    return response;
  }
}
