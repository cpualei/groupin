import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginModal/LoginForm";
import SignUpForm from "./components/auth/SignUpModal/SignUpForm";
import NavBar from "./components/NavBar/index";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList/index";
import User from "./components/User/index";
import Splash from "./components/Splash";
import { authenticate } from "./store/session";
import { viewGroups } from "./store/groups";
import { viewUsers } from "./store/users";
import Dashboard from "./components/Dashboard";
import "./global.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(viewUsers());
      await dispatch(viewGroups());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Splash />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/dashboard" exact={true}>
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
