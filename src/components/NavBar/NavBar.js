import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchFood from '../SearchFood/SearchFood';
import './NavBar.css';

const NavBar = () => {
    /*     const [searchText, setSearchText] = useState('');
        const [searchMeals, setSearchMeals] = useState([]);
    
        useEffect(() => {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setSearchMeals(data.meals))
        }, [searchText]);
    
        const handleInputText = e => {
            const searchTextValue = e.target.value;
            setSearchText(searchTextValue);
        } */
    return (
        <div>
            <nav className="nav">
                <NavLink activeStyle={{ fontWeight: "bold", color: "red" }} to="/foodCategories"> Home</NavLink>
                <NavLink activeStyle={{ fontWeight: "bold", color: "red" }} to="/about">about</NavLink>
                <NavLink activeStyle={{ fontWeight: "bold", color: "red" }} to="/registration">Registration</NavLink>
                {/* <NavLink to="/item"><input type="text" onChange={handleInputText} name="" id="" /></NavLink> */}
            </nav>

            {/* <div className="search-container">
                {
                    searchMeals.map(meal => <SearchFood
                        key={meal.idMeal}
                        meal={meal}
                    ></SearchFood>)
                }
            </div> */}
        </div>
    );
};

export default NavBar;