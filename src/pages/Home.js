import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import classes from "./Home.module.css";
import Banner from "./Swiper";

function Home() {
  const data = useLoaderData();
  const [lastFilms, setLastFilms] = useState(undefined);
  useEffect(() => {
    setLastFilms(data.slice(-3).reverse());
  }, [data]);
  console.log(lastFilms);

  return (
    <div className={classes.banner}>
      <div className={classes.bannerSelf}>
        <Banner data={lastFilms} />
      </div>
    </div>
  );
}

export default Home;

export async function loader() {
  const response = await fetch(
    `https://films-3c1db-default-rtdb.firebaseio.com/films.json`
  );
  if (!response.ok) {
    // FIXME
    // throw json({ message: "Films can not fetched!", status: 500 });
  }
  const data = await response.json();
  const films = [];

  for (const id in data) {
    films.push({
      id: id.toString(),
      ...data[id],
    });
  }
  return films;
}
