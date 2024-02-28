import React, { useState, useEffect } from 'react';
import RecipeForm from './RecipeForm';
import Recipes from './Recipes';
import './RecipeSearch.css';
import RecipeFilter from './RecipeFilter';

const RecipeSearch = () => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState("");
  const [countryFilter, setCountryFilter] = useState("All");
  const [dietFilter, setDietFilter] = useState("All");

  const APP_ID = "d9bb2e47";
  const APP_KEY = "9f3c6531be8a0e0e7c203dda75e9fdcd";

  const getRecipe = async (recipeName) => {
    setLoading(true);
    setError("");

    try {
      let url = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log("We got data!");
        console.log(data);
        setRecipe(data.hits.map(hit => hit.recipe)); // Extracting recipe object from hits array
      } else {
        setError(`Server Error: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      setError(`Network Error: ${e.message}`);
    }

    setLoading(false);
  };

  const handleFilterChange = (country, diet) => {
    setCountryFilter(country);
    setDietFilter(diet);
  };

  return (
    <div>
      <div>
        <RecipeForm 
          getRecipeCb={(recipeName) => getRecipe(recipeName)} 
          country={countryFilter}
          diet={dietFilter}
        />
        <RecipeFilter onFilterChange={handleFilterChange} />
      </div>
      <div className='recipes-container'>
        <Recipes data={recipe} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
}

export default RecipeSearch;
