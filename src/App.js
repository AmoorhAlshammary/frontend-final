import React ,{useState} from "react";
import Courses from "./components/Courses";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import "./App.css";

export default function navbar() {
  const [token, setToken] = useState("")
  return (
    <div>
      <Navbar />
      <Route exact path="/courses"  render={()=> {
        return <  Courses token={Token} />;}}/> 
      <Route exact path="/login" render={()=> {
        return <Login setToken={setToken} />;}}/>
      <Route exact path="/signUp" component={SignUp} />
    </div>
  );
}
