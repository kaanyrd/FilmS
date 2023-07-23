import React, { useState } from "react";
import { json, useFetcher } from "react-router-dom";
import classes from "./NewForm.module.css";

function NewForm() {
  const fetcher = useFetcher();
  let submitting = fetcher.state === "loading";
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [genre, setGenre] = useState("action");
  const [year, setYear] = useState("");
  const [age, setAge] = useState("");
  const [director, setDirector] = useState("");
  const [imdb, setImdb] = useState("");
  const [minute, setMinute] = useState("");

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const photoHandler = (e) => {
    setPhoto(e.target.value);
  };
  const genreHandler = (e) => {
    setGenre(e.target.value);
  };
  const yearHandler = (e) => {
    setYear(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const directorHandler = (e) => {
    setDirector(e.target.value);
  };
  const imdbHandler = (e) => {
    setImdb(e.target.value);
  };
  const minuteHandler = (e) => {
    setMinute(e.target.value);
  };

  const submitHandler = (e) => {
    setTitle("");
    setDescription("");
    setPhoto("");
    setGenre("");
    setImdb("");
    setYear("");
    setAge("");
    setDirector("");
    setMinute("");
  };

  return (
    <div className={classes.form}>
      <h1>Add New Film</h1>
      <fetcher.Form
        method="post"
        onSubmit={submitHandler}
        className={classes.formContent}
      >
        <div className={classes.formTop}>
          <div className={classes.filmDetails}>
            <div className={classes.formControl}>
              <label htmlFor="title">
                <h3>
                  Film Title{" "}
                  <span className={classes.maxLength}>
                    ({30 - title.length})
                  </span>
                </h3>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Name of film..."
                onChange={titleHandler}
                required
                maxLength="30"
                value={title}
                disabled={submitting}
              />
            </div>
            <div className={classes.formControl}>
              <label htmlFor="photo">
                <h3>Photo</h3>
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="as URL"
                value={photo}
                onChange={photoHandler}
                disabled={submitting}
                // required
              />
            </div>
          </div>
          <div className={`${classes.formControl} ${classes.descriptionSide}`}>
            <label htmlFor="description">
              <h3>
                Description{" "}
                <span className={classes.maxLength}>
                  ({200 - description.length})
                </span>
              </h3>
            </label>
            <textarea
              className={classes.textarea}
              onChange={descriptionHandler}
              id="description"
              name="description"
              placeholder="Story of film..."
              maxLength="200"
              required
              value={description}
              disabled={submitting}
            />
          </div>
        </div>
        <div className={classes.options}>
          <div>
            <div className={classes.optionControl}>
              <label htmlFor="genre">
                <h3>Genre</h3>
              </label>
              <select
                id="genre"
                name="genre"
                required
                value={genre}
                onChange={genreHandler}
                disabled={submitting}
              >
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
            <div className={classes.optionControl}>
              <label htmlFor="year">
                <h3>Year</h3>
              </label>
              <select
                id="year"
                name="year"
                required
                value={year}
                onChange={yearHandler}
                disabled={submitting}
              >
                {Array.from({ length: 100 }, (_, index) => (
                  <option key={index} value={2023 - index}>
                    {2023 - index}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.optionControl}>
              <label htmlFor="ageLimit">
                <h3>Age Limit</h3>
              </label>
              <select
                name="ageLimit"
                id="ageLimit"
                required
                value={age}
                onChange={ageHandler}
                disabled={submitting}
              >
                <option value="3">+3</option>
                <option value="7">+7</option>
                <option value="13">+13</option>
                <option value="16">+16</option>
                <option value="18">+18</option>
              </select>
            </div>
          </div>
          <div className={classes.filmMoreDetail}>
            <div className={classes.director}>
              <label htmlFor="director">
                <h3>Director</h3>
              </label>
              <input
                maxLength="20"
                placeholder="Maybe Quentin Tarantino ?"
                id="director"
                name="director"
                type="text"
                value={director}
                onChange={directorHandler}
                disabled={submitting}
              />
            </div>
            <div className={classes.filmDetailControl}>
              <div className={classes.rightDetail}>
                <div className={`${classes.formControl} ${classes.bottomInfo}`}>
                  <label htmlFor="imdb">
                    <h3>Imdb</h3>
                  </label>
                  <input
                    id="imdb"
                    name="imdb"
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    placeholder="(1-10)"
                    required
                    value={imdb}
                    onChange={imdbHandler}
                    disabled={submitting}
                  />
                </div>
                <div className={`${classes.formControl} ${classes.bottomInfo}`}>
                  <label htmlFor="duration">
                    <h3>Duration</h3>
                  </label>
                  <input
                    id="duration"
                    name="duration"
                    type="number"
                    min="1"
                    max="900"
                    required
                    placeholder="As min."
                    value={minute}
                    onChange={minuteHandler}
                    disabled={submitting}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.submitBtn}>
          <button disabled={submitting} onSubmit={submitHandler} type="submit">
            {submitting ? "Submitting..." : "Add Film"}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}

export default NewForm;

export async function action({ request, params }) {
  try {
    const formData = await request.formData();

    const filmData = {
      title: formData.get("title").trim(),
      description: formData.get("description").trim(),
      photo: formData.get("photo").trim(),
      genre: formData.get("genre").trim(),
      director: formData.get("director").trim(),
      year: formData.get("year").trim(),
      ageLimit: formData.get("ageLimit").trim(),
      imdb: formData.get("imdb").trim(),
      duration: formData.get("duration").trim(),
    };

    await fetch(`https://films-3c1db-default-rtdb.firebaseio.com/films.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filmData),
    });
    return true;
    // return redirect("/films");
  } catch (error) {
    throw json({
      title: "AN ERROR HAS OCCURRED!",
      message: "Form couldn't submit",
    });
  }
}
