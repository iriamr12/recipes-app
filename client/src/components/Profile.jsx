import React from 'react'
import FavoriteRecipes from './FavoriteRecipes'
import './Profile.css'
import SavedRecipes from './SavedRecipes'

const Profile = () => {
  return (
<div className='container'>
    <div className='item1'><FavoriteRecipes /> </div>
    <div className='item2'><SavedRecipes /> </div>
</div>
  )
}

export default Profile