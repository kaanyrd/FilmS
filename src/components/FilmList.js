import React from "react";
import { Link } from "react-router-dom";
import classes from "./FilmList.module.css";
import noMovieIcon from "../assets/noMovie3.png";

function FilmList({ films }) {
  return (
    <>
      {
        <ul className={classes.list}>
          {films?.map((film) => (
            <li key={film.id}>
              <Link to={film.id}>
                <div className={classes.film}>
                  <h4 className={classes.age}>+{film.ageLimit}</h4>
                  <h2 className={classes.filmTitle}>{film.title}</h2>
                  <div className={classes.img}>
                    <img
                      src={`${film.photo ? film.photo : noMovieIcon}`}
                      alt="img"
                    />
                  </div>
                  <h3 className={classes.description}>{film.description}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
}

export default FilmList;
