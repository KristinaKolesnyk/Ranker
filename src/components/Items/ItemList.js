import React from 'react';
import Item from "./Item";
import './ItemList.css';

const ItemList = ({items, criteria}) => {
    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            criterions={item.criterions}
                            url={item.url}
                            avgRating={item.avg_rating}
                            criteria={criteria}
                        />
                    );
                })}
        </div>
    );
}

export default ItemList;
