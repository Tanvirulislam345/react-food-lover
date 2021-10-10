import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DisplayAllFood from '../DisplayAllFood/DisplayAllFood';
import './DisplayFood.css';

const DisplayFood = () => {
    const { nameId } = useParams();
    const [names, setNames] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setNames(data.meals));
    }, [nameId]);
    return (
        <div className="displayFood">
            {
                names.map(foodName => <DisplayAllFood
                    foodName={foodName}
                ></DisplayAllFood>)
            }
        </div>
    );
};

export default DisplayFood;