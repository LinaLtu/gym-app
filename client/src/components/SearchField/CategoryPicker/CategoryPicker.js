import React, { useState } from 'react';
import './CategoryPicker.scss';

const CategoryPick = ({ setItemsByCategory }) => {
    const defaultCategories = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'];

    const [selectedCategories] = useState([])

    const handleSelect = (category) => {
        // if an item is selected
        if (!selectedCategories.includes(category)) {
            selectedCategories.push(category)
            // in an item us unselected
        } else {
            const index = selectedCategories.indexOf(category);
            selectedCategories.splice(index, 1);
        }

        setItemsByCategory(selectedCategories);
    }

    const CSS_NAME = 'category-picker';

    return (
        <div className={CSS_NAME}>
            {defaultCategories.map((category, index) => {
                return (<div onClick={() => handleSelect(category)} key={index}>
                    <input type="checkbox" id="category" name={category} />
                    <label for={category}>{category}</label>
                </div>)
            })}
        </div >
    )
}

export default CategoryPick; 