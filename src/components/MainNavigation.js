import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.navbar}>
      <div className={classes.content}>
        <Link to="/">
          <h1 className={classes.title}>
            Film<span className={classes.S}>S</span>
          </h1>
        </Link>
        <ul className={classes.navbarContent}>
          <li className={classes.links}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className={classes.links}>
            <NavLink
              to="/films"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Films
            </NavLink>
          </li>
          <li className={classes.links}>
            <NavLink
              to="/addfilm"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add Film
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavigation;
