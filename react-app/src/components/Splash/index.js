import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Splash.css";
import laughing from "../../images/laughing.jpg";

const Splash = () => {
  return (
    <>
      <h1 id="splash-h1">Welcome to Groupin 📌</h1>
      <div id="splash-inner-container">
        <div>
          <h2>
            Networking for job hunters in <i>tech</i>. 😎
          </h2>
          <div id="groupin-descript">
            <span>
              A centralized platform for tech networking groups sourced from
              Meetup, Facebook, and more - Crafted exclusively for techies.
            </span>
            <span>
              Looking for a new role in tech? Wondering how to take your job
              search to the next level? Begin your networking journey here.
              Search for groups, pin them to your dashboard, and get social.
            </span>
          </div>
          <NavLink id="signup-btn" to="/sign-up" exact={true}>
            <button>Sign up now</button>
          </NavLink>
        </div>
        <div>
          <img id="laughing-img" src={laughing} alt="laughing" />
        </div>
      </div>
    </>
  );
};

export default Splash;
