import React from "react";
import classes from "./ConfirmModeling.module.css";

function ConfirmModeling({ modeling, setModeling, setRemovingData, filmName }) {
  const yesClickHandler = () => {
    setModeling(false);
    setRemovingData(true);
  };
  const noClickHandler = () => {
    setModeling(false);
    setRemovingData(false);
  };

  return (
    <div>
      <div onClick={noClickHandler} className={classes.modeling}></div>
      <div className={classes.modelingContent}>
        <h1>
          Do you want to remove{" "}
          <span className={classes.filmName}>"{filmName}"</span>?
        </h1>
        <div className={classes.buttons}>
          <button className={classes.confirmButtons} onClick={yesClickHandler}>
            Yes
          </button>
          <button className={classes.confirmButtons} onClick={noClickHandler}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModeling;
