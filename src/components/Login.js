import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login({setToken}) {
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
        email: email,
        password: password,
      });
                               
      
    // جايه من الريكوست اللي راح لسيرفر
      localStorage.setItem("token",JSON.stringify(response.data.token))
      setToken(response.data.token)
      history.push("/decoration");
    } catch (error) {
      // console.log(error.response.data);
    }
  };
  return (
    <div className="signup">
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
  );
}
