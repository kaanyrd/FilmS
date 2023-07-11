import React, { useEffect, useState } from "react";
import FilmList from "../components/FilmList";
import { json, useLoaderData } from "react-router-dom";

function Films() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>Films.js</h1>
      <FilmList films={data} />
    </div>
  );
}

export default Films;

export async function loader() {
  const response = await fetch(
    `https://films-3b774-default-rtdb.firebaseio.com/films.json`
  );
  const data = await response.json();
  if (!response.ok) {
    // FIXME
    // throw json({ message: "Films can not fetched!", status: 500 });
  } else {
    return data;
  }
}
