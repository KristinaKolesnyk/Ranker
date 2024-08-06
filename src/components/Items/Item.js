import React from 'react';
import './Item.css';
import {useNavigate} from "react-router-dom";

const Item = ({id, name, criterions, url, avgRating, criteria, onDelete}) => {
    const criterionValues = criteria.map(c => {
        const criterion = criterions.find(cr => cr.criterion_id === c.id);
        return criterion ? criterion.value : '-';
    });

    const navigate = useNavigate();

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            onDelete(id);
        }
    }
    const handleEdit = () => {
        navigate('/edititem', {
            state: {
                id,
                name,
                criterions,
                url,
                criteria,
                categoryId: criterions[0]?.category_id,
                categoryName: criteria[0]?.category_name
            }
        });
    }

    return (
        <div className='grid-header grid-item'>
            <div><h3>{name}</h3></div>
            {criterionValues.map((value, index) => (
                <div key={`${name}-${index}`}><h3>{value}</h3></div>
            ))}

            <div>{url ? (
                <a href={url} target='_blank' rel='noopener noreferrer'><h3>Visit Site</h3></a>) : (
                <h3>No URL Provided</h3>
            )}</div>
            <div><h3>{avgRating}</h3></div>

            <div className='button'>
                <div className="bg-washed-yellow br3 grow pa2 ma1 bw2 shadow-5" style={{width: 50, height: 50}}
                     onClick={handleEdit}>
                    <img
                        alt='edit' src={`/img/edit.png`}/>
                </div>

                <div className="bg-washed-yellow br3 grow pa2 ma1 bw2 shadow-5" style={{width: 50, height: 50}}
                     onClick={handleDelete}>
                    <img
                        alt='delete' src={`/img/delete.png`}/>
                </div>
            </div>
        </div>
    );
}

export default Item;
