import React, { useEffect, useState } from 'react';
import AllFoodCategories from '../AllFoodCategories/AllFoodCategories';
import './FoodCategories.css';

const FoodCategories = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setFoods(data.categories))
    }, []);
    return (
        <div className="foodCategories">
            {
                foods.map(food => <AllFoodCategories
                    key={food.idCategory}
                    food={food}
                ></AllFoodCategories>)
            }
        </div>
    );
};

export default FoodCategories;