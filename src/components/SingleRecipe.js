import React from "react";
import classes from "./singleRecipe.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleRecipe = (props) => {
  // Declaring useState variables
  const [recipeData, setRecipeData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    // Using async/await asynchronous functions to get data from local storage and make api call
    const getApiData = async () => {
      const recipeCall = await axios("http://localhost:3001/recipes");

      // Filter the data to return single recipe matching params
      const filter = recipeCall.data.filter((recipe) => {
        if (recipe.recipename.includes(props.params.singlerecipe)) {
          return recipe;
        }
        return recipe;
      });
      setRecipeData(filter);

      const countryCall = await axios(`https://restcountries.com/v2/alpha/SWE`);
      setCountryData(countryCall.data);
    };
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.singleContainer}>
      <h3 className={classes.title}>
        {recipeData[0]?.recipename} by {recipeData[0]?.author}
      </h3>
      <div className={classes.ingredientsContainer}>
        <img src={recipeData[0]?.recipeImageUrl} alt={props.name}></img>
        <h3>Ingredients:</h3>
        <ul>
          {recipeData[0]?.ingredients?.map((ingredient) => {
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
        <p> {recipeData[0]?.instructions}</p>
      </div>
    </div>
  );
};

export default SingleRecipe;
