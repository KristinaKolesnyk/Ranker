import React from 'react';
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div>
            {
                items.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={items[i].id}
                            name={items[i].name}
                            criterions={items[i].criterions}
                            url={items[i].URL}
                            rating={items[i].rating}

                        />
                    );
                })}
        </div>
    );
}

export default ItemList;
