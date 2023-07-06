import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/films"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Films
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newfilm"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            New Film
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
