import React from 'react'
import { useContext } from 'react'
import { context } from './MixContext';


const FavoriteRecipes = () => {

const auth = useContext(context);

    return (
      <div className='recipes-container'>
        <h2>Favorite Recipes</h2>
        {auth.favoriteRecipes.map((receta, index) => (
          <div key={index} className='recipe'>
            <img src={receta?.recipe.image} />
          </div>
        ))}
      </div>
    );
  };
  
  export default FavoriteRecipes;
  