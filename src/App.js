import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Decoration from "./components/Decoration";
import Reservation from "./components/Reservation";
import Home from "./components/Home"
import AddDecoration from "./components/AddDecoration";

import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import OneDecoration from "./components/OneDecoration";
import User from "./components/User";

import Menu from './components/Menu';
import UserReservation from "./components/UserReservation";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [menuState, setMenuState] = useState(false);


  const toggleMenu = ()=> {
    setMenuState((prevState=>setMenuState(!prevState)))
  }
  

  return (
    <Router>
      <div className="root-container">
        <Navbar showMenu={menuState} toggleMenu={toggleMenu} token={token} setToken={setToken} setName={setName} name={name}></Navbar>
        <Menu user={user} token={token} setToken={setToken} showMenu={menuState} toggleMenu={toggleMenu} />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route exact path="/decoration" render={(props) => (
            <Decoration token={token} setToken={setToken} user={user} {...props} />
          )} />
          <Route exact path="/decoration/add" render={(props) => (
            <AddDecoration token={token} user={user} {...props} />
          )} />
          <Route exact path="/decoration/:id" render={(props) => (
            <OneDecoration token={token} user={user} {...props} />
          )} />

          <Route exact path="/login" render={(props) => (
            <Login setToken={setToken} setUser={setUser} {...props} />
          )} />
          <Route exact path="/signup" render={() => (
            <SignUp />
          )} />

          <Route exact path="/reservation/:id" render={(props) => (
            <Reservation token={token} user={user} {...props} />
          )} />

          <Route exact path="/reservation/user/view" render={(props) => (
            <UserReservation token={token} user={user} {...props} />
          )} />

          <Route exact path="/reservation" render={(props) => (
            <Reservation token={token} user={user} {...props} />
          )} />

          <Route exact path="/users" render={(props) => (
            <User token={token} user={user}  />
          )} />

        </Switch>
        {/* {token} */}
      </div>
    </Router>
  )
}
