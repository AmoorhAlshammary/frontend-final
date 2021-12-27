
import { Link, useHistory } from 'react-router-dom';


import './Menu.css';

const Menu = ({token, setToken, showMenu, toggleMenu, user})=> {

  const history = useHistory();
  const logout = ()=>{
    setToken('')
    history.push('/')
  }
  return (
    <div className={`menu-container ${showMenu ? 'active' : 'deactive'}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
      
          { token &&
            <li onClick={toggleMenu}>
              <Link className="link" to="/decoration">Decorations</Link>
            </li>
          }
      
          { token && !user.isAdmin &&
            <li onClick={toggleMenu}>
              <Link className="link" to={`/reservation/user/view`} >Reservations</Link>
            </li>
          }

        {token && user.isAdmin && <li onClick={toggleMenu}><Link className="link" to='/decoration/add'>Add</Link></li>}

        {token && user.isAdmin && <li onClick={toggleMenu}><Link className="link" to='/users'>Users</Link></li>}

        {token && user.isAdmin && <li onClick={toggleMenu}><Link className="link" to='/reservation'>Reservations</Link></li>}

          { token &&
            <li onClick={toggleMenu}>
              <button className="link" onClick={logout}>Logout</button>
            </li>
          }

          { !token && 
            <li onClick={toggleMenu}>
              <div className='signup-btn-container'>
                <Link className="link" to="/signup">Signup</Link>
              </div>
            </li>
          }
          { !token &&
            <li onClick={toggleMenu}>
              <Link className="link" to="/login">Login</Link>
            </li>
          }
          
        </ul>
      </div>
    </div>
  );
};

export default Menu;
