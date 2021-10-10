import React from 'react';
import { useHistory } from 'react-router';
import './AllFoodCategories.css';

const AllFoodCategories = (props) => {
    const { strCategoryThumb, strCategory, strCategoryDescription } = props.food;
    const history = useHistory();
    const handleButton = () => {
        history.push(`/Categories/${strCategory}`);
    }

    return (
        <div className="allFoodCategories">
            <img src={strCategoryThumb} alt="" />
            <h2>{strCategory}</h2>
            <p style={{ textAlign: 'justify' }}>{strCategoryDescription.slice(0, 200)}</p>
            {/* <NavLink to={`/Categories/${strCategory}`}>
                <button style={styleButton}>
                    See More
                </button>
            </NavLink> */}
            <button className="button" onClick={handleButton}>
                See More
            </button>
        </div>
    );
};

export default AllFoodCategories;