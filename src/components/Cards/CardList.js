import React from 'react';
import Card from "./Card";

const CardList = ({categories}) => {
    return (
        <div>
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
        </div>
    );
}

export default CardList;