import React from 'react'
import { Link } from "react-router-dom";

import './Navbar.css';

export default function Navbar({ token, setToken }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="link logo" to="/">Logo</Link>
          </li>
          <div className='search-container'>
            <input type="text" className='search-field' placeholder='search ...' />
          </div>

          { token &&
            <li>
              <Link className="link" to="/decoration">Decorations</Link>
            </li>
          }
          { token &&
            <li>
              <button className="link"onClick={()=> setToken('')}>Logout</button>
            </li>
          }

          { !token && 
            <li>
              <div className='signup-btn-container'>
                <Link className="link" to="/signup">Signup</Link>
              </div>
            </li>
          }
          { !token &&
            <li>
              <Link className="link" to="/login">Login</Link>
            </li>
          }

        </ul>
      </nav>
    </div>
  );

}

