import classes from "./addrecipe.module.css";
import React, { useState, useEffect } from "react";
const axios = require("axios").default;

const AddRecipe = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => response.data)
      .then((res) => setCountryData({ countryData: res }));
  }, []);

  return (
    <div className={classes.addNewContainer}>
      <form className={classes.formContainer}>
        <h3 className={classes.mainHeader}>Add new recipe</h3>
        <div className={classes.inputContainer}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" id="author" />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="country">Recipe is from:</label>
          <select type="text" name="countries" id="countries">
            {countryData?.countryData?.map((countryname) => (
              <option key={countryname.name} value={countryname.name}>
                {countryname.name}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="image">Image URL:</label>
          <input type="text" name="image" id="image" />
        </div>
        <h4>Ingredients</h4>
        <div className={classes.ingredientContainer}>
          <div className={classes.inputContainer}>
            <label htmlFor="quantityOne">Quantity:</label>
            <input
              type="text"
              name="quantityOne"
              id="quantityOne"
              className={classes.quantity}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="ingredientOne">Ingredient:</label>
            <input
              type="text"
              name="ingredientOne"
              id="ingredientOne"
              className={classes.ingredient}
            />
          </div>
        </div>
        <div className={classes.ingredientContainer}>
          <div className={classes.inputContainer}>
            <label htmlFor="quantityTwo">Quantity:</label>
            <input
              type="text"
              name="quantityTwo"
              id="quantityTwo"
              className={classes.quantity}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="ingredientTwo">Ingredient:</label>
            <input
              type="text"
              name="ingredientTwo"
              id="ingredientTwo"
              className={classes.ingredient}
            />
          </div>
        </div>
        <div className={classes.ingredientContainer}>
          <div className={classes.inputContainer}>
            <label htmlFor="quantityThree">Quantity:</label>
            <input
              type="text"
              name="quantityThree"
              id="quantityThree"
              className={classes.quantity}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="ingredientThree">Ingredient:</label>
            <input
              type="text"
              name="ingredientThree"
              id="ingredientThree"
              className={classes.ingredient}
            />
          </div>
        </div>
        <div className={classes.ingredientContainer}>
          <div className={classes.inputContainer}>
            <label htmlFor="quantityFour">Quantity:</label>
            <input
              type="text"
              name="quantityFour"
              id="quantityFour"
              className={classes.quantity}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="ingredientFour">Ingredient:</label>
            <input
              type="text"
              name="ingredientFour"
              id="ingredientFour"
              className={classes.ingredient}
            />
          </div>
        </div>
        <button type="submit" className={classes.addMoreButton}>
          add more
        </button>
        <div className={classes.inputContainer}>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            type="text"
            name="instructions"
            id="instructions"
            rows="8"
            cols="20"
          />
        </div>
        <input
          type="submit"
          className={classes.submitButton}
          value="Post recipe"
        />
      </form>
    </div>
  );
};

export default AddRecipe;
