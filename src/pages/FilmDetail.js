import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  useLoaderData,
  Link,
  redirect,
  useSubmit,
  useNavigate,
  json,
} from "react-router-dom";
import classes from "./FilmDetail.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import noMovieIcon from "../assets/noMovie3.png";
import ConfirmModeling from "../components/ConfirmModeling";

function FilmDetail() {
  const navigate = useNavigate();
  const data = useLoaderData();
  const submit = useSubmit();
  const [modeling, setModeling] = useState(false);
  const [removingData, setRemovingData] = useState(false);

  const onModelingHandler = () => {
    setModeling(true);
  };
  useEffect(() => {
    if (removingData === true) {
      submit(null, { method: "delete" });
    } else {
      return;
    }
  }, [removingData, submit]);

  const onEditHandler = () => {
    navigate(`edit`);
  };

  return (
    <div className={classes.film}>
      <div>
        {modeling &&
          ReactDOM.createPortal(
            <ConfirmModeling
              filmName={data?.title}
              modeling={modeling}
              setModeling={setModeling}
              setRemovingData={setRemovingData}
            />,
            document.getElementById("cofirmModeling")
          )}
      </div>
      {data ? (
        <div className={classes.content}>
          <div className={classes.topContent}>
            <div className={classes.title}>
              <h1>{data?.title}</h1>
              <p>({data?.year})</p>
            </div>
            <div className={classes.imgSide}>
              <img
                className={classes.imgSelf}
                src={data.photo.length === 0 ? noMovieIcon : data.photo}
                alt="img"
              />
              <span className={classes.iconSide}>
                <DeleteOutlineIcon
                  onClick={onModelingHandler}
                  className={classes.deleteIconSelf}
                />
                <EditIcon
                  onClick={onEditHandler}
                  className={classes.editIconSelf}
                />
              </span>
            </div>
          </div>
          <div className={classes.bottomContent}>
            <div className={classes.topInfo}>
              <p className={classes.imdbSide}>
                Imdb: {data?.imdb} <StarIcon className={classes.star} />
              </p>
              <span>/</span>
              <p className={classes.hourSide}>
                <span>
                  {Math.floor(data?.duration / 60)}h
                  {`${
                    data?.duration % 60 === 0
                      ? ""
                      : ` - ${data?.duration % 60} mins`
                  }`}
                </span>
                <QueryBuilderIcon />
              </p>
            </div>
            <div className={classes.bottomInfo}>
              <h4 className={classes.genre}>
                <p>Genre</p>
                <p>{data?.genre}</p>
              </h4>
              <h4 className={classes.director}>
                <p>Director</p>
                <p>{data?.director}</p>
              </h4>
              <h4 className={classes.age}>
                <p>Age Limit</p>
                <p>+{data?.ageLimit}</p>
              </h4>
              <div className={classes.description}>
                <h3>Description</h3>
                <h3>{`${data?.description}`}</h3>
              </div>
            </div>

            <button className={classes.backBtn}>
              <Link to=".." relative="path">
                Other Films...
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.notFound}>
          <div className={classes.notFoundContent}>
            <h1>PAGE NOT FOUND</h1>
            <Link className={classes.notFoundLink} to="/">
              Go Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilmDetail;
// FIXME
export async function loader({ request, params }) {
  try {
    const id = params.filmId;
    const response = await fetch(
      `https://films-9edd6-default-rtdb.firebaseio.com/films/${id}.json`
    );
    const resData = await response.json();
    return resData;
  } catch (error) {
    throw json({
      title: "AN ERROR HAS OCCURRED!",
      message: "Film detail couldn't find.",
    });
  }
}

export async function action({ request, params }) {
  try {
    const id = params.filmId;
    await fetch(
      `https://films-9edd6-default-rtdb.firebaseio.com/films/${id}.json`,
      {
        method: request.method,
      }
    );
    return redirect("/films");
  } catch (error) {
    throw json({
      title: "AN ERROR HAS OCCURRED!",
      message: "Film couldn't remove!",
    });
  }
}
