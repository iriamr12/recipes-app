import React from 'react'
import { context } from './MixContext'
import { useContext } from 'react'

const SavedRecipes = () => {

 const auth = useContext(context) 
  return (

      <div>
        <h2>Saved Recipes</h2>
       <div className='list'>
        {auth.savedRecipes.map((receta, index) => (
          <div key={index} className='photo'>
            <img src={receta?.recipe.image} />
          </div>
        ))}
      </div> 
      </div>
      
  )
}

export default SavedRecipes