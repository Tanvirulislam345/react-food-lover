import React from 'react';
import './DisplaySingleFood.css';

const DisplaySingleFood = (props) => {
    const { strMeal, strCategory, strInstructions, strMealThumb, strYoutube } = props.item;
    return (
        <div className="singleFood">
            <img src={strMealThumb} alt="" width="100%" height="500px" />
            <h1 style={{ color: 'red' }}>{strMeal}</h1>
            <h2 style={{ color: 'greenyellow' }}>{strCategory}</h2>
            <p style={{ textAlign: 'justify' }}>{strInstructions}</p>
            <button className="button"><a href={strYoutube} style={{ textDecoration: 'none', color: 'grey' }}>click for youtube</a></button>
        </div>
    );
};

export default DisplaySingleFood;