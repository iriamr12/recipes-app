import React from 'react'
import RecipeSearch from './RecipeSearch'
import './Homepage.css'


const Homepage = () => {
  return (
    <div>
        <div className='header'>
           <h1>COOK WITH SOUL</h1>
        </div>  
        <div>
            <RecipeSearch />
        </div>
        
    </div>
  )
}

export default Homepage