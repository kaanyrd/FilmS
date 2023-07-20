import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./FilmList.module.css";
import noMovieIcon from "../assets/noMovie3.png";

function FilmList({ films }) {
  const [filmTypes, setFilmTypes] = useState("");
  const [filmNames, setFilmNames] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(films);

  useEffect(() => {
    const filteredByType = films.filter(
      (film) =>
        film.genre.toLowerCase() === filmTypes.toLowerCase() || filmTypes === ""
    );

    const filteredByName = filteredByType.filter(
      (film) =>
        film.title.toLowerCase().includes(filmNames.toLowerCase()) ||
        filmNames === ""
    );

    setFilteredFilms(filteredByName);
  }, [films, filmTypes, filmNames]);

  const onFilmTypeChangeHandler = (e) => {
    setFilmTypes(e.target.value);
  };
  const onFilmNameChangeHandler = (e) => {
    setFilmNames(e.target.value);
  };

  return (
    <>
      <form className={classes.typeForms}>
        <div className={classes.search}>
          <input
            onChange={onFilmNameChangeHandler}
            type="text"
            placeholder="Search your film name..."
          />
        </div>
        <div className={classes.types}>
          <select id="genre" name="genre" onChange={onFilmTypeChangeHandler}>
            <option value="">All</option>
            <option value="kids">Kids</option>
            <option value="drama">Drama</option>
            <option value="action">Action</option>
            <option value="western">Western</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="crime">Crime</option>
            <option value="science fiction">Science Fiction</option>
            <option value="history">History</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
      </form>
      <div className={classes.divider}></div>
      {
        <div>
          {filteredFilms.length > 0 ? (
            <ul className={classes.list}>
              {filteredFilms?.map((film) => (
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
                      <h3 className={classes.description}>
                        {film.description}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className={classes.informaiton}>
              <h1>Film can not find...</h1>
              {filmTypes.length > 0 ? (
                <h3>
                  There are no in{" "}
                  <span className={classes.infoFilmGender}>"{filmTypes}"</span>{" "}
                  types...
                </h3>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      }
    </>
  );
}

export default FilmList;
