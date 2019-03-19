import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return(
    <ul className="nav nav-tabs">
      <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/sales">Sales</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/create">Create</NavLink></li>
    </ul>
  )
}

export default Navbar;
