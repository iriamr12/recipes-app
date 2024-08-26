import React, { useContext } from 'react';
import { context } from '../components/MixContext';
import FavoriteRecipes from '../components/FavoriteRecipes';
import SavedRecipes from '../components/SavedRecipes';

const Profile = () => {
    const auth = useContext(context);

    return (
        <div>
            <h1>Your Profile</h1>
            <div className='item1'><FavoriteRecipes /></div>
            <div className='item2'><SavedRecipes /></div>
        </div>
    );
};

export default Profile;
