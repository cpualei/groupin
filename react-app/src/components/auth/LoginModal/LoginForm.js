import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../../store/session";
import "../AuthForms.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="auth-container">
      <form onSubmit={onLogin}>
        <div className="auth-header">
          <i className="fa-solid fa-people-group"></i>
          <h2 className="auth-h2">Log in</h2>
        </div>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="auth-labels-inputs">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={updateEmail}
            className="auth-inputs"
          />
        </div>
        <div className="auth-labels-inputs">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={updatePassword}
            className="auth-inputs"
          />
        </div>
        <button type="submit">Log in</button>
        <p className="auth-under-h2-text">
          Not a member yet? &nbsp;
          <span>
            <Link to="/sign-up">Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
