import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
// import LoginFormModal from "../../auth/LoginModal";
// import SignUpFormModal from "../../auth/SignUpModal";
import "./AuthLinks.css"

function AuthLinks() {
  return (
    <div id="auth-links-container">
      {/* <LoginFormModal /> */}
      {/* <SignUpFormModal /> */}
      <NavLink to="/login" exact={true} id="login-link">
        Log in
      </NavLink>
      <NavLink to="/sign-up" exact={true} id="signup-link">
        Sign up
      </NavLink>
    </div>
  );
}

export default AuthLinks;
