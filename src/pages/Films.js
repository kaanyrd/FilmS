import FilmList from "../components/FilmList";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import classes from "./Films.module.css";
import { Suspense } from "react";

function Films() {
  const data = useLoaderData();

  return (
    <Suspense fallback={<h1 className={classes.information}>Loading...</h1>}>
      <Await resolve={data.films}>
        {(loadedFilms) => (
          <div className={classes.films}>
            <FilmList films={loadedFilms} />
          </div>
        )}
      </Await>
    </Suspense>
  );
}

export default Films;

export async function loadFilms() {
  try {
    const response = await fetch(
      `https://api-generator.retool.com/lR3PpE/data`
    );
    const data = await response.json();
    return data.reverse();
  } catch (error) {
    throw json({
      title: "AN ERROR HAS OCCURRED!",
      message: "Data couldn't fetched!",
    });
  }
}

export function loader() {
  return defer({
    films: loadFilms(),
  });
}
