import classes from "./addrecipe.module.css";
import React, { useState, useEffect } from "react";
const axios = require("axios").default;

const AddRecipe = () => {
  const [countryData, setCountryData] = useState([]);
  const [input, setInput] = useState({
    recipename: " ",
    author: " ",
    recipeImageUrl: " ",
    countrycode: " ",
    instructions: " ",
  });
  const [ingredientName, setIngredientName] = useState({});

  const [quantity, setQuantity] = useState({});

  const [inputCount, setInputCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => response.data)
      .then((res) => setCountryData(res));
  }, []);

  const addInputs = (e) => {
    e.preventDefault();
    if (inputCount <= 4) {
      setInputCount(inputCount + 1);
    } else {
      window.alert("Input limit exhausted");
    }
  };

  const removeInputs = (e) => {
    e.preventDefault();
    if (inputCount !== 0) {
      setInputCount(inputCount - 1);
    } else {
      window.alert("Minimum input reached");
    }
  };

  const onHandleChange = (setStateFunction, setStateValue) => {
    setStateFunction(setStateValue);
  };

  const getIngredientsData = () => {
    const ingredients = [];
    for (const keyName in ingredientName) {
      for (const keyQuantity in quantity) {
        let name = keyName.slice(-3);
        let quantityValue = keyQuantity.slice(-3);
        if (name === quantityValue) {
          ingredients.push({
            name: ingredientName[keyName],
            quantity: quantity[keyQuantity],
          });
        }
      }
    }
    return ingredients;
  };

  const handlePost = (e) => {
    e.preventDefault();
    const ingredients = getIngredientsData();
    const inputData = {
      ...input,
      ingredients,
    };
    axios
      .post("http://localhost:3001/recipes", inputData)
      .then((res) => console.log(res));
    // .catch((error) => console.log(error));
    //   window.location.reload();
  };

  return (
    <div className={classes.addNewContainer}>
      <form className={classes.formContainer} onSubmit={handlePost}>
        <h3 className={classes.title}>Add new recipe</h3>
        <div className={classes.inputContainer}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={(e) =>
              onHandleChange(setInput, {
                ...input,
                recipename: e.target.value,
              })
            }
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            required
            onChange={(e) =>
              onHandleChange(setInput, {
                ...input,
                author: e.target.value,
              })
            }
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="country">Recipe is from:</label>
          <select
            type="text"
            name="countrycode"
            id="countries"
            onChange={(e) =>
              onHandleChange(setInput, {
                ...input,
                countrycode: e.target.value,
              })
            }
          >
            {countryData.map((countryname) => (
              <option key={countryname.name} value={countryname.alpha3Code}>
                {countryname.name}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="recipeImageUrl"
            id="image"
            required
            onChange={(e) =>
              onHandleChange(setInput, {
                ...input,
                recipeImageUrl: e.target.value,
              })
            }
          />
        </div>
        <h4>Ingredients</h4>
        <div className={classes.ingredientContainer}>
          <div className={classes.inputContainer}>
            <label htmlFor="ingredientOne">Ingredient Name:</label>
            <input
              type="text"
              name="ingredientOne"
              id="ingredientOne"
              className={classes.ingredient}
              onChange={(e) =>
                onHandleChange(setIngredientName, {
                  ...ingredientName,
                  ingredientOne: e.target.value,
                })
              }
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="quantityOne">Quantity:</label>
            <input
              type="text"
              name="quantityOne"
              id="quantityOne"
              className={classes.quantity}
              onChange={(e) =>
                onHandleChange(setQuantity, {
                  ...quantity,
                  quantityOne: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={classes.ingredientContainer}>
          <div className={classes.inputContainer}>
            <label htmlFor="ingredientTwo">Ingredient Name:</label>
            <input
              type="text"
              name="ingredientTwo"
              id="ingredientTwo"
              className={classes.ingredient}
              onChange={(e) =>
                onHandleChange(setIngredientName, {
                  ...ingredientName,
                  ingredientTwo: e.target.value,
                })
              }
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="quantityTwo">Quantity:</label>
            <input
              type="text"
              name="quantityTwo"
              id="quantityTwo"
              className={classes.quantity}
              onChange={(e) =>
                onHandleChange(setQuantity, {
                  ...quantity,
                  quantityTwo: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={classes.ingredientContainer}>
          <div className={classes.inputContainer}>
            <label htmlFor="ingredientThree">Ingredient Name:</label>
            <input
              type="text"
              name="ingredientThree"
              id="ingredientThree"
              className={classes.ingredient}
              onChange={(e) =>
                onHandleChange(setIngredientName, {
                  ...ingredientName,
                  ingredientThree: e.target.value,
                })
              }
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="quantityThree">Quantity:</label>
            <input
              type="text"
              name="quantityThree"
              id="quantityThree"
              className={classes.quantity}
              onChange={(e) =>
                onHandleChange(setQuantity, {
                  ...quantity,
                  quantityThree: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={classes.ingredientContainer}>
          <div className={classes.inputContainer}>
            <label htmlFor="ingredientFour">Ingredient Name:</label>
            <input
              type="text"
              name="ingredientFour"
              id="ingredientFour"
              className={classes.ingredient}
              onChange={(e) =>
                onHandleChange(setIngredientName, {
                  ...ingredientName,
                  ingredientFour: e.target.value,
                })
              }
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="quantityFour">Quantity:</label>
            <input
              type="text"
              name="quantityFour"
              id="quantityFour"
              className={classes.quantity}
              onChange={(e) =>
                onHandleChange(setQuantity, {
                  ...quantity,
                  quantityFour: e.target.value,
                })
              }
            />
          </div>
        </div>
        {inputCount >= 1 ? (
          <div className={classes.ingredientContainer}>
            <div className={classes.inputContainer}>
              <label htmlFor="ingredientFive">Ingredient Name:</label>
              <input
                type="text"
                name="ingredientFive"
                id="ingredientFive"
                className={classes.ingredient}
                onChange={(e) =>
                  onHandleChange(setIngredientName, {
                    ...ingredientName,
                    ingredientFive: e.target.value,
                  })
                }
              />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="quantityFive">Quantity:</label>
              <input
                type="text"
                name="quantityFive"
                id="quantityFive"
                className={classes.quantity}
                onChange={(e) =>
                  onHandleChange(setQuantity, {
                    ...quantity,
                    quantityFive: e.target.value,
                  })
                }
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {inputCount >= 2 ? (
          <div className={classes.ingredientContainer}>
            <div className={classes.inputContainer}>
              <label htmlFor="ingredientSix">Ingredient Name:</label>
              <input
                type="text"
                name="ingredientSix"
                id="ingredientSix"
                className={classes.ingredient}
                onChange={(e) =>
                  onHandleChange(setIngredientName, {
                    ...ingredientName,
                    ingredientSix: e.target.value,
                  })
                }
              />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="quantitySix">Quantity:</label>
              <input
                type="text"
                name="quantitySix"
                id="quantitySix"
                className={classes.quantity}
                onChange={(e) =>
                  onHandleChange(setQuantity, {
                    ...quantity,
                    quantitySix: e.target.value,
                  })
                }
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {inputCount >= 3 && (
          <div className={classes.ingredientContainer}>
            <div className={classes.inputContainer}>
              <label htmlFor="ingredientSeven">Ingredient Name:</label>
              <input
                type="text"
                name="ingredientSeven"
                id="ingredientSeven"
                className={classes.ingredient}
                onChange={(e) =>
                  onHandleChange(setIngredientName, {
                    ...ingredientName,
                    ingredientSeven: e.target.value,
                  })
                }
              />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="quantitySeven">Quantity:</label>
              <input
                type="text"
                name="quantitySeven"
                id="quantitySeven"
                className={classes.quantity}
                onChange={(e) =>
                  onHandleChange(setQuantity, {
                    ...quantity,
                    quantitySeven: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}
        {inputCount >= 4 && (
          <div className={classes.ingredientContainer}>
            <div className={classes.inputContainer}>
              <label htmlFor="ingredientEight">Ingredient Name:</label>
              <input
                type="text"
                name="ingredientEight"
                id="ingredientEight"
                className={classes.ingredient}
                onChange={(e) =>
                  onHandleChange(setIngredientName, {
                    ...ingredientName,
                    ingredientEight: e.target.value,
                  })
                }
              />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="quantityEight">Quantity:</label>
              <input
                type="text"
                name="quantityEight"
                id="quantityEight"
                className={classes.quantity}
                onChange={(e) =>
                  onHandleChange(setQuantity, {
                    ...quantity,
                    quantityEight: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}
        {inputCount >= 5 && (
          <div className={classes.ingredientContainer}>
            <div className={classes.inputContainer}>
              <label htmlFor="ingredientNine">Ingredient:</label>
              <input
                type="text"
                name="ingredientNine"
                id="ingredientNine"
                className={classes.ingredient}
                onChange={(e) =>
                  onHandleChange(setIngredientName, {
                    ...ingredientName,
                    ingredientNine: e.target.value,
                  })
                }
              />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="quantityNine">Quantity:</label>
              <input
                type="text"
                name="quantityNine"
                id="quantityNine"
                className={classes.quantity}
                onChange={(e) =>
                  onHandleChange(setQuantity, {
                    ...quantity,
                    quantityNine: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}
        <button
          type="submit"
          className={classes.addMoreButton}
          onClick={addInputs}
        >
          add more
        </button>
        <button
          type="submit"
          className={classes.removeButton}
          onClick={removeInputs}
        >
          remove
        </button>
        <div className={classes.inputContainer}>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            type="text"
            name="instructions"
            id="instructions"
            rows="8"
            cols="20"
            required
            onChange={(e) =>
              onHandleChange(setInput, {
                ...input,
                instructions: e.target.value,
              })
            }
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
