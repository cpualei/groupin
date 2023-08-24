import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "../../Dropdown/Dropdown.css";

function LoggedOutMenu() {
  return (
    <>
      <li className="dropdown-items first-item">
        <NavLink
          to="/login"
          exact={true}
          activeClassName="active"
          className="dropdown-links"
        >
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          Log in
        </NavLink>
      </li>
      <li className="dropdown-items">
        <NavLink
          to="/sign-up"
          exact={true}
          activeClassName="active"
          className="dropdown-links"
        >
          <i class="fa-solid fa-user-plus"></i>
          Sign up
        </NavLink>
      </li>
    </>
  );
}

export default LoggedOutMenu;
