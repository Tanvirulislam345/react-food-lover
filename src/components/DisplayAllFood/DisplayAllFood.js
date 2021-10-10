import React from 'react';
import { useHistory } from 'react-router';
import './DisplayAllFood.css';

const DisplayAllFood = (props) => {
    const { idMeal, strMeal, strMealThumb } = props.foodName;

    const history = useHistory();
    const handleButton = () => {
        history.push(`/food/${idMeal}`)
    }
    return (
        <div className="displayAllFood">
            <img src={strMealThumb} alt="" width="100%" />
            <h2>{strMeal}</h2>
            {/* <NavLink to={`/Categories/${strCategory}`}>
                <button style={styleButton}>
                    See More
                </button>
            </NavLink> */}
            <button className="button" onClick={handleButton}>
                See details
            </button>
        </div>
    );
};

export default DisplayAllFood;