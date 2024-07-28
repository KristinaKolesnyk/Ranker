import React from 'react';
import Item from "./Item";
import './ItemList.css';

const ItemList = ({items, inputs}) => {
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
                            url={item.URL}
                            rating={item.rating}
                            inputs={inputs}
                        />
                    );
                })}
        </div>
    );
}

export default ItemList;
