import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";

import './Signup.css';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  // you can use variable instded of state in this  case
  const history = useHistory();
  const changeName = (e) => {
    setName(e.target.value);
    // console.log(name)
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const addUser = async () => {
    console.log({
      name: name,
      email: email,
      password: password,
    });
    const response = await axios.post("http://localhost:5000/signUp", {
      name,
      email,
      password,
    });
    if (response.status === 201) {
      history.push("/login")
    } else {
      setMsg("error")
    }
  };
  return (
    <div className="signup">
      <div className="input-container-signup">
        <p>{msg}</p>
        <h2>REGISTER</h2>
        <input
          onChange={(e) => {
            changeName(e);
          }}
          placeholder="enter your name"
        />
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
            addUser();
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
