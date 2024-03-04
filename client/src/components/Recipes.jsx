import React from 'react';
import './Recipes.css'
import { useContext } from 'react';
import { context } from './MixContext';



const Recipes = ({ data }) => {

  const auth = useContext(context);
  
  const addToFavorites = (receta) => {
  auth.addToFavorites(receta)
}
console.log(auth.favoriteRecipes)

const addToSaved = (receta) => {
  auth.addToSaved(receta)
}
console.log(auth.savedRecipes)

  return (
    <div className='recipes-container'>
      {data.map((receta, index) => (
        <div key={index} className='recipe'>
          <a href={receta.recipe.uri}>
            <img src={receta?.recipe.image} />
            <h3>{receta.recipe.label}</h3>
          </a>
          <button onClick={() => addToFavorites(receta)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></button>
<button onClick={() => addToSaved(receta)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg></button>

        </div>
      ))}
    </div>
  );
};

export default Recipes;
