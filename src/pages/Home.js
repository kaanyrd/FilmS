import React, { useEffect, useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import classes from "./Home.module.css";
import Banner from "./Swiper";

function Home() {
  const data = useLoaderData();
  const [lastFilms, setLastFilms] = useState(undefined);
  useEffect(() => {
    setLastFilms(data.slice(-3).reverse());
  }, [data]);

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
  try {
    const response = await fetch(
      `https://api-generator.retool.com/lR3PpE/data`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw json({
      title: "AN ERROR HAS OCCURRED!",
      message: "Data couldn't fetched!",
    });
  }
}
