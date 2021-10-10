import React from 'react';
import './SearchFood.css';

const SearchFood = (props) => {
    console.log(props);
    const { strTags, strInstructions, strMealThumb } = props.meal;
    return (
        <div className="search-food-card">
            <img src={strMealThumb} alt="" width="100%" />
            <h2>{strTags}</h2>
            <p style={{ textAlign: 'justify' }}>{strInstructions.slice(0, 200)}</p>
        </div>
    );
};

export default SearchFood;