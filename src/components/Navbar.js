 import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar({token,}) {
    return (
      <div>
        {token}
        <ul>
          <li>
          <Link className="link" to="/courses">courses</Link>
            
          </li>
          <li>
          <Link className="link" to="/login">log out</Link>
          </li>
          <li>
            <Link className="link" to="/signUp">signUp</Link>
          </li> 
          <li>
          <Link className="link" to="/login">login</Link>
          </li>
        </ul>
        </div>
    );
    
  }
    
