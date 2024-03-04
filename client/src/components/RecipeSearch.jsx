import React, { useState, useEffect } from 'react';
import RecipeForm from './RecipeForm';
import Recipes from './Recipes';
import './RecipeSearch.css';
import RecipeFilter from './RecipeFilter';
import Loading from './Loading.gif'

const LoadingAnimation = () => (
    <div className="loading-animation">
      <img src={Loading} alt="Loading" />
    </div>
  );

const RecipeSearch = () => {
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const APP_ID = "d9bb2e47";
    const APP_KEY = "9f3c6531be8a0e0e7c203dda75e9fdcd";

    const getRecipes = async (recipeName) => {
        setLoading(true);
        setError("");

        try {
            let url = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`;
            let response = await fetch(url);
            if (response.ok) {
                let data = await response.json();
                console.log("We got data!");
                console.log(data);
                setRecipes(data.hits);
                setFilteredRecipes(data.hits); // Initialize filtered recipes with all recipes
            } else {
                setError(`Server Error: ${response.status} ${response.statusText}`);
            }
        } catch (e) {
            setError(`Network Error: ${e.message}`);
        }

        setLoading(false);
    };

    const handleFilterChange = (country, diet) => {
        let filteredData = recipes;

        // Filter by country
        if (country !== "All") {
            filteredData = filteredData.filter(item => item.recipe.cuisineType && item.recipe.cuisineType.includes(country.toLowerCase()));
        }

        // Filter by diet
        if (diet !== "All") {
            filteredData = filteredData.filter(item => item.recipe.dietLabels && item.recipe.dietLabels.includes(diet));
        }

        // Filter by vegetarian dishes
        filteredData = filteredData.filter(item => item.recipe.healthLabels && item.recipe.healthLabels.includes("Vegetarian"));

        setFilteredRecipes(filteredData);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 7000)
        return () => clearTimeout(timeout);
    })

    return (
        <div>
             
            <div>
                <RecipeForm getRecipeCb={(recipeName) => getRecipes(recipeName)} />
                <RecipeFilter onFilterChange={handleFilterChange} />
            </div>
            <div className='recipes-container'>
            {loading && <LoadingAnimation />}
                {!loading && (
                <>
                    <Recipes data={filteredRecipes} />
                    {error && <p>Error: {error}</p>}
                </>
                )}
            </div>
        </div>
    );
};

export default RecipeSearch;
