import React, { useState, useEffect } from "react";
import Card from "./Card";
import Swal from "sweetalert2";
import classes from "./recipes.module.css";
import Loading from "./Loading";
const axios = require("axios").default;

const Recipes = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Api calls using axios and asynchronous functions
  useEffect(() => {
    const getApiData = async () => {
      const recipeCall = await axios("http://localhost:3001/recipes");
      const countryCall = await axios("https://restcountries.com/v2/all");

      // Setting response data to useState variables
      setRecipeData(recipeCall.data);
      setCountryData(countryCall.data);
      setLoading(!loading);
    };
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Does the search by filtering data from local storage based on user input onChange
  const handleSearch = (e) => {
    setSearchData(e.target.value.toLocaleLowerCase());
    // eslint-disable-next-line
    const filteredArr = recipeData?.filter((recipe) => {
      if (recipe.recipename?.toLocaleLowerCase().includes(searchData)) {
        return recipe;
      }
    });
    setRecipeData(filteredArr);
  };

  // Triggers the delete action from database and re-renders page in line 42
  const deleteCard = (id) => {
    Swal.fire({
      title: "Delete recipe?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes! Delete recipe",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/recipes/${id}`).then((res) => {
          const newRecipes = recipeData.filter((item) => {
            return item.id !== id;
          });
          setRecipeData(newRecipes);
          Swal.fire({
            icon: "success",
            title: "Recipe was deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
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
        {recipeData?.map((item) => {
          return (
            <Card
              data={recipeData}
              key={item.id}
              countryImage={countryData.find(
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
