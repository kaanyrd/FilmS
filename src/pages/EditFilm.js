import React, { useEffect, useState } from "react";
import {
  Form,
  json,
  redirect,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import classes from "./EditFilm.module.css";
import filmIcon from "../assets/noMovie3.png";

function EditFilm() {
  const data = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  const [movieImg, setMovieImg] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (data.photo && photo) {
      setMovieImg(photo);
    } else if (!data.photo && !photo) {
      setMovieImg(filmIcon);
    } else if (!data.photo && photo) {
      setMovieImg(photo);
    } else if (data.photo && !photo) {
      setMovieImg(data.photo);
    }
  }, [photo, data.photo]);

  const photoChangeHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setPhoto(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const goBack = () => {
    navigate(`../${params.filmId}`);
  };
  // console.log(photo);
  // console.log(data);
  return (
    <div>
      <div className={classes.form}>
        <Form method="patch" className={classes.formContent}>
          <div>
            <h1 className={classes.mainTitle}>
              Edit{" "}
              <span className={classes.filmTitle}>
                "{data?.title.toUpperCase()}"
              </span>
            </h1>
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
                    placeholder={data.title}
                    onChange={titleHandler}
                    required
                    maxLength="30"
                  />
                </div>
                <div className={classes.formControl}>
                  <label htmlFor="photo">
                    <h3>Photo (as URL)</h3>
                  </label>
                  <input
                    id="photo"
                    name="photo"
                    type="text"
                    onChange={photoChangeHandler}
                    placeholder={`${data?.photo ? data.photo : "as URL"}`}
                    // required
                  />
                </div>
              </div>
              <div
                className={`${classes.formControl} ${classes.descriptionSide}`}
              >
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
                  placeholder={`${data.description}.`}
                  maxLength="200"
                  required
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
                    defaultValue={data.genre}
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
                    defaultValue={data.year}
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
                    defaultValue={data.ageLimit}
                    required
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
                    placeholder={data.director}
                    id="director"
                    name="director"
                    type="text"
                  />
                </div>
                <div className={classes.filmDetailControl}>
                  <div className={classes.rightDetail}>
                    <div
                      className={`${classes.formControl} ${classes.bottomInfo}`}
                    >
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
                        placeholder={data.imdb}
                        required
                      />
                    </div>
                    <div
                      className={`${classes.formControl} ${classes.bottomInfo}`}
                    >
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
                        placeholder={data.duration}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.submitBtn}>
              <button type="submit">Edit Film</button>
              <button onClick={goBack}>Back</button>
            </div>
          </div>
          <div className={classes.img}>
            <img
              className={classes.imgSelf}
              src={movieImg}
              alt="You have to add img as URL"
            />
          </div>
        </Form>
      </div>
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
  try {
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
    await fetch(
      `https://films-3c1db-default-rtdb.firebaseio.com/films/${id}.json`,
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filmData),
      }
    );
    return redirect("/films");
  } catch (error) {
    throw json({
      title: "AN ERROR HAS OCCURRED!",
      message: "Film couldn't edit!",
    });
  }
}
