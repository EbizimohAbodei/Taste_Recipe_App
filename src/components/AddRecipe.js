import React from "react";

const AddRecipe = () => {
  return (
    <form>
      <div>
        <h3>Add new recipe</h3>
        <div className="inputContainer">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="inputContainer">
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" id="author" />
        </div>
        <div className="inputContainer">
          <label htmlFor="country">Recipe is from:</label>
          <input type="text" name="country" id="country" />
        </div>
        <div className="inputContainer">
          <label htmlFor="image">Image URL:</label>
          <input type="text" name="image" id="image" />
        </div>
        <h4>Ingredients</h4>
        <div className="ingredientContainer">
          <div className="inputContainer">
            <label htmlFor="quantity">Quantity:</label>
            <input type="text" name="quantity" id="quantity" />
          </div>
          <div className="inputContainer">
            <label htmlFor="ingredient">Ingredient:</label>
            <input type="text" name="ingredient" id="ingredient" />
          </div>
        </div>
        <div className="ingredientContainer">
          <div className="inputContainer">
            <label htmlFor="quantity">Quantity:</label>
            <input type="text" name="quantity" id="quantity" />
          </div>
          <div className="inputContainer">
            <label htmlFor="ingredient">Ingredient:</label>
            <input type="text" name="ingredient" id="ingredient" />
          </div>
        </div>
        <div className="ingredientContainer">
          <div className="inputContainer">
            <label htmlFor="quantity">Quantity:</label>
            <input type="text" name="quantity" id="quantity" />
          </div>
          <div className="inputContainer">
            <label htmlFor="ingredient">Ingredient:</label>
            <input type="text" name="ingredient" id="ingredient" />
          </div>
        </div>
        <div className="ingredientContainer">
          <div className="inputContainer">
            <label htmlFor="quantity">Quantity:</label>
            <input type="text" name="quantity" id="quantity" />
          </div>
          <div className="inputContainer">
            <label htmlFor="ingredient">Ingredient:</label>
            <input type="text" name="ingredient" id="ingredient" />
          </div>
        </div>
        <div className="ingredientContainer">
          <div className="inputContainer">
            <label htmlFor="quantity">Quantity:</label>
            <input type="text" name="quantity" id="quantity" />
          </div>
          <div className="inputContainer">
            <label htmlFor="ingredient">Ingredient:</label>
            <input type="text" name="ingredient" id="ingredient" />
          </div>
        </div>
      </div>
      <div className="inputContainer">
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          type="text"
          name="instructions"
          id="instructions"
          rows="5"
          cols="20"
        />
      </div>
      <input type="submit" value="Post recipe" />
    </form>
  );
};

export default AddRecipe;
