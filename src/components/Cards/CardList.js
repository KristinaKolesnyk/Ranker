import React from 'react';
import Card from "./Card";
import AddButton from "../AddButton/AddButton";

const CardList = ({categories}) => {
    return (
        <div className='card-list-container'>
            {

                categories.map((category, i) => {
                    return (
                        <Card
                            key={i}
                            id={categories[i].id}
                            name={categories[i].name}
                        />
                    );
                })}
            <AddButton/>
        </div>
    );
}

export default CardList;