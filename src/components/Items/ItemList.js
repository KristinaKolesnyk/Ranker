import React from 'react';
import Item from "./Item";
import './ItemList.css';

const ItemList = ({items, criteria, onDelete, categoryName, categoryId}) => {
    return (
        <div>
            {items
                    .sort((a, b) => b.avg_rating - a.avg_rating)
                    .map((item) => {
                        return (
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                criterions={item.criterions}
                                url={item.url}
                                avgRating={item.avg_rating}
                                criteria={criteria}
                                onDelete = {onDelete}
                                categoryName ={categoryName}
                                categoryId = {categoryId}
                            />
                        );
                    })}
        </div>
    );
}

export default ItemList;
