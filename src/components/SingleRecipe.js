import React from "react";
import classes from "./singleRecipe.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleRecipe = (props) => {
  const [recipeData, setRecipeData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const recipeCall = await axios("http://localhost:3001/recipes");
      const filter = recipeCall.data.filter((recipe) => {
        if (recipe.recipename.includes(props.params.singlerecipe)) {
          return recipe;
        }
        return recipe;
      });
      setRecipeData(filter);

      const countryCall = await axios(
        `https://restcountries.com/v2/alpha/${recipeData[0]?.countrycode}`
      );
      setCountryData(countryCall?.data);
    };
    getApiData();
  }, []);

  return (
    <div className={classes.singleContainer}>
      <h3 className={classes.header}>
        {recipeData[0]?.recipename} by {recipeData[0]?.author} from{" "}
        {countryData.name}
      </h3>
      <div className={classes.ingredientsContainer}>
        <img src={recipeData[0]?.recipeImageUrl} alt={props.name}></img>
        <h4>Ingredients:</h4>
        <ul>
          {recipeData[0]?.ingredients?.map((ingredient) => {
            return (
              <li key={ingredient.name}>
                Ingredient: {ingredient?.name}, Quantity: {ingredient?.quantity}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.instructionContainer}>
        <h4>Instructions:</h4>
        <p> {recipeData[0]?.instructions}</p>
      </div>
    </div>
  );
};

export default SingleRecipe;
