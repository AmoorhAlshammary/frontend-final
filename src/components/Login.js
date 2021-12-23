import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import './Login.css'

export default function Login({setToken, setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // you can use variable instded of state in this  case
  const history = useHistory(); 
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(response.data);// data : token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…yMDF9.BYkEVZv8cZdVUVNDCgv8IRd9r85ex8nDIvJzX2uDdfk';
    if(response.status===200) {
       // جايه من الريكوست اللي راح لسيرفر
      //  localStorage.setItem("token",JSON.stringify(response.data.token))
       setToken(response.data.token);
       setUser(response.data.user);
       history.push("/decoration");
    }                        
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="login">
      <div className="input-container-login">
        <h2>LOGIN</h2>
        <input
          onChange={(e) => {
            changeEmail(e);
          }}
          placeholder="enter your email"
        />
        <input
          onChange={(e) => {
            changePassword(e);
          }}
          type="password"
          placeholder="enter your password"
        />
        <button
          onClick={() => {
            checkLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
