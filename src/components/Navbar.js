 import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar({token,}) {
    return (
      <div>
        {token}
        <ul>
          <li>
          <Link className="link" to="/decoration">decoration</Link>
          </li>
          <li>
          <Link className="link" to="/login">login</Link>
          </li>
          <li>
          <Link className="link" to="/reservation">reservation</Link>
          </li>
          <li>
            <Link className="link" to="/signUp">signUp</Link>
          </li> 
        </ul>
        </div>
    );
    
  }
    
