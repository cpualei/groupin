import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "../../Dropdown/Dropdown.css";

function LoggedOutMenu() {
  return (
    <>
      <li>
        <NavLink to="/login" exact={true} className="dropdown-items first-item">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          Log in
        </NavLink>
      </li>
      <li>
        <NavLink to="/sign-up" exact={true} className="dropdown-items">
          <i class="fa-solid fa-user-plus"></i>
          Sign up
        </NavLink>
      </li>
    </>
  );
}

export default LoggedOutMenu;
