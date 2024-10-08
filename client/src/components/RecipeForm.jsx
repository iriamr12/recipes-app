import React, { useState } from 'react';
import './RecipeForm.css';

const RecipeForm = (props) => {
    const [recipe, setRecipe] = useState("");

    const handleChange = (e) => {
        setRecipe(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getRecipeCb(recipe);
    };

    return (
        <div className='recipe-form'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={recipe}
                    placeholder='Look for a new recipe'
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default RecipeForm;
