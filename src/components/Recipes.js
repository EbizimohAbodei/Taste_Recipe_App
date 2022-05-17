import React, { useState, useEffect } from "react";
import Card from "./Card";
import classes from "./recipes.module.css";
import Loading from "./Loading";
const axios = require("axios").default;

const Recipes = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  /* eslint-disable no-unused-vars */
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Api calls using axios and asynchronous functions
  useEffect(() => {
    const getApiData = async () => {
      const recipeCall = await axios("http://localhost:3001/recipes");
      const countryCall = await axios("https://restcountries.com/v2/all");

      // Setting response data to useState variables
      setRecipeData({ recipeData: recipeCall.data });
      setCountryData({ countryData: countryCall.data });
      setLoading(!loading);
    };
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Does the search by filtering data from local storage based on user input onChange
  const handleSearch = (e) => {
    setSearchData({ searchData: e.target.value });
    // console.log(searchData);
    const filteredArr = recipeData.recipeData.filter((recipe) => {
      if (
        recipe.recipename
          ?.toLocaleLowerCase()
          .includes(e.target.value?.toLocaleLowerCase())
      ) {
        return recipe;
      }
      return recipe;
    });
    setRecipeData({ recipeData: filteredArr });
  };

  // Triggers the delete action from database and re-renders page in line 42
  const deleteCard = (id) => {
    axios.delete(`http://localhost:3001/recipes/${id}`).then((res) => {
      const newRecipes = recipeData.recipeData.filter((item) => item.id !== id);
      setRecipeData({ recipeData: newRecipes });
    });
  };

  return (
    <div className={classes.recipeContainer}>
      <div className={classes.recipeTextContainer}>
        <h3 className={classes.title}>Search for recipes</h3>
        <input
          type="text"
          className={classes.searchInput}
          onChange={handleSearch}
        ></input>
        <h3 className={classes.ourRecipesText}> Our recipes</h3>
      </div>
      {loading && <Loading />}
      <div className={classes.cardContainer}>
        {recipeData?.recipeData?.map((item) => {
          return (
            <Card
              data={recipeData}
              key={item.id}
              countryImage={countryData.countryData.find(
                (country) => country.alpha3Code === item.countrycode
              )}
              countryName={item.countryname}
              recipeImage={item.recipeImageUrl}
              recipeName={item.recipename}
              instructions={item.instructions}
              id={item.id}
              deleteCard={(e) => deleteCard(e, "id")}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
