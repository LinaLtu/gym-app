import React, { useState } from 'react';
import './CategoryPicker.scss';

const CategoryPick = ({ callback, categories }) => {
    const defaultCategories = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];
    const [checkedState, setCheckedState] = useState(defaultCategories.reduce((object, category) => {
        object[category] = true;
        return object;
    }, {}));

    const handleSelect = (e) => {
        const category = e.target.name;
        const value = e.target.checked;

        const updatedState = {
            ...checkedState,
            ...{ [category]: value }
        };

        const selectedKeysList = Object.keys(updatedState).reduce((list, category) => {
            if (updatedState[category] === true) {
                list.push(category);
            }

            return list;
        }, []);

        setCheckedState(updatedState);

        callback(selectedKeysList);
    }

    const CSS_NAME = 'category-picker';

    return (
        <div className={CSS_NAME}>
            {defaultCategories.map((category, index) => {
                return (<div key={index}>
                    <input
                        onChange={(e) => handleSelect(e)}
                        type="checkbox"
                        id="category"
                        name={category}
                        onClick={handleSelect}
                        checked={checkedState && checkedState[category]}
                    />
                    <label for={category}>{category}</label>
                </div>)
            })}
        </div >
    )
}

export default CategoryPick; 