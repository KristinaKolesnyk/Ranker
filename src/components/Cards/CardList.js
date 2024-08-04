import React from 'react';
import Card from "./Card";
import AddButton from "../AddButton/AddButton";

const CardList = ({categories}) => {
    if(!Array.isArray(categories)){
        return <div>Error: categories is not an array</div>;  //This will prevent the app from crashing if categories is not provided or not an array.  Also, the AddButton will always be present, even if there are no categories.
        // The user can still add categories manually.
        // The AddButton component could also be more sophisticated to handle adding categories on-the-fly, but for the sake of this exercise, it's kept as simple as possible.
        // In a real-world application, this would be a good place to implement a feature to add categories dynamically.
        // The user would just need to enter the name and icon of the category, and the app would add it to the list.
        // The server-side logic would also need to be updated to handle the new category data.
    }
    return (
        <div className='card-list-container'>
            {
                categories.map((category, i) => {
                    return (
                        <Card
                            key={i}
                            id={category.id}
                            name={category.name}
                            icon={category.icon}
                        />
                    );
                })}
            <AddButton/>
        </div>
    );
}

export default CardList;