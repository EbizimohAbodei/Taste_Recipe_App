import React from "react";
import classes from "./singleRecipe.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleRecipe = (props) => {
  // Declaring useState variables
  const [recipeData, setRecipeData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [countryData, setCountryData] = useState([]);
  const { singlerecipe } = useParams();

  useEffect(() => {
    // Using async/await asynchronous functions to get data from local storage and make api call
    const getApiData = async () => {
      const recipeCall = await axios.get(
        `http://localhost:3001/recipes/${singlerecipe}`
      );

      setRecipeData(recipeCall.data);

      const countryCall = await axios(`https://restcountries.com/v2/alpha/SWE`);
      setCountryData(countryCall.data);
    };
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.singleContainer}>
      <h3 className={classes.title}>
        {recipeData?.recipename} by {recipeData[0]?.author}
      </h3>
      <div className={classes.ingredientsContainer}>
        <img src={recipeData?.recipeImageUrl} alt={props.name}></img>
        <h3>Ingredients:</h3>
        <ul>
          {recipeData?.ingredients?.map((ingredient) => {
            return (
              <li key={ingredient.name}>
                <span className={classes.subhead}>Ingredient:</span>{" "}
                {ingredient?.name},{" "}
                <span className={classes.subhead}>Quantity:</span>{" "}
                {ingredient?.quantity}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.instructionContainer}>
        <h3>Instructions:</h3>
        <p> {recipeData?.instructions}</p>
      </div>
    </div>
  );
};

export default SingleRecipe;
