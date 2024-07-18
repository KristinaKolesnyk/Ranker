import React from 'react';


const Card = ({name, id}) => {
    return (
        <div className='tc dib'>
            <div className="bg-washed-yellow br3 grow pa3 ma2 bw2 shadow-5">
                <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            </div>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;


