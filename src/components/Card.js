import React from "react";

const Card = () => {
  return (
    <div className="cardContainer">
      <img
        src="https://media.istockphoto.com/vectors/sweden-flag-vector-id973472848?k=20&m=973472848&s=612x612&w=0&h=uZ9kJ8vIxxsOOtUfNZ2pYTbIl3I8tBFBbycCpeRLXsw="
        className="countryFlag"
      ></img>
      <img src="https://source.unsplash.com/300x300/?nature" alt="cake"></img>
      <h3>Recipe name</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.{" "}
      </p>
    </div>
  );
};

export default Card;
