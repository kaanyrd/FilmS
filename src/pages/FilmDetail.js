import React from "react";
import { useLoaderData, Link } from "react-router-dom";

function FilmDetail() {
  const data = useLoaderData();
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.photo} alt="img" />
      <p>Description: {data.description}</p>
      <h2>Age Limit: +{data.ageLimit}</h2>
      <h1>Director: {data.director}</h1>
      <h1>Genre: {data.genre}</h1>
      <h1>Imdb: {data.imdb}</h1>
      <h1>Year: {data.year}</h1>
      <button>
        <Link to=".." relative="path">
          Back
        </Link>
      </button>
    </div>
  );
}

export default FilmDetail;

export async function loader({ request, params }) {
  const id = params.filmId;
  const response = await fetch(
    `https://films-3c1db-default-rtdb.firebaseio.com/films/${id}.json`
  );
  if (!response.ok) {
    // FIXME
  } else {
    return response;
  }
}
