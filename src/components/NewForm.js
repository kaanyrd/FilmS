import React from "react";
import { Form, redirect } from "react-router-dom";
// import classes from "./Form.module.css";

function NewForm() {
  return (
    <div>
      <Form method="post">
        <div>
          <label htmlFor="title">Film Title</label>
          <input id="title" name="title" type="text" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            maxLength="170"
            id="description"
            name="description"
            required
          />
        </div>
        <div>
          <label htmlFor="photo">Photo URL</label>
          <input id="photo" name="photo" type="text" required />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <select id="genre" name="genre" required defaultValue="action">
            <option value="drama">Drama</option>
            <option value="action">Action</option>
            <option value="western">Western</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="horro">Horror</option>
            <option value="science fiction">Science Fiction</option>
            <option value="thriller">Thriller</option>
            <option value="history">History</option>
          </select>
        </div>
        <div>
          <label htmlFor="director">Director</label>
          <input id="director" name="director" type="text" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year" name="year" required>
            {Array.from({ length: 100 }, (_, index) => (
              <option key={index} value={2023 - index}>
                {2023 - index}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ageLimit">Age Limit</label>
          <select name="ageLimit" id="ageLimit" defaultValue="18" required>
            <option value="3">+3</option>
            <option value="7">+7</option>
            <option value="12">+12</option>
            <option value="16">+16</option>
            <option value="18">+18</option>
          </select>
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
            defaultValue="10"
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration (as minute)</label>
          <input
            id="duration"
            name="duration"
            type="number"
            min="0"
            max="900"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default NewForm;

export async function action({ request, params }) {
  const formData = await request.formData();
  const filmId = params.filmId;

  const filmData = {
    title: formData.get("title"),
    description: formData.get("description"),
    photo: formData.get("photo"),
    genre: formData.get("genre"),
    director: formData.get("director"),
    year: formData.get("year"),
    ageLimit: formData.get("ageLimit"),
    imdb: formData.get("imdb"),
    duration: formData.get("duration"),
  };

  const response = fetch(
    `https://films-3c1db-default-rtdb.firebaseio.com/films/${filmId}.json`,
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
