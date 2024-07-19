import React from 'react';
import './Item.css';


const Item = ({name, id, criterions, url, rating}) => {
    return (
        <div className=' wrapping  flex justify-between items-center '>
            <h2>{name}</h2>

            <div className='criteria br3 dib grow pa2 ma1 bw2 flex'>
                    {Array.isArray(criterions)
                        ? criterions.map((criterion, i) =>
                            <div>
                                <h2 key={i} className='criterion'>{criterion}</h2>
                            </div>)
                        : <h2 className='criterion'>{criterions}</h2>  // If criteria not an array, just display it as is.
                    }
            </div>

            <a href={url} target='_blank' rel='noopener noreferrer'>Visit Site</a>
            <h2>{rating}</h2>

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


