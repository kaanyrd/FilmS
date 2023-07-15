import React from "react";
import { useLoaderData, Link, redirect, useSubmit } from "react-router-dom";
import classes from "./FilmDetail.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

function FilmDetail() {
  const data = useLoaderData();
  const submit = useSubmit();

  const onDeleteHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <div className={classes.film}>
      <div className={classes.content}>
        <div className={classes.topContent}>
          <div className={classes.title}>
            <h1>{data.title}</h1>
            <p>({data.year})</p>
          </div>
          <div className={classes.imgSide}>
            <img className={classes.imgSelf} src={data.photo} alt="img" />
            <span className={classes.iconSide}>
              <button onClick={onDeleteHandler}>
                <DeleteOutlineIcon className={classes.deleteIconSelf} />
              </button>
              <button>
                <EditIcon className={classes.editIconSelf} />
              </button>
            </span>
          </div>
        </div>
        <div className={classes.bottomContent}>
          <div className={classes.topInfo}>
            <p className={classes.imdbSide}>
              Imdb: {data.imdb} <StarIcon className={classes.star} />
            </p>
            <span>/</span>
            <p className={classes.hourSide}>
              <span>
                {Math.floor(data.duration / 60)}h
                {`${
                  data.duration % 60 === 0
                    ? ""
                    : ` - ${data.duration % 60} mins`
                }`}
              </span>
              <QueryBuilderIcon />
            </p>
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

export async function action({ request, params }) {
  const id = params.filmId;
  const response = await fetch(
    `https://films-3c1db-default-rtdb.firebaseio.com/films/${id}.json`,
    {
      method: request.method,
    }
  );
  if (!response.ok) {
    // FIXME
  }
  return redirect("/films");
}
