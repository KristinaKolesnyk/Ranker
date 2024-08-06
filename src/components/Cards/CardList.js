import React from 'react';
import Card from "./Card";
import AddButton from "../AddButton/AddButton";

const CardList = ({categories, navigate}) => {
    if(!Array.isArray(categories)){
        return <div>Error: categories is not an array</div>;
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
                            navigate={navigate}
                        />
                    );
                })}
            <AddButton/>
        </div>
    );
}

export default CardList;