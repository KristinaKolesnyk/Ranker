import React from 'react';
import './Item.css';

const Item = ({ name, criterions, url, avgRating, criteria }) => {
    const criterionValues = criteria.map(c => {
        const criterion = criterions.find(cr => cr.criterion_id === c.id);
        return criterion ? criterion.value : '-';
    });

    return (
        <div className='grid-header grid-item'>
            <div><h3>{name}</h3></div>
            {criterionValues.map((value, index) => (
                <div key={`${name}-${index}`}><h3>{value}</h3></div>
            ))}

            <div><a href={url} target='_blank' rel='noopener noreferrer'><h3>Visit Site</h3></a></div>
            <div><h3>{avgRating}</h3></div>

            <div className='button'>
                <div className="bg-washed-yellow br3 grow pa2 ma1 bw2 shadow-5" style={{ width: 50, height: 50 }}>
                    <img
                        alt='edit' src={`/img/edit.png`} />
                </div>

                <div className="bg-washed-yellow br3 grow pa2 ma1 bw2 shadow-5" style={{ width: 50, height: 50 }}>
                    <img
                        alt='delete' src={`/img/delete.png`} />
                </div>
            </div>
        </div>
    );
}

export default Item;
