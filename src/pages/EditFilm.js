import React from "react";
import { Form, redirect, useLoaderData, useParams } from "react-router-dom";
import classes from "./EditFilm.module.css";

function EditFilm() {
  const params = useParams();
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Edit Film Page</h1>
      <h1>{params.filmId}</h1>
      <Form method="PATCH" className={classes.form}>
        <div className={classes.formContent}>
          <div className={classes.formControl}>
            <label htmlFor="title">Film Title</label>
            <input
              type="text"
              id="title"
              name="title"
              maxLength="30"
              required
              placeholder={data.title}
            />
          </div>
          <div className={classes.formControl}>
            <label>Photo</label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder={`${data?.photo ? data.photo : "as URL"}`}
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="description">Description</label>
            <textarea
              placeholder={data.description}
              id="description"
              name="description"
              maxLength="200"
            />
          </div>
          <div className={classes.optionControl}>
            <label htmlFor="genre">Genre</label>
            <select id="genre" name="genre" defaultValue={data.genre}>
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
            <label>Year</label>
            <select id="year" name="year" defaultValue={data.year}>
              {Array.from({ length: 100 }, (_, index) => (
                <option key={index} value={2023 - index}>
                  {2023 - index}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.optionControl}>
            <label>Age Limit</label>
            <select name="ageLimit" id="ageLimit" defaultValue={data.ageLimit}>
              <option value="3">+3</option>
              <option value="7">+7</option>
              <option value="13">+13</option>
              <option value="16">+16</option>
              <option value="18">+18</option>
            </select>
          </div>
          <div>
            <label htmlFor="director">Director</label>
            <input
              maxLength="20"
              id="director"
              name="director"
              type="text"
              placeholder={data.director}
            />
          </div>
          <div>
            <label htmlFor="imdb">Imdb</label>
            <input
              id="imdb"
              name="imdb"
              type="number"
              min="0"
              max="10"
              step="0.1"
              placeholder={data.imdb}
            />
          </div>
          <div>
            <label htmlFor="duration">
              <h3>Duration</h3>
            </label>
            <input
              id="duration"
              name="duration"
              type="number"
              min="1"
              max="900"
              placeholder={data.duration}
            />
          </div>
        </div>
        <button type="submit">Edit</button>
      </Form>
    </div>
  );
}

export default EditFilm;

export async function loader({ request, params }) {
  const id = params.filmId;
  const response = await fetch(
    `https://films-3c1db-default-rtdb.firebaseio.com/films/${id}.json`
  );

  if (!response.ok) {
    // FIXME
  } else {
    const data = response.json();
    return data;
  }
}

export async function action({ request, params }) {
  const id = params.filmId;
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
  const response = await fetch(
    `https://films-3c1db-default-rtdb.firebaseio.com/films/${id}.json`,
    {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filmData),
    }
  );
  if (!response.ok) {
    // FIXME
  }
  return redirect("/films");
}
