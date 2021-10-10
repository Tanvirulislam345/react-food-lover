import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DisplaySingleFood from '../DisplaySingleFood/DisplaySingleFood';

const SingleClickFood = () => {
    const { categoriId } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categoriId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data.meals));
    }, [categoriId])
    return (
        <div style={{ width: '100%' }}>
            {
                items.map(item => <DisplaySingleFood
                    key={item.idMeal}
                    item={item}
                ></DisplaySingleFood>)
            }
        </div>
    );
};

export default SingleClickFood;