// import * as React from "react";
import {React,useContext} from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import { AuthGoogleContext } from "../contexts/authGoogle";

const Header = () => {
  const { signed, photo, name } = useContext(AuthGoogleContext);
  
  let activeClassName = "active";
    
  return signed ? ((
<div className="header_section">
  <nav className="nav_LoggedIn">
    <NavLink
    to="/"
    className={({ isActive }) =>
    isActive ? activeClassName : "inactive"
    }
    >
      Início
    </NavLink>
    <NavLink to="/Dev"
    className={({ isActive }) =>
    isActive ? activeClassName : "inactive"
    }
    >
      Desenvolvedores
    </NavLink>
    <NavLink
    to="/Blog"
    className={({ isActive }) =>
    isActive ? activeClassName : "inactive"
    }
    >
      Blog
    </NavLink>
  </nav>
  {/* <div className="corner">
    {name}
    <img src={photo} alt={name} />
  </div> */}
</div >
  )) : (
    <nav className="nav_nonLoggedIn">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }
          >
            Início
          </NavLink>
          <NavLink to="/Dev"
          className={({ isActive }) =>
          isActive ? activeClassName : "inactive"
        }
        >
                Desenvolvedores
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }
          >
            Blog
          </NavLink>
    </nav>
  )
}

export default Header