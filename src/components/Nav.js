import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navContainer">
      <ul>
        <li className="index">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="recipes">
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
        <li className="add">
          <NavLink to="/addrecipe">Add-Recipe</NavLink>
        </li>
        <li className="about">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="contact">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
