import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="auth-container">
      <form onSubmit={onSignUp}>
        <div className="auth-header">
          <i className="fa-solid fa-people-group"></i>
          <h2 className="auth-h2">Sign up</h2>
        </div>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="auth-labels-inputs">
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            className="auth-inputs"
          ></input>
        </div>
        <div className="auth-labels-inputs">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            className="auth-inputs"
          ></input>
        </div>
        <div className="auth-labels-inputs">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            className="auth-inputs"
          ></input>
        </div>
        <div className="auth-labels-inputs">
          <label>Retype password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className="auth-inputs"
          ></input>
        </div>
        <button type="submit">
          Sign up
        </button>
        <p className="auth-under-h2-text">
          Already a member? &nbsp;<span>Log in</span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
