import React, { useState, useEffect } from "react";
import Card from "./Card";
import classes from "./recipes.module.css";
import Loading from "./Loading";
const axios = require("axios").default;

const Recipes = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  // const [searchData, setsearchData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      const recipeCall = await axios("http://localhost:3001/recipes");
      const countryCall = await axios("https://restcountries.com/v2/all");
      setRecipeData({ recipeData: recipeCall.data });
      setCountryData({ countryData: countryCall.data });
      setLoading(!loading);
    };
    getApiData();
  }, []);

  // const handleSearch = (e) => {
  //   setsearchData({ searchData: e.target.value });
  //   const filteredArr = recipeData.data?.filter((recipe) => {
  //     if (
  //       recipe.name
  //         ?.toLocaleLowerCase()
  //         .includes(e.target.value?.toLocaleLowerCase())
  //     ) {
  //       return recipe;
  //     }
  //   });
  //   setRecipeData({ recipeData: filteredArr });
  // };

  return (
    <div className={classes.recipeContainer}>
      <div className={classes.recipeTextContainer}>
        <h3 className={classes.searchBarText}>Search for recipes</h3>
        <input
          type="text"
          className={classes.searchInput}
          // onChange={handleSearch}
        ></input>
        <h3 className={classes.ourRecipesText}> Our recipes</h3>
      </div>
      {loading && <Loading />}
      <div className={classes.cardContainer}>
        {recipeData?.recipeData?.map((item) => {
          return (
            <Card
              key={item.id}
              countryImage={countryData.countryData.find(
                (country) => country.alpha3Code === item.countrycode
              )}
              countryName={item.countryname}
              recipeImage={item.recipeImageUrl}
              recipeName={item.recipename}
              instructions={item.instructions}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
