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


export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [name, setName] = useState("");

  // useEffect(() => { 
  //      if (!token) {
  //         const mytoken = JSON.parse(localStorage.getItem("token"))
  //         const myuserId = JSON.parse(localStorage.getItem("userId"))
  //         setToken(mytoken)
  //         setUserId(myuserId)
  //      }
  //  }, [])


  return (
    <Router>
      <div className="root-container">
        <Navbar token={token} setToken={setToken} setName={setName} name={name}></Navbar>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route exact path="/decoration" render={() => (
            <Decoration token={token} setToken={setToken} user={user} />
          )} />
          <Route exact path="/decoration/add" render={() => (
            <AddDecoration token={token} user={user} />
          )} />

          <Route exact path="/login" render={() => (
            <Login setToken={setToken} setUser={setUser} />
          )} />

          <Route exact path="/signup" render={() => (
            <SignUp />
          )} />

          <Route exact path="/reservation/:id" render={() => (
            <Reservation token={token} user={user} />
          )} />

          <Route exact path="/reservation" render={() => (
            <Reservation token={token} user={user} />
          )} />

        </Switch>
        {/* {token} */}
      </div>
    </Router>
  )
}
