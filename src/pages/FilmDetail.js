import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import classes from "./FilmDetail.module.css";

function FilmDetail() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className={classes.film}>
      <div className={classes.content}>
        <div className={classes.topContent}>
          <div className={classes.title}>
            <h1>{data.title}</h1>
            <p>({data.year})</p>
          </div>
          <img className={classes.imgSelf} src={data.photo} alt="img" />
        </div>
        <div className={classes.bottomContent}>
          <div className={classes.topInfo}>
            <p>Imdb: {data.imdb}</p>
            <span>●</span>
            <p>{data.duration}</p>
          </div>
          <div className={classes.bottomInfo}>
            <h4 className={classes.genre}>
              <p>Genre</p>
              <p>{data.genre}</p>
            </h4>
            <h4 className={classes.director}>
              <p>Director</p>
              <p>{data.director}</p>
            </h4>
            <h4 className={classes.age}>
              <p>Age Limit</p>
              <p>+{data.ageLimit}</p>
            </h4>
            <div className={classes.description}>
              <h3>Description</h3>
              <h3>{data.description}</h3>
            </div>
          </div>

          <button className={classes.backBtn}>
            <Link to=".." relative="path">
              Other Films...
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
// FIXME
export async function loader({ request, params }) {
  const id = params.filmId;
  console.log(id);
  const response = await fetch(
    `https://films-3c1db-default-rtdb.firebaseio.com/films/${id}.json`
  );
  if (!response.ok) {
    // FIXME
  } else {
    const resData = await response.json();
    return resData;
  }
}
