import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import classes from "./card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img
        src={props.recipeImage}
        alt={props.recipeName}
        className={classes.recipeImage}
      ></img>
      <img
        src={props.countryImage?.flag}
        className={classes.countryFlag}
        alt={props.countryName}
      ></img>
      <div className={classes.cardText}>
        <h3>{props.recipeName}</h3>
        <p>{props.instructions}</p>
      </div>
      <Link to={props.recipeName} className={classes.seeMoreLink}>
        See more
      </Link>
      <button
        onClick={() => props.deleteCard(props.id)}
        className={classes.deleteBtn}
        title="Click to delete recipe"
      >
        <RiDeleteBin2Fill />
      </button>
    </div>
  );
};

export default Card;
