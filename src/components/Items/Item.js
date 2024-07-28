import React from 'react';
import './Item.css';

const Item = ({name, id, criterions, url, rating}) => {
    return (
        <div className='grid-header grid-item'>
            <div><h3>{name}</h3></div>
            {Array.isArray(criterions)
                ? criterions.map((criterion, i) =>
                    <div key={i}><h3>{criterion}</h3>
                    </div>)
                : <h3>{criterions}</h3>  // If criteria not an array, just display it as is.
            }

            <div><a href={url} target='_blank' rel='noopener noreferrer'><h3>Visit Site</h3></a></div>
            <div><h3>{rating}</h3></div>

            <div className='button'>
                <div className="bg-washed-yellow br3 grow pa2 ma1 bw2 shadow-5" style={{width: 50, height : 50}}>
                    <img
                        alt='edit' src={`/img/edit.png`}/>
                </div>

                <div className="bg-washed-yellow br3 grow pa2 ma1 bw2 shadow-5" style={{width: 50, height: 50}}>
                    <img
                        alt='delete' src={`/img/delete.png`} />
                </div>
            </div>
        </div>
    );
}

export default Item;


