import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navContainer">
      <ul>
        <li className="index">
          <Link to="/">Home</Link>
        </li>
        <li className="recipes">
          <Link to="/recipes">Recipes</Link>
        </li>
        <li className="add">
          <Link to="/addrecipe">Add-Recipe</Link>
        </li>
        <li className="about">
          <Link to="/about">About</Link>
        </li>
        <li className="contact">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
