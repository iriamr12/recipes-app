import React from 'react'
import { useContext } from 'react'
import { context } from './MixContext';
import './FavoriteRecipes.css'


const FavoriteRecipes = () => {

const auth = useContext(context);

    return (
      <div>
        <h2>Favorite Recipes</h2>
       <div className='list'>
        {auth.favoriteRecipes.map((receta, index) => (
          <div key={index} className='photo'>
            <img src={receta?.recipe.image} />
          </div>
        ))}
      </div> 
      </div>
      
    );
  };
  
  export default FavoriteRecipes;
  