import React from 'react';
import './Item.css';

const Item = ({name, id, criterions, url, rating}) => {
    return (
        <div className='grid-item'>
            <div ><h2>{name}</h2></div>
            {Array.isArray(criterions)
                ? criterions.map((criterion, i) =>
                    <div key={i}>{criterion}
                    </div>)
                : <h2 >{criterions}</h2>  // If criteria not an array, just display it as is.
            }

            <div ><a href={url} target='_blank' rel='noopener noreferrer'>Visit Site</a></div>
            <div ><h2>{rating}</h2></div>

            <div className='button'>
                <div className="bg-washed-yellow br3 dib grow pa2 ma1 bw2 shadow-5">
                    <img
                        alt='edit' src={`/img/edit.png`} width='35' height='35'/>
                </div>

                <div className="bg-washed-yellow br3 dib grow pa2 ma1 bw2 shadow-5">
                    <img
                        alt='delete' src={`/img/delete.png`} width='35' height='35'/>
                </div>
            </div>
        </div>
    );
}

export default Item;


