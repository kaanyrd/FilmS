import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import classes from "./NewForm.module.css";

function NewForm() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className={classes.form}>
      <h1>Add New Film</h1>
      <Form method="post" className={classes.formContent}>
        <div className={classes.formControl}>
          <label htmlFor="title">
            <h3>Film Title</h3>
            <p>({30 - title.length})</p>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={titleHandler}
            required
            maxLength="30"
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="description">
            <h3>Description ({200 - description.length})</h3>
          </label>
          <textarea
            className={classes.textarea}
            onChange={descriptionHandler}
            id="description"
            name="description"
            maxLength="200"
            required
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="photo">
            <h3>Photo (as URL)</h3>
          </label>
          <input id="photo" name="photo" type="text" required />
        </div>
        <div className={classes.options}>
          <div className={classes.optionControl}>
            <label htmlFor="genre">
              <h3>Genre</h3>
            </label>
            <select id="genre" name="genre" required defaultValue="action">
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
              <option value="thriller">Thriller</option>
              <option value="history">History</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>
          <div className={classes.optionControl}>
            <label htmlFor="year">
              <h3>Year</h3>
            </label>
            <select id="year" name="year" required>
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
            <select name="ageLimit" id="ageLimit" defaultValue="18" required>
              <option value="3">+3</option>
              <option value="7">+7</option>
              <option value="13">+13</option>
              <option value="16">+16</option>
              <option value="18">+18</option>
            </select>
          </div>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="director">
            <h3>Director</h3>
          </label>
          <input id="director" name="director" type="text" />
        </div>

        <div className={classes.formControl}>
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
            defaultValue="10"
            required
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="duration">
            <h3>Duration (as Minute)</h3>
          </label>
          <input
            id="duration"
            name="duration"
            type="number"
            min="0"
            max="900"
            required
          />
        </div>
        <div className={classes.submitBtn}>
          <button type="submit">Add Film</button>
        </div>
      </Form>
    </div>
  );
}

export default NewForm;

export async function action({ request, params }) {
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
    `https://films-3c1db-default-rtdb.firebaseio.com/films.json`,
    {
      method: "POST",
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